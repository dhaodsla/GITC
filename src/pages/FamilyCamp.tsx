import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import {
  BookOpen,
  Clock,
  GraduationCap,
  Home as HomeIcon,
  MapPin,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Users,
  Utensils,
  Image as ImageIcon,
  Info,
  Star,
  X,
  ArrowUp,
} from "lucide-react";
import { Link } from "react-router-dom";

import GallerySection from "../components/GallerySection";
import FamilyInfoSection from "../components/FamilyInfoSection";
import ActivitySection from "../components/ActivitySection";
import FieldTripSection from "../components/FieldTripSection";
import FamilyNoticeSection from "../components/FamilyNoticeSection";
import FAQSection from "../components/FAQSection";

const tabs = [
  { id: "home", label: "홈" },
  { id: "notice", label: "모집공지" },
  { id: "university", label: "대학 소개" },
  { id: "curriculum", label: "커리큘럼" },
  { id: "schedule", label: "시간표" },
  { id: "activity", label: "평일 액티비티" },
  { id: "fieldtrip", label: "필드트립" },
  { id: "gallery", label: "갤러리" },
  { id: "info", label: "캠프 안내" },
  { id: "faq", label: "FAQ" },
  { id: "inquiry", label: "상담·신청" },
];

export default function FamilyCamp() {
  const [activeTab, setActiveTab] = useState("home");
  const [showPromoModal, setShowPromoModal] = useState(true);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["home", ...tabs.map((t) => t.id)];
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveTab(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Call once to set initial state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900">
      {/* Scroll Progress Bar (5번 기능) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#c5a880] origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 bg-[#0a0a0a] border-b border-[#c5a880]/30 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 overflow-hidden">
            <div
              className="flex shrink-0 items-center gap-3 cursor-pointer mr-6"
              onClick={() => scrollToSection("home")}
            >
              <div className="border border-[#c5a880]/50 text-[#c5a880] w-8 h-8 flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
              <span className="  text-xl text-white tracking-widest uppercase">
                GITC Family Camp
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex flex-nowrap space-x-2 overflow-x-auto custom-scrollbar py-2 items-center">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`px-3 py-1 text-xs  tracking-wide whitespace-nowrap transition-all border-b ${
                    activeTab === tab.id
                      ? "border-[#c5a880] text-[#c5a880]"
                      : "border-transparent text-neutral-300 hover:text-white hover:border-neutral-500"
                  }`}
                  style={{ wordBreak: "keep-all" }}
                >
                  {tab.label}
                </button>
              ))}
              <div className="w-px h-4 bg-neutral-800 mx-1"></div>
              <Link to="/" className="px-3 py-1 text-xs text-neutral-400 hover:text-white transition-colors whitespace-nowrap">
                메인화면
              </Link>
              <Link to="/junior" className="px-3 py-1 text-xs text-[#c5a880] hover:bg-[#c5a880]/10 border border-[#c5a880]/30 transition-colors whitespace-nowrap ml-2">
                주니어캠프 보기
              </Link>
            </nav>
          </div>
        </div>

        {/* Mobile Nav Scrollable */}
        <div className="md:hidden border-t border-neutral-900 bg-[#0a0a0a] relative">
          <div className="overflow-x-auto custom-scrollbar px-2 py-3">
            <div className="flex space-x-2 w-max pr-8 items-center">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`px-4 py-2 text-xs  tracking-widest whitespace-nowrap transition-colors border ${
                    activeTab === tab.id
                      ? "border-[#c5a880] text-[#c5a880] bg-[#c5a880]/10"
                      : "border-neutral-800 text-neutral-300"
                  }`}
                  style={{ wordBreak: "keep-all" }}
                >
                  {tab.label}
                </button>
              ))}
              <div className="w-px h-6 bg-neutral-800 mx-2"></div>
              <Link to="/" className="px-4 py-2 text-xs tracking-widest whitespace-nowrap transition-colors text-neutral-400 hover:text-white">
                메인화면
              </Link>
              <Link to="/junior" className="px-4 py-2 text-xs tracking-widest whitespace-nowrap transition-colors border border-[#c5a880] text-[#c5a880] bg-[#c5a880]/10">
                주니어캠프 보기
              </Link>
            </div>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent pointer-events-none flex items-center justify-end pr-2">
            <svg
              className="w-5 h-5 text-neutral-600 animate-pulse"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-24 md:space-y-32">
        <div id="home">
          <HomeSection scrollToSection={scrollToSection} />
        </div>
        <div id="notice">
          <FamilyNoticeSection />
        </div>
        <div id="university">
          <UniversitySection />
        </div>
        <div id="curriculum">
          <CurriculumSection />
        </div>
        <div id="schedule">
          <ScheduleSection />
        </div>
        <div id="activity">
          <ActivitySection />
        </div>
        <div id="fieldtrip">
          <FieldTripSection />
        </div>
        <div id="gallery">
          <GallerySection />
        </div>
        <div id="info">
          <FamilyInfoSection />
        </div>
        <div id="faq">
          <FAQSection />
        </div>
        <div id="inquiry">
          <InquirySection />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-neutral-300 py-20 mt-20 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-b border-neutral-900 pb-16">
            <div className="max-w-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 border border-[#c5a880]/30 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-[#c5a880]" />
                </div>
                <span className=" text-2xl text-white  tracking-wide">
                  GITC Family English Camp
                </span>
              </div>
              <p className="text-sm  leading-relaxed mb-8">
                필리핀 세부 정부인가 정규대학 글로벌 인재 양성.
                <br /> 가족이 함께 떠나는 맞춤형 세부 가족연수 전문가.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://blog.naver.com/readtospeak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm border-b border-transparent hover:border-[#c5a880] hover:text-[#c5a880] transition-colors pb-1"
                >
                  Naver Blog
                </a>
                <a
                  href="https://instagram.com/gitc_cebu_camp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm border-b border-transparent hover:border-[#c5a880] hover:text-[#c5a880] transition-colors pb-1"
                >
                  Instagram
                </a>
                <a
                  href="https://open.kakao.com/o/sPhkO0ji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm border-b border-transparent hover:border-[#c5a880] hover:text-[#c5a880] transition-colors pb-1"
                >
                  Kakao Talk
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-12 sm:gap-24">
              <div className="space-y-4  text-sm">
                <h4 className="text-white  tracking-widest uppercase mb-6 text-xs">
                  Contact
                </h4>
                <p>
                  정선영 총괄 <br />
                  <a
                    href="tel:01053937324"
                    className="hover:text-[#c5a880] transition-colors text-white  text-lg mt-1 block"
                  >
                    010-5393-7324
                  </a>
                </p>
                <p className="pt-2">
                  오명훈 매니저 <br />
                  <a
                    href="tel:01045273377"
                    className="hover:text-[#c5a880] transition-colors text-white  text-lg mt-1 block"
                  >
                    010-4527-3377
                  </a>
                </p>
              </div>
              <div className="space-y-4  text-sm">
                <h4 className="text-white  tracking-widest uppercase mb-6 text-xs">
                  Location
                </h4>
                <p className="leading-relaxed">
                  Green International
                  <br />
                  Technical College
                  <br />
                  Cebu, Philippines
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs  text-neutral-600">
            <p>© 2026 GITC English Camp. All rights reserved.</p>
            <p>Designed for Excellence.</p>
          </div>
        </div>
      </footer>

      {/* Promo Image Modal */}
      <AnimatePresence>
        {showPromoModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pb-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowPromoModal(false)}
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-transparent z-10 flex flex-col items-center"
            >
              <button
                onClick={() => setShowPromoModal(false)}
                className="absolute -top-12 right-0 sm:-right-12 p-2 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="w-full overflow-hidden rounded-2xl shadow-2xl bg-white relative">
                <img
                  src={`${import.meta.env.BASE_URL}promo-family.jpg`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.includes('promo-family.jpg')) {
                      target.src = `${import.meta.env.BASE_URL}promo.jpg`;
                    } else if (target.src.includes('promo.jpg')) {
                      target.src = "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop";
                    }
                  }}
                  alt="가족캠프 특가 안내"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="mt-4 flex gap-4 w-full">
                <button
                  onClick={() => setShowPromoModal(false)}
                  className="flex-1 py-3 px-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-xl text-sm font-medium transition-colors"
                >
                  오늘은 그만 보기
                </button>
                <button
                  onClick={() => setShowPromoModal(false)}
                  className="flex-1 py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white shadow-lg rounded-xl text-sm font-bold transition-colors"
                >
                  닫기
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function HomeSection({
  scrollToSection,
}: {
  scrollToSection: (tab: string) => void;
}) {
  const reviews = [
    {
      role: "초3 자녀와 함께한 어머니",
      text: "처음엔 걱정했는데 안전하고 쾌적한 캠퍼스 덕분에 정말 편하게 지냈습니다. 아이와 함께 성장하는 값진 한 달이었어요!",
      rating: 5,
    },
    {
      role: "초5 자녀와 함께한 아버지",
      text: "캡슐 호텔 스타일의 가족실이 프라이빗하고 너무 좋았습니다. 주말에 가족과 함께한 호핑 투어는 평생 잊지 못할 거예요.",
      rating: 5,
    },
    {
      role: "7세, 초2 두 자녀 어머니",
      text: "식사부터 청소까지 다 해주시니 엄마들에게는 천국입니다. 아이들은 영어를 배우며 신나게 놀고, 저도 힐링하는 시간이었어요.",
      rating: 5,
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Banner */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden bg-[#0a0a0a] text-white min-h-[750px] flex items-center rounded-[2rem] shadow-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-10" />
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          src={`${import.meta.env.BASE_URL}gitc-campus.jpg`}
          onError={(e) => {
            // Fallback image if user hasn't uploaded it yet
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=2070&auto=format&fit=crop";
          }}
          alt="GITC Campus"
          className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40"
        />

        <div className="relative z-20 p-8 md:p-16 flex flex-col items-start gap-8 w-full max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
            transition={{ delay: 0.2, duration: 1 }}
            className="flex items-center gap-4 mb-2"
          >
            <span className="w-16 h-[1px] bg-[#c5a880] block"></span>
            <span className="text-[#c5a880] text-xs font-semibold tracking-[0.3em] uppercase">
              GITC Family Camp
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className=" text-5xl md:text-7xl lg:text-8xl  tracking-tight leading-[1.05] max-w-4xl"
          >
            프리미엄 세부
            <br />
            <span className="italic text-white">가족연수</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-2"
          >
            <p className="text-lg md:text-xl text-neutral-300 max-w-xl leading-relaxed border-l border-[#c5a880]/30 pl-8 mb-6 mix-blend-screen">
              자녀에게는 최고의 영어 환경을, 부모님에게는 완벽한 휴식을.
              <br />
              세부 GITC에서 우아하고 편안한 한 달 살기를 경험하세요.
            </p>
            <div className="flex flex-wrap gap-4 pl-8 border-l border-transparent">
              <span className="bg-[#c5a880]/20 text-[#c5a880] px-4 py-1.5 rounded-full text-sm backdrop-blur-sm border border-[#c5a880]/30 font-medium">부모님 힐링 코스</span>
              <span className="bg-[#c5a880]/20 text-[#c5a880] px-4 py-1.5 rounded-full text-sm backdrop-blur-sm border border-[#c5a880]/30 font-medium">자녀 맞춤 커리큘럼</span>
              <span className="bg-[#c5a880]/20 text-[#c5a880] px-4 py-1.5 rounded-full text-sm backdrop-blur-sm border border-[#c5a880]/30 font-medium">호텔급 식사와 청소지원</span>
              <span className="bg-[#c5a880]/20 text-[#c5a880] px-4 py-1.5 rounded-full text-sm backdrop-blur-sm border border-[#c5a880]/30 font-medium">프라이빗 가족 숙소</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap gap-6 mt-12"
          >
            <button
              onClick={() => scrollToSection("inquiry")}
              className="px-10 py-5 border border-white/30 backdrop-blur-sm text-white text-xs font-bold tracking-[0.2em] uppercase transition-all hover:bg-white hover:text-black rounded-full"
            >
              상담 신청하기
            </button>
            <a
              href="https://open.kakao.com/o/sPhkO0ji"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-xs font-bold tracking-[0.1em] uppercase group"
            >
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/60 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </div>
              온라인 문의
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Key Features */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 max-w-6xl mx-auto border-t border-l border-neutral-200/50 mt-12 bg-white">
        <motion.div
          whileHover={{ backgroundColor: "#fcfbf9" }}
          className="group p-10 border-b border-r border-neutral-200/50 transition-colors cursor-pointer relative"
          onClick={() => scrollToSection("curriculum")}
        >
          <div className="absolute top-10 right-10 text-neutral-200  text-5xl italic  group-hover:text-[#c5a880] transition-colors">
            01
          </div>
          <div className="relative z-10 mt-12">
            <Users
              className="w-6 h-6 text-neutral-300 mb-6 group-hover:text-[#c5a880] transition-colors"
              strokeWidth={1.5}
            />
            <h3 className="text-xl  font-bold text-neutral-900 mb-4 tracking-wide">
              가족 맞춤형 커리큘럼
            </h3>
            <p className="text-neutral-600  leading-relaxed text-sm">
              아이들은 스피킹 집중 주니어 과정, 부모님은 유연한 가디언 과정으로 각각에 꼭 맞는 학습을 제공합니다.
            </p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ backgroundColor: "#fcfbf9" }}
          className="group p-10 border-b border-r border-neutral-200/50 transition-colors cursor-pointer relative"
          onClick={() => scrollToSection("university")}
        >
          <div className="absolute top-10 right-10 text-neutral-200  text-5xl italic  group-hover:text-[#c5a880] transition-colors">
            02
          </div>
          <div className="relative z-10 mt-12">
            <ShieldCheck
              className="w-6 h-6 text-neutral-300 mb-6 group-hover:text-[#c5a880] transition-colors"
              strokeWidth={1.5}
            />
            <h3 className="text-xl  font-bold text-neutral-900 mb-4 tracking-wide">
              부모님의 완벽한 휴식
            </h3>
            <p className="text-neutral-600  leading-relaxed text-sm">
              식사, 청소, 빨래 걱정 끝! 모든 생활 서비스가 제공되어 부모님들은 오롯이 힐링에 집중할 수 있습니다.
            </p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ backgroundColor: "#fcfbf9" }}
          className="group p-10 border-b border-r border-neutral-200/50 transition-colors cursor-pointer relative"
          onClick={() => scrollToSection("gallery")}
        >
          <div className="absolute top-10 right-10 text-neutral-200  text-5xl italic  group-hover:text-[#c5a880] transition-colors">
            03
          </div>
          <div className="relative z-10 mt-12">
            <MapPin
              className="w-6 h-6 text-neutral-300 mb-6 group-hover:text-[#c5a880] transition-colors"
              strokeWidth={1.5}
            />
            <h3 className="text-xl  font-bold text-neutral-900 mb-4 tracking-wide">
              프라이빗 가족 숙소
            </h3>
            <p className="text-neutral-600  leading-relaxed text-sm">
              맹그로브 레지던스, 캡슐 호텔 스타일 등 다인실도 쾌적하게 구성된 가족만의 특별한 안식처를 제공합니다.
            </p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ backgroundColor: "#fcfbf9" }}
          className="group p-10 border-b border-r border-neutral-200/50 transition-colors cursor-pointer relative"
          onClick={() => scrollToSection("gallery")}
        >
          <div className="absolute top-10 right-10 text-neutral-200  text-5xl italic  group-hover:text-[#c5a880] transition-colors">
            04
          </div>
          <div className="relative z-10 mt-12">
            <Star
              className="w-6 h-6 text-neutral-300 mb-6 group-hover:text-[#c5a880] transition-colors"
              strokeWidth={1.5}
            />
            <h3 className="text-xl  font-bold text-neutral-900 mb-4 tracking-wide">
              즐거운 가족 액티비티
            </h3>
            <p className="text-neutral-600  leading-relaxed text-sm">
              주말엔 호핑투어, 평일엔 캠퍼스 내 수영장 등 가족이 함께 웃고 즐기며 추억을 쌓는 시간이 가득합니다.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Naver Band & Realtime Connection */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#0a0a0a] rounded-none p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#c5a880] rounded-full mix-blend-screen filter blur-[100px] opacity-20 pointer-events-none"></div>
        <div className="flex-1 relative z-10">
          <div className="inline-block border border-[#c5a880]/30 text-[#c5a880] px-4 py-1 mb-6 text-xs tracking-[0.2em] uppercase font-semibold">
            매일매일 실시간 소식 업데이트
          </div>
          <h3 className="text-3xl md:text-4xl   text-white mb-6">
            네이버 블로그/밴드를 통한
            <br />
            실시간 소통과 정보
          </h3>
          <p className="text-neutral-300 text-lg leading-relaxed  max-w-md">
            가족연수 꿀팁, 비용 정리부터 생생한 현지 소식까지! 블로그와 밴드에 매일 업데이트되는 특별한 이야기들을 만나보세요.
          </p>
        </div>
        <div className="w-full md:w-auto relative z-10">
          <a
            href="https://blog.naver.com/readtospeak"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-white text-black px-10 py-5 font-bold tracking-widest text-sm uppercase transition-all hover:bg-[#c5a880] hover:text-white w-full group"
          >
            공식 블로그 구경하기
            <span className="group-hover:translate-x-2 transition-transform">
              →
            </span>
          </a>
        </div>
      </motion.section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-[#f5f2ed] px-6 md:px-12 relative overflow-hidden">
        <div className="text-center mb-20 relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
          <span className="text-[#96754a] font-semibold tracking-[0.2em] text-xs mb-4 block uppercase border-b border-[#96754a]/30 pb-2">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl  text-neutral-900  mb-6">
            가족연수 생생 후기
          </h2>
          <p className="text-neutral-600 max-w-xl mx-auto  trailing-relaxed">
            GITC 가족연수를 다녀가신 가족들의 따뜻한 이야기입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
          {reviews.map((review, i) => {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                className="bg-white p-10 rounded-none shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-neutral-100/50 flex flex-col h-full hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-500"
              >
                <div className="flex gap-1 mb-8 text-[#c5a880]">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-current stroke-transparent"
                    />
                  ))}
                </div>
                <p className="text-neutral-600 leading-relaxed mb-10   text-lg flex-1">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-neutral-100">
                  <div className=" italic text-neutral-300 text-3xl leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex flex-col ml-2">
                    <span className="font-semibold text-neutral-900 text-sm tracking-wide">
                      {review.role}
                    </span>
                    <span className="text-xs text-neutral-300 mt-1 uppercase tracking-widest">
                      GITC Family Member
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function UniversitySection() {
  return (
    <div className="space-y-16">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-[#96754a] font-semibold tracking-[0.2em] text-xs mb-4 block uppercase flex items-center justify-center gap-2">
          <span className="w-8 h-[1px] bg-[#96754a]"></span>
          About Campus
          <span className="w-8 h-[1px] bg-[#96754a]"></span>
        </span>
        <h2 className="text-4xl md:text-5xl  text-neutral-900  mb-6">
          필리핀 GITC 대학 부설어학원
        </h2>
        <p className="text-neutral-600 max-w-xl mx-auto  leading-relaxed">
          Green International Technical College
          <br />
          글로벌 인재 양성을 목표로 하는 필리핀 정부 정식 인가 교육기관입니다.
        </p>
      </div>

      <div className="bg-white p-6 md:p-12 shadow-[0_4px_40px_rgba(0,0,0,0.04)] border border-neutral-100 flex flex-col xl:flex-row gap-12 items-center">
        <div className="w-full xl:w-1/2 relative bg-[#f5f2ed] p-4 md:p-8">
          <img
            src={`${import.meta.env.BASE_URL}cebu_campus/gitc-campus.jpg`}
            alt="University Campus"
            className="w-full h-auto object-cover aspect-[4/3] filter contrast-125 saturate-50"
          />
          <div className="absolute -bottom-6 -right-6 bg-[#0a0a0a] text-white p-8 max-w-xs shadow-2xl hidden md:block">
            <h3 className=" text-2xl  mb-2">
              안전하고 쾌적한
              <br />
              대학 캠퍼스
            </h3>
            <p className="text-[#c5a880] text-sm tracking-wide">
              TESDA 공식 인증 교육기관
            </p>
          </div>
        </div>

        <div className="w-full xl:w-1/2 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h4 className="text-base md:text-lg font-bold text-neutral-900 mb-3 tracking-wide">
                01. 정식 학사학위 4년제 대학
              </h4>
              <ul className="text-neutral-600 leading-relaxed text-sm space-y-1">
                <li className="flex items-start gap-2"><span className="text-[#c5a880]">•</span>관광경영학과 운영</li>
                <li className="flex items-start gap-2"><span className="text-[#c5a880]">•</span>CHED 인허가 전문 대학</li>
              </ul>
            </div>

            <div>
              <h4 className="text-base md:text-lg font-bold text-neutral-900 mb-3 tracking-wide">
                02. 언어교육원 (ESL 전문 기관)
              </h4>
              <ul className="text-neutral-600 leading-relaxed text-sm space-y-1">
                <li className="flex items-start gap-2"><span className="text-[#c5a880]">•</span>공무원 연수</li>
                <li className="flex items-start gap-2"><span className="text-[#c5a880]">•</span>Junior ESL</li>
                <li className="flex items-start gap-2"><span className="text-[#c5a880]">•</span>TOEIC, IELTS 프로그램 운영</li>
              </ul>
            </div>

            <div>
              <h4 className="text-base md:text-lg font-bold text-neutral-900 mb-3 tracking-wide">
                03. Multi Campus
              </h4>
              <ul className="text-neutral-600 leading-relaxed text-sm space-y-1">
                <li className="flex items-start gap-2"><span className="text-[#c5a880]">•</span>ILOILO & CEBU</li>
              </ul>
            </div>

            <div>
              <h4 className="text-base md:text-lg font-bold text-neutral-900 mb-3 tracking-wide">
                04. SINCE 2003
              </h4>
              <ul className="text-neutral-600 leading-relaxed text-sm space-y-1">
                <li className="flex items-start gap-2"><span className="text-[#c5a880]">•</span>2003년 C&C Language Center 설립</li>
                <li className="flex items-start gap-2"><span className="text-[#c5a880]">•</span>2019년 GITC 대학 승격</li>
                <li className="flex items-start gap-2"><span className="text-[#c5a880]">•</span>23년 이상의 안정된 운영</li>
              </ul>
            </div>

            <div>
              <h4 className="text-base md:text-lg font-bold text-neutral-900 mb-3 tracking-wide">
                05. IELTS Official Test Center
              </h4>
              <ul className="text-neutral-600 leading-relaxed text-sm space-y-1">
                <li className="flex items-start gap-2"><span className="text-[#c5a880]">•</span>IDP 공식 인증 센터</li>
              </ul>
            </div>

            <div>
              <h4 className="text-base md:text-lg font-bold text-neutral-900 mb-3 tracking-wide">
                06. 파트너십 & 협력 기관
              </h4>
              <ul className="text-neutral-600 leading-relaxed text-sm space-y-1">
                <li className="flex items-start gap-2"><span className="text-[#c5a880]">•</span>국내외 50개 이상의 대학 및 기관과 파트너십</li>
                <li className="flex items-start gap-2"><span className="text-[#c5a880]">•</span>다양한 전문기관·장학재단 협력</li>
                <li className="flex items-start gap-2"><span className="text-[#c5a880]">•</span>여러 교육기관이 인정한 안정적 프로그램</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mt-8">
        {/* 안심 올케어 시스템 */}
        <div className="bg-[#0a0a0a] text-white p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#c5a880] opacity-10 rounded-full filter blur-[50px] transform translate-x-1/3 -translate-y-1/3" />
          <div className="relative z-10">
            <span className="text-[#c5a880] text-sm tracking-widest font-semibold uppercase mb-3 block">Total Care System</span>
            <h3 className="text-3xl mb-8 leading-tight">
              안전 관리, 확실하게 준비했습니다<br />안심 올케어 시스템
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4 bg-white/5 p-4 border border-white/10">
                  <span className="text-[#c5a880] font-bold">1차 케어</span>
                  <span className="text-neutral-300 text-sm">강사 1명 + 학생 2~3명 (Room Stay)</span>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-4 border border-white/10 ml-4">
                  <span className="text-[#c5a880] font-bold">2차 케어</span>
                  <span className="text-neutral-300 text-sm">Team Manager - Korean</span>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-4 border border-white/10 ml-8">
                  <span className="text-[#c5a880] font-bold">3차 케어</span>
                  <span className="text-neutral-300 text-sm">총괄 및 총장</span>
                </div>
              </div>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-neutral-400">
              <li className="flex items-start gap-2">
                <span className="text-[#c5a880] mt-1">✓</span>
                학생 2~3명 + 튜터 선생님 1명 Room Stay
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c5a880] mt-1">✓</span>
                24시간 상시 케어 및 관리
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c5a880] mt-1">✓</span>
                영어 사용 환경 유지
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c5a880] mt-1">✓</span>
                이상 징후 즉각 대응
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c5a880] mt-1">✓</span>
                응급 상황 즉시 조치 (한인 병원 연계)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c5a880] mt-1">✓</span>
                출입 통제 및 안전 시스템 정비
              </li>
            </ul>
          </div>
        </div>

        {/* 프리미엄 기숙사 */}
        <div className="bg-[#f5f2ed] border border-[#e5e1db] p-8 md:p-12 flex flex-col justify-center">
          <span className="text-[#96754a] text-sm tracking-widest font-semibold uppercase mb-3 block">Accommodation</span>
          <h3 className="text-3xl text-neutral-900 mb-8 leading-tight">
            아이의 하루를 지켜주는<br />프리미엄 기숙사 지원
          </h3>
          
          <div className="space-y-8">
            <div className="bg-white p-6 shadow-sm border border-neutral-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-[#f5f2ed] flex items-center justify-center shrink-0">
                <span className="text-[#96754a] font-serif italic text-xl">01</span>
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">프리미엄 외부 레지던스</h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  번화가에 있어 이용이 편리한 맹그로브 레지던스. 더욱 쾌적하고 편리한 생활 환경을 제공합니다.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 shadow-sm border border-neutral-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-[#f5f2ed] flex items-center justify-center shrink-0">
                <span className="text-[#96754a] font-serif italic text-xl">02</span>
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">GITC 교내 전용 기숙사</h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  GITC 세부 캠퍼 내부에 위치한 1인 캡슐 타입의 공용 기숙사. 동선 낭비 없이 안전하고 학습에 집중할 수 있는 환경입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mt-8">
        {/* 캠프 지원 구성 */}
        <div className="bg-white border border-neutral-200 p-8 md:p-12 relative overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
          <div className="relative z-10">
            <span className="text-[#c5a880] text-sm tracking-widest font-semibold uppercase mb-3 block">Inclusions</span>
            <h3 className="text-3xl mb-4 text-neutral-900 leading-tight font-serif">
              가족 캠프 지원 구성
            </h3>
            <p className="text-neutral-500 mb-8 border-b border-neutral-100 pb-6">체계적으로 케어합니다.</p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-4 text-sm text-neutral-700 font-medium">
              <li className="flex items-center gap-3"><div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#c5a880]"></div>숙식</li>
              <li className="flex items-center gap-3"><div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#c5a880]"></div>수업 및 교재</li>
              <li className="flex items-center gap-3"><div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#c5a880]"></div>액티비티 (평일+주말)</li>
              <li className="flex items-center gap-3"><div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#c5a880]"></div>여행자 보험</li>
              <li className="flex items-center gap-3"><div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#c5a880]"></div>SSP 발급비</li>
              <li className="flex items-center gap-3"><div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#c5a880]"></div>공증비</li>
              <li className="flex items-center gap-3"><div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#c5a880]"></div>입국세</li>
              <li className="flex items-center gap-3"><div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#c5a880]"></div>단체 티</li>
              <li className="flex items-center gap-3"><div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#c5a880]"></div>세탁 및 룸 클리닝 서비스</li>
              <li className="flex items-center gap-3"><div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#c5a880]"></div>매일 사진·영상 업로드</li>
              <li className="flex items-center gap-3"><div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#c5a880]"></div>한국인 매니저 24시간 케어</li>
              <li className="flex items-center gap-3 text-[#c5a880]"><div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#c5a880]"></div>무료 화상 영어 제공</li>
            </ul>
          </div>
        </div>

        {/* 화상 영어 */}
        <div className="bg-[#0a0a0a] text-white p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#c5a880] opacity-10 rounded-full filter blur-[60px]" />
          <div className="relative z-10 flex flex-col h-full justify-center">
            <span className="text-[#c5a880] text-sm tracking-widest font-semibold uppercase mb-3 block">Online English</span>
            <h3 className="text-3xl mb-4 leading-tight font-serif">
              무료 화상 영어 제공
            </h3>
            <p className="text-neutral-400 mb-8 max-w-sm">
              화상 영어를 추가 비용 없이 이용할 수 있어요!
            </p>
            
            <div className="space-y-4">
              <div className="bg-white/5 p-5 border border-white/10">
                <p className="text-white font-medium flex items-center gap-4 text-sm md:text-base">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#c5a880] text-[#0a0a0a] text-xs font-bold shrink-0">1</span>
                  연수 기간만큼 주 2회 / 25분 수업 무료 제공
                </p>
              </div>
              <div className="bg-white/5 p-5 border border-white/10">
                <p className="text-white font-medium flex items-center gap-4 text-sm md:text-base">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#c5a880] text-[#0a0a0a] text-xs font-bold shrink-0">2</span>
                  귀국 후 학습 루틴 자연스럽게 유지
                </p>
              </div>
              <div className="bg-white/5 p-5 border border-white/10">
                <p className="text-white font-medium flex items-center gap-4 text-sm md:text-base">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#c5a880] text-[#0a0a0a] text-xs font-bold shrink-0">3</span>
                  1:1 온라인 수업으로 회화 능력 지속 향상
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CurriculumSection() {
  return (
    <div className="space-y-16">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-[#96754a] font-semibold tracking-[0.2em] text-xs mb-4 block uppercase flex items-center justify-center gap-2">
          <span className="w-8 h-[1px] bg-[#96754a]"></span>
          Curriculum
          <span className="w-8 h-[1px] bg-[#96754a]"></span>
        </span>
        <h2 className="text-4xl md:text-5xl  text-neutral-900  mb-6">
          가족맞춤 커리큘럼
        </h2>
        <p className="text-neutral-600 max-w-xl mx-auto  leading-relaxed">
          자녀들의 집중적인 영어 성장은 물론, 부모님의 특별한 힐링까지 완벽하게 고려한
          <br />
          GITC만의 이원화된 프리미엄 프로그램입니다.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-neutral-200/50 bg-white shadow-xl max-w-5xl mx-auto">
        <div className="p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-neutral-200/50">
          <div className="text-[#c5a880] mb-8">
            <Users className="w-8 h-8" strokeWidth={1} />
          </div>
          <h3 className="text-3xl font-serif text-neutral-900 mb-2">
            Junior Course
          </h3>
          <p className="text-neutral-500 mb-8 border-b border-neutral-100 pb-6 text-sm">자녀를 위한 스피킹 집중 캠프 코스</p>
          <ul className="space-y-8">
            <li className="flex items-start gap-5">
              <span className=" italic text-2xl text-[#c5a880] leading-none mt-1">
                01
              </span>
              <div>
                <strong className="block text-neutral-900 text-lg mb-2  tracking-wide">
                  1:1 맞춤형 수업 (4타임)
                </strong>
                <p className="text-neutral-600  leading-relaxed text-sm">
                  말하기, 듣기를 필리핀 원어민 강사와 1:1로 밀착 훈련하여 즉각적인 피드백을 제공합니다.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-5">
              <span className=" italic text-2xl text-[#c5a880] leading-none mt-1">
                02
              </span>
              <div>
                <strong className="block text-neutral-900 text-lg mb-2  tracking-wide">
                  1:4 그룹 수업 (2타임)
                </strong>
                <p className="text-neutral-600  leading-relaxed text-sm">
                  비슷한 레벨의 친구들과 함께 토론 및 액티비티를 진행하여 영어 발표의 자신감을 기릅니다.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-5">
              <span className=" italic text-2xl text-[#c5a880] leading-none mt-1">
                03
              </span>
              <div>
                <strong className="block text-neutral-900 text-lg mb-2  tracking-wide">
                  원어민 특화 & 자기주도 (2타임)
                </strong>
                <p className="text-neutral-600  leading-relaxed text-sm">
                  서양 원어민 튜터의 발음 교정 시간(1타임)과 단어 암기 및 영어 일기를 쓰는 자기주도학습(1타임)으로 기본기를 다집니다.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="p-12 lg:p-16 bg-[#faf9f7]">
          <div className="text-[#8c6d46] mb-8">
            <BookOpen className="w-8 h-8" strokeWidth={1} />
          </div>
          <h3 className="text-3xl font-serif text-neutral-900 mb-2">
            Guardian Course
          </h3>
          <p className="text-neutral-500 mb-8 border-b border-[#e5e1db] pb-6 text-sm">부모님을 위한 선택형 힐링 & 생활 영어</p>
          <ul className="space-y-8">
            <li className="flex items-start gap-5">
              <span className=" italic text-2xl text-[#8c6d46] leading-none mt-1">
                01
              </span>
              <div>
                <strong className="block text-neutral-900 text-lg mb-2  tracking-wide">
                  Light / Regular 코스 선택
                </strong>
                <p className="text-neutral-600  leading-relaxed text-sm">
                  목적에 따라 1:1 하루 3타임(가벼운 회화 위주) 혹은 하루 4타임(비즈니스/심층 회화) 중 선택이 가능합니다.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-5">
              <span className=" italic text-2xl text-[#8c6d46] leading-none mt-1">
                02
              </span>
              <div>
                <strong className="block text-neutral-900 text-lg mb-2  tracking-wide">
                  여유로운 오전/오후 시간
                </strong>
                <p className="text-neutral-600  leading-relaxed text-sm">
                  수업 외 시간은 라운지 휴식, 마사지, 인근 쇼핑몰 방문 등 세부 한 달 살기의 여유를 진오롯이 즐기실 수 있습니다.
                </p>
              </div>
            </li>
             <li className="flex items-start gap-5">
              <span className=" italic text-2xl text-[#8c6d46] leading-none mt-1">
                03
              </span>
              <div>
                <strong className="block text-neutral-900 text-lg mb-2  tracking-wide">
                  All-in-One 케어 서비스 
                </strong>
                <p className="text-neutral-600  leading-relaxed text-sm">
                  아침, 점심, 저녁 3식은 물론 주기적인 방 청소와 빨래 서비스가 제공되어 온전한 힐링이 가능합니다.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#0a0a0a] text-white p-12 md:p-16 text-center mt-16 max-w-5xl mx-auto shadow-2xl relative overflow-hidden flex flex-col items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596422846543-75c6fc197f0a?q=80&w=2070&auto=format&fit=crop')] opacity-10 object-cover mix-blend-luminosity"></div>
        <div className="relative z-10 max-w-2xl">
          <BookOpen className="w-10 h-10 text-[#c5a880] mx-auto mb-6" strokeWidth={1} />
          <h3 className="text-3xl   mb-6">
            가족을 위한 완벽한 공간, 프리미엄 레지던스
          </h3>
          <p className="text-neutral-300  leading-relaxed text-lg pb-6 border-b border-[#c5a880]/30">
            일반 기숙사와 더불어 세부 시티 내 프리미엄 레지던스 아파트(맹그로브) 또는 캡슐 호텔식 기숙사를 제공하여
            내 집 같은 편안함을 누려보세요. 
          </p>
        </div>
      </div>
    </div>
  );
}

function ScheduleSection() {
  const scheduleData = [
    {
      time: "07:00",
      title: "기상",
      desc: "활기찬 하루의 시작",
    },
    {
      time: "08:00",
      title: "조식",
      desc: "든든하고 영양가 있는 아침 식사",
    },
    {
      time: "08:55 - 12:25",
      title: "오전 정규 수업 (4교시)",
      desc: "자녀: 맞춤형 클래스 및 그룹 / 부모님: 선택형 회화 등",
    },
    {
      time: "12:25 - 13:25",
      title: "중식 및 휴식",
      desc: "매일 바뀌는 정성스러운 식단 제공, 휴식",
    },
    {
      time: "13:25 - 17:00",
      title: "오후 정규 수업 (4교시)",
      desc: "오후 정규 수업 내용",
    },
    {
      time: "17:00 - 18:00",
      title: "저녁식사",
      desc: "캠퍼스 식당에서 안전하고 편안한 저녁 식사",
    },
    {
      time: "18:00 - 19:00",
      title: "액티비티(선택) 후 귀가 및 자유시간",
      desc: "가족과 함께 각자의 방(숙소)에서 휴식 및 자유시간",
    },
  ];

  return (
    <div className="space-y-16">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-[#96754a] font-semibold tracking-[0.2em] text-xs mb-4 block uppercase border-b border-[#96754a]/30 pb-2 w-max mx-auto">
          Daily Routine
        </span>
        <h2 className="text-4xl md:text-5xl  text-neutral-900  mb-6">
          일일 타임라인
        </h2>
        <p className="text-neutral-600 max-w-xl mx-auto  leading-relaxed">
          자녀들의 집중 학습, 그리고 부모님의 여유로움이
          <br /> 공존하는 가족연수 평일 스케줄입니다.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-[0_4px_40px_rgba(0,0,0,0.03)] border border-neutral-100 p-8 md:p-16">
        <div className="space-y-0">
          {scheduleData.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col md:flex-row border-b border-neutral-100 last:border-0 hover:bg-[#fcfbf9] transition-colors"
            >
              <div className="w-full md:w-1/3 py-6 md:py-8 pr-8 flex flex-col justify-center">
                <span className=" italic text-3xl md:text-4xl text-[#c5a880] mb-2 ">
                  {item.time.includes("-") ? item.time.split("-")[0].trim() : item.time.trim()}
                </span>
                {item.time.includes("-") && (
                  <span className="text-xs text-neutral-300 uppercase tracking-widest font-semibold">
                    {item.time.split("-")[1].trim()}
                  </span>
                )}
              </div>
              <div className="w-full md:w-2/3 py-4 md:py-8 md:pl-12 border-l-0 md:border-l border-neutral-100 flex flex-col justify-center">
                <h4 className="text-xl  tracking-wide text-neutral-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-neutral-600  text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-8 bg-[#0a0a0a] text-white p-10 md:p-12 text-center border border-neutral-800 relative overflow-hidden group">
        <div className="absolute inset-0 bg-[#c5a880] opacity-0 group-hover:opacity-10 transition-opacity duration-1000"></div>
        <h4 className=" italic text-2xl text-[#c5a880] mb-4  tracking-wide">
          Family Weekend 
        </h4>
        <p className="text-neutral-300  leading-relaxed">
          주말에는 정규 수업 대신 빛나는 세부의 바다로 가족 <span className="text-white border-b border-[#c5a880]/50 pb-1">호핑 투어</span>를 떠나거나,
          <br className="hidden md:block" />
          가족들이 직접 자유롭게 외출하여 시티 투어, 마트 쇼핑 등 
          여유로운 한 달 살기를 만들어갑니다.
        </p>
      </div>
    </div>
  );
}

// Facilities section merged into GallerySection

function InquirySection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 이메일 발송 대신 형식상 제출 완료 처리
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000); // 5초 후 리셋
    }, 1000);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-[#96754a] font-semibold tracking-[0.2em] text-xs mb-4 block uppercase flex items-center justify-center gap-2">
          <span className="w-8 h-[1px] bg-[#96754a]"></span>
          Contact Us
          <span className="w-8 h-[1px] bg-[#96754a]"></span>
        </span>
        <h2 className="text-4xl md:text-5xl  text-neutral-900  mb-6">
          프리미엄 상담 문의
        </h2>
      </div>

      <div className="bg-white rounded-none shadow-[0_10px_50px_rgba(0,0,0,0.06)] border border-neutral-100 overflow-hidden flex flex-col md:flex-row relative">
        {/* Contact Info Side */}
        <div className="w-full md:w-2/5 bg-[#0a0a0a] p-10 md:p-14 text-white flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c5a880] rounded-full mix-blend-screen filter blur-[100px] opacity-10 pointer-events-none"></div>

          <div className="relative z-10 flex-1">
            <h3 className=" text-3xl  mb-6">VIP Consultation</h3>
            <p className="text-neutral-300 mb-12  leading-relaxed text-sm">
              자녀의 첫 캠프, 궁금하신 점이 많으시죠?
              <br />
              언제든 편하게 문의해주세요. 친절히 안내해 드리겠습니다.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-5">
                <PhoneCall
                  className="w-5 h-5 text-[#c5a880] mt-1"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="text-xs text-neutral-600 font-semibold tracking-widest uppercase mb-1">
                    Direct Call
                  </p>
                  <p className="text-sm text-neutral-300  mb-2">
                    정선영 총괄 / 오명훈 매니저
                  </p>
                  <p className=" italic text-xl">
                    <a
                      href="tel:01053937324"
                      className="hover:text-[#c5a880] transition-colors"
                    >
                      010-5393-7324
                    </a>
                  </p>
                  <p className=" italic text-xl mt-1">
                    <a
                      href="tel:01045273377"
                      className="hover:text-[#c5a880] transition-colors"
                    >
                      010-4527-3377
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <MessageCircle
                  className="w-5 h-5 text-[#c5a880] mt-1"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="text-xs text-neutral-600 font-semibold tracking-widest uppercase mb-1">
                    Kakao Talk
                  </p>
                  <a
                    href="https://open.kakao.com/o/sPhkO0ji"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 text-sm border-b border-[#c5a880]/50 pb-0.5 hover:text-[#c5a880] transition-colors"
                  >
                    1:1 오픈채팅 바로가기
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <BookOpen
                  className="w-5 h-5 text-[#c5a880] mt-1"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="text-xs text-neutral-600 font-semibold tracking-widest uppercase mb-1">
                    Official Channels
                  </p>
                  <div className="flex gap-4 mt-2 text-sm ">
                    <a
                      href="https://blog.naver.com/readtospeak"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#c5a880] transition-colors"
                    >
                      Naver Blog
                    </a>
                    <span className="text-neutral-600">|</span>
                    <a
                      href="https://instagram.com/gitc_cebu_camp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#c5a880] transition-colors"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="w-full md:w-3/5 p-10 md:p-14 bg-[#faf9f7]">
          <h3 className=" text-2xl  text-neutral-900 mb-8 border-b border-neutral-200 pb-4">
            온라인 상담 신청
          </h3>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-[#c5a880]/30 p-10 text-center h-full flex flex-col justify-center items-center"
            >
              <ShieldCheck
                className="w-12 h-12 text-[#c5a880] mb-6"
                strokeWidth={1}
              />
              <h4 className=" text-2xl text-neutral-900 mb-3">
                상담 신청 완료
              </h4>
              <p className="text-neutral-600  text-sm">
                확인 후 빠른 시일 내에 연락드리겠습니다.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold tracking-widest text-[#96754a] uppercase mb-2">
                    보호자 성함
                  </label>
                  <input
                    required
                    type="text"
                    name="parentName"
                    placeholder="홍길동"
                    className="w-full px-0 py-3 bg-transparent border-b border-neutral-300 focus:border-[#c5a880] outline-none transition-colors rounded-none placeholder:text-neutral-300  text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-widest text-[#96754a] uppercase mb-2">
                    연락처
                  </label>
                  <input
                    required
                    type="tel"
                    name="contact"
                    placeholder="010-0000-0000"
                    className="w-full px-0 py-3 bg-transparent border-b border-neutral-300 focus:border-[#c5a880] outline-none transition-colors rounded-none placeholder:text-neutral-300  text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-widest text-[#96754a] uppercase mb-2">
                  자녀 학년
                </label>
                <select
                  name="grade"
                  className="w-full px-0 py-3 bg-transparent border-b border-neutral-300 focus:border-[#c5a880] outline-none transition-colors rounded-none  text-sm text-neutral-700 cursor-pointer appearance-none"
                >
                  <option value="">참여 형태를 선택해주세요</option>
                  <option value="parent-child">부모 + 자녀 1명</option>
                  <option value="parent-children">부모 + 자녀 2명 이상</option>
                  <option value="other">기타</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-widest text-[#96754a] uppercase mb-2">
                  문의 내용
                </label>
                <textarea
                  name="inquiry"
                  rows={3}
                  placeholder="궁금한 사항을 편하게 적어주세요."
                  className="w-full px-0 py-3 bg-transparent border-b border-neutral-300 focus:border-[#c5a880] outline-none transition-colors rounded-none resize-none placeholder:text-neutral-300  text-sm"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0a0a0a] hover:bg-[#c5a880] disabled:bg-neutral-400 text-white font-semibold tracking-[0.2em] uppercase text-sm py-5 transition-colors mt-4"
              >
                {isSubmitting ? "전송 중..." : "무료 상담 신청하기"}
              </button>
              <p className="text-xs text-neutral-300 text-center mt-6 ">
                * 입력하신 정보는 상담 목적으로만 사용되며 안전하게 보호됩니다.
              </p>
            </form>
          )}
        </div>
      </div>

      {/* Floating Action Buttons (2번 기능) */}
      <div className="fixed bottom-8 right-8 z-[90] flex flex-col gap-3 items-end">
        {/* 상담 신청 버튼 */}
        <a
          href="https://open.kakao.com/o/sPhkO0ji"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 bg-[#fae100] text-[#371d1e] rounded-full shadow-2xl hover:scale-105 transition-all"
        >
          <span className="absolute right-full mr-4 whitespace-nowrap bg-[#0a0a0a] text-[#c5a880] text-xs px-3 py-2 border border-[#c5a880]/30 opacity-0 group-hover:opacity-100 transition-opacity tracking-widest uppercase font-semibold pointer-events-none">
            빠른 상담
          </span>
          <MessageCircle className="w-6 h-6" />
        </a>
        
        {/* 상단으로 이동 */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group relative flex items-center justify-center w-12 h-12 bg-[#0a0a0a] text-neutral-400 border border-neutral-800 rounded-full shadow-xl hover:text-[#c5a880] hover:border-[#c5a880]/50 hover:scale-105 transition-all"
        >
          <span className="absolute right-full mr-4 whitespace-nowrap bg-[#0a0a0a] text-[#c5a880] text-xs px-3 py-2 border border-[#c5a880]/30 opacity-0 group-hover:opacity-100 transition-opacity tracking-widest uppercase font-semibold pointer-events-none">
            TOP
          </span>
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
