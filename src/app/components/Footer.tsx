

"use client";
import { Mail, Camera, MessageCircle, } from 'lucide-react'; // アイコンを整理

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // ✅ 修正ポイント: bg-transparent ではなく、少し白を混ぜた透過背景にする
    // これにより、どんな背景写真の上でも文字が確実に読めるようになります。
    <footer className="bg-white/60 backdrop-blur-md border-t border-pink-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-3xl text-gray-900 mb-6 drop-shadow-sm">マユヨガ</h3>
            <p className="text-sm text-gray-800 leading-relaxed mb-6 font-medium">
              心と身体を整える、<br />
              あなただけの特別な時間。
            </p>
            <div className="flex gap-4">
              {/* アイコンボタンも背景に負けないよう bg-white/80 を追加 */}
              <a
                href="https://www.instagram.com/mayuyoga2020/"
                className="w-10 h-10 rounded-full bg-white/80 border border-pink-200 flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-all shadow-sm"
                aria-label="Instagram"
              >
                { <Camera size={20} /> }
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/80 border border-pink-200 flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-all shadow-sm"
                aria-label="Facebook"
              >
                { <MessageCircle size={20} /> }
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/80 border border-pink-200 flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-all shadow-sm"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-6 border-b border-pink-200 pb-2 inline-block">メニュー</h4>
            <ul className="space-y-3 text-sm text-gray-800 font-medium">
              {['profile', 'classes', 'blog', 'contact'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="hover:text-pink-600 transition-colors"
                  >
                    {id === 'profile' ? 'プロフィール' : id === 'classes' ? 'クラス紹介' : id === 'blog' ? 'ブログ' : 'お問い合わせ'}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-6 border-b border-pink-200 pb-2 inline-block">サービス</h4>
            <ul className="space-y-3 text-sm text-gray-800 font-medium">
              {[ 'pilates', 'corporate', 'online','yomogimushi'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="hover:text-pink-600 transition-colors text-left"
                  >
                    {id === 'yomogimushi' ? '黄土よもぎ蒸し' : id === 'pilates' ? 'パーソナルピラティス' : id === 'corporate' ? '企業様向けヨガ' : 'オンラインレッスン'}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-6 border-b border-pink-200 pb-2 inline-block">コンタクト</h4>
            <ul className="space-y-3 text-sm text-gray-800 font-medium">
              <li className="flex items-start gap-2"></li>
              <li>
                <a href="tel:03-1234-5678" className="hover:text-pink-600 transition-colors">
                  
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@yogastudio.com"
                  className="hover:text-pink-600 transition-colors"
                >
                  mayumiyoga7@gmail.com
                </a>
              </li>
              <li className="pt-4 text-xs text-gray-600 font-normal leading-relaxed">
                 10:00 - 20:00
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-pink-200/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-600">
            <p>© {currentYear} マユヨガ. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
