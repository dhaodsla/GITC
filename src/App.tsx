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

import GallerySection from "./components/GallerySection";
import InfoSection from "./components/InfoSection";
import ActivitySection from "./components/ActivitySection";
import FieldTripSection from "./components/FieldTripSection";
import NoticeSection from "./components/NoticeSection";
import FAQSection from "./components/FAQSection";

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

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [showPromoModal, setShowPromoModal] = useState(true);
  const [showSplash, setShowSplash] = useState(true);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Hide splash screen after 6 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showSplash]);

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

      <AnimatePresence>
        {showSplash && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex items-center justify-center overflow-hidden"
          >
            {/* Dynamic Background */}
            <div className="absolute inset-0">
              <div
                className="absolute top-1/4 left-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#c5a880] rounded-full mix-blend-screen filter blur-[120px] md:blur-[200px] opacity-20 animate-pulse"
                style={{ animationDuration: "4s" }}
              ></div>
              <div
                className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] md:w-[700px] md:h-[700px] bg-[#8c6d46] rounded-full mix-blend-screen filter blur-[150px] md:blur-[250px] opacity-10 animate-pulse"
                style={{ animationDuration: "6s" }}
              ></div>
            </div>

            <div className="relative z-10 flex flex-col items-center">
              {/* Top Accent line */}
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "100px" }}
                transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
                className="h-[1px] bg-[#c5a880] mb-8 md:mb-12"
              ></motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                className="text-center px-4"
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif tracking-[0.1em] uppercase font-light leading-tight">
                  GITC <span className="text-[#c5a880] italic">Cebu</span>
                  <br />
                  <span className="text-3xl md:text-5xl lg:text-6xl tracking-[0.2em] mt-4 md:mt-8 block">
                    English Camp
                  </span>
                </h1>
              </motion.div>

              {/* Bottom Accent */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1.5 }}
                className="mt-12 md:mt-16 flex items-center gap-4 text-[#c5a880] text-[10px] md:text-xs tracking-[0.3em] lg:tracking-[0.5em] uppercase font-semibold"
              >
                <span className="w-8 md:w-16 h-[1px] bg-[#c5a880]/50"></span>
                Premium Experience
                <span className="w-8 md:w-16 h-[1px] bg-[#c5a880]/50"></span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
                GITC Camp
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
            </nav>
          </div>
        </div>

        {/* Mobile Nav Scrollable */}
        <div className="md:hidden border-t border-neutral-900 bg-[#0a0a0a] relative">
          <div className="overflow-x-auto custom-scrollbar px-2 py-3">
            <div className="flex space-x-2 w-max pr-8">
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
          <NoticeSection />
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
          <InfoSection />
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
                  GITC English Camp
                </span>
              </div>
              <p className="text-sm  leading-relaxed mb-8">
                필리핀 세부 정부인가 정규대학 글로벌 인재 양성.
                <br /> 초·중학생을 위한 1:1 맞춤형 세부 어학연수 전문가.
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
                  src={`${import.meta.env.BASE_URL}promo.jpg`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    // Provide a nice fallback if user hasn't uploaded 'promo.jpg' yet, or show the alt text styled.
                    target.src =
                      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop";
                  }}
                  alt="캠프 특가 안내"
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
      role: "중1 학부모",
      text: "매일매일 밴드에 올라오는 사진을 보며 한국에서도 안심할 수 있었어요. 아이가 영어를 말하는 데 자신감이 생겼습니다!",
      rating: 5,
    },
    {
      role: "초5 학생",
      text: "주말 말고 평일에도 수영이랑 배드민턴을 해서 진짜 재밌었어요! 밥도 맛있고 선생님들도 너무 친절하세요.",
      rating: 5,
    },
    {
      role: "초4 학부모",
      text: "안전한 대학 시설이라 믿고 보냈는데 탁월한 선택이었습니다. 다녀와서 학원에서도 스피킹 실력이 놀랍게 늘었다고 칭찬받았네요.",
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
              "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop";
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
              GITC Cebu Campus
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
            <span className="italic text-white">영어캠프</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-neutral-300 max-w-xl  leading-relaxed border-l border-[#c5a880]/30 pl-8 mt-2 mix-blend-screen"
          >
            최고의 강사진, 철저한 부설 대학 내 안전 관리, 생생한 현지 문화 체험.
            <br />
            GITC에서 수준이 다른 글로벌 리더의 꿈을 키우세요.
          </motion.p>

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
              1:1 맞춤형 수업
            </h3>
            <p className="text-neutral-600  leading-relaxed text-sm">
              개별 레벨에 맞춘 1:1 전담 다대일 그룹 강사 배정으로 말하기
              자신감을 키워줍니다.
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
              24시간 안전 캠퍼스
            </h3>
            <p className="text-neutral-600  leading-relaxed text-sm">
              필리핀 GITC 대학 부설의 검증된 안전 시스템과 매니저들의 밀착
              관리로 안심할 수 있습니다.
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
            <Star
              className="w-6 h-6 text-neutral-300 mb-6 group-hover:text-[#c5a880] transition-colors"
              strokeWidth={1.5}
            />
            <h3 className="text-xl  font-bold text-neutral-900 mb-4 tracking-wide">
              평일 매일 액티비티
            </h3>
            <p className="text-neutral-600  leading-relaxed text-sm">
              주말에만 나가지 않습니다. 평일 매일 다채로운 방과후 액티비티로
              지루함을 날려버립니다.
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
            <MapPin
              className="w-6 h-6 text-neutral-300 mb-6 group-hover:text-[#c5a880] transition-colors"
              strokeWidth={1.5}
            />
            <h3 className="text-xl  font-bold text-neutral-900 mb-4 tracking-wide">
              실전 필드트립
            </h3>
            <p className="text-neutral-600  leading-relaxed text-sm">
              현지 마트를 방문하여 쇼핑 미션을 수행하며 생활영어를 직접 실전에서
              연습합니다.
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
            네이버 밴드를 통한
            <br />
            실시간 사진 공유
          </h3>
          <p className="text-neutral-300 text-lg leading-relaxed  max-w-md">
            부모님의 걱정을 덜어드립니다. 매일 아이들의 식사 모습, 즐겁게
            활동하는 모습, 수업하는 사진들을 수십 장씩 실시간으로 공유해
            드립니다.
          </p>
        </div>
        <div className="w-full md:w-auto relative z-10">
          <a
            href="https://blog.naver.com/readtospeak"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-white text-black px-10 py-5 font-bold tracking-widest text-sm uppercase transition-all hover:bg-[#c5a880] hover:text-white w-full group"
          >
            공식 채널 구경하기
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
            참가자 생생 후기
          </h2>
          <p className="text-neutral-600 max-w-xl mx-auto  trailing-relaxed">
            GITC 프리미엄 캠프를 경험한 학생들과 부모님들의 이야기입니다.
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
                      GITC Member
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
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-lg  font-bold text-neutral-900 mb-3 tracking-wide">
                01. 완벽한 보안 및 치안
              </h4>
              <p className="text-neutral-600 leading-relaxed  text-sm">
                일반 어학교가 아닌 정규 대학 컴파운드 내에 캠프 시설이 위치하여,
                24시간 철저한 청원경찰의 출입 통제와 사각지대 없는 CCTV
                시스템으로 최적의 환경을 제공합니다.
              </p>
            </div>

            <div>
              <h4 className="text-lg  font-bold text-neutral-900 mb-3 tracking-wide">
                02. 검증된 우수 강사진
              </h4>
              <p className="text-neutral-600 leading-relaxed  text-sm">
                GITC 대학 소속의 우수한 ESL 강사진들이 수업을 진행합니다.
                까다로운 채용 과정과 정기적인 강사 트레이닝을 통해 우수한 교육
                퀄리티를 유지합니다.
              </p>
            </div>

            <div>
              <h4 className="text-lg  font-bold text-neutral-900 mb-3 tracking-wide">
                03. 원스톱 캠퍼스 라이프
              </h4>
              <p className="text-neutral-600 leading-relaxed  text-sm">
                강의실, 기숙사, 식당, 체육시설이 모두 캠퍼스 내에 위치해 있어
                외부로 이동할 필요가 없습니다. 불필요한 동선을 최소화하고 학습에
                몰입합니다.
              </p>
            </div>

            <div>
              <h4 className="text-lg  font-bold text-neutral-900 mb-3 tracking-wide">
                04. 선진화된 커리큘럼
              </h4>
              <p className="text-neutral-600 leading-relaxed  text-sm">
                다년간 축적된 노하우를 바탕으로, 한국 학생들에게 가장 취약한
                '스피킹' 능력을 단기간에 끌어올릴 수 있는 맞춤형 프로그램을
                제공합니다.
              </p>
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
          프리미엄 커리큘럼
        </h2>
        <p className="text-neutral-600 max-w-xl mx-auto  leading-relaxed">
          스피킹 특화 1:1 수업 중심의
          <br />
          집중 영어 훈련 프로그램입니다.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-neutral-200/50 bg-white shadow-xl max-w-5xl mx-auto">
        <div className="p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-neutral-200/50">
          <div className="text-[#c5a880] mb-8">
            <Users className="w-8 h-8" strokeWidth={1} />
          </div>
          <h3 className="text-3xl   text-neutral-900 mb-8 border-b border-neutral-100 pb-6">
            1:1 맞춤형 수업
          </h3>
          <ul className="space-y-8">
            <li className="flex items-start gap-5">
              <span className=" italic text-2xl text-[#c5a880] leading-none mt-1">
                01
              </span>
              <div>
                <strong className="block text-neutral-900 text-lg mb-2  tracking-wide">
                  Speaking & Listening 집중
                </strong>
                <p className="text-neutral-600  leading-relaxed">
                  한국 학생들이 가장 취약한 말하기, 듣기를 원어민과 1:1로 집중
                  훈련합니다.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-5">
              <span className=" italic text-2xl text-[#c5a880] leading-none mt-1">
                02
              </span>
              <div>
                <strong className="block text-neutral-900 text-lg mb-2  tracking-wide">
                  개인별 눈높이 학습
                </strong>
                <p className="text-neutral-600  leading-relaxed">
                  레벨테스트 결과를 바탕으로 학생 성향과 수준에 맞춘 교재 및
                  강사를 배정합니다.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="p-12 lg:p-16 bg-[#faf9f7]">
          <div className="text-[#8c6d46] mb-8">
            <BookOpen className="w-8 h-8" strokeWidth={1} />
          </div>
          <h3 className="text-3xl   text-neutral-900 mb-8 border-b border-[#e5e1db] pb-6">
            그룹 & 자기주도학습
          </h3>
          <ul className="space-y-8">
            <li className="flex items-start gap-5">
              <span className=" italic text-2xl text-[#8c6d46] leading-none mt-1">
                01
              </span>
              <div>
                <strong className="block text-neutral-900 text-lg mb-2  tracking-wide">
                  1:4 소규모 그룹 클래스
                </strong>
                <p className="text-neutral-600  leading-relaxed">
                  다른 친구들과 영어로 토론하며 발표력과 자신감을 키우는 협동
                  수업입니다.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-5">
              <span className=" italic text-2xl text-[#8c6d46] leading-none mt-1">
                02
              </span>
              <div>
                <strong className="block text-neutral-900 text-lg mb-2  tracking-wide">
                  영단어 & 에세이 첨삭
                </strong>
                <p className="text-neutral-600  leading-relaxed">
                  단어를 암기하고, 영어 일기를 작성하며 튜터에게 꼼꼼한 첨삭을
                  받습니다.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#0a0a0a] text-white p-12 md:p-16 text-center mt-16 max-w-5xl mx-auto shadow-2xl relative overflow-hidden flex flex-col items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop')] opacity-10 object-cover mix-blend-luminosity"></div>
        <div className="relative z-10 max-w-2xl">
          <ShieldCheck
            className="w-10 h-10 text-[#c5a880] mx-auto mb-6"
            strokeWidth={1}
          />
          <h3 className="text-3xl   mb-6">입학부터 졸업까지 철저한 관리</h3>
          <p className="text-neutral-300  leading-relaxed text-lg pb-6 border-b border-[#c5a880]/30">
            주기적인 프로그레스 테스트를 통해 성취도를 평가하고, 부모님께 학습
            리포트를 상세히 전달하여 성장을 증명합니다.
          </p>
        </div>
      </div>
    </div>
  );
}

function ScheduleSection() {
  const scheduleData = [
    {
      time: "07:00 - 08:00",
      title: "기상 및 조식",
      desc: "하루를 여는 든든한 뷔페",
    },
    {
      time: "08:00 - 12:00",
      title: "오전 정규 수업",
      desc: "1:1 원어민 클래스 및 그룹 (4교시)",
    },
    {
      time: "12:00 - 13:00",
      title: "중식 및 휴식",
      desc: "영양 만점 한식 위주의 식단",
    },
    {
      time: "13:00 - 17:00",
      title: "오후 정규 수업",
      desc: "1:1 맞춤형 스피킹 훈련 (4교시)",
    },
    {
      time: "17:00 - 18:00",
      title: "방과후 액티비티",
      desc: "수영, 체육 활동 또는 개인 휴식",
    },
    {
      time: "18:00 - 19:00",
      title: "저녁 만찬",
      desc: "친구들과 함께하는 저녁 식사",
    },
    {
      time: "19:00 - 21:00",
      title: "나이트 클래스",
      desc: "단어테스트 및 영어일기 첨삭",
    },
    {
      time: "21:00 - 22:00",
      title: "취침 준비",
      desc: "가족 통화 및 다음 날 준비",
    },
  ];

  return (
    <div className="space-y-16">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-[#96754a] font-semibold tracking-[0.2em] text-xs mb-4 block uppercase border-b border-[#96754a]/30 pb-2 w-max mx-auto">
          Routine
        </span>
        <h2 className="text-4xl md:text-5xl  text-neutral-900  mb-6">
          일일 타임라인
        </h2>
        <p className="text-neutral-600 max-w-xl mx-auto  leading-relaxed">
          지루할 틈 없이 알차게 짜여진
          <br /> 프리미엄 평일 스케줄입니다.
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
                  {item.time.split(" ")[0]}
                </span>
                <span className="text-xs text-neutral-300 uppercase tracking-widest font-semibold">
                  {item.time.split("-")[1].trim()}
                </span>
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
          Weekend Special
        </h4>
        <p className="text-neutral-300  leading-relaxed">
          주말에는 정규 수업 대신 푸른 바다 아일랜드 호핑투어, 원어민 튜터와
          함께 영어를 직접 써보는 <br className="hidden md:block" />
          <span className="text-white border-b border-[#c5a880]/50 pb-1">
            ‘쇼핑 미션 실전 필드트립(SM J몰 등)’
          </span>
          이 진행됩니다.
        </p>
      </div>
    </div>
  );
}

// Facilities section merged into GallerySection

function InquirySection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000); // 5초 후 리셋
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
                    placeholder="010-0000-0000"
                    className="w-full px-0 py-3 bg-transparent border-b border-neutral-300 focus:border-[#c5a880] outline-none transition-colors rounded-none placeholder:text-neutral-300  text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-widest text-[#96754a] uppercase mb-2">
                  자녀 학년
                </label>
                <select className="w-full px-0 py-3 bg-transparent border-b border-neutral-300 focus:border-[#c5a880] outline-none transition-colors rounded-none  text-sm text-neutral-700 cursor-pointer appearance-none">
                  <option value="">학년을 선택해주세요</option>
                  <option value="elem-low">초등학교 저학년 (1~3학년)</option>
                  <option value="elem-high">초등학교 고학년 (4~6학년)</option>
                  <option value="middle">중학생</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-widest text-[#96754a] uppercase mb-2">
                  문의 내용
                </label>
                <textarea
                  rows={3}
                  placeholder="궁금한 사항을 편하게 적어주세요."
                  className="w-full px-0 py-3 bg-transparent border-b border-neutral-300 focus:border-[#c5a880] outline-none transition-colors rounded-none resize-none placeholder:text-neutral-300  text-sm"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#0a0a0a] hover:bg-[#c5a880] text-white font-semibold tracking-[0.2em] uppercase text-sm py-5 transition-colors mt-4"
              >
                무료 상담 신청하기
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
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("register");
          }}
          className="group relative flex items-center justify-center w-14 h-14 bg-[#c5a880] text-[#0a0a0a] rounded-full shadow-2xl hover:scale-105 transition-all"
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
