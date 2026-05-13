import React from "react";
import { motion } from "motion/react";
import {
  Plane,
  ShoppingBag,
  MessageSquare,
  Lightbulb,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

export default function FieldTripSection() {
  const steps = [
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "물건 직접 고르기",
      desc: "현지 매장에서 자신이 원하는 물건을 영어로 파악하고 선택합니다.",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "가격 묻기 및 대화",
      desc: "현지 직원에게 영어로 가격을 묻고, 간단한 대화를 주도적으로 이끌어갑니다.",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "직접 계산하기",
      desc: "마무리 결제까지 스스로 영어로 소통하며 완료하여 성취감을 느낍니다.",
    },
  ];

  const differences = [
    {
      title: "일반 영어캠프",
      points: [
        "수업 중심 + 제한적인 외부 활동",
        "필드트립은 단순 관광 위주",
        "영어는 주로 '듣는 시간'에 집중",
        "실제로 영어를 쓸 기회가 부족함",
      ],
      isGITC: false,
    },
    {
      title: "GITC 세부 영어캠프",
      points: [
        "수업과 실제 사용 환경이 완벽하게 연결",
        "필드트립에서도 현지인과 영어를 직접 사용",
        "아이가 말해야만 하는 상황을 조성",
        "영어를 '써보는 경험' 구조에 집중",
      ],
      isGITC: true,
    },
  ];

  return (
    <div className="space-y-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[#96754a] font-semibold tracking-[0.2em] text-xs mb-4 block uppercase flex items-center justify-center gap-2">
          <span className="w-8 h-[1px] bg-[#96754a]"></span>
          Field Trip Experience
          <span className="w-8 h-[1px] bg-[#96754a]"></span>
        </span>
        <h2 className="text-4xl md:text-5xl  text-neutral-900  mb-6">
          GITC의 특별함: 실전 필드트립
        </h2>
        <p className="text-neutral-600 text-lg  leading-relaxed">
          영어 공부했는데 왜 말을 못할까요? 답은 단순합니다.{" "}
          <strong className="text-neutral-900  font-medium">
            써본 적이 없기 때문
          </strong>
          입니다.
          <br />
          GITC 세부 영어캠프는 교실을 넘어 아이가 직접 영어를 사용하는 환경을
          만듭니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-5xl mx-auto border border-neutral-200/50 bg-white">
        {differences.map((diff, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`p-10 md:p-14 ${diff.isGITC ? "bg-[#0a0a0a] text-white relative" : "bg-white"}`}
          >
            {diff.isGITC && (
              <div className="absolute top-0 right-10 -translate-y-1/2 bg-[#c5a880] text-white text-xs tracking-widest uppercase px-4 py-2 font-bold flex items-center gap-2">
                <Lightbulb className="w-3 h-3" /> GITC Way
              </div>
            )}
            <h3
              className={`text-2xl   tracking-wide mb-10 ${diff.isGITC ? "text-white" : "text-neutral-900"}`}
            >
              {diff.title}
            </h3>
            <ul className="space-y-6">
              {diff.points.map((point, i) => (
                <li key={i} className="flex items-start gap-4  text-sm">
                  <div
                    className={`mt-0.5 shrink-0 ${diff.isGITC ? "text-[#c5a880]" : "text-neutral-300"}`}
                  >
                    {diff.isGITC ? (
                      <CheckCircle className="w-5 h-5" strokeWidth={1.5} />
                    ) : (
                      <div className="w-5 h-5 rounded-full border border-current" />
                    )}
                  </div>
                  <span
                    className={
                      diff.isGITC
                        ? "text-neutral-300"
                        : "text-neutral-600 leading-relaxed"
                    }
                  >
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="bg-[#fcfbf9] border border-[#c5a880]/20 p-10 md:p-16 relative overflow-hidden mt-16 mx-auto max-w-5xl shadow-sm">
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-12 border-b border-neutral-200/60 pb-10">
            <div className="bg-[#0a0a0a] p-5 border border-neutral-800 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex-shrink-0">
              <TrendingUp
                className="w-8 h-8 text-[#c5a880]"
                strokeWidth={1.5}
              />
            </div>
            <div>
              <h3 className="text-2xl  font-bold text-neutral-900 mb-4 tracking-wide text-center md:text-left">
                쇼핑몰 실전 영어 체험
              </h3>
              <p className="text-neutral-600  leading-relaxed text-center md:text-left">
                필드트립은 단순한 관광이 아닙니다. 세부 현지 대형 쇼핑몰 등에서
                <br className="hidden md:block" />
                아이주도적으로 영어를 사용하는 결정적인 순간을 제공하며 생활
                영어의 자신감을 기릅니다.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col relative group items-center text-center"
              >
                <div className="mb-6 text-[#c5a880] bg-white w-16 h-16 flex items-center justify-center rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-neutral-100 group-hover:bg-[#c5a880] group-hover:text-white transition-colors duration-300">
                  {step.icon}
                </div>
                <h4 className=" font-bold text-neutral-900 mb-3">
                  {step.title}
                </h4>
                <p className="text-sm  text-neutral-600 leading-relaxed px-2">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center space-y-6">
            <p className="inline-block border-l-2 border-[#c5a880] pl-6 text-neutral-600  text-sm italic tracking-wide">
              처음에는 망설이던 아이도 통하는 경험을 하면서{" "}
              <strong className="font-medium text-neutral-900 not-italic">
                먼저 영어로 말하기 시작
              </strong>
              합니다.
            </p>
            <div>
              <a
                href="https://blog.naver.com/readtospeak/224253469130"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#0a0a0a] text-white px-8 py-4 font-semibold tracking-widest text-xs uppercase transition-colors hover:bg-[#c5a880] group"
              >
                필드트립 후기 자세히 보기
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
