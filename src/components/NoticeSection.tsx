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

export default function NoticeSection() {
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
          <div className="flex-1 min-w-0">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#c5a880]/50 text-[#c5a880] text-xs font-semibold tracking-[0.2em] uppercase mb-8">
              <Bell className="w-3 h-3" />
              Now Recruiting
            </div>
            <h2 className="text-4xl md:text-5xl   mb-6 leading-tight break-keep">
              2027 겨울방학 영어캠프
              <br className="hidden md:block" /> 참가자 모집
            </h2>
            <p className="text-neutral-300 text-lg mb-10  leading-relaxed break-keep">
              23년 전통의 GITC 프리미엄! 체계적인 관리와 완벽한 몰입 환경으로
              아이들의 영어를 바꿔줄 특별한 겨울을 준비하세요.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="https://blog.naver.com/readtospeak/224206815200"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center md:inline-flex md:justify-start gap-3 bg-transparent border border-[#c5a880] hover:bg-[#c5a880] hover:text-[#0a0a0a] text-[#c5a880] px-6 py-4 text-sm font-bold tracking-widest uppercase transition-colors md:w-max group"
              >
                모집 공지사항 상세보기
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Info Grid */}
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-neutral-800 p-8 hover:border-[#c5a880]/50 transition-colors">
              <div className="flex items-center gap-3 mb-4 text-[#c5a880]">
                <Users className="w-5 h-5" strokeWidth={1.5} />
                <h3 className=" tracking-widest text-sm uppercase">Target</h3>
              </div>
              <p className=" text-lg">초등학생 ~ 중고등학생</p>
              <p className="text-xs text-neutral-600 mt-2 tracking-widest ">
                (선착순 마감)
              </p>
            </div>

            <div className="border border-neutral-800 p-8 hover:border-[#c5a880]/50 transition-colors">
              <div className="flex items-center gap-3 mb-4 text-[#c5a880]">
                <Calendar className="w-5 h-5" strokeWidth={1.5} />
                <h3 className=" tracking-widest text-sm uppercase">Schedule</h3>
              </div>
              <ul className="space-y-3 text-sm  text-neutral-300">
                <li className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="text-white font-medium">4주 과정</span>
                </li>
                <li className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="text-white font-medium">6주 과정</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-white font-medium">8주 과정</span>
                </li>
              </ul>
            </div>

            <div className="border border-neutral-800 p-8 hover:border-[#c5a880]/50 transition-colors sm:col-span-2">
              <div className="flex items-center gap-3 mb-6 text-[#c5a880]">
                <DollarSign className="w-5 h-5" strokeWidth={1.5} />
                <h3 className=" tracking-widest text-sm uppercase">
                  Tuition Fee
                </h3>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-neutral-900/50 py-4">
                  <div className="text-neutral-600 text-xs tracking-widest mb-2 ">
                    4주
                  </div>
                  <div className=" text-xl">419만</div>
                </div>
                <div className="bg-neutral-900/50 py-4 border-l border-r border-[#c5a880]/20">
                  <div className="text-neutral-600 text-xs tracking-widest mb-2 ">
                    6주
                  </div>
                  <div className=" text-xl text-[#c5a880]">539만</div>
                </div>
                <div className="bg-neutral-900/50 py-4">
                  <div className="text-neutral-600 text-xs tracking-widest mb-2 ">
                    8주
                  </div>
                  <div className=" text-xl">639만</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
