// "use client";
// import { Menu, X } from 'lucide-react';
// import { useState } from 'react';

// export function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setIsMenuOpen(false);
//     }
//   };

//   const menuItems = [
//     { label: 'プロフィール', id: 'profile' },
//     { label: 'クラス', id: 'classes' },
//     { label: 'よもぎ蒸し', id: 'yomogimushi' },
//     { label: 'ピラティス', id: 'pilates' },
//     { label: '企業向け', id: 'corporate' },
//     { label: 'オンライン', id: 'online' },
//     { label: 'ブログ', id: 'blog' },
//     { label: 'お問い合わせ', id: 'contact' },
//   ];

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
//       <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           <button
//             onClick={() => scrollToSection('hero')}
//             className="font-bold text-3xl text-gray-800 hover:text-pink-400 transition-colors"
//           >
//             マユヨガ
//           </button>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center gap-8">
//             {menuItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => scrollToSection(item.id)}
//                 className="text-sm text-gray-700 hover:text-pink-400 transition-colors"
//               >
//                 {item.label}
//               </button>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2 text-gray-700 hover:text-pink-400 transition-colors"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label="メニュー"
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden py-4 border-t border-pink-100">
//             {menuItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => scrollToSection(item.id)}
//                 className="block w-full text-left px-4 py-3 text-gray-700 hover:text-pink-400 hover:bg-pink-50 transition-colors"
//               >
//                 {item.label}
//               </button>
//             ))}
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }

"use client";
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // スクロール検知：少しでもスクロールしたらヘッダーに「すりガラス」の背景をつける
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'プロフィール', id: 'profile' },
    { label: 'グループレッスン', id: 'group-lessons' },
    { label: 'ピラティス', id: 'pilates' },
    { label: '養成講座', id: 'training' },
    { label: '企業向け', id: 'corporate' },
    { label: 'オンライン', id: 'online' },
    { label: 'よもぎ蒸し', id: 'yomogimushi' },
    // { label: 'ブログ', id: 'blog' },
    { label: 'お問い合わせ', id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/70 backdrop-blur-md border-b border-pink-100 py-0" 
          : "bg-transparent py-2"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('hero')}
            // text-gray-800 を text-gray-900 (より濃い黒) にし、影 (drop-shadow) を薄く追加
            className="font-bold text-3xl text-gray-900 hover:text-pink-500 transition-colors drop-shadow-sm font-serif"
          >
            Mayuyoga
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                // font-medium で少しだけ太くし、視認性をアップ
                className="text-sm font-medium text-gray-800 hover:text-pink-500 transition-colors px-2 py-1"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-800 hover:text-pink-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white/95 backdrop-blur-xl rounded-2xl mt-2 border border-pink-100 shadow-xl overflow-hidden">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-center px-4 py-4 text-gray-800 font-medium hover:text-pink-500 hover:bg-pink-50 transition-colors border-b border-pink-50 last:border-none"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}