"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">AI法律科技</h3>
            <p className="text-gray-400 mb-4">
              專業的AI驅動法律科技顧問服務，為您提供最前沿的法律解決方案。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <span className="sr-only">LINE</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .345-.281.63-.63.63h-2.386c-.345 0-.627-.285-.627-.63V10.124c0-.346.282-.63.63-.63h2.386zM12.583 15.136c.345 0 .627.284.627.63 0 .344-.282.629-.63.629h-2.386c-.345 0-.627-.285-.627-.63v-5.012c0-.346.282-.63.63-.63h2.386c.346 0 .627.284.627.63 0 .346-.281.63-.63.63H10.83v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629H10.83v1.125h1.753v.244zm-4.009 0c.346 0 .63.284.63.63 0 .344-.284.629-.63.629-.345 0-.63-.285-.63-.63V10.754c0-.346-.282-.63-.63-.63-.345 0-.627.284-.627.63v4.382c0 .345-.282.63-.63.63-.346 0-.63-.285-.63-.63v-4.382c0-.346-.282-.63-.63-.63-.346 0-.63.284-.63.63v4.382c0 .345-.28.63-.627.63-.348 0-.63-.285-.63-.63V10.124c0-.346.282-.63.63-.63h3.77c.348 0 .63.284.63.63v5.012h.002zm15.425-5.012c.345 0 .63.284.63.63v4.382c0 .345-.285.63-.63.63-.348 0-.63-.285-.63-.63V10.754c0-.346-.282-.63-.63-.63-.346 0-.628.284-.628.63v4.382c0 .345-.282.63-.63.63-.347 0-.628-.285-.628-.63V10.754c0-.346-.282-.63-.63-.63-.346 0-.628.284-.628.63v4.382c0 .345-.285.63-.63.63-.347 0-.63-.285-.63-.63v-5.012c0-.346.283-.63.63-.63h3.77c.348 0 .63.284.63.63v5.012h.004zM24 10.124c0-4.337-4.371-7.863-9.741-7.863C8.891 2.261 4.52 5.787 4.52 10.124c0 3.881 3.443 7.13 8.097 7.742.315.068.748.211.857.485.098.25.064.643.031.9l-.137.85c-.041.252-.189.986.866.537 1.057-.449 5.714-3.363 7.8-5.758C23.256 12.816 24 11.538 24 10.124z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">快速連結</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                  首頁
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-gray-400 hover:text-blue-400 transition-colors">
                  最新文章
                </Link>
              </li>
              <li>
                <Link href="/ai-trends" className="text-gray-400 hover:text-blue-400 transition-colors">
                  AI趨勢
                </Link>
              </li>
              <li>
                <Link href="/consultation" className="text-gray-400 hover:text-blue-400 transition-colors">
                  法律諮詢
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  關於我
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">聯絡資訊</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <MessageCircle className="h-5 w-5 mr-2 text-blue-400" />
                <span>line@ailegaltech</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>contact@ailegaltech.tw</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} AI法律科技數位顧問律師. 版權所有.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
