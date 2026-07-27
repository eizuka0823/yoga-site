// "use client";
// import { Award, BookOpen, CheckCircle, GraduationCap, Star } from "lucide-react";

// export function InstructorTraining() {
//   const courses = [
//     {
//       title: "ヨガインストラクター養成",
//       levels: ["1級", "準1級", "2級", "3級"],
//       icon: GraduationCap,
//       color: "from-pink-500 to-pink-400",
//     },
//     {
//       title: "ピラティスインストラクター養成",
//       levels: ["1級", "準1級", "2級", "3級"],
//       icon: Star,
//       color: "from-pink-600 to-pink-500",
//     },
//   ];

//   return (
//     <section id="training" className="py-24 px-4 bg-transparent relative">
//       <div className="container mx-auto max-w-6xl relative z-10">
        
//         {/* 見出し */}
//         <div className="text-center mb-16">
//           <span className="inline-block px-4 py-1 rounded-full bg-pink-100/80 text-pink-700 text-sm font-bold mb-4 backdrop-blur-sm shadow-sm">
//             Instructor Training
//           </span>
//           <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-6 drop-shadow-sm">
//             指導者養成講座
//           </h2>
//           <div className="w-20 h-1.5 bg-gradient-to-r from-pink-400 to-pink-200 mx-auto rounded-full mb-8 shadow-sm" />
//           <p className="text-gray-800 font-bold max-w-2xl mx-auto leading-relaxed">
//             AJYA（全日本ヨガ協会）認定資格を取得。<br className="hidden sm:block" />
//             確かな知識とスキルを身につけ、安全で効果的な指導ができるプロを目指します。
//           </p>
//         </div>

//         {/* コンセプト説明：すりガラス */}
//         <div className="max-w-4xl mx-auto mb-16">
//           <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/70 backdrop-blur-lg border border-white/50 shadow-xl text-center">
//             <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-pink-50 mb-6 text-pink-500 shadow-inner">
//               <BookOpen size={32} />
//             </div>
//             <h3 className="font-serif text-2xl text-gray-900 mb-6 font-bold">育成の目的</h3>
//             <p className="text-gray-800 font-medium leading-loose text-lg">
//               単なる資格取得だけではなく、知識を深めスキルアップし、<br className="hidden md:block" />
//               現場で自信を持って**安全で効果的な指導**ができる指導者の育成をします。
//             </p>
//           </div>
//         </div>

//         {/* 資格取得コース一覧 */}
//         <div className="grid md:grid-cols-2 gap-8">
//           {courses.map((course, index) => (
//             <div key={index} className="relative group">
//               <div className="p-10 rounded-[3rem] bg-white/80 backdrop-blur-md border border-pink-100 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden h-full">
//                 {/* 装飾用の光 */}
//                 <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${course.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
                
//                 <div className="flex items-center gap-4 mb-8">
//                   <div className={`p-4 rounded-2xl bg-gradient-to-br ${course.color} text-white shadow-lg`}>
//                     <course.icon size={28} />
//                   </div>
//                   <h4 className="font-serif text-xl sm:text-2xl text-gray-900 font-bold">
//                     {course.title}
//                   </h4>
//                 </div>

//                 <div className="space-y-6">
//                   <div className="flex items-center gap-2 text-pink-600 font-bold text-sm">
//                     <Award size={18} />
//                     <span>AJYA認定 取得可能資格</span>
//                   </div>
                  
//                   <div className="grid grid-cols-2 gap-3">
//                     {course.levels.map((level) => (
//                       <div key={level} className="flex items-center gap-2 p-3 rounded-xl bg-white/50 border border-pink-50 font-bold text-gray-700">
//                         <CheckCircle size={16} className="text-pink-400" />
//                         <span>{level}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="mt-10 pt-6 border-t border-pink-50 text-xs text-gray-500 font-medium italic">
//                   AJYA 全日本ヨガ協会 認定カリキュラム準拠
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* 補足事項 */}
//         <div className="mt-16 text-center">
//           <p className="text-gray-700 font-bold text-sm mb-8">
//             ※ 講座の開催日程、受講料などの詳細は公式LINEまたはお問い合わせフォームよりお尋ねください。
//           </p>
//           <button
//             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
//             className="px-12 py-5 bg-gradient-to-r from-pink-600 to-pink-400 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-lg shadow-xl"
//           >
//             養成講座について相談する
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import { Award, BookOpen, CheckCircle, GraduationCap, ArrowUpRight, Sparkles, Heart } from "lucide-react";

export function InstructorTraining() {
  const yogaSteps = [
    {
      level: "3級",
      title: "ヨガとは？を知るための講座",
      description: "ヨガの歴史や哲学、基本的な呼吸法やポーズの基礎を学び、自分自身の心と身体に向き合うための第一歩を踏み出します。",
    },
    {
      level: "2級",
      title: "基本のハタヨガを受け持てるための講座",
      description: "多くのスタジオで導入されている「ハタヨガ」の指導法をマスター。安全で効果的なレッスンの組み立て方とアプローチを身につけます。",
    },
    {
      level: "準1級",
      title: "受け持てるクラスの幅を広げたい！",
      description: "生徒のニーズに合わせたバリエーション豊かなポーズや誘導法を修得。インストラクターとしての対応力と指導の引き出しをグッと広げます。",
    },
    {
      level: "1級",
      title: "高度な技術と知識の深いインストラクターを目指す",
      description: "解剖学や身体の仕組みへの理解をさらに深め、高度なテクニックを身につけます。",
    },
  ];

  const additionalCourses = [
    { title: "シニアヨガ", description: "年齢を重ねても安全に健やかに動ける、シニア向けの優しいヨガ指導法" },
    { title: "陰ヨガ", description: "1つのポーズを長く保ち、筋肉を緩めて心身を深いリラックスへ導くヨガ" },
    { title: "ピラティス", description: "インナーマッスルを強化し、骨格の歪みを整える解剖学的なアプローチ" },
  ];

  return (
    <section id="training" className="py-24 px-4 bg-transparent relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* 見出し */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-pink-100/80 text-pink-700 text-sm font-bold mb-4 backdrop-blur-sm shadow-sm">
            Instructor Training
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-6 drop-shadow-sm">
            指導者養成講座
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-pink-400 to-pink-200 mx-auto rounded-full mb-8 shadow-sm" />
          <p className="text-gray-800 font-bold max-w-2xl mx-auto leading-relaxed">
            AJYA（全日本ヨガ協会）認定資格を取得。<br />
            確かな知識とスキルを身につけ、安全で効果的な指導ができるプロを目指します。
          </p>
        </div>

        {/* 育成の目的 */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="p-8 md:p-10 rounded-[2.5rem] bg-white/70 backdrop-blur-lg border border-white/50 shadow-xl text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-pink-50 mb-4 text-pink-500 shadow-inner">
              <BookOpen size={28} />
            </div>
            <h3 className="font-serif text-xl text-gray-900 mb-4 font-bold">育成の目的</h3>
            <p className="text-gray-800 font-medium leading-loose text-base md:text-lg">
              単なる資格取得だけではなく、知識を深めスキルアップし、<br className="hidden md:block" />
              現場で自信を持って<span className="text-pink-600 font-bold">安全で効果的な指導</span>ができる指導者の育成をします。
            </p>
          </div>
        </div>

        {/* 【大きな塊】ヨガインストラクター ステップアップ講座 */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="p-8 sm:p-12 rounded-[3rem] bg-white/70 backdrop-blur-lg border border-pink-100 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-200/20 to-transparent rounded-bl-full pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-10 border-b border-pink-100 pb-4">
              <div className="bg-pink-500 p-2.5 rounded-xl text-white shadow-md">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-serif text-gray-900 font-bold">ヨガインストラクター資格取得コース</h3>
                <p className="text-xs text-pink-600 font-bold tracking-wider mt-0.5">AJYA全日本ヨガ協会認定 1級〜3級</p>
              </div>
            </div>

            {/* ステップ一覧 */}
            <div className="space-y-6 relative">
              {yogaSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="relative p-6 rounded-2xl bg-white/60 border border-white/80 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white flex flex-col sm:flex-row gap-4 items-start"
                >
                  {/* バッジ */}
                  <div className="flex-shrink-0 px-4 py-1.5 rounded-xl bg-gradient-to-r from-pink-500 to-pink-400 text-white font-serif font-bold text-base shadow-sm min-w-[70px] text-center">
                    {step.level}
                  </div>
                  {/* 内容 */}
                  <div className="space-y-2">
                    <h4 className="text-lg text-gray-900 font-bold flex items-center gap-2">
                      {step.title}
                    </h4>
                    <p className="text-sm text-gray-700 font-medium leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 【その下】さらに学べる専門講座 */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-white text-pink-600 font-bold text-sm shadow-sm">
              <Sparkles size={16} />
              <span>スキルアップ＆専門分野の追求</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-gray-900 font-bold mt-4">
              シニアヨガ・陰ヨガ・ピラティスも学べます
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {additionalCourses.map((course, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-pink-100 shadow-lg text-center flex flex-col items-center hover:scale-[1.02] transition-transform"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-pink-500 mb-4 shadow-inner">
                  <Heart size={20} />
                </div>
                <h4 className="text-lg text-gray-900 font-bold mb-3">{course.title}</h4>
                <p className="text-xs text-gray-700 font-medium leading-relaxed mt-auto">
                  {course.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* お問い合わせへの案内 */}
        <div className="mt-20 text-center">
          <p className="text-gray-700 font-bold text-sm mb-8">
            ※ 各講座の開催スケジュール、受講料などの詳細は公式LINEまたはお問い合わせフォームよりお尋ねください。
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-12 py-5 bg-gradient-to-r from-pink-600 to-pink-400 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-lg shadow-xl"
          >
            養成講座について相談する
          </button>
        </div>

      </div>
    </section>
  );
}