import React from "react";
import { motion } from "motion/react";
import {
  Sparkles,
  Trophy,
  Mail,
  Palette,
  Droplets,
  Camera,
  Waves,
  Edit3,
  Cake,
  ChefHat,
  Scissors,
  Heart,
  Music,
  Star,
  Mic,
} from "lucide-react";

export default function ActivitySection() {
  const bgImage = "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop";

  const activities = [
    {
      title: "골든벨 퀴즈",
      icon: <Trophy className="w-6 h-6" strokeWidth={1.5} />,
      desc: "영어로 진행되는 퀴즈 게임! 단순 암기가 아니라 문제를 듣고 이해하며 자연스럽게 단어와 표현을 익히는 시간입니다.",
    },
    {
      title: "미니올림픽",
      icon: <Trophy className="w-6 h-6" strokeWidth={1.5} />,
      desc: "영어로 응원하고 작전을 짜며 협동심과 실전 영어를 함께 배우는 체육 활동입니다.",
    },
    {
      title: "부모님께 영어편지",
      icon: <Mail className="w-6 h-6" strokeWidth={1.5} />,
      desc: "배운 표현들로 부모님께 직접 편지를 쓰는 감동적인 시간. 학부모님들의 만족도가 높습니다.",
    },
    {
      title: "수요일 워터데이",
      icon: <Waves className="w-6 h-6" strokeWidth={1.5} />,
      desc: "아이들이 가장 기다리는 물놀이! 스트레스도 날리고 친구들과 소통하는 신나는 시간입니다.",
    },
    {
      title: "쿠킹 클래스",
      icon: <ChefHat className="w-6 h-6" strokeWidth={1.5} />,
      desc: "요리 체험을 통해 자연스럽게 요리 과정에서의 생활 영어 표현을 익힙니다.",
    },
    {
      title: "팝송 배우기",
      icon: <Music className="w-6 h-6" strokeWidth={1.5} />,
      desc: "신나는 팝송을 따라 부르며 발음과 리듬감을 익혀 영어에 대한 거부감을 없앱니다.",
    },
    {
      title: "영어 연극",
      icon: <Mic className="w-6 h-6" strokeWidth={1.5} />,
      desc: "함께 대본을 연습하고 연극을 올리며 살아있는 영어를 재미있게 배웁니다.",
    },
    {
      title: "탤런트 쇼",
      icon: <Star className="w-6 h-6" strokeWidth={1.5} />,
      desc: "자신의 장기를 영어로 소개하며 발표에 대한 자신감을 얻습니다.",
    },
  ];

  return (
    <div className="relative space-y-16 py-24 object-cover overflow-hidden">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0 scale-105"
        style={{ backgroundImage: `url(${bgImage})`, filter: "blur(4px)" }}
      />
      {/* Light Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white/85 z-0" />

      <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
        <span className="text-[#96754a] font-semibold tracking-[0.2em] text-xs mb-4 block uppercase flex items-center justify-center gap-2">
          <span className="w-8 h-[1px] bg-[#96754a]"></span>
          Camp Activities
          <span className="w-8 h-[1px] bg-[#96754a]"></span>
        </span>
        <h2 className="text-4xl md:text-5xl  text-neutral-900  mb-6">
          다채로운 평일 액티비티
        </h2>
        <p className="text-neutral-600 text-lg  leading-relaxed">
          단순한 영어 수업이 아니라 아이들이 직접 체험하고 뛰놀면서
          <br />
          자연스럽게 영어를 익히는 프리미엄 프로그램입니다.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 max-w-6xl mx-auto border-t border-l border-neutral-200/50 bg-white/70 backdrop-blur-sm shadow-xl">
        {activities.map((act, i) => (
          <motion.div
            key={i}
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.95)" }}
            className="group p-8 border-b border-r border-neutral-200/50 transition-colors"
          >
            <div className="text-[#c5a880] mb-6 opacity-70 group-hover:opacity-100 transition-opacity">
              {act.icon}
            </div>
            <h3 className="text-lg font-bold text-neutral-900 mb-3 tracking-wide">
              {act.title}
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              {act.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="bg-[#0a0a0a]/90 text-center p-12 md:p-16 max-w-5xl mx-auto relative overflow-hidden group border border-[#c5a880]/20 shadow-2xl z-10 backdrop-blur-md">
        <div className="absolute inset-0 bg-[#c5a880] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-1000 pointer-events-none"></div>
        <div className="relative z-10">
          <h3 className=" italic text-2xl text-[#c5a880] mb-8  tracking-wide">
            The GITC Difference
          </h3>
          <ul className="text-neutral-300 flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-12  text-sm uppercase tracking-widest">
            <li className="flex items-center gap-2 justify-center">
              <CheckCircle /> 체험 중심
            </li>
            <li className="flex items-center gap-2 justify-center">
              <CheckCircle /> 자연스러운 노출
            </li>
            <li className="flex items-center gap-2 justify-center">
              <CheckCircle /> 결과물이 남는 과정
            </li>
            <li className="flex items-center gap-2 justify-center">
              <CheckCircle /> 검증된 환경
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function CheckCircle() {
  return (
    <svg
      className="w-4 h-4 text-[#c5a880] opacity-80"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
