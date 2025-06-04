"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle, Briefcase, FileText, Award } from "lucide-react";
import Image from "next/image";

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

export default function Home() {
  // 案件類型資料
  const caseTypes = [
    {
      title: "智慧財產權",
      description: "專利、商標、著作權爭議與AI生成內容的法律保護",
      count: 48,
      icon: <Award className="h-8 w-8 text-blue-400" />
    },
    {
      title: "數據隱私",
      description: "個資保護、跨境數據傳輸與隱私權侵害案件",
      count: 36,
      icon: <FileText className="h-8 w-8 text-blue-400" />
    },
    {
      title: "科技合約",
      description: "軟體授權、API使用條款與雲端服務協議審核",
      count: 52,
      icon: <Briefcase className="h-8 w-8 text-blue-400" />
    },
    {
      title: "金融科技",
      description: "加密貨幣、區塊鏈應用與電子支付法規遵循",
      count: 29,
      icon: <Award className="h-8 w-8 text-blue-400" />
    },
    {
      title: "AI法規",
      description: "人工智能應用的法律風險評估與合規建議",
      count: 41,
      icon: <FileText className="h-8 w-8 text-blue-400" />
    },
    {
      title: "網路犯罪",
      description: "網路詐欺、資安事件與數位證據蒐集分析",
      count: 33,
      icon: <Briefcase className="h-8 w-8 text-blue-400" />
    }
  ];

  // 最新文章資料
  const latestArticles = [
    {
      title: "AI生成內容的著作權歸屬問題探討",
      date: "2025-05-28",
      summary: "隨著生成式AI技術的普及，AI創作的內容著作權歸屬成為法律界熱議的話題。本文從法理學角度分析現行法規對AI生成內容的適用性...",
      image: "/article1.jpg"
    },
    {
      title: "數位證據在法庭上的採信標準與挑戰",
      date: "2025-05-15",
      summary: "數位證據因其易被篡改的特性，在法庭上的採信標準一直存在爭議。本文探討台灣近年來數位證據相關判例與國際趨勢...",
      image: "/article2.jpg"
    },
    {
      title: "企業導入AI系統的法律風險評估框架",
      date: "2025-05-03",
      summary: "企業在導入AI系統時，需考量多方面的法律風險。本文提供一套實用的法律風險評估框架，協助企業在技術創新與法規遵循間取得平衡...",
      image: "/article3.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* 頂部橫幅 */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-grid hexagon-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-black/90 z-10"></div>
        
        {/* 動態背景元素 */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>
        
        <div className="container mx-auto px-4 z-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold mb-6 text-gradient glow-text"
            >
              AI 法律科技數位顧問律師
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              結合人工智能與法律專業，為您提供前瞻性的法律科技解決方案
            </motion.p>
            <motion.div variants={fadeIn}>
              <Link href="/consultation" className="tech-button inline-flex items-center">
                立即諮詢 <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* 幾何裝飾元素 */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-10"></div>
      </section>

      {/* 簡歷區塊 */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeIn}>
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden geometric-border">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-indigo-600/30 z-10"></div>
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  {/* 這裡可以放置律師照片，目前使用佔位元素 */}
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                    <Briefcase className="h-24 w-24 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl font-bold mb-6 text-gradient">專業簡歷</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  擁有超過十年法律實務經驗，專精於科技法律、智慧財產權與數位轉型法務。台灣大學法律學系畢業，美國史丹佛大學法學碩士，專攻科技法律。
                </p>
                <p>
                  曾任職於國際級科技公司法務部門，處理過數百起智慧財產權訴訟、技術授權合約與數據隱私合規案件。現致力於AI法律科技的研究與應用，協助企業與個人在數位時代保障權益。
                </p>
                <div className="pt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-900/50 border border-blue-700 rounded-full text-sm text-blue-300">科技法律</span>
                  <span className="px-3 py-1 bg-blue-900/50 border border-blue-700 rounded-full text-sm text-blue-300">智慧財產權</span>
                  <span className="px-3 py-1 bg-blue-900/50 border border-blue-700 rounded-full text-sm text-blue-300">數據隱私</span>
                  <span className="px-3 py-1 bg-blue-900/50 border border-blue-700 rounded-full text-sm text-blue-300">AI法規</span>
                  <span className="px-3 py-1 bg-blue-900/50 border border-blue-700 rounded-full text-sm text-blue-300">金融科技</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 案件類型區塊 */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4 text-gradient">過去經手案件類型</motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-gray-400 max-w-3xl mx-auto">
              多年來協助企業與個人處理各類科技法律案件，累積豐富實戰經驗
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {caseTypes.map((caseType, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="tech-card card-hover hexagon-bg"
              >
                <div className="flex items-center mb-4">
                  {caseType.icon}
                  <h3 className="text-xl font-semibold ml-3 text-white">{caseType.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{caseType.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-400 font-semibold">已處理案件</span>
                  <span className="text-2xl font-bold text-gradient">{caseType.count}+</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 最新法律文章區塊 */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex justify-between items-center mb-12"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold text-gradient">最新法律文章</motion.h2>
            <motion.div variants={fadeIn}>
              <Link href="/articles" className="text-blue-400 hover:text-blue-300 inline-flex items-center">
                查看全部 <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {latestArticles.map((article, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="tech-card card-hover overflow-hidden"
              >
                <div className="h-48 bg-gray-800 mb-4 relative">
                  {/* 這裡可以放置文章圖片，目前使用佔位元素 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-indigo-600/30 flex items-center justify-center">
                    <FileText className="h-12 w-12 text-blue-400" />
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-blue-400 text-sm mb-2">{article.date}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{article.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">{article.summary}</p>
                  <Link href={`/articles/${index + 1}`} className="text-blue-400 hover:text-blue-300 inline-flex items-center">
                    閱讀更多 <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* LINE諮詢連結區塊 */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 hexagon-bg opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-6 text-gradient">
              需要法律諮詢？
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-gray-300 mb-8">
              透過LINE與我聯繫，獲得專業的法律科技諮詢服務
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col items-center">
              <div className="w-48 h-48 bg-white p-4 rounded-lg mb-6">
                {/* 這裡可以放置LINE QR碼，目前使用佔位元素 */}
                <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <MessageCircle className="h-24 w-24 text-white" />
                </div>
              </div>
              <Link 
                href="https://line.me/R/ti/p/@ailegaltech" 
                target="_blank"
                className="tech-button inline-flex items-center"
              >
                加入LINE好友 <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
              <p className="mt-4 text-gray-400">LINE ID: @ailegaltech</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
