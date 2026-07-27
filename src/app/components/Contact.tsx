// // "use client";

// // import { Send, Mail, Phone, MapPin } from 'lucide-react';
// // import { useState } from 'react';

// // export function Contact() {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     phone: '',
// //     subject: '',
// //     message: '',
// //   });

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     // フォーム送信の処理（モック）
// //     alert('お問い合わせありがとうございます。担当者より折り返しご連絡いたします。');
// //     setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
// //   };

// //   const handleChange = (
// //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
// //   ) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   return (
// //     <section id="contact" className="py-20 px-4 bg-transparent">
// //       <div className="container mx-auto max-w-6xl">
// //         <div className="text-center mb-16">
// //           <span className="inline-block px-4 py-1 rounded-full ">
// //             Contact
// //           </span>
// //           <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
// //             お問い合わせ
// //           </h2>
// //           <div className="w-16 h-1 bg-gradient-to-r from-pink-300 to-pink-200 mx-auto rounded-full mb-6" />
// //           <p className="text-gray-600 max-w-2xl mx-auto">
// //             ご質問やレッスンのご予約など、お気軽にお問い合わせください
// //           </p>
// //         </div>

// //         <div className="grid lg:grid-cols-3 gap-8">
// //           {/* Contact Info */}
// //           <div className="space-y-6">
// //             <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-white border border-pink-200">
// //               <div className="flex items-start gap-4">
// //                 <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-pink-200 flex items-center justify-center">
// //                   <Mail size={20} className="text-pink-400" />
// //                 </div>
// //                 <div>
// //                   <div className="text-sm text-gray-600 mb-1">Email</div>
// //                   <div className="text-gray-900">info@yogastudio.com</div>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-white border border-pink-200">
// //               <div className="flex items-start gap-4">
// //                 <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-pink-200 flex items-center justify-center">
// //                   <Phone size={20} className="text-pink-400" />
// //                 </div>
// //                 <div>
// //                   <div className="text-sm text-gray-600 mb-1">Phone</div>
// //                   <div className="text-gray-900">03-1234-5678</div>
// //                   <div className="text-xs text-gray-500 mt-1">平日 10:00 - 19:00</div>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-white border border-pink-200">
// //               <div className="flex items-start gap-4">
// //                 <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-pink-200 flex items-center justify-center">
// //                   <MapPin size={20} className="text-pink-400" />
// //                 </div>
// //                 <div>
// //                   <div className="text-sm text-gray-600 mb-1">Studio</div>
// //                   <div className="text-gray-900">東京都渋谷区</div>
// //                   <div className="text-sm text-gray-600">代々木1-2-3</div>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-100 to-pink-50 border border-pink-200">
// //               <h3 className="font-serif text-lg text-gray-900 mb-3">営業時間</h3>
// //               <div className="space-y-2 text-sm">
// //                 <div className="flex justify-between">
// //                   <span className="text-gray-700">月〜金</span>
// //                   <span className="text-gray-900">10:00 - 21:00</span>
// //                 </div>
// //                 <div className="flex justify-between">
// //                   <span className="text-gray-700">土日祝</span>
// //                   <span className="text-gray-900">9:00 - 18:00</span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Contact Form */}
// //           <div className="lg:col-span-2">
// //             <form onSubmit={handleSubmit} className="space-y-6">
// //               <div className="grid sm:grid-cols-2 gap-6">
// //                 <div>
// //                   <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
// //                     お名前 <span className="text-pink-500">*</span>
// //                   </label>
// //                   <input
// //                     type="text"
// //                     id="name"
// //                     name="name"
// //                     value={formData.name}
// //                     onChange={handleChange}
// //                     required
// //                     className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:border-pink-400 transition-colors"
// //                     placeholder="山田 花子"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
// //                     メールアドレス <span className="text-pink-500">*</span>
// //                   </label>
// //                   <input
// //                     type="email"
// //                     id="email"
// //                     name="email"
// //                     value={formData.email}
// //                     onChange={handleChange}
// //                     required
// //                     className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:border-pink-400 transition-colors"
// //                     placeholder="example@email.com"
// //                   />
// //                 </div>
// //               </div>

// //               <div className="grid sm:grid-cols-2 gap-6">
// //                 <div>
// //                   <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
// //                     電話番号
// //                   </label>
// //                   <input
// //                     type="tel"
// //                     id="phone"
// //                     name="phone"
// //                     value={formData.phone}
// //                     onChange={handleChange}
// //                     className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:border-pink-400 transition-colors"
// //                     placeholder="090-1234-5678"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label htmlFor="subject" className="block text-sm text-gray-700 mb-2">
// //                     お問い合わせ種別 <span className="text-pink-500">*</span>
// //                   </label>
// //                   <select
// //                     id="subject"
// //                     name="subject"
// //                     value={formData.subject}
// //                     onChange={handleChange}
// //                     required
// //                     className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:border-pink-400 transition-colors bg-white"
// //                   >
// //                     <option value="">選択してください</option>
// //                     <option value="trial">体験レッスンについて</option>
// //                     <option value="regular">通常レッスンについて</option>
// //                     <option value="pilates">パーソナルピラティスについて</option>
// //                     <option value="yomogi">よもぎ蒸しについて</option>
// //                     <option value="corporate">企業向けレッスンについて</option>
// //                     <option value="online">オンラインレッスンについて</option>
// //                     <option value="other">その他</option>
// //                   </select>
// //                 </div>
// //               </div>

// //               <div>
// //                 <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
// //                   メッセージ <span className="text-pink-500">*</span>
// //                 </label>
// //                 <textarea
// //                   id="message"
// //                   name="message"
// //                   value={formData.message}
// //                   onChange={handleChange}
// //                   required
// //                   rows={6}
// //                   className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:border-pink-400 transition-colors resize-none"
// //                   placeholder="お問い合わせ内容をご記入ください"
// //                 />
// //               </div>

// //               <button
// //                 type="submit"
// //                 className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-pink-400 to-pink-300 text-white rounded-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 inline-flex items-center justify-center gap-2"
// //               >
// //                 <Send size={20} />
// //                 <span>送信する</span>
// //               </button>

// //               <p className="text-xs text-gray-500">
// //                 ※ 通常、2営業日以内にご返信いたします。
// //               </p>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { Send, Mail, Phone, MapPin } from 'lucide-react';
// import { useState } from 'react';

// export function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: '',
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert('お問い合わせありがとうございます。担当者より折り返しご連絡いたします。');
//     setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <section id="contact" className="py-24 px-4 bg-transparent relative">
//       <div className="container mx-auto max-w-6xl relative z-10">

//         {/* 見出し部分 */}
//         <div className="text-center mb-16">
//           <span className="inline-block px-4 py-1 rounded-full bg-pink-100/80 text-pink-700 text-sm font-bold mb-4 backdrop-blur-sm shadow-sm">
//             Contact
//           </span>
//           <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4 drop-shadow-sm">
//             お問い合わせ
//           </h2>
//           <div className="w-20 h-1.5 bg-gradient-to-r from-pink-400 to-pink-200 mx-auto rounded-full mb-8 shadow-sm" />
//           <p className="text-gray-800 font-medium max-w-2xl mx-auto leading-relaxed">
//             ご質問やレッスンのご予約など、お気軽にお問い合わせください
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-12">

//           {/* 左側：連絡先情報（すりガラス効果） */}
//           <div className="space-y-6">
//             {[
//               { icon: Mail, label: 'Email', value: 'info@yogastudio.com' },
//               { icon: Phone, label: 'Phone', value: '03-1234-5678', note: '平日 10:00 - 19:00' },
//               { icon: MapPin, label: 'Studio', value: '東京都渋谷区', subValue: '代々木1-2-3' }
//             ].map((info, index) => (
//               <div key={index} className="p-6 rounded-3xl bg-white/70 backdrop-blur-md border border-white/50 shadow-lg transition-transform hover:scale-[1.02]">
//                 <div className="flex items-start gap-4">
//                   <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-100 to-white border border-pink-200 flex items-center justify-center shadow-sm">
//                     <info.icon size={22} className="text-pink-500" />
//                   </div>
//                   <div>
//                     <div className="text-xs font-bold text-pink-600 mb-1 uppercase tracking-wider">{info.label}</div>
//                     <div className="text-gray-900 font-bold">{info.value}</div>
//                     {info.subValue && <div className="text-sm text-gray-700 font-medium">{info.subValue}</div>}
//                     {info.note && <div className="text-xs text-gray-500 mt-1 font-medium">{info.note}</div>}
//                   </div>
//                 </div>
//               </div>
//             ))}

//             <div className="p-8 rounded-3xl bg-pink-500 text-white shadow-xl">
//               <h3 className="font-serif text-xl mb-4 border-b border-pink-400 pb-2">営業時間</h3>
//               <div className="space-y-3 font-medium">
//                 <div className="flex justify-between">
//                   <span>月〜金</span>
//                   <span>10:00 - 21:00</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>土日祝</span>
//                   <span>9:00 - 18:00</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* 右側：コンタクトフォーム（しっかりした白背景） */}
//           <div className="lg:col-span-2 p-8 sm:p-12 rounded-[2.5rem] bg-white/80 backdrop-blur-xl border border-white shadow-2xl">
//             <form onSubmit={handleSubmit} className="space-y-8">
//               <div className="grid sm:grid-cols-2 gap-8">
//                 <div className="space-y-2">
//                   <label htmlFor="name" className="text-sm font-bold text-gray-800 ml-1">
//                     お名前 <span className="text-pink-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-5 py-4 rounded-2xl bg-white/90 border-2 border-pink-50 focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all text-gray-900 font-medium placeholder:text-gray-400 shadow-inner"
//                     placeholder="山田 花子"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="email" className="text-sm font-bold text-gray-800 ml-1">
//                     メールアドレス <span className="text-pink-500">*</span>
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-5 py-4 rounded-2xl bg-white/90 border-2 border-pink-50 focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all text-gray-900 font-medium placeholder:text-gray-400 shadow-inner"
//                     placeholder="example@email.com"
//                   />
//                 </div>
//               </div>

//               <div className="grid sm:grid-cols-2 gap-8">
//                 <div className="space-y-2">
//                   <label htmlFor="phone" className="text-sm font-bold text-gray-800 ml-1">
//                     電話番号
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full px-5 py-4 rounded-2xl bg-white/90 border-2 border-pink-50 focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all text-gray-900 font-medium placeholder:text-gray-400 shadow-inner"
//                     placeholder="090-1234-5678"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="subject" className="text-sm font-bold text-gray-800 ml-1">
//                     お問い合わせ種別 <span className="text-pink-500">*</span>
//                   </label>
//                   <select
//                     id="subject"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-5 py-4 rounded-2xl bg-white/90 border-2 border-pink-50 focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all text-gray-900 font-medium shadow-inner appearance-none"
//                   >
//                     <option value="">選択してください</option>
//                     <option value="trial">体験レッスンについて</option>
//                     <option value="regular">通常レッスンについて</option>
//                     <option value="pilates">パーソナルピラティスについて</option>
//                     <option value="yomogi">よもぎ蒸しについて</option>
//                     <option value="corporate">企業向けレッスンについて</option>
//                     <option value="online">オンラインレッスンについて</option>
//                     <option value="other">その他</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="message" className="text-sm font-bold text-gray-800 ml-1">
//                   メッセージ <span className="text-pink-500">*</span>
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={5}
//                   className="w-full px-5 py-4 rounded-2xl bg-white/90 border-2 border-pink-50 focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all text-gray-900 font-medium resize-none shadow-inner placeholder:text-gray-400"
//                   placeholder="お問い合わせ内容をご記入ください"
//                 />
//               </div>

//               <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
//                 <button
//                   type="submit"
//                   className="w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-pink-600 to-pink-400 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 inline-flex items-center justify-center gap-3 shadow-xl"
//                 >
//                   <Send size={22} />
//                   <span className="text-lg">送信する</span>
//                 </button>
//                 <p className="text-xs text-gray-500 font-medium">
//                   ※ 通常、2営業日以内にご返信いたします。
//                 </p>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import {
  Send,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "お問い合わせありがとうございます。担当者より折り返しご連絡いたします。",
    );
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-4 bg-transparent relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* 見出し部分 */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-pink-100/80 text-pink-700 text-sm font-bold mb-4 backdrop-blur-sm shadow-sm">
            Contact
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4 drop-shadow-sm">
            ご予約・お問い合わせ
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-pink-400 to-pink-200 mx-auto rounded-full mb-8 shadow-sm" />
          <p className="text-gray-800 font-bold max-w-2xl mx-auto leading-relaxed">
            公式LINE・Instagram・フォームより、お気軽にご連絡ください
          </p>
        </div>

        {/* SNS強調セクション：ここを最優先に配置 */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* 公式LINE */}
          <a
            href="https://lin.ee/sNqXM8V" // 実際のLINE URLに変更してください
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-8 rounded-[2.5rem] bg-[#06C755] text-white shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-125 transition-transform">
              <MessageCircle size={120} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold backdrop-blur-md">
                  一番おすすめ！
                </span>
                <Sparkles size={18} className="animate-pulse" />
              </div>
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                公式LINEで相談{" "}
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </h3>
              <p className="text-green-50 font-medium leading-relaxed mb-6">
                トーク画面から直接ご予約や
                <br />
                空き状況の確認がスムーズに行えます。
              </p>
              <div className="inline-flex items-center gap-2 bg-white text-[#06C755] px-6 py-3 rounded-full font-bold shadow-lg">
                友だち追加はこちら
              </div>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/mayuyoga2020/" // 実際のInstagram URLに変更してください
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-8 rounded-[2.5rem] bg-gradient-to-tr from-[#FFDC80] via-[#E1306C] to-[#405DE6] text-white shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-125 transition-transform">
              {/* <Instagram size={120} /> */}
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold backdrop-blur-md">
                  最新情報はこちら
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                Instagram DM{" "}
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </h3>
              <p className="text-white/90 font-medium leading-relaxed mb-6">
                レッスンの様子やお客様の声を発信中。
                <br />
                DMからもお気軽にお問い合わせいただけます。
              </p>
              <div className="inline-flex items-center gap-2 bg-white text-[#E1306C] px-6 py-3 rounded-full font-bold shadow-lg">
                フォローして相談する
              </div>
            </div>
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* 左側：連絡先情報 */}
          <div className="space-y-6">
            {[
              { icon: Mail, label: "Email", value: "mayumiyoga7@gmail.com" },
              // {
              //   icon: Phone,
              //   label: "Phone",
              //   value: "03-1234-5678",
              //   note: "平日 10:00 - 19:00",
              // },
            ].map((info:{ icon: any; label: string; value: string; note?: string }, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl bg-white/70 backdrop-blur-md border border-white/50 shadow-lg transition-transform hover:scale-[1.02]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-100 to-white border border-pink-200 flex items-center justify-center shadow-sm">
                    <info.icon size={22} className="text-pink-500" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-pink-600 mb-1 uppercase tracking-wider">
                      {info.label}
                    </div>
                    <div className="text-gray-900 font-bold">{info.value}</div>
                    {info.note && (
                      <div className="text-xs text-gray-500 mt-1 font-medium">
                        {info.note}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div className="p-8 rounded-3xl bg-pink-500 text-white shadow-xl">
              <h3 className="font-serif text-xl mb-4 border-b border-pink-400 pb-2">
                営業時間
              </h3>
              <div className="space-y-3 font-medium">
                <div className="flex justify-between">
                  {/* <span>月〜金</span> */}
                  <span>10:00 - 20:00</span>
                </div>
                {/* <div className="flex justify-between">
                  <span>土日祝</span>
                  <span>9:00 - 18:00</span>
                </div> */}
              </div>
            </div>
          </div>

          {/* 右側：コンタクトフォーム */}
          <div className="lg:col-span-2 p-8 sm:p-12 rounded-[2.5rem] bg-white/80 backdrop-blur-xl border border-white shadow-2xl">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900">
                メールフォーム
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                メールでのご相談はこちらから
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-bold text-gray-800 ml-1"
                  >
                    お名前 <span className="text-pink-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-white/90 border-2 border-pink-50 focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all text-gray-900 font-medium shadow-inner"
                    placeholder="山田 花子"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold text-gray-800 ml-1"
                  >
                    メールアドレス <span className="text-pink-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-white/90 border-2 border-pink-50 focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all text-gray-900 font-medium shadow-inner"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-bold text-gray-800 ml-1"
                >
                  お問い合わせ種別 <span className="text-pink-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-white/90 border-2 border-pink-50 focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all text-gray-900 font-medium shadow-inner appearance-none"
                >
                  <option value="">選択してください</option>
                  <option value="trial">体験レッスンについて</option>
                  <option value="regular">通常レッスンについて</option>
                  <option value="pilates">パーソナルピラティスについて</option>
                  <option value="yomogi">よもぎ蒸しについて</option>
                  <option value="corporate">企業向けレッスンについて</option>
                  <option value="online">オンラインレッスンについて</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-bold text-gray-800 ml-1"
                >
                  メッセージ <span className="text-pink-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-5 py-4 rounded-2xl bg-white/90 border-2 border-pink-50 focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all text-gray-900 font-medium resize-none shadow-inner"
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-pink-600 to-pink-400 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 inline-flex items-center justify-center gap-3 shadow-xl"
                >
                  <Send size={22} />
                  <span className="text-lg">メールを送信する</span>
                </button>
                <p className="text-xs text-gray-500 font-medium">
                  ※ 通常、2営業日以内にご返信いたします。
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
