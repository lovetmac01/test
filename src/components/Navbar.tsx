"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-bold text-gradient glow-text">AI法律科技</span>
              </Link>
            </div>
          </div>
          
          {/* 桌面版導航 */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="nav-link active">
                首頁
              </Link>
              <Link href="/articles" className="nav-link">
                最新文章
              </Link>
              <Link href="/ai-trends" className="nav-link">
                AI趨勢
              </Link>
              <Link href="/consultation" className="nav-link">
                法律諮詢
              </Link>
              <Link href="/about" className="nav-link">
                關於我
              </Link>
            </div>
          </div>
          
          {/* 行動版選單按鈕 */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">開啟選單</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 行動版選單 */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="nav-link active block py-2">
              首頁
            </Link>
            <Link href="/articles" className="nav-link block py-2">
              最新文章
            </Link>
            <Link href="/ai-trends" className="nav-link block py-2">
              AI趨勢
            </Link>
            <Link href="/consultation" className="nav-link block py-2">
              法律諮詢
            </Link>
            <Link href="/about" className="nav-link block py-2">
              關於我
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
