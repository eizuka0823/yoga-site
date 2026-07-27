// import { Award} from 'lucide-react';

// export function Profile() {
//   const achievements = [
//     {
//       icon: Award,
//       title: '資格',
//       description: 'ＡＪＹＡ認定ヨガインストラクター',
//     },
//     {
//       icon: Award,
//       title: '資格',
//       description: 'BESJ認定ピラティスインストラクター',
//     },
//     {
//       icon: Award,
//       title: '資格',
//       description: '高津文美子式フェイシャルヨガ認定アドバンスインストラクター',
//     },
//     {
//       icon: Award,
//       title: '資格',
//       description: '日本アロマ環境協会認定アロマテラピー１級',
//     },
//     {
//       icon: Award,
//       title: '資格',
//       description: 'キッズヨガ＆ピラティスインストラクター',
//     }
//   ];

//   return (
//     <section id="profile" className="py-20 px-4 bg-transparent">
//       <div className="container mx-auto max-w-6xl">
//         <div className="text-center mb-16">
//           <span className="inline-block px-4 py-1 rounded-full bg-pink-100 text-pink-600 text-sm mb-4">
//             Profile
//           </span>
//           <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
//             インストラクター紹介
//           </h2>
//           <div className="w-16 h-1 bg-gradient-to-r from-pink-300 to-pink-200 mx-auto rounded-full" />
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Profile Image Placeholder */}
//           <div className="relative">
//             <div className="aspect-[3/4] rounded-3xl bg-gradient-to-br from-pink-100 via-pink-50 to-white border border-pink-200 overflow-hidden">
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-200 to-pink-100" />
//               </div>
//             </div>
//             <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br from-pink-50 to-transparent blur-2xl" />
//           </div>

//           {/* Profile Content */}
//           <div className="space-y-6">
//             <div>
//               <h3 className="font-serif text-2xl text-gray-900 mb-3">永塚 真由美</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 高崎ヨガ教室『マユヨガ』の永塚真由美です。
//                 <br />
//                 ３０代後半にヨガを始めましたが、ヨガのリフレッシュ効果や
//                 免疫力を高める不思議な魅力に引き込まれて
//                 インストラクターの道に進みました。
//                 <br />
//                 ヨガを通して多くの人に健康と笑顔の輪を広げたいと思い
//                 ヨガ教室を始めました。
//                 <br />
//                 ヨガの後は優しい気持ちになれます。
//                 <br />
//                 自分の体をいたわり、自分に優しく、そして、関わる周りの人にも
//                 優しくなれるヨガをお伝えしたいと思います。
//                 <br />
//                 １レッスン、１レッスン丁寧に心を込めて
//                 お伝えします。
//                 <br />
//                 また、レッスンでは無理なく自分のペースで行っていただいています。
//                 私と一緒にヨガを楽しみませんか。
//               </p>
//             </div>

//             {/* <p className="text-gray-600 leading-relaxed">
//               現在は都内を中心に、初心者から上級者まで幅広い層の方々へレッスンを提供しています。
//               一人ひとりの身体の状態や目標に合わせた丁寧な指導を心がけ、
//               皆様が心地よく続けられるヨガライフをサポートいたします。
//             </p> */}

//             <div className="grid sm:grid-cols-3 gap-4 pt-6">
//               {achievements.map((item, index) => (
//                 <div
//                   key={index}
//                   className="text-center p-4 rounded-2xl bg-white border border-pink-100 hover:border-pink-200 transition-colors"
//                 >
//                   <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-50 mb-3">
//                     <item.icon size={20} className="text-pink-400" />
//                   </div>
//                   <div className="text-xs text-pink-600 mb-1">{item.title}</div>
//                   <div className="text-xs text-gray-600">{item.description}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Award } from "lucide-react";

export function Profile() {
  const achievements = [
    { title: "資格", description: "ＡＪＹＡ認定ヨガインストラクター" },
    { title: "資格", description: "BESJ認定ピラティスインストラクター" },
    {
      title: "資格",
      description: "高津文美子式フェイシャルヨガ認定アドバンス",
    },
    { title: "資格", description: "日本アロマ環境協会認定アロマテラピー１級" },
    { title: "資格", description: "キッズヨガ＆ピラティスインストラクター" },
  ];

  return (
    <section id="profile" className="py-24 px-4 bg-transparent relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* 見出し：背景に溶け込まないよう、少し濃いめの色に変更 */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-pink-100/80 text-pink-700 text-sm font-bold mb-4 backdrop-blur-sm shadow-sm">
            Profile
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-6 drop-shadow-sm">
            インストラクター紹介
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-pink-400 to-pink-200 mx-auto rounded-full shadow-sm" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* プロフィール画像エリア：背景と馴染むよう調整 */}
          <div className="relative group">
            <div className="aspect-[3/4] rounded-[2.5rem] bg-white/40 backdrop-blur-sm border border-white/50 overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
              <img
                src="/profile-mayumi.jpg"
                alt="インストラクター 永塚真由美"
                className="w-full h-full object-cover  transition-transform duration-500 group-hover:scale-105 antialiased"
              />
            </div>
            {/* 装飾用の光の輪 */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-pink-200/30 blur-3xl pointer-events-none" />
          </div>

          {/* プロフィール内容：ここが一番重要！ */}
          <div className="p-8 md:p-10 rounded-[2.5rem] bg-white/70 backdrop-blur-lg border border-white/40 shadow-xl">
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-3xl text-gray-900 mb-6 border-b border-pink-100 pb-2 inline-block">
                  永塚 真由美
                </h3>
                {/* 行間(leading-relaxed)を広げ、文字色を濃いグレー(text-gray-800)に */}
                <p className="text-gray-800 font-medium leading-loose text-base">
                  高崎ヨガ教室『マユヨガ』の永塚真由美です。
                  <br />
                  ３０代後半にヨガを始めましたが、ヨガのリフレッシュ効果や
                  免疫力を高める不思議な魅力に引き込まれて
                  インストラクターの道に進みました。
                  <br />
                  ヨガを通して多くの人に健康と笑顔の輪を広げたいと思い
                  ヨガ教室を始めました。
                  <br />
                  ヨガの後は優しい気持ちになれます。自分の体をいたわり、自分に優しく、
                  そして関わる周りの人にも優しくなれるヨガをお伝えしたいと思います。
                  <br />
                  １レッスン１レッスン丁寧に心を込めてお伝えします。私と一緒にヨガを楽しみませんか。
                </p>
              </div>

              {/* 資格リスト：すりガラス風カード */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                {achievements.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-white/50 border border-white shadow-sm hover:bg-white transition-colors"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center">
                      <Award size={20} className="text-pink-500" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-pink-600 uppercase tracking-tighter">
                        QUALIFICATION
                      </div>
                      <div className="text-xs text-gray-900 font-bold leading-tight">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
