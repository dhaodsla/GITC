import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  X
} from 'lucide-react';

import GallerySection from './components/GallerySection';
import InfoSection from './components/InfoSection';

const tabs = [
  { id: 'home', label: '홈' },
  { id: 'university', label: '대학 소개' },
  { id: 'curriculum', label: '커리큘럼' },
  { id: 'schedule', label: '시간표' },
  { id: 'gallery', label: '시설·식사·액티비티 갤러리' },
  { id: 'info', label: '캠프 안내' },
  { id: 'inquiry', label: '상담·신청' }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showPromoModal, setShowPromoModal] = useState(true);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl text-blue-900 tracking-tight">GITC 세부캠프</span>
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Nav Scrollable */}
        <div className="md:hidden border-t border-neutral-100 bg-white relative">
          <div className="overflow-x-auto custom-scrollbar px-2 py-3">
            <div className="flex space-x-2 w-max pr-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-neutral-100 text-neutral-600'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none flex items-center justify-end pr-2">
            <svg className="w-5 h-5 text-neutral-400 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-24 md:space-y-32">
        <div id="home"><HomeSection scrollToSection={scrollToSection} /></div>
        <div id="university"><UniversitySection /></div>
        <div id="curriculum"><CurriculumSection /></div>
        <div id="schedule"><ScheduleSection /></div>
        <div id="gallery"><GallerySection /></div>
        <div id="info"><InfoSection /></div>
        <div id="inquiry"><InquirySection /></div>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-400 py-12 mt-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-6 h-6 text-blue-500" />
                <span className="font-bold text-xl text-white">GITC 세부 주니어 영어캠프</span>
              </div>
              <p className="text-sm">초·중학생을 위한 1:1 맞춤형 세부 어학연수 전문가</p>
            </div>
            <div className="text-sm space-y-2">
              <p>운영본부: 필리핀 세부 GITC 대학 내</p>
              <p>상담문의: 정선영 총괄 <a href="tel:01053937324" className="hover:text-blue-400">010-5393-7324</a> / 오명훈 매니저 <a href="tel:01045273377" className="hover:text-blue-400">010-4527-3377</a></p>
              <p>카카오톡: <a href="https://open.kakao.com/o/sPhkO0ji" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">오픈채팅 바로가기</a></p>
              <p>인스타그램: <a href="https://instagram.com/gitc_cebu_camp" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">@gitc_cebu_camp</a></p>
              <p>블로그/카페: <a href="https://blog.naver.com/readtospeak" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">blog.naver.com/readtospeak</a></p>
              <p className="mt-4 text-xs text-neutral-500">© 2026 GITC English Camp. All rights reserved.</p>
            </div>
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
                  src="/promo.jpg" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    // Provide a nice fallback if user hasn't uploaded 'promo.jpg' yet, or show the alt text styled.
                    target.src = "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop";
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

function HomeSection({ scrollToSection }: { scrollToSection: (tab: string) => void }) {
  const reviews = [
    {
      role: '중1 학부모',
      text: '매일매일 밴드에 올라오는 사진을 보며 한국에서도 안심할 수 있었어요. 아이가 영어를 말하는 데 자신감이 생겼습니다!',
      rating: 5,
    },
    {
      role: '초5 학생',
      text: '주말 말고 평일에도 수영이랑 배드민턴을 해서 진짜 재밌었어요! 밥도 맛있고 선생님들도 너무 친절하세요.',
      rating: 5,
    },
    {
      role: '초4 학부모',
      text: '안전한 대학 시설이라 믿고 보냈는데 탁월한 선택이었습니다. 다녀와서 학원에서도 스피킹 실력이 놀랍게 늘었다고 칭찬받았네요.',
      rating: 5,
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Banner */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden bg-neutral-950 text-white min-h-[600px] md:min-h-[700px] flex items-center shadow-2xl rounded-3xl"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-900/40 to-transparent z-10" />
        <motion.img 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="/gitc-campus.jpg" 
          onError={(e) => {
            // Fallback image if user hasn't uploaded it yet
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop";
          }}
          alt="GITC Campus" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
        />
        
        <div className="relative z-20 p-8 md:p-16 flex flex-col items-start gap-6 w-full">
          <motion.div 
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-3 mb-2"
          >
            <span className="w-12 h-[2px] bg-blue-500 block"></span>
            <span className="text-blue-300 text-sm font-bold tracking-[0.2em] uppercase">GITC Cebu Campus</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-3xl"
          >
            아이들의 성장과<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
              웃음이 가득한 캠프
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-neutral-300 max-w-2xl font-light leading-relaxed border-l-2 border-neutral-700 pl-6 mt-4"
          >
            1:1 영어회화 집중 수업, 철저한 부설 대학 내 안전 관리, 생생한 현지 문화 체험과 평일 매일 액티비티! GITC에서 글로벌 리더의 꿈을 키우세요.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <button 
              onClick={() => scrollToSection('inquiry')}
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold transition-transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(37,99,235,0.3)] text-lg flex items-center gap-2"
            >
              캠프 상담 신청
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </button>
            <a 
              href="https://open.kakao.com/o/sPhkO0ji" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-300 text-yellow-900 px-8 py-4 rounded-full font-bold transition-transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(250,204,21,0.3)] text-lg flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              카톡 오픈채팅
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Key Features */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div 
          whileHover={{ y: -10 }}
          className="group bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 hover:shadow-xl transition-all cursor-pointer relative overflow-hidden"
          onClick={() => scrollToSection('curriculum')}
        >
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop" 
              alt="1:1 Class" 
              className="w-full h-full object-cover opacity-[0.05] group-hover:opacity-[0.12] transition-opacity duration-500" 
            />
          </div>
          <div className="relative z-10">
            <div className="w-14 h-14 bg-blue-100/90 text-blue-600 flex items-center justify-center rounded-2xl mb-6 shadow-sm backdrop-blur-sm">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3">1:1 맞춤형 수업</h3>
            <p className="text-neutral-600 leading-relaxed font-medium">
              학생 개개인의 레벨에 맞춘 1:1 전담 다대일 그룹 강사 배정으로 단기간에 영어 말하기 자신감을 키워줍니다.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          whileHover={{ y: -10 }}
          className="group bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 hover:shadow-xl transition-all cursor-pointer relative overflow-hidden"
          onClick={() => scrollToSection('university')}
        >
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop" 
              alt="Campus" 
              className="w-full h-full object-cover opacity-[0.05] group-hover:opacity-[0.12] transition-opacity duration-500" 
            />
          </div>
          <div className="relative z-10">
            <div className="w-14 h-14 bg-green-100/90 text-green-600 flex items-center justify-center rounded-2xl mb-6 shadow-sm backdrop-blur-sm">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3">24시간 안전 캠퍼스</h3>
            <p className="text-neutral-600 leading-relaxed font-medium">
              필리핀 GITC 대학 부설의 검증된 안전 시스템(청원경찰, 외부 통제)과 한국인 매니저들의 밀착 관리로 안심할 수 있습니다.
            </p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -10 }}
          className="group bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 hover:shadow-xl transition-all cursor-pointer relative overflow-hidden"
          onClick={() => scrollToSection('gallery')}
        >
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=600&auto=format&fit=crop" 
              alt="Activities" 
              className="w-full h-full object-cover opacity-[0.05] group-hover:opacity-[0.12] transition-opacity duration-500" 
            />
          </div>
          <div className="relative z-10">
            <div className="w-14 h-14 bg-orange-100/90 text-orange-600 flex items-center justify-center rounded-2xl mb-6 shadow-sm backdrop-blur-sm">
              <Star className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3">평일 매일 액티비티</h3>
            <p className="text-neutral-600 leading-relaxed font-medium">
              주말에만 나가는 타 캠프와 다릅니다! 평일 매일 이어지는 다채로운 방과 후 엑티비티로 아이들의 지루함을 날려버립니다.
            </p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -10 }}
          className="group bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 hover:shadow-xl transition-all cursor-pointer relative overflow-hidden"
          onClick={() => scrollToSection('gallery')}
        >
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1603354350317-6f7abe2ef31b?q=80&w=600&auto=format&fit=crop" 
              alt="Field Trip" 
              className="w-full h-full object-cover opacity-[0.05] group-hover:opacity-[0.12] transition-opacity duration-500" 
            />
          </div>
          <div className="relative z-10">
            <div className="w-14 h-14 bg-purple-100/90 text-purple-600 flex items-center justify-center rounded-2xl mb-6 shadow-sm backdrop-blur-sm">
              <MapPin className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3">실전 필드트립</h3>
            <p className="text-neutral-600 leading-relaxed font-medium">
              단순 관광이 아닙니다. 튜터와 함께 SM J몰 등 현지 마트를 방문하여 '쇼핑 미션'을 수행하며 생활영어를 실전에서 연습합니다.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Naver Band & Realtime Connection */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-green-200 shadow-sm"
      >
        <div className="flex-1">
          <div className="inline-block px-3 py-1 mb-4 bg-green-200 text-green-800 rounded-lg text-sm font-bold tracking-tight">
            매일매일 실시간 소식 업데이트!
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-green-900 mb-3 tracking-tight">네이버 밴드를 통한 실시간 사진 공유</h3>
          <p className="text-green-800 text-lg leading-relaxed">
            부모님의 걱정을 덜어드립니다. <strong>네이버 밴드</strong>를 통해 매일 아이들의 식사 거르지 않는 모습, 즐겁게 활동하는 모습, 수업하는 사진들을 수십 장씩 실시간으로 공유해 드립니다. 멀리 떨어져 있어도 항상 함께하는 것처럼 생생하게 확인하세요!
          </p>
        </div>
        <div className="w-full md:w-auto">
          <a 
            href="https://blog.naver.com/readtospeak" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition-all hover:scale-105 active:scale-95 whitespace-nowrap shadow-md text-lg w-full"
          >
            <MessageCircle className="w-5 h-5" />
            공식 블로그 구경하기
          </a>
        </div>
      </motion.section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-blue-50/50 via-white to-orange-50/30 rounded-[3rem] px-6 md:px-12 mt-12 mb-8 border border-neutral-100 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-40 h-40 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

        <div className="text-center mb-14 relative z-10">
          <span className="text-blue-600 font-bold tracking-widest text-sm mb-3 block uppercase">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-4">참가자 리얼 후기</h2>
          <p className="text-lg text-neutral-600">GITC 캠프에 다녀온 학생들과 부모님들의 생생한 목소리입니다.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
          {reviews.map((review, i) => {
            const cardThemes = [
              "bg-gradient-to-b from-blue-50/80 to-white border-blue-100/50",
              "bg-gradient-to-b from-rose-50/80 to-white border-rose-100/50",
              "bg-gradient-to-b from-amber-50/80 to-white border-amber-100/50"
            ];
            const iconThemes = [
              "bg-blue-100 text-blue-700",
              "bg-rose-100 text-rose-700",
              "bg-amber-100 text-amber-700"
            ];
            
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-[2rem] border shadow-sm relative transition-all duration-300 hover:shadow-lg hover:-translate-y-2 ${cardThemes[i % 3]}`}
              >
                {/* Quote Icon */}
                <svg className={`absolute top-6 right-8 w-12 h-12 opacity-10 ${iconThemes[i % 3].split(' ')[1]}`} fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>

                <div className="flex gap-1 mb-6 text-orange-400">
                  {[...Array(review.rating)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 fill-current drop-shadow-sm" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-neutral-700 leading-relaxed mb-8 font-medium">"{review.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-inner ${iconThemes[i % 3]}`}>
                    {review.role.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-neutral-900 leading-tight">{review.role}</span>
                    <span className="text-xs text-neutral-500 font-medium">GITC 캠프 참가자</span>
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
    <div className="space-y-12">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-600 rounded-2xl mb-4">
          <GraduationCap className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-extrabold text-neutral-900 mb-4">필리핀 GITC 대학 소개</h2>
        <p className="text-lg text-neutral-600">
          Green International Technical College<br/>
          글로벌 인재 양성을 목표로 하는 필리핀 정부 정식 인가 교육기관입니다.
        </p>
      </div>

      <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-neutral-200">
        <div className="h-64 md:h-80 relative bg-blue-900">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" 
            alt="University Campus" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
            <h3 className="text-white text-3xl md:text-4xl font-bold mb-2">안전하고 쾌적한 대학 캠퍼스</h3>
            <p className="text-blue-100 text-lg">필리핀 교육부 인증 기술교육개발청(TESDA) 공식 인증 교육기관</p>
          </div>
        </div>
        
        <div className="p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h4 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="text-blue-600 w-6 h-6" />
                완벽한 보안 및 치안
              </h4>
              <p className="text-neutral-600 leading-relaxed">
                일반 어학교가 아닌 정규 대학 컴파운드 내에 캠프 시설이 위치하여, 24시간 철저한 청원경찰의 출입 통제와 사각지대 없는 CCTV 시스템으로 우리 아이들이 가장 안전하게 공부할 수 있는 최적의 환경을 제공합니다.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <Users className="text-blue-600 w-6 h-6" />
                검증된 우수 강사진
              </h4>
              <p className="text-neutral-600 leading-relaxed">
                GITC 대학 부설 어학원 소속의 우수한 ESL 전담 강사진들이 수업을 진행합니다. 까다로운 채용 과정과 정기적인 강사 트레이닝(Teacher's Training)을 통해 우수한 교육 퀄리티를 유지하고 있습니다.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <HomeIcon className="text-blue-600 w-6 h-6" />
                원스톱 캠퍼스 라이프
              </h4>
              <p className="text-neutral-600 leading-relaxed">
                강의실, 기숙사, 식당, 양호실, 체육시설이 모두 캠퍼스 내에 위치해 있어 외부로 이동할 필요가 없습니다. 불필요한 동선을 최소화하고 오직 안전과 성장에 포커스를 맞춥니다.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <BookOpen className="text-blue-600 w-6 h-6" />
                선진화된 커리큘럼
              </h4>
              <p className="text-neutral-600 leading-relaxed">
                다년간의 유학생 지도 경험이 축적된 대학의 교육 노하우를 바탕으로, 한국 학생들에게 가장 취약한 기본기인 '스피킹' 능력을 단기간에 끌어올릴 수 있는 맞춤형 스파르타 프로그램을 제공합니다.
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
    <div className="space-y-12">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-extrabold text-neutral-900 mb-4">GITC 커리큘럼</h2>
        <p className="text-lg text-neutral-600">스피킹 특화 1:1 수업 중심의 집중 영어 훈련 프로그램입니다.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-8 border border-neutral-200">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold">1:1 맞춤형 수업</h3>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
              <div>
                <strong className="block text-neutral-900">Speaking & Listening 집중</strong>
                <p className="text-neutral-600 text-sm mt-1">한국 학생들이 가장 취약한 말하기, 듣기를 원어민과 1:1로 집중 훈련합니다.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
              <div>
                <strong className="block text-neutral-900">개인별 눈높이 학습</strong>
                <p className="text-neutral-600 text-sm mt-1">레벨테스트 결과를 바탕으로 학생 성향과 수준에 맞춘 교재 및 강사를 배정합니다.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-neutral-200">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold">그룹 수업 & 자기주도학습</h3>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
              <div>
                <strong className="block text-neutral-900">1:4 소규모 그룹 클래스</strong>
                <p className="text-neutral-600 text-sm mt-1">다른 친구들과 영어로 토론하며 발표력과 자신감을 키우는 협동 수업입니다.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
              <div>
                <strong className="block text-neutral-900">영단어 & 에세이 첨삭</strong>
                <p className="text-neutral-600 text-sm mt-1">매일 지정된 영단어를 암기하고, 영어 일기 및 에세이를 작성하며 전담 튜터에게 꼼꼼한 첨삭을 받습니다.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-neutral-900 text-white rounded-2xl p-8 md:p-12 text-center mt-12 relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-4">입학부터 졸업까지 완벽 관리</h3>
          <p className="text-neutral-300 max-w-2xl mx-auto">
            주기적인 프로그레스 테스트(Progress Test)를 통해 성취도를 평가하고, 부모님께 학습 리포트를 상세히 전달하여 성장을 증명합니다.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
          <ShieldCheck className="w-64 h-64" />
        </div>
      </div>
    </div>
  );
}

function ScheduleSection() {
  const scheduleData = [
    { time: '07:00 - 08:00', title: '기상 및 아침 식사', desc: '하루를 여는 든든한 뷔페식 조식' },
    { time: '08:00 - 12:00', title: '오전 정규 수업', desc: '1:1 원어민 클래스 및 그룹 수업 (4교시)' },
    { time: '12:00 - 13:00', title: '점심 식사 및 휴식', desc: '영양 만점 한식 위주의 중식' },
    { time: '13:00 - 17:00', title: '오후 정규 수업', desc: '1:1 원어민 강사 맞춤형 훈련 (4교시)' },
    { time: '17:00 - 18:00', title: '체육 및 자율 활동', desc: '수영, 체육 활동 또는 개인 휴식' },
    { time: '18:00 - 19:00', title: '저녁 식사', desc: '친구들과 함께하는 맛있는 만찬' },
    { time: '19:00 - 21:00', title: '나이트 클래스', desc: '단어시험, 영어일기 작성 및 질의응답 (자기주도학습)' },
    { time: '21:00 - 22:00', title: '간식 및 취침 준비', desc: '샤워, 가족 통화 및 다음 날 준비' },
  ];

  return (
    <div className="space-y-10 border border-neutral-200 bg-white rounded-3xl p-6 md:p-12">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-600 rounded-2xl mb-4">
          <Clock className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-extrabold text-neutral-900 mb-4">일일 시간표</h2>
        <p className="text-lg text-neutral-600">지루할 틈 없이 알차게 짜여진 평일 스케줄입니다.</p>
      </div>

      <div className="max-w-3xl mx-auto relative">
        <div className="absolute left-[39px] md:left-[50%] top-0 bottom-0 w-px bg-neutral-200 -translate-x-1/2" />
        
        <div className="space-y-6 md:space-y-0 relative">
          {scheduleData.map((item, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-start md:items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
              {/* Timeline dot */}
              <div className="absolute left-[39px] md:left-[50%] w-3 h-3 bg-blue-600 rounded-full border-4 border-white shadow-sm -translate-x-1/2 mt-6 md:mt-0 z-10 transition-transform group-hover:scale-150" />
              
              <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'} py-4`}>
                <div className="bg-neutral-50 p-5 rounded-2xl border border-neutral-100 hover:border-blue-200 hover:shadow-md transition-all">
                  <span className="text-blue-600 font-mono text-sm font-bold mb-1 block">{item.time}</span>
                  <h4 className="text-lg font-bold text-neutral-900">{item.title}</h4>
                  <p className="text-neutral-500 text-sm mt-2">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-12 bg-orange-50 border border-orange-100 p-6 rounded-2xl text-center">
        <h4 className="font-bold text-orange-900 mb-2">🎈 주말 스케줄 (토/일)</h4>
        <p className="text-orange-800 text-sm md:text-base">
          주말에는 정규 수업 대신 푸른 바다 아일랜드 호핑투어, 봉사활동은 물론,<br className="hidden md:block" /> 
          원어민 튜터와 함께 영어를 직접 써보는 <strong className="font-bold border-b border-orange-300">‘쇼핑 미션 실전 필드트립(SM J몰 등)’</strong>이 진행됩니다.
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
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl shadow-xl border border-neutral-200 overflow-hidden flex flex-col md:flex-row">
        
        {/* Contact Info Side */}
        <div className="w-full md:w-2/5 bg-blue-600 p-8 md:p-10 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">상담 문의</h2>
            <p className="text-blue-100 mb-8 opacity-90 leading-relaxed">
              자녀의 첫 캠프, 궁금하신 점이 많으시죠?<br/>
              언제든 편하게 문의해주세요. 친절히 안내해 드리겠습니다.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <PhoneCall className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-blue-200 font-medium">정선영 총괄 / 오명훈 매니저</p>
                  <p className="font-bold text-[15px] sm:text-base">
                    <a href="tel:01053937324" className="hover:underline hover:text-white transition-colors">010-5393-7324</a> / <a href="tel:01045273377" className="hover:underline hover:text-white transition-colors">010-4527-3377</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-yellow-900" />
                </div>
                <div>
                  <p className="text-sm text-blue-200 font-medium">카카오톡 1:1 상담</p>
                  <a href="https://open.kakao.com/o/sPhkO0ji" target="_blank" rel="noopener noreferrer" className="font-bold text-[15px] sm:text-base text-yellow-300 hover:text-yellow-400 hover:underline underline-offset-4">
                    오픈채팅 바로가기
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-blue-200 font-medium">SNS 채널</p>
                  <div className="flex flex-col sm:flex-row sm:gap-3 text-[15px] sm:text-base font-bold">
                    <a href="https://blog.naver.com/readtospeak" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">
                      블로그
                    </a>
                    <span className="hidden sm:inline opacity-50">|</span>
                    <a href="https://instagram.com/gitc_cebu_camp" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">
                      @gitc_cebu_camp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="w-full md:w-3/5 p-8 md:p-10">
          <h3 className="text-2xl font-bold text-neutral-900 mb-6">상담 신청</h3>
          
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-green-900 mb-2">상담 신청이 완료되었습니다!</h4>
              <p className="text-green-700">확인 후 빠른 시일 내에 연락드리겠습니다.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-1">보호자 성함</label>
                  <input required type="text" placeholder="홍길동" className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-1">연락처</label>
                  <input required type="tel" placeholder="010-0000-0000" className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-1">자녀 학년</label>
                <select className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all appearance-none bg-white">
                  <option value="">학년을 선택해주세요</option>
                  <option value="elem-low">초등학교 저학년 (1~3학년)</option>
                  <option value="elem-high">초등학교 고학년 (4~6학년)</option>
                  <option value="middle">중학생</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-1">문의 내용</label>
                <textarea rows={4} placeholder="고민되시는 점이나 궁금한 사항을 자유롭게 적어주세요." className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-4 rounded-xl transition-colors shadow-md mt-2">
                무료 상담 신청하기
              </button>
              <p className="text-xs text-neutral-500 text-center mt-4">
                * 입력하신 정보는 상담 목적으로만 사용되며 안전하게 보호됩니다.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

