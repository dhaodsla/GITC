import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import JuniorCamp from "./pages/JuniorCamp";
import FamilyCamp from "./pages/FamilyCamp";

export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

function LandingPage() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4500); // Wait 4.5 seconds like the original splash
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

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-8 relative overflow-hidden">
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

      {/* Main Landing Content that appears after splash */}
      {!showSplash && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
          className="relative z-10 w-full h-full flex flex-col"
        >
          <div className="absolute inset-0 z-0">
             <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#c5a880] rounded-full mix-blend-screen filter blur-[120px] md:blur-[200px] opacity-20 animate-pulse"></div>
             <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] md:w-[700px] md:h-[700px] bg-[#8c6d46] rounded-full mix-blend-screen filter blur-[150px] md:blur-[250px] opacity-10 animate-pulse"></div>
          </div>
          <div className="max-w-2xl mx-auto text-center space-y-12 relative z-10 my-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif tracking-[0.1em] uppercase font-light leading-tight">
                GITC <span className="text-[#c5a880] italic">Cebu</span><br />
                <span className="text-3xl md:text-5xl lg:text-6xl tracking-[0.2em] mt-4 md:mt-8 block">English Camp</span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <Link
                to="/junior"
                className="px-10 py-5 bg-[#c5a880] border border-[#c5a880] text-black tracking-[0.2em] uppercase font-bold hover:bg-[#a68860] hover:border-[#a68860] transition-all rounded-full"
              >
                Junior Camp (초·중학생)
              </Link>
              <Link
                to="/family"
                className="px-10 py-5 bg-[#c5a880] border border-[#c5a880] text-black tracking-[0.2em] uppercase font-bold hover:bg-[#a68860] hover:border-[#a68860] transition-all rounded-full"
              >
                Family Camp (가족연수)
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="w-full">
      {location.pathname === "/" && <LandingPage />}
      
      <Routes>
        <Route path="/junior" element={<JuniorCamp />} />
        <Route path="/family" element={<FamilyCamp />} />
      </Routes>
    </div>
  );
}
