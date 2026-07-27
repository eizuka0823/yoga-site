

"use client";
import { Calendar, Sparkles } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden"
    >
      {/* --- 背景写真の美しさを邪魔しない、装飾レイヤー（リファクタリング） --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* 画像の明るい部分（中央〜右）に、文字を読みやすくするための薄いフィルター */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1.5px]" />

        {/* 装飾用の光のアクセント */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-pink-100/30 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-pink-200/20 blur-3xl" />
      </div>
      {/* ------------------------------------------------------------- */}

      <div className="relative z-10 max-w-5xl mx-auto text-center py-20">
        {/* キャッチコピーの上：より「清潔」なデザインに */}
        <div className="mb-10">
          <div className="inline-block px-6 py-2.5 rounded-full bg-white/60 backdrop-blur-sm border border-white/50 mb-6 shadow-sm">
            <div className="flex items-center gap-3 text-pink-600 font-bold text-base tracking-wider">
              <Sparkles size={20} />
              <span>心と身体を整える時間</span>
            </div>
          </div>
        </div>

        {/* ✅ メインタイトル：ここが一番重要！ */}
        <h1 className="font-sans text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-gray-900 mb-8 leading-tight drop-shadow-lg font-bold antialiased">
          {/* drop-shadow-lg で、明るい背景の上でも文字をくっきり浮かび上がらせる */}
          自分に優しく
          <br className="sm:hidden" /> {/* スマホでのみ改行 */}
          <span className="sm:inline-block">笑顔になれるヨガ教室</span>
        </h1>

        {/* ✅ サブテキスト：読みやすさを最強に強化 */}
        <p className="text-lg sm:text-xl text-gray-800 mb-16 max-w-4xl mx-auto leading-loose font-medium antialiased px-6 py-4 rounded-3xl bg-white/40 backdrop-blur-[2px] shadow-inner border border-white/30">
          {/* bg-white/40 と backdrop-blur で、文字の背面だけを曇らせて可読性を確保 */}
          ヨガとピラティスを通じて、心と身体のバランスを見つけませんか。
          <br className="hidden sm:block" />
          初心者の方も、経験者の方も、一人ひとりに寄り添ったレッスンをご提供します。
        </p>

        {/* ボタン：背景に埋もれないよう、影を強く */}
        <button
          onClick={scrollToContact}
          className="group inline-flex items-center gap-3.5 px-10 py-5 bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 shadow-xl text-lg font-bold"
        >
          <Calendar
            size={22}
            className="group-hover:scale-110 transition-transform"
          />
          <span>体験レッスンを予約する</span>
        </button>

        {/* Decorator: 文字の邪魔をしないよう、より薄く */}
        <div className="mt-24 flex items-center justify-center gap-6">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-pink-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-pink-300" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-pink-200" />
        </div>
      </div>
    </section>
  );
}
