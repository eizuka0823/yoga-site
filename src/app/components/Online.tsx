

"use client";
import {
  Video,
  Wifi,
  Home,
  Calendar,
  Clock,
  Users,
  CheckCircle,
  Smartphone,
  CreditCard,
  Info,
  Sparkles,
  Heart,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

export function Online() {
  const [activeTab, setActiveTab] = useState<"yoga" | "facial">("yoga");

  const benefits = [
    {
      icon: Clock,
      title: "移動時間がかからない",
      description: "自宅で受講できるので時間を有効活用",
    },
    {
      icon: Home,
      title: "ノーメイクでOK",
      description: "リラックスした状態で参加できます",
    },
    {
      icon: Sparkles,
      title: "部屋着でもOK",
      description: "気軽に始められる環境で",
    },
    {
      icon: Users,
      title: "ご家族と一緒でもOK",
      description: "家族みんなで健康習慣を",
    },
  ];

  const yogaPlans = [
    {
      name: "月2回コース",
      schedule: "木曜日　20:00~20:45",
      duration: "45分",
      price: "2,000",
      discount: null,
      // features: [
      //   "初級から中級",
      //   "お好きな週を2回",
      //   "代理参加OK",
      //   "録画視聴1週間",
      // ],
    },
  ];

  const facialYogaPlans = [
    {
      type: "グループ",
      name: "フェイシャルヨガ グループレッスン",
      schedule: "第1・3水曜日 20:15〜21:15",
      duration: "60分",
      price: "2,000",
      note: "ヨガと一緒に受けると割引あり",
      recommended: false,
    },
    {
      type: "プライベート",
      name: "オンラインパーソナルレッスン",
      schedule: "ご都合の良い日時で相談",
      duration: "50分",
      price: "6,000",
      note: "1レッスンで効果を実感",
      recommended: false,
    },
    {
      type: "プライベート",
      name: "プライベート 3回連続コース",
      schedule: "1〜2週間で3回（変更可能）",
      duration: "50分 × 3回",
      price: "15,000",
      note: "しっかり学んで早く効果を実感",
      recommended: true,
    },
  ];

  const requirements = [
    { icon: Smartphone, label: "スマホ・タブレット・パソコン" },
    { icon: Video, label: "手鏡（フェイシャルヨガ）" },
    { icon: Home, label: "タオル・お水（必要に応じて）" },
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
    <section id="online" className="py-24 px-4 bg-transparent relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* 見出し部分 */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-pink-100/80 text-pink-700 text-sm font-bold mb-4 backdrop-blur-sm shadow-sm">
            Online Lesson
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-6 drop-shadow-sm">
            オンラインレッスン
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-pink-400 to-pink-200 mx-auto rounded-full mb-8 shadow-sm" />
          <p className="text-gray-800 font-bold max-w-2xl mx-auto leading-relaxed">
            Zoomを使用して、自宅にいながら本格的なレッスンを
          </p>
        </div>

        {/* About：すりガラス効果で読みやすさを確保 */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="p-8 rounded-[2rem] bg-white/70 backdrop-blur-lg border border-white/50 shadow-xl">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-100 to-white border border-pink-200 flex items-center justify-center shadow-inner">
                <Info size={32} className="text-pink-500" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-serif text-xl text-gray-900 mb-3">
                  レッスンについて
                </h3>
                <p className="text-gray-800 font-medium leading-loose text-sm md:text-base">
                  オンラインレッスンはZoomを使用して行います。プライベートレッスンは女性の方のみのレッスンになりますが、ご家族であれば男性の参加もOK・ご家族一緒に参加もOKです（1台のデバイスでお願い致します）。
                  <br />
                  <span className="text-pink-600 font-bold">
                    ※ 質問やアドバイスはお申込みされた方のみになります。
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits：カードのコントラストを強化 */}
        <div className="mb-20">
          <h3 className="font-serif text-2xl text-gray-900 text-center mb-10 font-bold">
            オンラインレッスンのメリット
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-white/50 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-pink-50 mb-6 shadow-inner">
                  <benefit.icon size={28} className="text-pink-500" />
                </div>
                <h4 className="font-serif text-lg text-gray-900 mb-3 font-bold">
                  {benefit.title}
                </h4>
                <p className="text-sm text-gray-700 font-medium leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs：背景に負けない太字とグラデーション */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {["yoga", "facial"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-10 py-4 rounded-full transition-all duration-300 font-bold shadow-md ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-pink-500 to-pink-400 text-white shadow-pink-200 scale-105"
                    : "bg-white/80 backdrop-blur-md border-2 border-pink-100 text-gray-700 hover:border-pink-300"
                }`}
              >
                {tab === "yoga" ? "ヨガレッスン" : "フェイシャルヨガ"}
              </button>
            ))}
          </div>

          {/* Plans Section：料金表をくっきり */}
          <div className="space-y-12">
            <div className="text-center">
              <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mb-4 font-bold">
                {activeTab === "yoga"
                  ? "ヨガグループレッスン"
                  : "フェイシャルヨガレッスン"}
              </h3>
              <p className="text-gray-800 font-medium">
                {activeTab === "yoga"
                  ? "おうちで気軽にヨガを楽しみたい方におススメ"
                  : "表情筋を鍛えて、若々しく美しい顔立ちへ"}
              </p>
            </div>

            <div
              className={`flex flex-wrap justify-center gap-8 ${activeTab === "yoga" ? "md:grid-cols-2 max-w-6xl mx-auto" : "md:grid-cols-3"}`}
            >
              {(activeTab === "yoga" ? yogaPlans : facialYogaPlans).map(
                (plan: any, index: number) => (
                  <div
                    key={index}
                    className={`relative p-10 rounded-[2.5rem] border transition-all hover:-translate-y-2 shadow-xl w-full max-w-xl ${
                      plan.recommended || (activeTab === "yoga" && index === 0)
                        ? "bg-pink-500 text-white border-none scale-105 shadow-pink-200"
                        : "bg-white/80 backdrop-blur-md border-white/50 text-gray-900"
                    }`}
                  >
                    {(plan.recommended ||
                      (activeTab === "yoga" && index === 0)) && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="inline-block px-6 py-1.5 rounded-full bg-white text-pink-600 text-xs font-bold shadow-md">
                          おすすめ
                        </span>
                      </div>
                    )}

                    <div className="text-center h-full flex flex-col">
                      <h4 className="font-serif text-2xl mb-6 leading-tight">
                        {plan.name}
                      </h4>

                      <div className="mb-6 space-y-3">
                        <div
                          className={`flex items-center justify-center gap-2 text-sm font-bold ${plan.recommended || (activeTab === "yoga" && index === 0) ? "text-pink-50" : "text-gray-600"}`}
                        >
                          <Calendar
                            size={18}
                            className={
                              plan.recommended ||
                              (activeTab === "yoga" && index === 0)
                                ? "text-white"
                                : "text-pink-400"
                            }
                          />
                          <span className="text-left">{plan.schedule}</span>
                        </div>
                        <div
                          className={`flex items-center justify-center gap-2 text-sm font-bold ${plan.recommended || (activeTab === "yoga" && index === 0) ? "text-pink-50" : "text-gray-600"}`}
                        >
                          <Clock
                            size={18}
                            className={
                              plan.recommended ||
                              (activeTab === "yoga" && index === 0)
                                ? "text-white"
                                : "text-pink-400"
                            }
                          />
                          <span>{plan.duration}</span>
                        </div>
                      </div>

                      <div className="mb-8">
                        <div className="text-4xl font-serif font-bold mb-2">
                          ¥{plan.price}
                        </div>
                        {plan.discount && (
                          <div className="text-sm font-bold bg-white/20 py-1 rounded-full px-4 inline-block">
                            {plan.discount}
                          </div>
                        )}
                        {plan.note && (
                          <div
                            className={`text-sm font-medium ${plan.recommended ? "text-pink-50" : "text-pink-600"}`}
                          >
                            {plan.note}
                          </div>
                        )}
                      </div>

                      {plan.features && (
                        <div
                          className={`mt-auto pt-6 border-t ${plan.recommended || (activeTab === "yoga" && index === 0) ? "border-white/20" : "border-pink-100"}`}
                        >
                          <ul className="space-y-3 text-left">
                            {plan.features.map(
                              (feature: string, idx: number) => (
                                <li
                                  key={idx}
                                  className="flex items-center gap-2 text-sm font-bold"
                                >
                                  <CheckCircle size={18} />
                                  <span>{feature}</span>
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Requirements & Steps：すりガラスの横並び */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 mt-20">
          {/* Requirements */}
          <div className="p-10 rounded-[2.5rem] bg-white/70 backdrop-blur-lg border border-white/50 shadow-xl">
            <h3 className="font-serif text-2xl text-gray-900 mb-8 text-center font-bold">
              必要なもの
            </h3>
            <div className="space-y-4">
              {requirements.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-5 p-4 rounded-2xl bg-white/50 border border-pink-100 font-bold text-gray-800"
                >
                  <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-pink-500">
                    <item.icon size={24} />
                  </div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Application Steps */}
          <div className="p-10 rounded-[2.5rem] bg-white/70 backdrop-blur-lg border border-white/50 shadow-xl">
            <h3 className="font-serif text-2xl text-gray-900 mb-8 text-center font-bold">
              お申し込み手順
            </h3>
            <div className="space-y-6">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex gap-5 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-serif text-lg font-bold shadow-md group-hover:scale-110 transition-transform">
                    {step}
                  </div>
                  <div className="pt-1">
                    <div className="text-gray-900 font-bold text-lg mb-1">
                      {step === 1 && "LINEまたはフォームより送信"}
                      {step === 2 && "確認のご連絡"}
                      {step === 3 && "レッスン料ご入金"}
                      {step === 4 && "Zoomパスワードのご連絡"}
                    </div>
                    <div className="text-sm text-gray-700 font-medium">
                      {step === 1 &&
                        "必要事項を記入し、マユヨガへご連絡ください"}
                      {step === 2 && "お日にちや接続方法についてお伝えします"}
                      {step === 3 && "PayPay、ゆうちょ、LINE Payが可能です"}
                      {step === 4 &&
                        "参加URLをお送りします。当日はそちらから入室"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Payment Methods - Common for all tabs
        <div className="mt-16 pt-16 border-t border-pink-200 mb-20">
          <h3 className="font-serif text-2xl text-gray-900 text-center mb-8">
            お支払い方法
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border border-pink-200 hover:border-pink-300 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <CreditCard size={20} className="text-pink-400" />
                  <h4 className="font-serif text-lg text-gray-900">
                    {method.name}
                  </h4>
                </div>
                <div className="text-sm text-gray-700 mb-2">{method.id}</div>
                <div className="text-xs text-gray-600">{method.details}</div>
              </div>
            ))}
          </div>
        </div> */}

        {/* CTA：ボタンを背景に負けないよう最大化 */}
        <div className="text-center pb-12">
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-12 py-5 bg-gradient-to-r from-pink-600 to-pink-400 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-lg shadow-xl"
          >
            お申し込み・お問い合わせ
          </button>
        </div>
      </div>
    </section>
  );
}
