"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Award, BookOpen, Briefcase, GraduationCap, Users } from "lucide-react";

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

export default function About() {
  // 專業資格資料
  const qualifications = [
    {
      title: "台灣大學法律學系",
      year: "2010-2014",
      description: "法學學士，專攻商業法與智慧財產權法",
      icon: <GraduationCap className="h-8 w-8 text-blue-400" />
    },
    {
      title: "美國史丹佛大學法學院",
      year: "2015-2017",
      description: "法學碩士，專攻科技法律與數位智財權",
      icon: <GraduationCap className="h-8 w-8 text-blue-400" />
    },
    {
      title: "台灣律師資格",
      year: "2014",
      description: "通過台灣律師高考，取得律師資格",
      icon: <Award className="h-8 w-8 text-blue-400" />
    },
    {
      title: "美國加州律師資格",
      year: "2018",
      description: "通過美國加州律師考試，取得執業資格",
      icon: <Award className="h-8 w-8 text-blue-400" />
    }
  ];

  // 專業經歷資料
  const experiences = [
    {
      title: "國際科技公司法務總監",
      period: "2020-2024",
      description: "負責全球智慧財產權策略、技術授權談判與數據隱私合規",
      icon: <Briefcase className="h-8 w-8 text-blue-400" />
    },
    {
      title: "科技法律事務所合夥人",
      period: "2018-2020",
      description: "專注於科技新創法律諮詢、智財保護策略與風險投資法務",
      icon: <Briefcase className="h-8 w-8 text-blue-400" />
    },
    {
      title: "AI法律研究中心研究員",
      period: "2017-2018",
      description: "研究人工智能在法律領域的應用與相關法規發展",
      icon: <BookOpen className="h-8 w-8 text-blue-400" />
    }
  ];

  // 專長領域資料
  const specialties = [
    {
      title: "智慧財產權",
      description: "專利、商標、著作權保護與訴訟，特別專注於AI生成內容的法律保護",
      percentage: 90
    },
    {
      title: "科技合約",
      description: "軟體授權、API使用條款、雲端服務協議與技術合作合約審核與談判",
      percentage: 85
    },
    {
      title: "數據隱私",
      description: "個資保護法規遵循、跨境數據傳輸合規與隱私權侵害案件處理",
      percentage: 80
    },
    {
      title: "AI法規",
      description: "人工智能應用的法律風險評估、合規建議與倫理框架建立",
      percentage: 95
    },
    {
      title: "金融科技",
      description: "加密貨幣、區塊鏈應用與電子支付的法規遵循與風險管理",
      percentage: 75
    }
  ];

  // 客戶評價資料
  const testimonials = [
    {
      name: "王小明",
      company: "科技新創執行長",
      content: "在AI產品開發過程中，獲得了專業且實用的法律建議，幫助我們在創新與合規間取得平衡。"
    },
    {
      name: "李大華",
      company: "軟體公司法務總監",
      content: "在複雜的跨國數據隱私案件中提供了關鍵性的法律策略，協助我們成功解決潛在風險。"
    },
    {
      name: "張美玲",
      company: "數位內容創作者",
      content: "對AI生成內容的著作權問題提供了清晰的解析與保護建議，讓我能安心發展創意事業。"
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
              關於我
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              專業的AI法律科技顧問，結合法律專業與科技前瞻，為您提供最佳解決方案
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 專業背景 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeIn}>
              <div className="relative w-full h-[500px] rounded-lg overflow-hidden geometric-border">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-indigo-600/30 z-10"></div>
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  {/* 這裡可以放置律師照片，目前使用佔位元素 */}
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                    <Briefcase className="h-32 w-32 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl font-bold mb-6 text-gradient">專業背景</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  我是一位擁有超過十年法律實務經驗的科技法律專家，專精於智慧財產權、數據隱私與AI法規領域。台灣大學法律學系畢業後，赴美國史丹佛大學深造，取得法學碩士學位，專攻科技法律。
                </p>
                <p>
                  曾任職於國際級科技公司法務部門，處理過數百起智慧財產權訴訟、技術授權合約與數據隱私合規案件。同時也擔任過科技法律事務所合夥人，為各類科技新創提供法律諮詢服務。
                </p>
                <p>
                  現致力於AI法律科技的研究與應用，協助企業與個人在數位時代保障權益，並積極參與相關法規政策的討論與建言。定期在各大法律與科技論壇發表專業見解，並出版多篇關於AI法律議題的學術論文。
                </p>
                <div className="pt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-900/50 border border-blue-700 rounded-full text-sm text-blue-300">科技法律專家</span>
                  <span className="px-3 py-1 bg-blue-900/50 border border-blue-700 rounded-full text-sm text-blue-300">AI法規顧問</span>
                  <span className="px-3 py-1 bg-blue-900/50 border border-blue-700 rounded-full text-sm text-blue-300">數位轉型法務</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 專業理念 */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8 text-gradient">專業理念</h2>
            <blockquote className="text-2xl italic text-gray-300 leading-relaxed">
              "在數位時代，法律不應成為創新的阻礙，而應是保障權益的基石。我致力於以前瞻的法律思維，協助客戶在科技浪潮中穩健前行，平衡創新與合規，實現永續發展。"
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* 教育與專業資格 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gradient">教育與專業資格</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              紮實的學術背景與專業認證
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {qualifications.map((qualification, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="tech-card card-hover hexagon-bg"
              >
                <div className="flex items-center mb-4">
                  {qualification.icon}
                  <div className="ml-3">
                    <h3 className="text-xl font-semibold text-white">{qualification.title}</h3>
                    <div className="text-blue-400">{qualification.year}</div>
                  </div>
                </div>
                <p className="text-gray-400">{qualification.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 專業經歷 */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gradient">專業經歷</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              豐富的實務經驗與領導歷練
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto space-y-8"
          >
            {experiences.map((experience, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="tech-card card-hover"
              >
                <div className="flex items-start">
                  {experience.icon}
                  <div className="ml-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
                      <span className="text-blue-400">{experience.period}</span>
                    </div>
                    <p className="text-gray-400">{experience.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 專長領域 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gradient">專長領域</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              深入專精的法律科技專業
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto space-y-8"
          >
            {specialties.map((specialty, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="tech-card card-hover"
              >
                <div className="mb-2">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-xl font-semibold text-white">{specialty.title}</h3>
                    <span className="text-blue-400">{specialty.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2.5 rounded-full" 
                      style={{ width: `${specialty.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <p className="text-gray-400">{specialty.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 客戶評價 */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gradient">客戶評價</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              來自客戶的真實回饋與推薦
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="tech-card card-hover"
              >
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-blue-400" />
                  <div className="ml-3">
                    <h3 className="font-semibold text-white">{testimonial.name}</h3>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 聯繫區塊 */}
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
              與我聯繫
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-gray-300 mb-8">
              有任何法律科技相關問題，歡迎隨時聯繫我
            </motion.p>
            <motion.div variants={fadeIn}>
              <Link href="/consultation" className="tech-button inline-flex items-center">
                預約諮詢 <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
