"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle, Phone, Video, HelpCircle, ExternalLink } from "lucide-react";

// 動畫變體
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Consultation() {
  // 諮詢服務資料
  const consultationServices = [
    {
      title: "LINE諮詢",
      description: "透過LINE平台進行文字諮詢，獲得初步法律建議與解答。",
      icon: <MessageCircle className="h-8 w-8 text-blue-400" />,
      isPrimary: true
    },
    {
      title: "電話諮詢",
      description: "預約電話諮詢時段，與律師直接對談討論法律問題。",
      icon: <Phone className="h-8 w-8 text-blue-400" />,
      isPrimary: false
    },
    {
      title: "視訊會議",
      description: "透過視訊平台進行面對面諮詢，適合複雜案件討論。",
      icon: <Video className="h-8 w-8 text-blue-400" />,
      isPrimary: false
    }
  ];

  // 常見問題資料
  const faqs = [
    {
      question: "初次諮詢需要準備哪些資料？",
      answer: "建議準備與案件相關的文件摘要、時間軸、關鍵問題清單，以提高諮詢效率。若有相關合約或法律文件，也請事先整理好重點內容。"
    },
    {
      question: "LINE諮詢的回覆時間大約多久？",
      answer: "一般情況下，工作日會在24小時內回覆。若遇緊急案件，請在訊息中註明，我們會優先處理。複雜問題可能需要更多時間研究，會先告知預計回覆時間。"
    },
    {
      question: "如何預約電話或視訊諮詢？",
      answer: "可透過LINE或網站表單預約，請提供3個偏好的時段，我們會確認後回覆確切諮詢時間。預約時請簡述案件性質，以便律師提前準備。"
    },
    {
      question: "諮詢費用如何計算？",
      answer: "LINE初步諮詢前15分鐘免費，後續依問題複雜度收費。電話及視訊諮詢依時長計費，首次諮詢有優惠方案。詳細收費標準請參考價目表或直接詢問。"
    },
    {
      question: "諮詢內容的保密程度如何？",
      answer: "所有諮詢內容嚴格保密，遵循律師倫理規範。我們採用加密通訊工具，並簽署保密協議。您的資訊安全是我們的首要考量。"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* 頁面標題區 */}
      <section className="py-20 bg-grid hexagon-bg relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-black/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold mb-6 text-gradient glow-text"
            >
              法律諮詢服務
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              提供專業、高效的法律科技諮詢，協助您解決各類法律難題
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 諮詢服務介紹 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4 text-gradient">
              諮詢服務方式
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-gray-400 max-w-3xl mx-auto">
              根據您的需求與案件複雜度，選擇最適合的諮詢方式
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {consultationServices.map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className={`tech-card card-hover hexagon-bg ${service.isPrimary ? 'border-blue-600 glow' : ''}`}
              >
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold ml-3 text-white">{service.title}</h3>
                </div>
                <p className="text-gray-400 mb-6">{service.description}</p>
                {service.isPrimary ? (
                  <Link 
                    href="https://line.me/R/ti/p/@ailegaltech" 
                    target="_blank"
                    className="tech-button inline-flex items-center w-full justify-center"
                  >
                    立即諮詢 <ExternalLink className="ml-2 h-5 w-5" />
                  </Link>
                ) : (
                  <button className="w-full py-2 px-4 border border-blue-600 text-blue-400 rounded-md hover:bg-blue-900/30 transition-colors">
                    預約諮詢
                  </button>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 服務流程圖表 */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gradient">諮詢服務流程</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              從初次聯繫到問題解決的完整服務流程
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="relative max-w-4xl mx-auto"
          >
            {/* 流程線 */}
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-indigo-600 md:transform md:-translate-x-1/2"></div>
            
            {/* 流程步驟 */}
            <div className="space-y-12">
              {[
                {
                  step: "步驟 1",
                  title: "初次聯繫",
                  description: "透過LINE或網站表單提出諮詢需求，簡述案件性質與問題重點。"
                },
                {
                  step: "步驟 2",
                  title: "需求評估",
                  description: "律師評估案件類型與複雜度，建議最適合的諮詢方式與所需時間。"
                },
                {
                  step: "步驟 3",
                  title: "預約安排",
                  description: "確認諮詢時間與方式，提供準備資料的建議清單。"
                },
                {
                  step: "步驟 4",
                  title: "專業諮詢",
                  description: "進行深入諮詢，分析法律問題，提供專業意見與可行方案。"
                },
                {
                  step: "步驟 5",
                  title: "後續跟進",
                  description: "提供諮詢摘要與行動建議，必要時安排後續服務。"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn}
                  className="relative flex flex-col md:flex-row"
                >
                  {/* 時間點 */}
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-blue-500 border-4 border-gray-900 z-10 transform -translate-x-1/2 flex items-center justify-center">
                    <span className="text-xs font-bold">{index + 1}</span>
                  </div>
                  
                  <div className="pl-12 md:pl-0 md:w-1/2 md:pr-12 md:text-right md:self-end">
                    {index % 2 === 0 ? (
                      <div className="tech-card card-hover">
                        <div className="text-blue-400 font-bold mb-2">{item.step}</div>
                        <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    ) : null}
                  </div>
                  
                  <div className="pl-12 md:pl-12 md:w-1/2 md:self-start">
                    {index % 2 === 1 ? (
                      <div className="tech-card card-hover">
                        <div className="text-blue-400 font-bold mb-2">{item.step}</div>
                        <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    ) : null}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 常見問題 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gradient">常見問題</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              解答您對法律諮詢服務的疑問
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto space-y-6"
          >
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="tech-card card-hover"
              >
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{faq.question}</h3>
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 諮詢預約表單 */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 hexagon-bg opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gradient">預約諮詢</h2>
              <p className="text-xl text-gray-300">
                填寫以下表單預約您的專屬法律諮詢時段
              </p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="tech-card">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">姓名</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="請輸入您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">聯絡電話</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="請輸入您的聯絡電話"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">電子郵件</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="請輸入您的電子郵件"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">諮詢方式</label>
                  <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">請選擇諮詢方式</option>
                    <option value="line">LINE諮詢</option>
                    <option value="phone">電話諮詢</option>
                    <option value="video">視訊會議</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">偏好時段</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="第一偏好時段"
                    />
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="第二偏好時段"
                    />
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="第三偏好時段"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">案件描述</label>
                  <textarea 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32"
                    placeholder="請簡述您的法律問題或需求"
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button type="submit" className="tech-button px-8 py-3">
                    提交預約
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
