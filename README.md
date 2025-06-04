# AI 法律科技數位顧問律師網站

這是一個專為 AI 法律科技數位顧問律師設計的現代化網站，採用 Next.js 和 Tailwind CSS 開發，具有科技感藍黑色系、深色漸層、幾何流線的未來感設計。

## 功能特點

- 響應式設計，適配桌面和移動設備
- 科技感藍黑色系主題，搭配幾何流線設計元素
- 動態互動效果與平滑過渡動畫
- 完整的頁面結構，包含首頁、最新文章、AI趨勢、法律諮詢和關於我等分頁
- 優化的載入速度與使用者體驗

## 頁面結構

- **首頁**：包含簡歷、過去經手案件類型、最新法律文章和 LINE 諮詢連結
- **最新文章**：展示法律相關文章，包含分類與搜尋功能
- **AI趨勢**：介紹 AI 在法律領域的最新應用與發展
- **法律諮詢**：提供諮詢服務介紹、流程說明與預約表單
- **關於我**：詳細的專業背景、資格認證與專長領域介紹

## 技術堆疊

- **框架**：Next.js 14 (App Router)
- **樣式**：Tailwind CSS
- **UI 元件**：自定義元件
- **動畫**：Framer Motion
- **圖標**：Lucide React

## 部署指南

### GitHub 部署

1. 在 GitHub 上創建一個新的儲存庫
2. 將本專案推送到該儲存庫：

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用戶名/你的儲存庫名.git
git push -u origin main
```

### Vercel 部署

1. 在 [Vercel](https://vercel.com) 上註冊或登入
2. 點擊 "New Project"
3. 導入你的 GitHub 儲存庫
4. 保持預設設定，點擊 "Deploy"
5. 部署完成後，Vercel 會自動提供一個網址供訪問

## 本地開發

1. 克隆儲存庫：

```bash
git clone https://github.com/你的用戶名/你的儲存庫名.git
cd 你的儲存庫名
```

2. 安裝依賴：

```bash
npm install
```

3. 啟動開發伺服器：

```bash
npm run dev
```

4. 在瀏覽器中訪問 `http://localhost:3000`

## 自定義指南

### 修改內容

- 所有頁面內容位於 `src/app` 目錄下
- 共用元件位於 `src/components` 目錄下
- 全局樣式位於 `src/app/globals.css` 文件中

### 修改主題

- 主題顏色可在 `src/app/globals.css` 文件中的 `:root` 部分進行調整
- 自定義 Tailwind 配置可在 `tailwind.config.js` 文件中修改

## 授權

本專案僅供個人使用，未經許可不得用於商業目的。

---

© 2025 AI法律科技數位顧問律師. 版權所有.
