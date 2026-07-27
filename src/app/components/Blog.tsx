

import { Calendar, Clock, ArrowRight } from 'lucide-react';

export function Blog() {
  const posts = [
    // ... postsの中身はそのまま ...
    {
      date: '2026.03.25',
      category: 'ヨガ',
      title: '春の不調を整える朝ヨガのすすめ',
      excerpt: '季節の変わり目は身体も心も不安定になりがち。朝のヨガで一日を快適にスタートさせる方法をご紹介します。',
      readTime: '5分',
    },
    {
      date: '2026.03.20',
      category: 'ピラティス',
      title: '姿勢改善に効果的なピラティスエクササイズ',
      excerpt: 'デスクワークで凝り固まった身体をほぐし、美しい姿勢を手に入れるための基本エクササイズをお伝えします。',
      readTime: '7分',
    },
    {
      date: '2026.03.15',
      category: 'ウェルネス',
      title: '呼吸法で心を整える',
      excerpt: 'ストレスフルな日々を送る現代人に必要な、簡単にできる呼吸法とその効果について解説します。',
      readTime: '6分',
    },
    {
      date: '2026.03.10',
      category: 'よもぎ蒸し',
      title: '黄土よもぎ蒸しの効果とは',
      excerpt: '韓国の伝統療法、よもぎ蒸しがもたらす驚きの効果と、おすすめの頻度についてご紹介します。',
      readTime: '8分',
    },
  ];

  return (
    <section id="blog" className="py-24 px-4 bg-transparent relative overflow-hidden">
      {/* 装飾用：背景にうっすらとピンクの光を置いて視認性をサポート */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-pink-50/20 pointer-events-none -z-10 blur-3xl rounded-full" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-pink-100/80 text-pink-600 text-sm font-bold mb-4 backdrop-blur-sm">
            Blog
          </span>
          {/* text-gray-900 でコントラストを最強に */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-6 drop-shadow-sm">
            ブログ
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-pink-400 to-pink-200 mx-auto rounded-full mb-8 shadow-sm" />
          {/* font-medium で背景に負けない太さに */}
          <p className="text-gray-800 font-medium max-w-2xl mx-auto leading-relaxed">
            ヨガやピラティス、ウェルネスに関する情報をお届けします
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 mb-12">
          {posts.map((post, index) => (
            <article
              key={index}
              // ✅ 修正ポイント: bg-white/80 と backdrop-blur で「高級なすりガラス」感
              className="group bg-white/80 backdrop-blur-md rounded-[2rem] border border-white/50 overflow-hidden hover:border-pink-200 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-2xl flex flex-col"
            >
              {/* Image Placeholder */}
              <div className="aspect-[16/9] bg-gradient-to-br from-pink-200/50 to-pink-50/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/90 text-pink-600 text-xs font-bold shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-grow">
                <div className="flex items-center gap-4 text-xs font-bold text-gray-500 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-pink-400" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-pink-400" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="font-serif text-2xl text-gray-900 mb-4 group-hover:text-pink-500 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-gray-700 leading-relaxed mb-6 font-medium line-clamp-3">
                  {post.excerpt}
                </p>

                <button className="inline-flex items-center gap-2 text-pink-600 font-bold text-sm group/btn transition-all">
                  <span className="border-b-2 border-transparent group-hover/btn:border-pink-500 pb-0.5">続きを読む</span>
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          {/* ボタンも背景に埋もれないよう白背景を少し入れる */}
          <button className="px-10 py-4 rounded-full bg-white/60 backdrop-blur-sm border-2 border-pink-200 text-gray-800 font-bold hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all duration-300 shadow-md">
            すべての記事を見る
          </button>
        </div>
      </div>
    </section>
  );
}