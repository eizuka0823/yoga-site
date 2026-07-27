// "use client";
// import { Building2, Users, Clock, CheckCircle, Briefcase, Heart, Zap, Coffee, TrendingUp } from 'lucide-react';

// export function Corporate() {
//   const benefits = [
//     {
//       icon: Heart,
//       title: '健康増進',
//       description: '社員様の心身の健康をサポートし、活力ある職場環境を作ります',
//     },
//     {
//       icon: Coffee,
//       title: 'リフレッシュ',
//       description: '仕事の合間に体を動かすことで、気分転換と疲労回復を促進',
//     },
//     {
//       icon: Users,
//       title: 'コミュニケーション',
//       description: 'レッスンを通じて社内交流が深まり、チームワークが向上',
//     },
//     {
//       icon: TrendingUp,
//       title: '生産性向上',
//       description: '集中力アップとストレス軽減で、業務効率が向上します',
//     },
//   ];

//   const effects = [
//     { label: 'ストレス解消', icon: CheckCircle },
//     { label: '肩こり改善', icon: CheckCircle },
//     { label: '腰痛改善', icon: CheckCircle },
//     { label: '集中力アップ', icon: CheckCircle },
//     { label: '姿勢改善', icon: CheckCircle },
//     { label: '運動不足解消', icon: CheckCircle },
//   ];

//   const pricingPlans = [
//     {
//       name: '月4回コース',
//       type: '定期契約',
//       frequency: '週1回ペース',
//       duration: '60分/回',
//       price: '15,000',
//       details: '出張費2,000円含む',
//       recommended: true,
//     },
//     {
//       name: '月2回コース',
//       type: '定期契約',
//       frequency: '月2回ペース',
//       duration: '60分/回',
//       price: '17,000',
//       details: '出張費2,000円含む',
//       recommended: false,
//     },
//     {
//       name: '単発レッスン',
//       type: '10名様まで',
//       frequency: 'お試しに最適',
//       duration: '60分/回',
//       price: '20,000',
//       details: '出張費2,000円含む',
//       recommended: false,
//     },
//   ];

//   const scheduleOptions = [
//     { icon: Clock, label: '休憩時間', description: 'ランチタイムやお昼休みに' },
//     { icon: Briefcase, label: '始業前', description: '朝の活力チャージに' },
//     { icon: Coffee, label: '終業後', description: '一日の疲れをリフレッシュ' },
//   ];

//   return (
//     <section id="corporate" className="py-20 px-4 bg-transparent">
//       <div className="container mx-auto max-w-6xl">
//         <div className="text-center mb-16">
//           <span className="inline-block px-4 py-1 rounded-full bg-pink-100 text-pink-600 text-sm mb-4">
//             Corporate
//           </span>
//           <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
//             企業様向けヨガ・ピラティス
//           </h2>
//           <div className="w-16 h-1 bg-gradient-to-r from-pink-300 to-pink-200 mx-auto rounded-full mb-6" />
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             社員様の健康管理と生産性向上をサポートする出張レッスンサービス
//           </p>
//         </div>

//         {/* Hero Message */}
//         <div className="max-w-4xl mx-auto mb-16">
//           <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white via-pink-50 to-white border-2 border-pink-200 overflow-hidden">
//             <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-pink-200 to-transparent rounded-bl-full opacity-40" />
//             <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-pink-100 to-transparent rounded-tr-full opacity-40" />

//             <div className="relative text-center">
//               <h3 className="font-serif text-2xl text-gray-900 mb-4">
//                 福利厚生として、ヨガ・ピラティスを取り入れてみませんか
//               </h3>
//               <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
//                 社員様の健康増進、リフレッシュ、社内のコミュニケーションを高める目的で
//                 ヨガ・ピラティスはメリットがたくさんあります。
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Schedule Options */}
//         <div className="grid md:grid-cols-3 gap-6 mb-16">
//           {scheduleOptions.map((option, index) => (
//             <div
//               key={index}
//               className="p-6 rounded-2xl bg-white border border-pink-200 hover:border-pink-300 transition-all hover:-translate-y-1"
//             >
//               <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-pink-100 to-pink-50 mb-4">
//                 <option.icon size={24} className="text-pink-400" />
//               </div>
//               <h4 className="font-serif text-lg text-gray-900 mb-2">{option.label}</h4>
//               <p className="text-sm text-gray-600">{option.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* Main Content */}
//         <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
//           {/* Image Placeholder */}
//           <div className="relative">
//             <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-pink-100 via-white to-pink-50 border border-pink-200 overflow-hidden">
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <Building2 size={80} className="text-pink-200" />
//               </div>
//             </div>
//             <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-gradient-to-br from-pink-100 to-transparent blur-3xl" />

//             {/* Stats */}
//             <div className="mt-6 grid grid-cols-2 gap-4">
//               <div className="p-5 rounded-2xl bg-white border border-pink-200 text-center">
//                 <Clock size={24} className="text-pink-400 mx-auto mb-2" />
//                 <div className="text-2xl font-serif text-gray-900 mb-1">60分</div>
//                 <div className="text-xs text-gray-600">レッスン時間</div>
//               </div>
//               <div className="p-5 rounded-2xl bg-white border border-pink-200 text-center">
//                 <Users size={24} className="text-pink-400 mx-auto mb-2" />
//                 <div className="text-2xl font-serif text-gray-900 mb-1">10名〜</div>
//                 <div className="text-xs text-gray-600">少人数からOK</div>
//               </div>
//             </div>
//           </div>

//           {/* Content */}
//           <div className="space-y-6">
//             <div>
//               <h3 className="font-serif text-2xl text-gray-900 mb-4">
//                 社員様の健康をサポート
//               </h3>
//               <p className="text-gray-600 leading-relaxed mb-4">
//                 心地良く体を動かしながら呼吸を深めて、ストレス解消・肩こりや腰痛改善・
//                 集中力アップなど期待できます。
//               </p>
//               <p className="text-gray-600 leading-relaxed">
//                 社員様に合ったプログラムのご提供が可能です。
//                 一度、体験レッスンもできますのでお気軽にお問合せ下さい。
//               </p>
//             </div>

//             <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-100 to-pink-50 border-2 border-pink-200">
//               <h4 className="font-serif text-lg text-gray-900 mb-4 flex items-center gap-2">
//                 <Zap size={20} className="text-pink-500" />
//                 期待できる効果
//               </h4>
//               <div className="grid grid-cols-2 gap-3">
//                 {effects.map((effect, index) => (
//                   <div key={index} className="flex items-center gap-2">
//                     <effect.icon size={16} className="text-pink-500 flex-shrink-0" />
//                     <span className="text-sm text-gray-700">{effect.label}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="p-6 rounded-2xl bg-white border border-pink-200">
//               <div className="flex items-start gap-3">
//                 <CheckCircle size={24} className="text-pink-400 flex-shrink-0 mt-1" />
//                 <div>
//                   <h4 className="font-serif text-lg text-gray-900 mb-2">オーダーメイドプログラム</h4>
//                   <p className="text-sm text-gray-600 leading-relaxed">
//                     企業様の業種や社員様の年齢層、体力レベルに合わせて、
//                     最適なプログラムをカスタマイズいたします。
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Benefits */}
//         <div className="mb-16">
//           <h3 className="font-serif text-2xl text-gray-900 text-center mb-8">導入のメリット</h3>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {benefits.map((benefit, index) => (
//               <div
//                 key={index}
//                 className="text-center p-6 rounded-3xl bg-white border border-pink-200 hover:border-pink-300 transition-all hover:-translate-y-1"
//               >
//                 <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-100 to-pink-50 mb-4">
//                   <benefit.icon size={24} className="text-pink-400" />
//                 </div>
//                 <h4 className="font-serif text-lg text-gray-900 mb-2">{benefit.title}</h4>
//                 <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Pricing */}
//         <div className="mb-12">
//           <h3 className="font-serif text-2xl text-gray-900 text-center mb-8">料金プラン</h3>
//           <div className="grid md:grid-cols-3 gap-6 mb-6">
//             {pricingPlans.map((plan, index) => (
//               <div
//                 key={index}
//                 className={`relative p-8 rounded-3xl border-2 transition-all hover:-translate-y-1 ${
//                   plan.recommended
//                     ? 'bg-gradient-to-br from-pink-100 to-pink-50 border-pink-300 shadow-lg'
//                     : 'bg-white border-pink-200 hover:border-pink-300'
//                 }`}
//               >
//                 {plan.recommended && (
//                   <div className="absolute -top-3 left-1/2 -translate-x-1/2">
//                     <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-pink-400 to-pink-300 text-white text-xs">
//                       おすすめ
//                     </span>
//                   </div>
//                 )}

//                 <div className="text-center">
//                   <div className="inline-block px-3 py-1 rounded-full bg-white border border-pink-200 text-pink-600 text-xs mb-4">
//                     {plan.type}
//                   </div>
//                   <h4 className="font-serif text-xl text-gray-900 mb-2">{plan.name}</h4>
//                   <div className="text-sm text-gray-600 mb-4">{plan.frequency}</div>

//                   <div className="text-3xl font-serif text-gray-900 mb-1">
//                     ¥{plan.price.toLocaleString()}
//                   </div>
//                   <div className="text-sm text-gray-600 mb-4">{plan.duration}</div>

//                   <div className="pt-4 border-t border-pink-200">
//                     <div className="text-xs text-gray-500">{plan.details}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-white border border-pink-200 text-center">
//             <p className="text-sm text-gray-600">
//               ＊出張費は高崎市内の料金です。その他のエリアについてはお問い合わせください。
//             </p>
//           </div>
//         </div>

//         {/* Trial Lesson */}
//         <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-white via-pink-50 to-white border-2 border-pink-200">
//           <div className="text-center">
//             <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-100 to-pink-50 mb-4">
//               <CheckCircle size={32} className="text-pink-400" />
//             </div>
//             <h4 className="font-serif text-xl text-gray-900 mb-3">体験レッスン受付中</h4>
//             <p className="text-gray-600 mb-6 leading-relaxed">
//               まずは体験レッスンで効果を実感してください。<br />
//               企業様のご要望に合わせて、最適なプランをご提案いたします。
//             </p>
//             <button
//               onClick={() => {
//                 const element = document.getElementById('contact');
//                 if (element) {
//                   element.scrollIntoView({ behavior: 'smooth' });
//                 }
//               }}
//               className="px-8 py-4 bg-gradient-to-r from-pink-400 to-pink-300 text-white rounded-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//             >
//               資料請求・お問い合わせ
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import {
  Building2,
  Users,
  Clock,
  CheckCircle,
  Briefcase,
  Heart,
  Zap,
  Coffee,
  TrendingUp,
} from "lucide-react";

export function Corporate() {
  const benefits = [
    {
      icon: Heart,
      title: "健康増進",
      description: "社員様の心身の健康をサポートし、活力ある職場環境を作ります",
    },
    {
      icon: Coffee,
      title: "リフレッシュ",
      description: "仕事の合間に体を動かすことで、気分転換と疲労回復を促進",
    },
    {
      icon: Users,
      title: "コミュニケーション",
      description: "レッスンを通じて社内交流が深まり、チームワークが向上",
    },
    {
      icon: TrendingUp,
      title: "生産性向上",
      description: "集中力アップとストレス軽減で、業務効率が向上します",
    },
  ];

  const effects = [
    { label: "ストレス解消", icon: CheckCircle },
    { label: "肩こり改善", icon: CheckCircle },
    { label: "腰痛改善", icon: CheckCircle },
    { label: "集中力アップ", icon: CheckCircle },
    { label: "姿勢改善", icon: CheckCircle },
    { label: "運動不足解消", icon: CheckCircle },
  ];

  const pricingPlans = [
    {
      name: "月4回コース",
      type: "定期契約",
      frequency: "週1回ペース",
      duration: "60分/回",
      price: "15,000",
      details: "出張費2,000円含む",
      recommended: true,
    },
    {
      name: "月2回コース",
      type: "定期契約",
      frequency: "月2回ペース",
      duration: "60分/回",
      price: "17,000",
      details: "出張費2,000円含む",
      recommended: false,
    },
    {
      name: "単発レッスン",
      type: "10名様まで",
      frequency: "お試しに最適",
      duration: "60分/回",
      price: "20,000",
      details: "出張費2,000円含む",
      recommended: false,
    },
  ];

  const scheduleOptions = [
    { icon: Clock, label: "休憩時間", description: "ランチタイムやお昼休みに" },
    { icon: Briefcase, label: "始業前", description: "朝の活力チャージに" },
    { icon: Coffee, label: "終業後", description: "一日の疲れをリフレッシュ" },
  ];
  return (
    <section id="corporate" className="py-24 px-4 bg-transparent relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* 見出し部分 */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-pink-100/80 text-pink-700 text-sm font-bold mb-4 backdrop-blur-sm shadow-sm">
            Corporate
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-6 drop-shadow-sm">
            企業様向けヨガ・ピラティス
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-pink-400 to-pink-200 mx-auto rounded-full mb-8 shadow-sm" />
          <p className="text-gray-800 font-bold max-w-2xl mx-auto leading-relaxed">
            社員様の健康管理と生産性向上をサポートする出張レッスンサービス
          </p>
        </div>

        {/* Hero Message：すりガラスで高級感を演出 */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="relative p-10 sm:p-14 rounded-[2.5rem] bg-white/70 backdrop-blur-lg border border-white/50 shadow-2xl overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-pink-200/30 to-transparent rounded-bl-full pointer-events-none" />

            <div className="relative">
              <h3 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-6 leading-snug">
                福利厚生として、
                <br className="sm:hidden" />
                ヨガ・ピラティスを取り入れてみませんか
              </h3>
              <p className="text-gray-700 font-medium leading-relaxed max-w-2xl mx-auto text-lg">
                健康増進、リフレッシュ、社内コミュニケーションの向上など、
                <br className="hidden md:block" />
                ヨガ・ピラティスは企業運営に多くのメリットをもたらします。
              </p>
            </div>
          </div>
        </div>

        {/* Schedule Options：カードの視認性をアップ */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {scheduleOptions.map((option, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-pink-100 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-100 to-pink-50 mb-6 shadow-inner">
                <option.icon size={28} className="text-pink-500" />
              </div>
              <h4 className="font-serif text-xl text-gray-900 mb-3">
                {option.label}
              </h4>
              <p className="text-sm text-gray-700 font-medium leading-relaxed">
                {option.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pricing：ビジネスにおいて最も重要な部分を強調 */}
        <div className="mb-20">
          <h3 className="font-serif text-3xl text-gray-900 text-center mb-12">
            料金プラン
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-10 rounded-[2.5rem] border transition-all hover:-translate-y-2 shadow-xl ${
                  plan.recommended
                    ? "bg-pink-500 text-white border-none scale-105 shadow-pink-200"
                    : "bg-white/80 backdrop-blur-md border-white/50 text-gray-900"
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-block px-6 py-1.5 rounded-full bg-white text-pink-600 text-xs font-bold shadow-md">
                      人気・おすすめ
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <div
                    className={`inline-block px-4 py-1.5 rounded-full mb-6 text-xs font-bold ${
                      plan.recommended
                        ? "bg-white/20 text-white"
                        : "bg-pink-50 text-pink-600 border border-pink-100"
                    }`}
                  >
                    {plan.type}
                  </div>
                  <h4 className="font-serif text-2xl mb-2">{plan.name}</h4>
                  <div
                    className={`text-sm mb-6 ${plan.recommended ? "text-pink-100" : "text-gray-600"} font-medium`}
                  >
                    {plan.frequency}
                  </div>

                  <div className="text-4xl font-serif mb-2 font-bold">
                    ¥{plan.price.toLocaleString()}
                  </div>
                  <div
                    className={`text-sm mb-8 ${plan.recommended ? "text-pink-50" : "text-gray-500"} font-medium`}
                  >
                    {plan.duration}
                  </div>

                  <div
                    className={`pt-6 border-t ${plan.recommended ? "border-white/20" : "border-pink-100"}`}
                  >
                    <div
                      className={`text-xs font-bold ${plan.recommended ? "text-white" : "text-gray-500"}`}
                    >
                      {plan.details}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trial Lesson：信頼感を高める最終セクション */}
        <div className="max-w-3xl mx-auto p-10 sm:p-14 rounded-[3rem] bg-white/70 backdrop-blur-xl border border-white/50 shadow-2xl text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-[2rem] bg-gradient-to-br from-pink-100 to-pink-50 mb-6 shadow-inner">
            <CheckCircle size={40} className="text-pink-500" />
          </div>
          <h4 className="font-serif text-2xl text-gray-900 mb-4">
            体験レッスン受付中
          </h4>
          <p className="text-gray-800 font-medium mb-8 leading-relaxed text-lg">
            まずは体験レッスンで効果を実感してください。
            <br className="hidden sm:block" />
            貴社の課題に合わせて、最適なプログラムをご提案いたします。
          </p>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-12 py-5 bg-gradient-to-r from-pink-600 to-pink-400 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 shadow-xl text-lg"
          >
            資料請求・お問い合わせ
          </button>
        </div>
      </div>
    </section>
  );
}
