import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, ImagePlus, Star, Home, Utensils, X, MapPin } from 'lucide-react';
import { get, set } from 'idb-keyval';

type CategoryType = 'dormitory' | 'meals' | 'activities' | 'field_trips';

const CATEGORIES: { id: CategoryType; label: string; icon: React.ReactNode; desc: string }[] = [
  { id: 'dormitory', label: '숙소 (기숙사)', icon: <Home className="w-5 h-5" />, desc: '안전하고 쾌적한 프리미엄 기숙사 생활' },
  { id: 'meals', label: '식단', icon: <Utensils className="w-5 h-5" />, desc: '매일 제공되는 영양 만점 한국식 뷔페 식단' },
  { id: 'activities', label: '매일 액티비티', icon: <Star className="w-5 h-5" />, desc: '평일&주말 다채로운 방과 후 엑티비티' },
  { id: 'field_trips', label: '실전 필드트립', icon: <MapPin className="w-5 h-5" />, desc: '원어민 튜터와 함께하는 주말 쇼핑 미션 및 생생한 현지 투어' },
];

const DEFAULT_PHOTOS = {
  dormitory: ['https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600&auto=format&fit=crop'],
  meals: ['https://images.unsplash.com/photo-1598514982205-f36b96d1ea8d?q=80&w=600&auto=format&fit=crop'],
  activities: ['https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=600&auto=format&fit=crop'],
  field_trips: ['https://images.unsplash.com/photo-1603354350317-6f7abe2ef31b?q=80&w=600&auto=format&fit=crop'],
};

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('activities');
  const [photos, setPhotos] = useState<Record<CategoryType, string[]>>(DEFAULT_PHOTOS);
  const [isFullscreen, setIsFullscreen] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Load from IndexedDB
    get('gitc_gallery_photos').then((val) => {
      if (val) {
        setPhotos({ ...DEFAULT_PHOTOS, ...val });
      }
    });
  }, []);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newPhotosUrlPromises = Array.from(files).map((file: File) => {
      return new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = (ev) => resolve(ev.target?.result as string);
        reader.readAsDataURL(file);
      });
    });

    const urls = await Promise.all(newPhotosUrlPromises);
    const currentList = photos[activeCategory];
    const combined = [...urls, ...currentList].slice(0, 50); // 최신 사진이 상단, 최대 50장 제한

    const updatedPhotos = { ...photos, [activeCategory]: combined };
    setPhotos(updatedPhotos);
    set('gitc_gallery_photos', updatedPhotos);
    
    // Reset file input
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleDeleteClick = (indexToDelete: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const updatedList = photos[activeCategory].filter((_, i) => i !== indexToDelete);
    const updatedPhotos = { ...photos, [activeCategory]: updatedList };
    setPhotos(updatedPhotos);
    set('gitc_gallery_photos', updatedPhotos);
  };

  return (
    <div className="space-y-12">
      {/* Intro text */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-600 rounded-2xl mb-4">
          <Camera className="w-8 h-8" />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-6 leading-tight">
          시설 및 액티비티 <span className="text-blue-600">통합 갤러리</span>
        </h2>
        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-2xl">
          <p className="text-lg text-neutral-700 leading-relaxed font-medium">
            숙소, 식사, 그리고 <strong className="text-orange-600 text-xl font-bold border-b-2 border-orange-200 indent-1">평일 매일 유지되는 액티비티</strong>까지! <br className="hidden md:block" />
            우리 아이들의 생활 전반을 통합 갤러리에서 모두 모아 감상하실 수 있습니다.
          </p>
        </div>
      </motion.div>

      {/* Gallery Controls */}
      <div className="bg-white p-4 rounded-2xl border border-neutral-200 shadow-sm sticky top-20 z-40">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex bg-neutral-100 p-1.5 rounded-xl w-full md:w-auto">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-sm transition-all duration-200 ${
                  activeCategory === cat.id 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200/50'
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>

          <div className="w-full md:w-auto flex items-center justify-between md:justify-end gap-4 px-2 md:px-0">
            <div className="bg-neutral-100 rounded-full px-4 py-1.5 text-sm font-bold text-neutral-600">
              <span className="text-blue-600">{photos[activeCategory].length}</span> / 50장
            </div>
            {/* hidden file input */}
            <input 
              type="file" 
              accept="image/*" 
              multiple 
              className="hidden" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
            />
            <button 
              onClick={handleUploadClick}
              disabled={photos[activeCategory].length >= 50}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-neutral-300 disabled:cursor-not-allowed text-white px-5 py-2.5 rounded-xl font-bold transition-transform active:scale-95 shadow-md"
            >
              <ImagePlus className="w-5 h-5" />
              <span className="hidden sm:inline">사진 직접 올리기</span>
              <span className="sm:hidden">사진 올리기</span>
            </button>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-neutral-100 text-center text-neutral-600 text-sm">
          {CATEGORIES.find(c => c.id === activeCategory)?.desc}
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
              className="flex flex-col items-center justify-center py-20 text-neutral-400 gap-4"
            >
              <Camera className="w-16 h-16 opacity-30" />
              <p>등록된 사진이 없습니다. 우측 상단 버튼을 눌러 사진을 올려주세요.</p>
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
                    <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    
                    {/* Delete button (only visible on hover) */}
                    <button 
                      onClick={(e) => handleDeleteClick(idx, e)}
                      className="absolute top-2 right-2 p-1.5 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500"
                    >
                      <X className="w-4 h-4" />
                    </button>

                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white text-xs font-bold shadow-sm">
                        {CATEGORIES.find(c => c.id === activeCategory)?.label} {photos[activeCategory].length - idx}
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
