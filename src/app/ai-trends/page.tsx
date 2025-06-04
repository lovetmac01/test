"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp, Zap, Shield, Lightbulb, Database, Scale } from "lucide-react";

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

export default function AITrends() {
  // AI趨勢資料
  const trends = [
    {
      title: "生成式AI與法律責任",
      description: "探討AI生成內容引發的法律責任歸屬問題，以及各國最新立法動向。",
      icon: <Zap className="h-8 w-8 text-blue-400" />,
      link: "/ai-trends/generative-ai"
    },
    {
      title: "AI決策透明度與可解釋性",
      description: "分析AI系統在法律領域應用時的透明度要求與可解釋性技術發展。",
      icon: <Lightbulb className="h-8 w-8 text-blue-400" />,
      link: "/ai-trends/ai-transparency"
    },
    {
      title: "數據隱私與AI訓練",
      description: "探討AI模型訓練過程中的數據隱私保護機制與法規遵循策略。",
      icon: <Shield className="h-8 w-8 text-blue-400" />,
      link: "/ai-trends/data-privacy"
    },
    {
      title: "法律文件智能分析",
      description: "介紹AI在法律文件分析、合約審查與風險評估方面的最新應用。",
      icon: <Database className="h-8 w-8 text-blue-400" />,
      link: "/ai-trends/document-analysis"
    },
    {
      title: "司法預測與案例分析",
      description: "探討AI在司法結果預測與案例分析中的應用前景與倫理考量。",
      icon: <Scale className="h-8 w-8 text-blue-400" />,
      link: "/ai-trends/judicial-prediction"
    },
    {
      title: "AI法規合規自動化",
      description: "分析AI如何協助企業自動化法規遵循流程，提升合規效率。",
      icon: <TrendingUp className="h-8 w-8 text-blue-400" />,
      link: "/ai-trends/compliance-automation"
    }
  ];

  // 時間軸事件
  const timelineEvents = [
    {
      year: "2023",
      title: "歐盟AI法案正式通過",
      description: "歐盟議會通過全球首部全面規範AI的法案，建立風險分級管理框架。"
    },
    {
      year: "2024",
      title: "台灣AI治理框架發布",
      description: "台灣發布國家級AI治理框架，明確AI應用的法律界限與責任歸屬。"
    },
    {
      year: "2024",
      title: "美國AI權利法案提出",
      description: "美國提出AI權利法案，保障公民在AI決策中的知情權與申訴權。"
    },
    {
      year: "2025",
      title: "全球AI法律聯盟成立",
      description: "多國法律專家組成全球AI法律聯盟，推動AI法規的國際協調。"
    },
    {
      year: "2025",
      title: "AI法律助理認證標準",
      description: "國際律師協會發布AI法律助理的認證標準，規範AI在法律服務中的應用。"
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
              AI法律趨勢
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              掌握AI與法律交會的最新發展，預見未來法律科技的演進方向
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* AI趨勢區塊 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {trends.map((trend, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="tech-card card-hover hexagon-bg"
              >
                <div className="flex items-center mb-4">
                  {trend.icon}
                  <h3 className="text-xl font-semibold ml-3 text-white">{trend.title}</h3>
                </div>
                <p className="text-gray-400 mb-6">{trend.description}</p>
                <Link href={trend.link} className="text-blue-400 hover:text-blue-300 inline-flex items-center">
                  深入了解 <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 互動式時間軸 */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gradient">AI法律里程碑</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              追蹤AI法律發展的關鍵時刻，見證科技與法律的共同演進
            </p>
          </motion.div>
          
          <div className="relative">
            {/* 時間軸線 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-indigo-600"></div>
            
            {/* 時間軸事件 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="relative z-10"
            >
              {timelineEvents.map((event, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn}
                  className={`flex items-center mb-16 ${index % 2 === 0 ? 'justify-start md:justify-end' : 'justify-start'} relative`}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                    <div className="tech-card card-hover">
                      <div className="text-blue-400 text-2xl font-bold mb-2">{event.year}</div>
                      <h3 className="text-xl font-semibold mb-3 text-white">{event.title}</h3>
                      <p className="text-gray-400">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* 時間點 */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-gray-900 animate-pulse-glow"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 訂閱更新區塊 */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
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
              掌握最新AI法律動態
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-gray-300 mb-8">
              訂閱我們的電子報，定期獲取AI法律領域的最新趨勢與分析
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col md:flex-row items-center justify-center gap-4">
              <input 
                type="email" 
                placeholder="您的電子郵件" 
                className="w-full md:w-96 px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="tech-button w-full md:w-auto">
                訂閱更新
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
