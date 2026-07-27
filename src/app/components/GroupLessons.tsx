
"use client";
import {
  Sparkles,
  Flower2,
  CheckCircle,
  MapPin,
  Clock,
  CreditCard,
  Calendar,
  Leaf,
  Heart,
  Zap,
  Users,
} from "lucide-react";
import { useState } from "react";

export function GroupLessons() {
  const [activeTab, setActiveTab] = useState<"yoga" | "pilates" | "facial">(
    "yoga",
  );
  const yogaEffects = [
    "免疫力アップ（アロマの香りと共に）",
    "血行促進",
    "リラックス効果",
    "体の柔軟性向上",
    "ストレス解消",
    "自律神経を整える",
  ];
  const pilatesEffects = [
    "体の歪みが整い美姿勢",
    "ウエストの引き締めヒップアップ",
    "柔軟性が高まりケガをしにくくなる",
    "肩こり・腰痛の緩和",
    "リラックス効果",
    "生理痛の緩和",
  ];
  const facialYogaEffects = [
    "お肌のハリ・血行促進",
    "しわの改善",
    "まぶたがすっきり目の疲れがとれる",
    "素敵な笑顔表情が豊かになる",
    "新陳代謝の促進免疫力アップ",
    "リフトアップ小顔効果",
    "アンチエイジング",
    "脳の活性化気持ちが前向きに",
    "コミュニケーション力アップ",
    "誤嚥防止唾液を促進",
  ];
  const yogaPilatesSchedule = [
    {
      name: "高崎 教室",
      address: "〒370-0036 群馬県高崎市高崎市南大類町1358-6 2F",
      type: "グループレッスン",
      schedule: [
        {
          day: "火曜日",
          time: "15:00~16:00",
          content: "アロマヨガ・ピラティス",
        },

        {
          day: "土曜日",
          time: "13:30〜14:30",
          content: "アロマヨガ・ピラティス",
        },
      ],
    },
    {
      name: "富岡 教室",
      address: "〒370-2343 群馬県富岡市黒川997 ユアサビル2F",
      type: "グループレッスン",
      schedule: [
        { day: "木曜日", time: "10:30〜11:30", content: "ヨガ・ピラティス" },
        { day: "日曜日", time: "10:30〜11:30", content: "ヨガ・ピラティス" },
      ],
    },
  ];
  const facialYogaSchedule = [
    {
      name: "楽渢カフェクラス（高崎）",
      address: "〒370-0851 群馬県高崎市上中居町1775",
      schedule: "不定期",
    },

    {
      name: "音羽倶楽部クラス（前橋）",
      address: "〒379-2103 群馬県前橋市神沢の森1-16",
      schedule: "第2日曜日 10:30〜12:00",
      note: "フェイシャルヨガ後にランチ付き",
    },
  ];
  const yogaPilatesPricing = [
    { type: "体験", price: "1,000", note: "初回のみ" },

    {
      type: "5回チケット",
      price: "9,500",
      note: "3ヶ月有効",
    },
    { type: "10回チケット", price: "18,000", note: "6ヶ月有効" },
  ];
  const privatePricing = [
    { sessions: "月1回", duration: "60分", price: "7,000" },
    { sessions: "月2回", duration: "60分", price: "12,000" },
    { sessions: "月3回", duration: "60分", price: "17,000" },
    { sessions: "月4回", duration: "60分", price: "20,000" },
  ];
  const paymentMethods = [
    {
      name: "PayPay",
      id: "ftea7170",
      details: "PayPay IDに送金してください",
    },
    {
      name: "ゆうちょ銀行",
      id: "店番:048 口座:1589427",
      details: "名義：エイヅカマユミ",
    },
    {
      name: "LINE Pay",
      id: "LINE公式アカウント",
      details: "お友達登録後にご連絡",
    },
  ];

  return (
    <section id="group-lessons" className="py-24 px-4 bg-transparent relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* 見出し部分：コントラストを強化 */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-pink-100/80 text-pink-700 text-sm font-bold mb-4 backdrop-blur-sm shadow-sm">
            Group Lessons
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-6 drop-shadow-sm">
            グループレッスン
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-pink-400 to-pink-200 mx-auto rounded-full mb-8 shadow-sm" />
          <p className="text-gray-800 font-bold max-w-2xl mx-auto leading-relaxed">
            様々なレベルや目的に合わせた多彩なクラスをご用意しています
          </p>
        </div>

        {/* Tabs：ボタンが背景に埋もれないよう調整 */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {["yoga", "pilates", "facial"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-8 py-4 rounded-full transition-all duration-300 font-bold shadow-md ${
                activeTab === tab
                  ? "bg-gradient-to-r from-pink-500 to-pink-400 text-white shadow-pink-200 scale-105"
                  : "bg-white/80 backdrop-blur-md border-2 border-pink-100 text-gray-700 hover:border-pink-300"
              }`}
            >
              <div className="flex items-center gap-2">
                {tab === "yoga" && <Leaf size={20} />}
                {tab === "pilates" && <Zap size={20} />}
                {tab === "facial" && <Sparkles size={20} />}
                <span>
                  {tab === "yoga"
                    ? "ヨガ"
                    : tab === "pilates"
                      ? "ピラティス"
                      : "フェイシャルヨガ"}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Yoga Content */}
        {activeTab === "yoga" && (
          <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* About：すりガラス効果を適用 */}
            <div className="max-w-4xl mx-auto">
              <div className="p-10 rounded-[2.5rem] bg-white/70 backdrop-blur-lg border border-white/50 shadow-xl">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-100 to-white border border-pink-200 flex items-center justify-center shadow-inner">
                    <Leaf size={32} className="text-pink-500" />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="font-serif text-2xl text-gray-900 mb-4">
                      ヨガについて
                    </h3>
                    <p className="text-gray-800 font-medium leading-relaxed mb-4">
                      ヨガは深い呼吸と共にゆっくり体をほぐしていきます。呼吸が深まると気持ちもおだやかになります。
                    </p>
                    <p className="text-gray-700 leading-relaxed font-medium">
                      高崎のヨガ教室『マユヨガ』は自分の体をいたわり、関わる周りの人にも優しくなれるヨガをお伝えしています。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Effects：アイコンをくっきりさせる */}
            <div>
              <h3 className="font-serif text-2xl text-gray-900 text-center mb-10">
                期待できるヨガの効果
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {yogaEffects.map((effect, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm hover:bg-white/90 transition-all font-bold text-gray-800"
                  >
                    <div className="bg-pink-100 p-1.5 rounded-full">
                      <CheckCircle
                        size={20}
                        className="text-pink-500 flex-shrink-0"
                      />
                    </div>
                    <span className="text-sm">{effect}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule：スケジュールカードの視認性アップ */}
            <div className="py-10">
              <h3 className="font-serif text-2xl text-gray-900 text-center mb-10">
                レッスンスケジュール
              </h3>
              <div className="grid lg:grid-cols-2 gap-8">
                {yogaPilatesSchedule.map((location, index) => (
                  <div
                    key={index}
                    className="p-8 rounded-[2rem] bg-white/80 backdrop-blur-md border border-pink-100 shadow-lg hover:shadow-2xl transition-all"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="bg-pink-50 p-3 rounded-xl">
                        <MapPin size={24} className="text-pink-500" />
                      </div>
                      <div>
                        <h4 className="font-serif text-xl text-gray-900 mb-2">
                          {location.name}
                        </h4>
                        <div className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold mb-3">
                          {location.type}
                        </div>
                        <p className="text-xs text-gray-600 font-medium">
                          {location.address}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {location.schedule.map((slot, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-2xl bg-white/50 border border-pink-50 shadow-inner flex flex-col gap-1"
                        >
                          <div className="flex items-center gap-3 text-sm text-gray-900">
                            <Calendar size={16} className="text-pink-400" />
                            <span className="font-bold">{slot.day}</span>
                            <Clock size={16} className="text-pink-400 ml-2" />
                            <span className="font-bold">{slot.time}</span>
                          </div>
                          <div className="text-xs text-pink-600 font-bold ml-7">
                            {slot.content}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing：料金は最も重要なのでくっきり */}
            <div className="pb-20">
              <h3 className="font-serif text-2xl text-gray-900 text-center mb-10">
                料金
              </h3>
              <div className="grid sm:grid-cols-3 gap-8">
                {yogaPilatesPricing.map((plan: { type: string; price: string; note: string; discount?: boolean }, index) => (
                  <div
                    key={index}
                    className={`p-10 rounded-[2.5rem] text-center backdrop-blur-md transition-all shadow-lg ${
                      plan.discount
                        ? "bg-pink-500 text-white border-none scale-105 shadow-pink-200"
                        : "bg-white/80 border border-white/50 text-gray-900"
                    }`}
                  >
                    <h4
                      className={`font-serif text-xl mb-4 ${plan.discount ? "text-white" : "text-gray-900"}`}
                    >
                      {plan.type}
                    </h4>
                    <div className="text-4xl font-serif mb-3 font-bold">
                      ¥{plan.price}
                    </div>
                    {plan.note && (
                      <div
                        className={`text-sm ${plan.discount ? "text-pink-100" : "text-gray-600"} font-medium`}
                      >
                        {plan.note}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ... Pilates/Facial/Paymentも同様の bg-white/70 backdrop-blur-md を適用 ... */}
        {/* Pilates Content */}
        {activeTab === "pilates" && (
          <div className="space-y-12">
            {/* About */}
            <div className="max-w-4xl mx-auto">
              <div className="p-8 rounded-3xl bg-gradient-to-br from-pink-50 to-white border border-pink-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-pink-200 flex items-center justify-center">
                    <Zap size={24} className="text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-gray-900 mb-3">
                      ピラティスについて
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      ピラティスは体のコンディションを整えるエクササイズです。
                      もともとリハビリ目的のために考案されたので体に負担をかけず、強くしなやかな筋肉をつけることを目的としたエクササイズです。
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      特にお腹周りを中心にインナーマッスルを鍛えることで、骨盤や背骨、肩などの骨格の歪みを整えます。
                      どなたでも無理なく行うことができます。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Famous Quote */}
            <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-pink-100 to-pink-50 border-2 border-pink-300 text-center">
              <h3 className="font-serif text-xl text-gray-900 mb-4">
                ピラティスの効果
              </h3>
              <div className="space-y-2 text-gray-700 leading-relaxed">
                <p className="text-lg">『ピラティスは</p>
                <p>
                  <span className="font-serif text-pink-500 text-xl">10回</span>
                  で気分が良くなり
                </p>
                <p>
                  <span className="font-serif text-pink-500 text-xl">20回</span>
                  で見た目が変わり
                </p>
                <p>
                  <span className="font-serif text-pink-500 text-xl">30回</span>
                  で体の全てが変わる』
                </p>
                <p className="text-sm text-gray-600 mt-4">と言われています</p>
              </div>
            </div>

            {/* Effects */}
            <div>
              <h3 className="font-serif text-2xl text-gray-900 text-center mb-8">
                ピラティスの期待できる効果
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {pilatesEffects.map((effect, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-white to-pink-50 border border-pink-200"
                  >
                    <CheckCircle
                      size={20}
                      className="text-pink-400 flex-shrink-0"
                    />
                    <span className="text-sm text-gray-700">{effect}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule - Same as Yoga */}
            <div>
              <h3 className="font-serif text-2xl text-gray-900 text-center mb-4">
                レッスンスケジュール
              </h3>
              <p className="text-center text-gray-600 mb-8">
                アロマヨガ・ピラティスのスケジュールは「ヨガ」タブをご確認ください
              </p>
            </div>
          </div>
        )}

        {/* Facial Yoga Content */}
        {activeTab === "facial" && (
          <div className="space-y-12">
            {/* About */}
            <div className="max-w-4xl mx-auto">
              <div className="p-8 rounded-3xl bg-gradient-to-br from-pink-50 to-white border border-pink-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-pink-200 flex items-center justify-center">
                    <Sparkles size={24} className="text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-gray-900 mb-3">
                      フェイシャルヨガについて
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      フェイシャルヨガはお顔の表情筋をトレーニングするヨガです。
                      普段の生活では、表情筋はほとんど使われていません。
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      筋肉は使わないと衰えてしまいますが表情筋を使うことで血行やリンパの流れが良くなり、お肌の弾力を取り戻します。
                    </p>
                    <p className="text-pink-600">
                      フェイシャルヨガレッスンでは、お顔の表情筋をたくさん動かして美肌を目指します。
                      <span className="font-serif text-lg">
                        1レッスンで効果が分かります。
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Effects */}
            <div>
              <h3 className="font-serif text-2xl text-gray-900 text-center mb-8">
                顔ヨガで期待できる効果
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {facialYogaEffects.map((effect, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-white to-pink-50 border border-pink-200"
                  >
                    <CheckCircle
                      size={20}
                      className="text-pink-400 flex-shrink-0"
                    />
                    <span className="text-sm text-gray-700">{effect}</span>
                  </div>
                ))}
              </div>
            </div>

            

            {/* Pricing */}
            <div className="max-w-2xl mx-auto">
              <h3 className="font-serif text-2xl text-gray-900 text-center mb-8">
                料金
              </h3>
              <div className="p-8 rounded-3xl bg-gradient-to-br from-pink-100 to-pink-50 border-2 border-pink-300 text-center">
                <h4 className="font-serif text-xl text-gray-900 mb-4">
                  グループレッスン
                </h4>
                <div className="text-4xl font-serif text-gray-900 mb-2">
                  ¥2,000
                </div>
                <div className="text-gray-600 mb-4">60分 / 1回</div>
                <div className="text-sm text-gray-600">
                  ※飲み物やランチ代は含まれておりません
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-20">
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-12 py-5 bg-gradient-to-r from-pink-600 to-pink-400 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-lg shadow-xl"
          >
            体験レッスンのお申し込み
          </button>
        </div>
      </div>
    </section>
  );
}
