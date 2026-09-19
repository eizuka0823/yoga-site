
// import { Header } from './components/Header';
// import { Footer } from './components/Footer';
// import GoogleAnalytics from './GoogleAnalytics';
// import "./globals.css"; 

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="ja">
//       <body className="min-h-screen text-gray-900 relative antialiased">
        
//         {/* --- 背景レイヤー（ここが整理整頓のポイント！） --- */}
//         <div className="fixed inset-0 -z-20 w-full h-full overflow-hidden">
//           {/* 実際の画像：bg-fixed と bg-cover で画面にフィットさせて固定 */}
//           <div 
//             className="w-full h-full bg-[size:auto_110%] bg-center bg-no-repeat transition-opacity duration-700"
//             style={{ backgroundImage: "url('/bg-hero2.jpg')" }}
//           />
//           {/* フィルター：写真の上に薄い白を被せて、文字を読みやすく、清潔感を出す */}
//           <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
//         </div>
//         {/* --------------------------------------------- */}

//         {/* ヘッダーは常に上に固定 */}
//         <Header />
        
//         {/* メインコンテンツ：背景の上に浮かび上がるように配置 */}
//         <main className="relative z-10 pt-20"> 
//           {children}
//         </main> 
        
//         <Footer />
//       </body>
//     </html>
//   );
// }
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import GoogleAnalytics from './GoogleAnalytics'; // ← ① 追加
import "./globals.css"; 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta name="google-site-verification" content="eW2cC_uLp0pkS3Z9Go619ALjNKTBGLJGNJSZ_5z-j_o" />
      </head>
      <body className="min-h-screen text-gray-900 relative antialiased">
        
        {/* ② bodyのすぐ下にGoogleアナリティクスを配置 */}
        <GoogleAnalytics />

        {/* --- 背景レイヤー（ここが整理整頓のポイント！） --- */}
        <div className="fixed inset-0 -z-20 w-full h-full overflow-hidden">
          {/* 実際の画像：bg-fixed と bg-cover で画面にフィットさせて固定 */}
          <div 
            className="w-full h-full bg-[size:auto_110%] bg-center bg-no-repeat transition-opacity duration-700"
            style={{ backgroundImage: "url('/bg-hero2.jpg')" }}
          />
          {/* フィルター：写真の上に薄い白を被せて、文字を読みやすく、清潔感を出す */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
        </div>
        {/* --------------------------------------------- */}

        {/* ヘッダーは常に上に固定 */}
        <Header />
        
        {/* メインコンテンツ：背景の上に浮かび上がるように配置 */}
        <main className="relative z-10 pt-20"> 
          {children}
        </main> 
        
        <Footer />
      </body>
    </html>
  );
}