import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Camera,
  Star,
  Home,
  Utensils,
  X,
  MapPin,
  Building,
} from "lucide-react";

type CategoryType = "dormitory" | "meals" | "activities" | "field_trips" | "cebu_campus";

const CATEGORIES: {
  id: CategoryType;
  label: string;
  icon: React.ReactNode;
  desc: string;
}[] = [
  {
    id: "cebu_campus",
    label: "세부캠퍼스",
    icon: <Building className="w-5 h-5" />,
    desc: "공부 방해가 없는 최적의 면학 분위기, 세부 캠퍼스",
  },
  {
    id: "dormitory",
    label: "숙소 (기숙사)",
    icon: <Home className="w-5 h-5" />,
    desc: "안전하고 쾌적한 프리미엄 기숙사 생활",
  },
  {
    id: "meals",
    label: "식단",
    icon: <Utensils className="w-5 h-5" />,
    desc: "매일 제공되는 영양 만점 한국식 뷔페 식단",
  },
  {
    id: "activities",
    label: "매일 액티비티",
    icon: <Star className="w-5 h-5" />,
    desc: "평일&주말 다채로운 방과 후 엑티비티",
  },
  {
    id: "field_trips",
    label: "실전 필드트립",
    icon: <MapPin className="w-5 h-5" />,
    desc: "원어민 튜터와 함께하는 주말 쇼핑 미션 및 생생한 현지 투어",
  },
];

const dormFiles = import.meta.glob('/public/dormitory/*.{jpg,jpeg,png,webp,gif,JPG,JPEG,PNG,WEBP,GIF}', { eager: true });
const mealFiles = import.meta.glob('/public/meals/*.{jpg,jpeg,png,webp,gif,JPG,JPEG,PNG,WEBP,GIF}', { eager: true });
const activityFiles = import.meta.glob('/public/activities/*.{jpg,jpeg,png,webp,gif,JPG,JPEG,PNG,WEBP,GIF}', { eager: true });
const fieldTripFiles = import.meta.glob('/public/field_trips/*.{jpg,jpeg,png,webp,gif,JPG,JPEG,PNG,WEBP,GIF}', { eager: true });
const cebuCampusFiles = import.meta.glob('/public/cebu_campus/*.{jpg,jpeg,png,webp,gif,JPG,JPEG,PNG,WEBP,GIF}', { eager: true });

const getPaths = (files: Record<string, unknown>) => Object.keys(files).map((key) => import.meta.env.BASE_URL + encodeURI(key.replace('/public/', '')));

const DEFAULT_PHOTOS: Record<CategoryType, string[]> = {
  cebu_campus: getPaths(cebuCampusFiles).length > 0 ? getPaths(cebuCampusFiles) : [
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop",
  ],
  dormitory: getPaths(dormFiles).length > 0 ? getPaths(dormFiles) : [
    "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600&auto=format&fit=crop",
  ],
  meals: getPaths(mealFiles).length > 0 ? getPaths(mealFiles) : [
    "https://images.unsplash.com/photo-1598514982205-f36b96d1ea8d?q=80&w=600&auto=format&fit=crop",
  ],
  activities: getPaths(activityFiles).length > 0 ? getPaths(activityFiles) : [
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=600&auto=format&fit=crop",
  ],
  field_trips: getPaths(fieldTripFiles).length > 0 ? getPaths(fieldTripFiles) : [
    "https://images.unsplash.com/photo-1603354350317-6f7abe2ef31b?q=80&w=600&auto=format&fit=crop",
  ],
};

export default function GallerySection() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryType>("meals");
  const [isFullscreen, setIsFullscreen] = useState<string | null>(null);

  const photos = DEFAULT_PHOTOS;

  return (
    <div className="space-y-12">
      {/* Intro text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <span className="text-[#96754a] font-semibold tracking-[0.2em] text-xs mb-4 block uppercase flex items-center justify-center gap-2">
          <span className="w-8 h-[1px] bg-[#96754a]"></span>
          Gallery
          <span className="w-8 h-[1px] bg-[#96754a]"></span>
        </span>
        <h2 className="text-4xl md:text-5xl  text-neutral-900  mb-6">
          시설 및 액티비티 갤러리
        </h2>
        <div className="bg-[#fcfbf9] border border-[#c5a880]/20 p-8">
          <p className="text-neutral-600  leading-relaxed">
            숙소, 식사, 그리고{" "}
            <strong className="text-neutral-900  font-medium">
              평일 매일 유지되는 액티비티
            </strong>
            까지! <br className="hidden md:block" />
            우리 아이들의 생활 전반을 통합 갤러리에서 모두 감상하실 수 있습니다.
          </p>
        </div>
      </motion.div>

      {/* Gallery Controls */}
      <div className="bg-white p-4 border-b-2 border-neutral-900 sticky top-20 z-40 mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex w-full md:w-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-4 border-t-2 border-l-2 border-r-2 -mb-0.5 text-sm transition-all duration-300  tracking-wide ${
                  activeCategory === cat.id
                    ? "border-neutral-900 bg-neutral-900 text-white"
                    : "border-transparent text-neutral-300 hover:text-neutral-900"
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-neutral-100/50 text-center text-neutral-600  text-sm">
          {CATEGORIES.find((c) => c.id === activeCategory)?.desc}
        </div>
      </div>

      {/* Photo Grid */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {photos[activeCategory].length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-20 text-neutral-300 gap-4"
            >
              <Camera className="w-16 h-16 opacity-30" />
              <p>
                등록된 사진이 없습니다. 우측 상단 버튼을 눌러 사진을 올려주세요.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              <AnimatePresence>
                {photos[activeCategory].map((img, idx) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                    key={`${activeCategory}-${idx}-${img.length}`} // avoid index keys, but base64 strings might be too long so index is fine since we prepend/remove safely
                    className="aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-xl group relative bg-neutral-100 cursor-pointer"
                    onClick={() => setIsFullscreen(img)}
                  >
                    <img
                      src={img}
                      alt={`Gallery ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />

                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white text-xs font-bold shadow-sm">
                        {CATEGORIES.find((c) => c.id === activeCategory)?.label}{" "}
                        {photos[activeCategory].length - idx}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Fullscreen Lightbox Overlay */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsFullscreen(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setIsFullscreen(null)}
            >
              <X className="w-10 h-10" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={isFullscreen}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
