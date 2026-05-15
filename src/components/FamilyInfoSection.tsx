import React from "react";
import { motion } from "motion/react";
import {
  ClipboardList,
  PlaneTakeoff,
  Info as InfoIcon,
  FileWarning,
} from "lucide-react";

export default function FamilyInfoSection() {
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
          Preparation Guide
          <span className="w-8 h-[1px] bg-[#96754a]"></span>
        </span>
        <h2 className="text-4xl md:text-5xl  text-neutral-900  mb-6">
          기본 준비 및 안내 사항
        </h2>
        <p className="text-neutral-600  text-lg">
          가족연수를 위해 출국 전 꼭 확인하셔야 할 필수 안내입니다.
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
              가족 필수 준비물
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
                여권(만료일 6개월 이상 필수), 부모님과 자녀의 관계를 증명하는 영문 주민등록등본, 왕복
                항공권(e-ticket) 사본
              </span>
            </li>
            <li className="flex items-start gap-4 border-t border-neutral-50 pt-6">
              <span className="text-[#96754a]  italic text-lg leading-none">
                02
              </span>
              <span>
                <strong className="text-neutral-900 font-medium">의류:</strong>{" "}
                여름옷, 얇은 긴팔/가디건(강의실 에어컨 완비), 속옷, 양말,
                운동화, 편한 슬리퍼
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
                기본 세면도구, 선크림,{" "}
                <span className="text-[#96754a] font-medium border-b border-[#96754a]/30 pb-0.5">
                  가족 상비약(종합감기약, 장염약, 모기기피제 등)
                </span>
              </span>
            </li>
            <li className="flex items-start gap-4 border-t border-neutral-50 pt-6">
              <span className="text-[#96754a]  italic text-lg leading-none">
                04
              </span>
              <span>
                <strong className="text-neutral-900 font-medium">
                  여가/기타:
                </strong>{" "}
                수영복, 물안경, 개인 텀블러, 아이들 학용품
              </span>
            </li>
            <li className="flex items-start gap-4 border-t border-neutral-50 pt-6">
              <span className="text-[#96754a]  italic text-lg leading-none">
                05
              </span>
              <span>
                <strong className="text-neutral-900 font-medium">환전:</strong>{" "}
                비자 연장비, 전기세 등 현지 납부 비용과 가족 개인 생활비용 (달러 준비 후 현지 쇼핑몰 환전 권장)
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
                픽업 및 샌딩 안내
              </h3>
            </div>
            <div className="space-y-8">
              <div className="relative pl-8 border-l border-[#c5a880]/30 py-2">
                <div className="absolute -left-[5px] top-3 w-2 h-2 rounded-full bg-[#96754a]"></div>
                <h4 className=" font-bold text-neutral-900 mb-2">공항 픽업 (도착)</h4>
                <p className="text-neutral-600  text-sm leading-relaxed">
                  항공편 스케줄에 맞춰 도착 시 세부 막탄 공항에서 GITC 한국인 매니저 또는 전용 스태프가 직접 마중을 나갑니다. 편안한 차량으로 가족 기숙사까지 안전하게 안내해 드립니다.
                </p>
              </div>
              <div className="relative pl-8 border-l border-[#c5a880]/30 py-2">
                <div className="absolute -left-[5px] top-3 w-2 h-2 rounded-full bg-[#96754a]"></div>
                <h4 className=" font-bold text-neutral-900 mb-2">공항 샌딩 (출국)</h4>
                <p className="text-neutral-600  text-sm leading-relaxed">
                  연수가 끝나고 귀국하시는 날, 출국 항공편 시간에 맞추어 공항 샌딩 차량이 배차됩니다. 원스톱 샌딩 서비스로 출국 전까지 불편함 없이 귀국하실 수 있도록 돕습니다.
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
                <span>연수 시작 30일 전 취소</span>
                <strong className="text-white font-medium">
                  등록비 제외 100% 환불
                </strong>
              </li>
              <li className="flex justify-between items-center py-1 border-t border-neutral-800/50 pt-5">
                <span>연수 시작 29일 ~ 15일 전 취소</span>
                <strong className="text-white font-medium">
                  총 비용의 70% 환불
                </strong>
              </li>
              <li className="flex justify-between items-center py-1 border-t border-neutral-800/50 pt-5">
                <span>연수 시작 14일 ~ 7일 전 취소</span>
                <strong className="text-white font-medium">
                  총 비용의 50% 환불
                </strong>
              </li>
              <li className="flex justify-between items-center py-1 border-t border-neutral-800/50 pt-5">
                <span>연수 시작 6일 전 ~ 당일 취소</span>
                <strong className="text-[#c5a880] font-medium">
                  환불 불가
                </strong>
              </li>
            </ul>
            <p className="text-xs text-neutral-600  leading-relaxed border-t border-neutral-800 pt-6">
              * 기숙사 공실 문제로 인해 가족연수는 취소 규정이 엄격히 적용됩니다.
              <br />* 항공권 취소 수수료는 해당 항공사의 약관에 따릅니다.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
