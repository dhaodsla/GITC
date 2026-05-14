import React from "react";
import { motion } from "motion/react";
import {
  ClipboardList,
  PlaneTakeoff,
  Info as InfoIcon,
  FileWarning,
} from "lucide-react";

export default function InfoSection() {
  return (
    <div className="space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="text-[#96754a] font-semibold tracking-[0.2em] text-xs mb-4 block uppercase flex items-center justify-center gap-2">
          <span className="w-8 h-[1px] bg-[#96754a]"></span>
          Camp Guide
          <span className="w-8 h-[1px] bg-[#96754a]"></span>
        </span>
        <h2 className="text-4xl md:text-5xl  text-neutral-900  mb-6">
          출국 및 상세 안내
        </h2>
        <p className="text-neutral-600  text-lg">
          성공적인 캠프를 위해 꼭 필요한 필수 체크리스트와 안내 사항입니다.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* 준비물 리스트 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-10 md:p-12 border border-neutral-200/60 shadow-[0_4px_30px_rgba(0,0,0,0.02)]"
        >
          <div className="flex items-center gap-4 mb-10 border-b border-neutral-100 pb-6">
            <ClipboardList
              className="w-8 h-8 text-[#96754a]"
              strokeWidth={1.5}
            />
            <h3 className="text-2xl   text-neutral-900 tracking-wide">
              필수 준비물 체크리스트
            </h3>
          </div>
          <ul className="space-y-6 text-neutral-600  text-sm leading-relaxed">
            <li className="flex items-start gap-4">
              <span className="text-[#96754a]  italic text-lg leading-none">
                01
              </span>
              <span>
                <strong className="text-neutral-900 font-medium">
                  필수 서류:
                </strong>{" "}
                여권(만료일 6개월 이상 필수), 영문 주민등록등본, 왕복
                항공권(e-ticket) 사본
              </span>
            </li>
            <li className="flex items-start gap-4 border-t border-neutral-50 pt-6">
              <span className="text-[#96754a]  italic text-lg leading-none">
                02
              </span>
              <span>
                <strong className="text-neutral-900 font-medium">의류:</strong>{" "}
                넉넉한 여름옷, 얇은 긴팔/가디건(강의실 에어컨 완비), 속옷, 양말,
                운동화, 편한 슬리퍼, 빨래망
              </span>
            </li>
            <li className="flex items-start gap-4 border-t border-neutral-50 pt-6">
              <span className="text-[#96754a]  italic text-lg leading-none">
                03
              </span>
              <span>
                <strong className="text-neutral-900 font-medium">
                  세면/위생:
                </strong>{" "}
                칫솔, 치약, 스킨로션, 선크림,{" "}
                <span className="text-[#96754a] font-medium border-b border-[#96754a]/30 pb-0.5">
                  개인 상비약(종합감기약, 장염약, 밴드 등)
                </span>
              </span>
            </li>
            <li className="flex items-start gap-4 border-t border-neutral-50 pt-6">
              <span className="text-[#96754a]  italic text-lg leading-none">
                04
              </span>
              <span>
                <strong className="text-neutral-900 font-medium">
                  수영/기타:
                </strong>{" "}
                수영복(래쉬가드 권장), 물안경, 개인 텀블러, 필기도구
              </span>
            </li>
            <li className="flex items-start gap-4 border-t border-neutral-50 pt-6">
              <span className="text-[#96754a]  italic text-lg leading-none">
                05
              </span>
              <span>
                <strong className="text-neutral-900 font-medium">용돈:</strong>{" "}
                약 5만~10만 (한화, 현지에서 페소로 안전하게 환전 진행 / 쇼핑 or 간식)
              </span>
            </li>
          </ul>
        </motion.div>

        <div className="space-y-8">
          {/* 입소/퇴소 안내 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#faf9f7] p-10 md:p-12 border border-[#c5a880]/20 shadow-[0_4px_30px_rgba(0,0,0,0.02)]"
          >
            <div className="flex items-center gap-4 mb-10 border-b border-[#c5a880]/20 pb-6">
              <PlaneTakeoff
                className="w-8 h-8 text-[#96754a]"
                strokeWidth={1.5}
              />
              <h3 className="text-2xl   text-neutral-900 tracking-wide">
                입소 및 퇴소 절차
              </h3>
            </div>
            <div className="space-y-8">
              <div className="relative pl-8 border-l border-[#c5a880]/30 py-2">
                <div className="absolute -left-[5px] top-3 w-2 h-2 rounded-full bg-[#96754a]"></div>
                <h4 className=" font-bold text-neutral-900 mb-2">Departure</h4>
                <p className="text-neutral-600  text-sm leading-relaxed">
                  출국 당일 인천/부산 지역 공항 집결지에 모입니다. 총괄 매니저
                  및 인솔 교사 미팅 후 단체 수속을 밟고 출국합니다. 세부 공항
                  도착 시 전용 버스로 곧바로 대학 캠퍼스로 이동하며, 부모님께
                  도착 문자를 발송해 드립니다.
                </p>
              </div>
              <div className="relative pl-8 border-l border-[#c5a880]/30 py-2">
                <div className="absolute -left-[5px] top-3 w-2 h-2 rounded-full bg-[#96754a]"></div>
                <h4 className=" font-bold text-neutral-900 mb-2">Arrival</h4>
                <p className="text-neutral-600  text-sm leading-relaxed">
                  캠프 마지막 날 감동적인 수료식을 마친 후, 교사들의 인솔 하에
                  세부 공항으로 이동하여 단체 귀국길에 오릅니다. 한국 공항
                  게이트에서 마중 나오신 부모님께 안전하게 인계하며 캠프가
                  종료됩니다.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 환불 규정 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#0a0a0a] text-white p-10 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#c5a880] opacity-5 rounded-full filter blur-[50px] transform translate-x-1/3 -translate-y-1/3" />
            <div className="flex items-center gap-4 mb-8">
              <FileWarning
                className="w-6 h-6 text-[#c5a880]"
                strokeWidth={1.5}
              />
              <h3 className="text-xl   tracking-widest text-[#c5a880] uppercase uppercase">
                Refund Policy
              </h3>
            </div>
            <ul className="space-y-4 text-sm  text-neutral-300 mb-8 border-t border-neutral-800 pt-6">
              <li className="flex justify-between items-center py-1">
                <span>캠프 시작 30일 전 취소</span>
                <strong className="text-white font-medium">
                  등록비 제외 100% 환불
                </strong>
              </li>
              <li className="flex justify-between items-center py-1 border-t border-neutral-800/50 pt-5">
                <span>캠프 시작 29일 ~ 15일 전 취소</span>
                <strong className="text-white font-medium">
                  총 비용의 70% 환불
                </strong>
              </li>
              <li className="flex justify-between items-center py-1 border-t border-neutral-800/50 pt-5">
                <span>캠프 시작 14일 ~ 7일 전 취소</span>
                <strong className="text-white font-medium">
                  총 비용의 50% 환불
                </strong>
              </li>
              <li className="flex justify-between items-center py-1 border-t border-neutral-800/50 pt-5">
                <span>캠프 시작 6일 전 ~ 당일 취소</span>
                <strong className="text-[#c5a880] font-medium">
                  환불 불가
                </strong>
              </li>
            </ul>
            <p className="text-xs text-neutral-600  leading-relaxed border-t border-neutral-800 pt-6">
              * 항공권 취소 수수료는 해당 항공사의 약관에 따릅니다.
              <br />* 질병 등 불가항력적인 사유로 중도 귀국 시, 공제 후
              정산됩니다.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
