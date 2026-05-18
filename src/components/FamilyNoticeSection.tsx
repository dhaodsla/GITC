import React from "react";
import { motion } from "motion/react";
import {
  Bell,
  Calendar,
  Users,
  DollarSign,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function FamilyNoticeSection() {
  return (
    <div className="bg-[#0a0a0a] text-white py-20 relative overflow-hidden mt-16 shadow-[0_30px_60px_rgba(0,0,0,0.1)]">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a880] opacity-10 rounded-full filter blur-[100px] transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c5a880] opacity-10 rounded-full filter blur-[100px] transform -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="border border-[#c5a880]/20 p-10 md:p-16 flex flex-col lg:flex-row gap-16 backdrop-blur-sm"
        >
          {/* Header Area */}
          <div className="w-full lg:w-1/2 min-w-0">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#c5a880]/50 text-[#c5a880] text-xs font-semibold tracking-[0.2em] uppercase mb-8">
              <Bell className="w-3 h-3" />
              Now Recruiting
            </div>
            <h2 className="text-4xl md:text-5xl   mb-6 leading-tight break-keep">
              2026 가족연수
              <br className="hidden md:block" /> 모집 안내 (성수기/비수기)
            </h2>
            <p className="text-neutral-300 text-lg mb-10  leading-relaxed break-keep">
              아이의 성장은 물론 부모님의 힐링까지, 세부 GITC에서 우아한 한 달 살기를 경험하세요.
              성수기 및 비수기 특별 패키지로 가족에게 가장 잘 맞는 일정을 선택하실 수 있습니다.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 bg-white text-black px-6 py-4 border-l-2 border-[#c5a880] text-sm break-keep">
                <span className="font-semibold text-[#c5a880] uppercase tracking-widest text-xs shrink-0">
                  비수기 패키지 특별 혜택
                </span>
                <span className="font-medium leading-relaxed">
                  성수기 대비 파격적인 할인이 제공되는 비수기 가족연수 패키지로 알찬 한 달 살기를 설계하세요.
                </span>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-4">
                <a
                  href="https://m.blog.naver.com/readtospeak/224210514321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-transparent border border-[#c5a880] hover:bg-[#c5a880] hover:text-[#0a0a0a] text-[#c5a880] px-6 py-4 text-sm font-bold tracking-widest uppercase transition-colors group w-full sm:w-auto"
                >
                  성수기 비용 및 일정 보기
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
                <a
                  href="https://m.blog.naver.com/readtospeak/224187453464"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#c5a880] hover:bg-[#b09671] text-[#0a0a0a] px-6 py-4 text-sm font-bold tracking-widest uppercase transition-colors group w-full sm:w-auto"
                >
                  비수기 패키지 혜택 보기
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Info Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-neutral-800 p-8 hover:border-[#c5a880]/50 transition-colors">
              <div className="flex items-center gap-3 mb-4 text-[#c5a880]">
                <Users className="w-5 h-5" strokeWidth={1.5} />
                <h3 className=" tracking-widest text-sm uppercase">Target</h3>
              </div>
              <p className=" text-lg">초~중학생 및 보호자</p>
              <p className="text-xs text-neutral-600 mt-2 tracking-widest ">
                (가족 전용)
              </p>
            </div>

            <div className="border border-neutral-800 p-8 hover:border-[#c5a880]/50 transition-colors">
              <div className="flex items-center gap-3 mb-4 text-[#c5a880]">
                <Calendar className="w-5 h-5" strokeWidth={1.5} />
                <h3 className=" tracking-widest text-sm uppercase">Schedule</h3>
              </div>
              <ul className="space-y-3 text-sm  text-neutral-300">
                <li className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="text-white font-medium">여름 성수기</span>
                  <span>7월 ~ 8월</span>
                </li>
                <li className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="text-white font-medium">겨울 성수기</span>
                  <span>12월 ~ 2월</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-white font-medium">비수기 패키지</span>
                  <span>그 외 (상시)</span>
                </li>
              </ul>
            </div>

            <div className="border border-neutral-800 p-8 hover:border-[#c5a880]/50 transition-colors sm:col-span-2">
              <div className="flex items-center gap-3 mb-6 text-[#c5a880]">
                <DollarSign className="w-5 h-5" strokeWidth={1.5} />
                <h3 className=" tracking-widest text-sm uppercase">
                  가족연수 포함 내역
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-6">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0" />
                    <span className="text-white font-medium text-sm">숙식</span>
                  </div>
                  <span className="text-neutral-400 text-xs pl-6">전 일정 3식 제공 및 프리미엄 기숙사</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0" />
                    <span className="text-white font-medium text-sm">수업 및 기본교재</span>
                  </div>
                  <span className="text-neutral-400 text-xs pl-6">맞춤형 수업과 교재 제공</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0" />
                    <span className="text-white font-medium text-sm">무료 화상 영어 제공</span>
                  </div>
                  <span className="text-neutral-400 text-xs pl-6">과정 중 추가 혜택 제공</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0" />
                    <span className="text-white font-medium text-sm">공항 픽드랍</span>
                  </div>
                  <span className="text-neutral-400 text-xs pl-6">안전한 공항 이동 서비스</span>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-neutral-800/50">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                    <span className="text-neutral-400 text-xs leading-relaxed">
                      ※ 위 포함내역을 제외한 비용(항공권, 비자, 액티비티 요금 등 기타 현지 납부 비용)은 불포함입니다. 불포함 항목의 상세 비용은 블로그 링크 및 상담을 통해 확인 부탁드립니다.
                    </span>
                  </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
