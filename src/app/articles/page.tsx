"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";

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

export default function Articles() {
  // 文章分類
  const categories = [
    "全部文章", "智慧財產權", "數據隱私", "AI法規", "金融科技", "網路犯罪"
  ];

  // 文章資料
  const articles = [
    {
      title: "AI生成內容的著作權歸屬問題探討",
      date: "2025-05-28",
      category: "智慧財產權",
      readTime: "8 分鐘",
      summary: "隨著生成式AI技術的普及，AI創作的內容著作權歸屬成為法律界熱議的話題。本文從法理學角度分析現行法規對AI生成內容的適用性，並探討國際間不同司法管轄區的最新判例與立法趨勢。",
      image: "/article1.jpg"
    },
    {
      title: "數位證據在法庭上的採信標準與挑戰",
      date: "2025-05-15",
      category: "網路犯罪",
      readTime: "10 分鐘",
      summary: "數位證據因其易被篡改的特性，在法庭上的採信標準一直存在爭議。本文探討台灣近年來數位證據相關判例與國際趨勢，並提出數位鑑識的最佳實務建議。",
      image: "/article2.jpg"
    },
    {
      title: "企業導入AI系統的法律風險評估框架",
      date: "2025-05-03",
      category: "AI法規",
      readTime: "12 分鐘",
      summary: "企業在導入AI系統時，需考量多方面的法律風險。本文提供一套實用的法律風險評估框架，協助企業在技術創新與法規遵循間取得平衡。",
      image: "/article3.jpg"
    },
    {
      title: "NFT與數位藝術品的法律保護機制",
      date: "2025-04-22",
      category: "智慧財產權",
      readTime: "9 分鐘",
      summary: "NFT市場的興起為數位藝術品帶來新的價值實現方式，同時也引發一系列法律問題。本文分析NFT相關的智慧財產權保護機制與交易法律風險。",
      image: "/article4.jpg"
    },
    {
      title: "跨境數據傳輸的合規挑戰與解決方案",
      date: "2025-04-10",
      category: "數據隱私",
      readTime: "11 分鐘",
      summary: "全球化企業面臨各國數據保護法規的合規挑戰。本文比較分析GDPR、CCPA等主要數據保護法規對跨境數據傳輸的要求，並提供實用的合規策略。",
      image: "/article5.jpg"
    },
    {
      title: "加密貨幣交易平台的法律責任與監管趨勢",
      date: "2025-03-28",
      category: "金融科技",
      readTime: "10 分鐘",
      summary: "加密貨幣交易平台在全球各地面臨不同程度的監管。本文分析平台運營的法律責任，以及近期各國監管機構的政策動向與合規要求。",
      image: "/article6.jpg"
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
              最新法律文章
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              探索法律科技前沿議題，獲取專業見解與實用建議
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 文章列表區 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* 側邊欄 */}
            <div className="lg:w-1/4">
              <div className="sticky top-20">
                <div className="tech-card mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-white">文章分類</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <button className={`text-left w-full py-2 px-3 rounded-md transition-colors ${index === 0 ? 'bg-blue-900/50 text-blue-300' : 'text-gray-400 hover:text-blue-300'}`}>
                          {category}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="tech-card">
                  <h3 className="text-xl font-semibold mb-4 text-white">熱門文章</h3>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/articles/1" className="flex items-start hover:text-blue-300 transition-colors">
                        <span className="text-2xl font-bold text-blue-500 mr-2">01</span>
                        <span className="text-gray-300">AI生成內容的著作權歸屬問題探討</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/articles/2" className="flex items-start hover:text-blue-300 transition-colors">
                        <span className="text-2xl font-bold text-blue-500 mr-2">02</span>
                        <span className="text-gray-300">數位證據在法庭上的採信標準與挑戰</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/articles/3" className="flex items-start hover:text-blue-300 transition-colors">
                        <span className="text-2xl font-bold text-blue-500 mr-2">03</span>
                        <span className="text-gray-300">企業導入AI系統的法律風險評估框架</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* 文章列表 */}
            <div className="lg:w-3/4">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {articles.map((article, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeIn}
                    className="tech-card card-hover overflow-hidden"
                  >
                    <div className="h-48 bg-gray-800 mb-4 relative">
                      {/* 這裡可以放置文章圖片，目前使用佔位元素 */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-indigo-600/30 flex items-center justify-center">
                        <span className="text-4xl font-bold text-blue-400">{index + 1}</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center mb-3 text-sm">
                        <span className="px-2 py-1 bg-blue-900/50 border border-blue-700 rounded-full text-blue-300 mr-2">
                          {article.category}
                        </span>
                        <div className="flex items-center text-gray-400">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center text-gray-400 ml-3">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-white">{article.title}</h3>
                      <p className="text-gray-400 mb-4 line-clamp-3">{article.summary}</p>
                      <Link href={`/articles/${index + 1}`} className="text-blue-400 hover:text-blue-300 inline-flex items-center">
                        閱讀更多 <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* 分頁 */}
              <div className="mt-12 flex justify-center">
                <div className="flex space-x-2">
                  <button className="w-10 h-10 flex items-center justify-center rounded-md bg-blue-900/50 border border-blue-700 text-blue-300">
                    1
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-700 text-gray-400 hover:border-blue-700 hover:text-blue-300 transition-colors">
                    2
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-700 text-gray-400 hover:border-blue-700 hover:text-blue-300 transition-colors">
                    3
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
