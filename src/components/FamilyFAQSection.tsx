import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    id: "program",
    question: "프로그램은 어떻게 구성되어 있나요?",
    answer:
      "일과 중에는 학생 레벨에 맞춘 맞춤형 수업과 소그룹 수업이 밀도 있게 진행되며, 부모님은 회화 위주의 편안한 가디언 수업이 진행됩니다. 주말에는 호핑투어 등 다양한 실전 액티비티가 준비되어 있습니다.",
  },
  {
    id: "safety",
    question: "가족 연수 중 안전은 어떻게 관리되나요?",
    answer:
      "GITC는 TESDA 공식 인증 교육기관으로, 안전하고 쾌적한 캠퍼스가 있습니다. 24시간 철저한 보안 시스템과 한국인 담당자가 상주하여 가족 모두의 안전을 최우선으로 관리합니다.",
  },
  {
    id: "accommodation",
    question: "숙소 환경은 어떤가요?",
    answer:
      "안전하고 생활 인프라가 갖춰진 외부 전용 레지던스나 캠퍼스 내 프리미엄 숙소를 사용합니다. 에어컨과 전용 욕실을 갖추고 있으며, 기본 청소 및 세탁 서비스가 제공되어 부모님들이 가사 부담 없이 쾌적한 환경을 즐기실 수 있습니다.",
  },
  {
    id: "food",
    question: "식사는 어떻게 제공되나요?",
    answer:
      "한국인 조리장이 관리하는 영양가 높은 한식 위주의 뷔페식 식단이 1일 3식 제공됩니다. 가족 단위 연수생들의 입맛과 건강을 고려하여 신선한 식재료로 정성껏 준비되며 가사 스트레스 없는 식사 환경을 제공합니다.",
  },
  {
    id: "level",
    question: "영어를 잘 못해도 참여할 수 있나요?",
    answer:
      "물론입니다. 연수 첫날 레벨 테스트를 진행하여 맞춤 수업이 배정됩니다. 영어를 처음 접하거나 자신감이 부족한 학생 및 시니어 부모님도 본인의 속도에 맞추어 쉽고 재미있게 적응할 수 있습니다.",
  }
];

export default function FamilyFAQSection() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-32 outline-none bg-neutral-100" tabIndex={-1}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-neutral-200 pb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-neutral-600 text-xs tracking-widest uppercase font-semibold mb-6">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6 font-light">
              자주 묻는 질문
            </h2>
            <p className="text-neutral-600 text-lg font-light leading-relaxed">
              성공적인 가족 캠프를 위해 많이 하시는 질문들을 모았습니다.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              
              return (
                <div 
                  key={faq.id}
                  className={`border transition-colors duration-300 ${isOpen ? 'border-[#c5a880] bg-white shadow-xl' : 'border-neutral-200 bg-neutral-50 hover:border-neutral-300 hover:bg-white'}`}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full text-left px-6 py-6 md:px-8 md:py-8 flex items-start justify-between gap-6"
                  >
                    <h3 className={`text-lg md:text-xl font-serif font-medium transition-colors ${isOpen ? 'text-[#c5a880]' : 'text-neutral-900'}`}>
                      <span className="text-[#c5a880] mr-4 text-sm font-sans font-semibold tracking-widest uppercase">Q.</span>
                      {faq.question}
                    </h3>
                    <div className={`mt-1 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#c5a880]' : 'text-neutral-400'}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0 md:px-8 md:pb-8">
                          <div className="border-t border-neutral-100 pt-6 mt-2 flex items-start gap-4">
                            <span className="text-[#c5a880] text-sm font-semibold tracking-widest uppercase mt-1">A.</span>
                            <p className="text-neutral-600 font-light leading-relaxed text-base">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
          
          <div className="mt-16 text-center border-t border-neutral-200 pt-10">
            <p className="text-neutral-600 font-light mb-6">더 궁금하신 점이 있으신가요?</p>
            <button
              onClick={() => {
                const inquirySection = document.getElementById("inquiry");
                if (inquirySection) {
                  inquirySection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-flex items-center justify-center border border-[#c5a880] text-[#c5a880] hover:bg-[#c5a880] hover:text-white px-8 py-3 text-sm tracking-widest uppercase font-semibold transition-colors"
            >
              상담 문의하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
