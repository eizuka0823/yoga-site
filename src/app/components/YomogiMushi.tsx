// "use client";
// import { Droplets, Leaf, Heart, Sparkles, Flame, Check } from 'lucide-react';

// export function YomogiMushi() {
//   const benefits = [
//     {
//       icon: Heart,
//       title: '女性トラブル',
//       items: [
//         '生理痛・生理不順',
//         '子宮内膜症',
//         '更年期障害',
//         '膀胱炎・不妊症',
//         '冷え性改善',
//       ],
//     },
//     {
//       icon: Sparkles,
//       title: '美容',
//       items: [
//         '老廃物除去',
//         'ニキビ予防',
//         '美肌効果',
//       ],
//     },
//     {
//       icon: Flame,
//       title: 'ダイエット',
//       items: [
//         '新陳代謝を促進',
//         '脂肪燃焼',
//         '便秘解消',
//         '肩こり解消',
//         'ストレス解消',
//         'デトックス効果',
//       ],
//     },
//   ];

//   const pricingPlans = [
//     {
//       name: '1回コース',
//       duration: '40分',
//       price: '5,000',
//       pricePerSession: null,
//       validity: null,
//       featured: false,
//     },
//     {
//       name: '3回コース',
//       duration: '40分 × 3回',
//       price: '14,400',
//       pricePerSession: '4,800',
//       validity: '2ヶ月有効',
//       featured: true,
//     },
//     {
//       name: '5回コース',
//       duration: '40分 × 5回',
//       price: '23,500',
//       pricePerSession: '4,700',
//       validity: '3ヶ月有効',
//       featured: false,
//     },
//     {
//       name: 'ペア割',
//       duration: '40分',
//       price: '8,000',
//       pricePerSession: null,
//       validity: '2名様分',
//       featured: false,
//     },
//   ];

//   const includedServices = [
//     '足湯サービス',
//     'ミネラルウォーター',
//     'タオル各種',
//   ];

//   return (
//     <section id="yomogimushi" className="py-20 px-4 bg-transparent">
//       <div className="container mx-auto max-w-6xl">
//         <div className="text-center mb-16">
//           <span className="inline-block px-4 py-1 rounded-full bg-pink-100 text-pink-600 text-sm mb-4">
//             Yomogi-mushi
//           </span>
//           <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
//             黄土よもぎ蒸し
//           </h2>
//           <div className="w-16 h-1 bg-gradient-to-r from-pink-300 to-pink-200 mx-auto rounded-full mb-6" />
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             韓国の伝統療法で身体を芯から温め、心身ともにリラックス
//           </p>
//         </div>

//         {/* Main Content */}
//         <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
//           {/* Image Placeholder */}
//           <div className="relative">
//             <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-pink-100 via-pink-50 to-white border border-pink-200 overflow-hidden">
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <Leaf size={80} className="text-pink-200" />
//               </div>
//             </div>
//             <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-gradient-to-br from-pink-100 to-transparent blur-3xl" />

//             {/* Feature Cards */}
//             <div className="mt-6 grid grid-cols-2 gap-4">
//               <div className="p-4 rounded-2xl bg-white border border-pink-200 text-center">
//                 <Droplets size={24} className="text-pink-400 mx-auto mb-2" />
//                 <div className="text-xs text-gray-600">デトックス</div>
//               </div>
//               <div className="p-4 rounded-2xl bg-white border border-pink-200 text-center">
//                 <Flame size={24} className="text-pink-400 mx-auto mb-2" />
//                 <div className="text-xs text-gray-600">遠赤外線</div>
//               </div>
//             </div>
//           </div>

//           {/* Content */}
//           <div className="space-y-6">
//             <div>
//               <h3 className="font-serif text-2xl text-gray-900 mb-4">
//                 よもぎ蒸しとは
//               </h3>
//               <p className="text-gray-600 leading-relaxed mb-4">
//                 肛門や子宮の粘膜によもぎの葉の湯気を当てて下半身を温めるものです。
//                 よもぎ蒸しで期待できる効果としては冷え性、生理痛、更年期症状など
//                 様々な体の不調に効果的です。
//               </p>
//             </div>

//             <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-white border border-pink-200">
//               <div className="flex items-start gap-3 mb-3">
//                 <Flame size={24} className="text-pink-400 flex-shrink-0 mt-1" />
//                 <div>
//                   <h4 className="font-serif text-lg text-gray-900 mb-2">黄土の特徴</h4>
//                   <p className="text-sm text-gray-600 leading-relaxed">
//                     黄土は遠赤外線を放出することが特徴です。
//                     遠赤外線は血液循環を良くし、素肌美人にしてくれます。
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="p-6 rounded-2xl bg-white border border-pink-200">
//               <h4 className="font-serif text-lg text-gray-900 mb-4 flex items-center gap-2">
//                 <Leaf size={20} className="text-pink-400" />
//                 座浴剤の効能
//               </h4>
//               <p className="text-sm text-gray-600 mb-4">3種類からお選びいただけます</p>
//               <div className="flex flex-wrap gap-2">
//                 {benefits.map((benefit, index) => (
//                   <div
//                     key={index}
//                     className="px-4 py-2 rounded-full bg-pink-50 border border-pink-200 text-sm text-gray-700"
//                   >
//                     {benefit.title}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Benefits Details */}
//         <div className="grid md:grid-cols-3 gap-6 mb-16">
//           {benefits.map((benefit, index) => (
//             <div
//               key={index}
//               className="p-6 rounded-3xl bg-white border border-pink-200 hover:border-pink-300 transition-all hover:-translate-y-1"
//             >
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-100 to-pink-50 flex items-center justify-center">
//                   <benefit.icon size={24} className="text-pink-400" />
//                 </div>
//                 <h4 className="font-serif text-xl text-gray-900">{benefit.title}</h4>
//               </div>
//               <ul className="space-y-2">
//                 {benefit.items.map((item, itemIndex) => (
//                   <li key={itemIndex} className="flex items-start gap-2 text-sm text-gray-600">
//                     <Check size={16} className="text-pink-400 flex-shrink-0 mt-0.5" />
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Pricing */}
//         <div className="mb-8">
//           <h3 className="font-serif text-2xl text-gray-900 text-center mb-8">料金プラン</h3>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//             {pricingPlans.map((plan, index) => (
//               <div
//                 key={index}
//                 className={`relative p-6 rounded-3xl border-2 transition-all hover:-translate-y-1 ${
//                   plan.featured
//                     ? 'bg-gradient-to-br from-pink-100 to-pink-50 border-pink-300 shadow-lg'
//                     : 'bg-white border-pink-200 hover:border-pink-300'
//                 }`}
//               >
//                 {plan.featured && (
//                   <div className="absolute -top-3 left-1/2 -translate-x-1/2">
//                     <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-pink-400 to-pink-300 text-white text-xs">
//                       人気
//                     </span>
//                   </div>
//                 )}

//                 <div className="text-center">
//                   <h4 className="font-serif text-lg text-gray-900 mb-3">{plan.name}</h4>
//                   <div className="text-3xl font-serif text-gray-900 mb-1">
//                     ¥{plan.price.toLocaleString()}
//                   </div>
//                   <div className="text-sm text-gray-600 mb-3">{plan.duration}</div>

//                   {plan.pricePerSession && (
//                     <div className="text-xs text-pink-600 mb-2">
//                       1回あたり ¥{plan.pricePerSession}
//                     </div>
//                   )}

//                   {plan.validity && (
//                     <div className="text-xs text-gray-500">（{plan.validity}）</div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Included Services */}
//           <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-white border border-pink-200">
//             <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-700">
//               <span className="font-serif">すべてのプランに含まれます：</span>
//               {includedServices.map((service, index) => (
//                 <div key={index} className="flex items-center gap-2">
//                   <Check size={16} className="text-pink-400" />
//                   <span>{service}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* CTA */}
//         <div className="text-center">
//           <button
//             onClick={() => {
//               const element = document.getElementById('contact');
//               if (element) {
//                 element.scrollIntoView({ behavior: 'smooth' });
//               }
//             }}
//             className="px-8 py-4 bg-gradient-to-r from-pink-400 to-pink-300 text-white rounded-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//           >
//             ご予約・お問い合わせ
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { Droplets, Leaf, Heart, Sparkles, Flame, Check } from "lucide-react";

export function YomogiMushi() {
  const benefits = [
    {
      icon: Heart,
      title: "女性トラブル",
      items: [
        "生理痛・生理不順",
        "子宮内膜症",
        "更年期障害",
        "膀胱炎・不妊症",
        "冷え性改善",
      ],
    },
    {
      icon: Sparkles,
      title: "美容",
      items: ["老廃物除去", "ニキビ予防", "美肌効果"],
    },
    {
      icon: Flame,
      title: "ダイエット",
      items: [
        "新陳代謝を促進",
        "脂肪燃焼",
        "便秘解消",
        "肩こり解消",
        "ストレス解消",
        "デトックス効果",
      ],
    },
  ];

  const pricingPlans = [
    {
      name: "初回お試しコース",
      duration: "40分",
      price: "4,000",
      pricePerSession: null,
      validity: null,
      featured: false,
    },
    {
      name: "3回コース",
      duration: "40分 × 3回",
      price: "14,400",
      pricePerSession: "4,800",
      validity: "2ヶ月有効",
      featured: true,
    },
    {
      name: "5回コース",
      duration: "40分 × 5回",
      price: "23,500",
      pricePerSession: "4,700",
      validity: "3ヶ月有効",
      featured: false,
    },
    {
      name: "ペア割",
      duration: "40分",
      price: "8,000",
      pricePerSession: null,
      validity: "2名様分",
      featured: false,
    },
  ];

  const includedServices = ["足湯サービス", "ミネラルウォーター", "タオル各種"];

  return (
    <section id="yomogimushi" className="py-24 px-4 bg-transparent relative">
      {/* 背景の光を活かすための装飾（オプション） */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-pink-50/10 pointer-events-none -z-10 blur-3xl rounded-full" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* 見出し部分：コントラストを強化 */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-pink-100/80 text-pink-700 text-sm font-bold mb-4 backdrop-blur-sm shadow-sm">
            Yomogi-mushi
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-6 drop-shadow-sm">
            黄土よもぎ蒸し
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-pink-400 to-pink-200 mx-auto rounded-full mb-8 shadow-sm" />
          <p className="text-gray-800 font-bold max-w-2xl mx-auto leading-relaxed">
            韓国の伝統療法で身体を芯から温め、心身ともにリラックス
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* 左側：ビジュアルエリア */}
          <div className="relative">
            {/* 背景写真の上に浮かぶメインパネル */}
            <div className="aspect-[4/3] rounded-[2.5rem] bg-white/40 backdrop-blur-md border border-white/50 overflow-hidden shadow-2xl flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200/20 to-transparent" />
              <img
                src="/yomogimushi.jpg"
                alt="黄土よもぎ蒸しのイメージ"
                className="w-full h-full object-cover rounded-[2.5rem] transition-transform duration-500 hover:scale-105 antialiased"
              />
            </div>

            {/* 特徴カード：背景に負けないよう白を強く */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-pink-100 text-center shadow-lg transform hover:scale-105 transition-transform">
                <Droplets size={28} className="text-pink-500 mx-auto mb-3" />
                <div className="text-sm font-bold text-gray-800">
                  デトックス
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-pink-100 text-center shadow-lg transform hover:scale-105 transition-transform">
                <Flame size={28} className="text-pink-500 mx-auto mb-3" />
                <div className="text-sm font-bold text-gray-800">遠赤外線</div>
              </div>
            </div>
          </div>

          {/* 右側：説明テキスト（読みやすさ重視） */}
          <div className="space-y-8 p-6 md:p-0">
            <div className="p-8 rounded-[2rem] bg-white/60 backdrop-blur-lg border border-white/50 shadow-xl">
              <h3 className="font-serif text-2xl text-gray-900 mb-4 border-b border-pink-100 pb-2 inline-block">
                よもぎ蒸しとは
              </h3>
              <p className="text-gray-800 font-medium leading-loose text-base">
                肛門や子宮の粘膜によもぎの葉の湯気を当てて下半身を温めるものです。
                冷え性、生理痛、更年期症状など、様々な身体の不調に効果的です。
              </p>
            </div>

            <div className="p-8 rounded-[2rem] bg-pink-500 text-white shadow-xl transform hover:-rotate-1 transition-transform">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-2 rounded-xl">
                  <Flame size={28} className="text-white" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2">黄土の特徴</h4>
                  <p className="text-pink-50 font-medium leading-relaxed">
                    黄土は遠赤外線を放出することが特徴です。
                    血液循環を良くし、芯から温めることで素肌美人へと導きます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Details：3カラムのカード */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 rounded-[2.5rem] bg-white/70 backdrop-blur-md border border-white/50 hover:border-pink-200 transition-all duration-500 hover:-translate-y-2 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-100 to-pink-50 flex items-center justify-center shadow-inner">
                  <benefit.icon size={28} className="text-pink-500" />
                </div>
                <h4 className="font-serif text-2xl text-gray-900">
                  {benefit.title}
                </h4>
              </div>
              <ul className="space-y-3">
                {benefit.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-3 text-gray-800 font-bold text-sm"
                  >
                    <Check
                      size={18}
                      className="text-pink-500 flex-shrink-0 mt-0.5"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pricing：料金プラン */}
        <div className="mb-16">
          <h3 className="font-serif text-3xl text-gray-900 text-center mb-12">
            料金プラン
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-[2rem] border-2 transition-all hover:-translate-y-2 shadow-xl ${
                  plan.featured
                    ? "bg-pink-500 text-white border-none scale-105 shadow-pink-200"
                    : "bg-white/80 backdrop-blur-md border-white/50 text-gray-900"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white text-pink-600 text-xs font-bold shadow-md">
                      人気
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <h4
                    className={`font-serif text-xl mb-4 ${plan.featured ? "text-white" : "text-gray-900"}`}
                  >
                    {plan.name}
                  </h4>
                  <div className="text-4xl font-serif mb-2 font-bold">
                    ¥{plan.price.toLocaleString()}
                  </div>
                  <div
                    className={`text-sm mb-4 ${plan.featured ? "text-pink-100" : "text-gray-600"} font-medium`}
                  >
                    {plan.duration}
                  </div>

                  {plan.pricePerSession && (
                    <div
                      className={`text-xs mb-3 font-bold ${plan.featured ? "bg-white/20 py-1 rounded-full" : "text-pink-600"}`}
                    >
                      1回あたり ¥{plan.pricePerSession}
                    </div>
                  )}

                  {plan.validity && (
                    <div
                      className={`text-xs ${plan.featured ? "text-pink-50" : "text-gray-500"} font-medium`}
                    >
                      （{plan.validity}）
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Included Services */}
          <div className="p-8 rounded-[2rem] bg-white/40 backdrop-blur-sm border border-white/50 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm font-bold text-gray-800">
              <span className="font-serif text-lg border-b-2 border-pink-200 pb-1">
                すべてのプランに含まれます
              </span>
              <div className="flex flex-wrap justify-center gap-6">
                {includedServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="bg-pink-100 p-1 rounded-full">
                      <Check size={16} className="text-pink-500" />
                    </div>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-12 py-5 bg-gradient-to-r from-pink-600 to-pink-400 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 shadow-xl text-lg"
          >
            ご予約・お問い合わせ
          </button>
        </div>
      </div>
    </section>
  );
}
