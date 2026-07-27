

"use client";
import { Target, Zap, Shield, Smile, Heart, CheckCircle, Users, Clock, MapPin } from 'lucide-react';

export function Pilates() {
  const features = [
    { icon: Shield, title: '体に負担をかけない', description: '安全に行えるエクササイズで、無理なく続けられます' },
    { icon: Target, title: 'インナーマッスル強化', description: '中心部を安定させ、体の土台をしっかりと作ります' },
    { icon: Heart, title: '個別メニュー', description: 'お一人おひとりの体に合わせたメニューを提供' },
    { icon: Smile, title: '全力サポート', description: '分からない、続けられない方も安心してお任せください' },
  ];

  const effects = [
    { label: '腰痛改善', icon: CheckCircle },
    { label: '肩こり解消', icon: CheckCircle },
    { label: '姿勢改善', icon: CheckCircle },
    { label: 'ヒップアップ', icon: CheckCircle },
    { label: 'お腹の引き締め', icon: CheckCircle },
    { label: 'けが防止', icon: CheckCircle },
    { label: 'リフレッシュ効果', icon: CheckCircle },
    { label: '体の歪みを整える', icon: CheckCircle },
    { label: '柔軟性アップ', icon: CheckCircle },
  ];

  return (
    <section id="pilates" className="py-24 px-4 bg-transparent relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* 見出し部分 */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-pink-100/80 text-pink-700 text-sm font-bold mb-4 backdrop-blur-sm shadow-sm">
            Personal Pilates
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-6 drop-shadow-sm">
            パーソナルピラティス
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-pink-400 to-pink-200 mx-auto rounded-full mb-8 shadow-sm" />
          <p className="text-gray-800 font-bold max-w-2xl mx-auto leading-relaxed">
            マンツーマンで行う特別なピラティスレッスン。<br className="hidden sm:block" />
            あなただけのオーダーメイドプログラム
          </p>
        </div>

        {/* Hero Message：強い光に負けないよう、白の透過度を調整 */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative p-10 sm:p-14 rounded-[2.5rem] bg-white/70 backdrop-blur-lg border border-white/50 shadow-2xl overflow-hidden text-center">
            <div className="relative">
              <div className="space-y-4 mb-8">
                <p className="text-2xl sm:text-3xl text-gray-900 leading-tight font-medium">
                  分からない、続けられない、<br />
                  でも<span className="font-serif text-pink-600 font-bold border-b-2 border-pink-200">体を変えたい</span>
                </p>
              </div>
              <div className="inline-block px-8 py-4 rounded-full bg-pink-500 shadow-xl shadow-pink-200/50 transform hover:scale-105 transition-transform">
                <p className="text-lg sm:text-xl text-white font-bold tracking-wider">
                  そんな方に<span className="font-serif text-2xl px-1">全力</span>でサポートします
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left: Content */}
          <div className="space-y-10">
            <div className="p-8 rounded-[2rem] bg-white/60 backdrop-blur-md border border-white/40 shadow-lg">
              <h3 className="font-serif text-2xl text-gray-900 mb-6 border-l-4 border-pink-400 pl-4">
                ピラティスとは
              </h3>
              <p className="text-gray-800 font-bold leading-loose text-base">
                ピラティスはインナーマッスルを強化し、中心部を安定させて、
                呼吸を繰り返しながら行うエクササイズです。
                体に負担をかけず、安全に行えます。
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-pink-50 shadow-md hover:shadow-xl transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center shadow-inner">
                      <feature.icon size={24} className="text-pink-500" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-xs text-gray-700 font-medium leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual & Stats */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-[2.5rem] bg-white/40 backdrop-blur-md border border-white/50 overflow-hidden shadow-2xl flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200/20 to-transparent" />
              <img
                src="/personal.jpg"
                alt="ピラティスのイメージ"
                className="w-full h-full object-cover rounded-[2.5rem] transition-transform duration-500 hover:scale-105 antialiased"
              />
            </div>

            {/* Stats Cards */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: Clock, label: '60分' },
                { icon: Users, label: 'マンツーマン' },
                { icon: MapPin, label: '出張対応' }
              ].map((stat, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/90 backdrop-blur-sm border border-pink-50 text-center shadow-lg transform hover:-translate-y-1 transition-all">
                  <stat.icon size={28} className="text-pink-500 mx-auto mb-2" />
                  <div className="text-xs font-bold text-gray-800">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Effects Section */}
        <div className="mb-20">
          <h3 className="font-serif text-2xl text-gray-900 text-center mb-10 font-bold">期待できる効果</h3>
          <div className="p-10 rounded-[2.5rem] bg-white/70 backdrop-blur-lg border border-white/50 shadow-xl">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {effects.map((effect, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/50 border border-pink-50 hover:bg-white transition-all font-bold text-gray-800"
                >
                  <effect.icon size={22} className="text-pink-500 flex-shrink-0" />
                  <span className="text-sm tracking-tight">{effect.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing：最も視認性が問われる場所 */}
        <div className="max-w-2xl mx-auto mb-16">
          <h3 className="font-serif text-3xl text-gray-900 text-center mb-10">料金</h3>
          <div className="p-10 rounded-[3rem] bg-pink-500 text-white shadow-2xl shadow-pink-200/50 text-center relative overflow-hidden">
             {/* 装飾用の白光 */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            
            <div className="relative">
              <div className="inline-block px-6 py-1.5 rounded-full bg-white text-pink-600 text-xs font-black mb-6 shadow-md">
                基本プラン
              </div>
              <h4 className="font-serif text-2xl mb-4">1回</h4>
              <div className="text-5xl font-serif mb-3 font-bold">¥8,000</div>
              <div className="text-pink-100 mb-8 font-bold">60分 / マンツーマン</div>
              
              <div className="pt-8 border-t border-white/20">
                <div className="flex items-center justify-center gap-3 text-sm font-bold text-pink-50">
                  <MapPin size={18} className="text-white" />
                  <span>出張レッスンは別途費用がかかります</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-900 font-bold mb-8 text-lg">
            まずは体験してみませんか？<br className="sm:hidden" />お気軽にお問い合わせください
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-12 py-5 bg-gradient-to-r from-pink-600 to-pink-400 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 shadow-xl text-lg"
          >
            ご予約・お問い合わせ
          </button>
        </div>
      </div>
    </section>
  );
}