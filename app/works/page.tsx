'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function WorksPage() {

  useEffect(() => {
    document.title = 'Works | Anushka Portfolio';
  }, []);

  // Gallery / Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalIndex, setModalIndex] = useState(0);
  const autoplayRef = useRef<number | null>(null);

  // Example image sets per project
  const TEDxImages = [
    '/assets/Tedx/Speaker/Frame 75.png',
    '/assets/Tedx/Speaker/Frame 76.png',
    '/assets/Tedx/Merch/Tote bag.png',
    '/assets/Tedx/TeamPost/Frame 152.png'
  ];

  const BEConImages = [
    '/assets/BECon24/grid/1.png',
    '/assets/BECon24/grid/2.png',
    '/assets/BECon24/grid/3.png',
    '/assets/BECon24/grid/4.png'
  ];

  const BHMImages = [
    '/assets/BHM/1.jpg',
    '/assets/BHM/2.jpg',
    '/assets/BHM/3.jpg',
    '/assets/BHM/4.jpg',
    '/assets/BHM/5.jpg'
  ];

  function openGallery(images: string[], start = 0) {
    setModalImages(images);
    setModalIndex(start);
    setModalOpen(true);
  }

  function closeGallery() {
    setModalOpen(false);
    setModalImages([]);
    setModalIndex(0);
  }

  // keyboard navigation when modal open
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!modalOpen) return;
      if (e.key === 'Escape') closeGallery();
      if (e.key === 'ArrowRight') setModalIndex((i) => (i + 1) % modalImages.length);
      if (e.key === 'ArrowLeft') setModalIndex((i) => (i - 1 + modalImages.length) % modalImages.length);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modalOpen, modalImages.length]);

  // autoplay
  useEffect(() => {
    if (!modalOpen) return;
    autoplayRef.current = window.setInterval(() => {
      setModalIndex((i) => (i + 1) % modalImages.length);
    }, 3500);
    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    };
  }, [modalOpen, modalImages.length]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 12
      }
    }
  };

  const slideFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15
      }
    }
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Animated gradient background */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      <Navbar activePage="works" />

      {/* Main Content */}
      <div className="pt-32 px-4 md:px-16">
        {/* Project 1 - BHM */}
        <section className="min-h-screen flex items-center py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto w-full">
            {/* Text Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="flex flex-col justify-center space-y-6"
            >
              <motion.h1 
                variants={fadeInUp}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(251,146,60,0.5)]"
                whileHover={{ scale: 1.05 }}
              >
                BHM
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-sm md:text-base text-white/60 tracking-widest uppercase"
              >
                UI/UX
              </motion.p>
              <motion.p 
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-white/80 leading-relaxed"
              >
                UI/UX Journey of the Mess Management App for  Board of Hostel Management IIT Delhi.
              </motion.p>
              <motion.a 
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.3 }}
                href="/works/BHM" 
                className="flex items-center gap-3 text-white hover:text-red-400 transition-colors group w-fit"
              >
                <span className="text-sm tracking-widest uppercase">SEE COLLECTION</span>
                <span className="transform group-hover:translate-x-2 transition-transform">→</span>
              </motion.a>
            </motion.div>

            {/* Image Grid */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="grid grid-cols-2 gap-4"
            >
              <motion.div 
                variants={slideFromLeft}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative h-64 md:h-80 overflow-hidden rounded-2xl group cursor-pointer shadow-2xl"
                onClick={() => openGallery(BHMImages, 0)}
                >
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image src="/assets/BHM/1.jpg" alt="BHM 1" fill className="object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2" />
                <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-sm font-semibold">Visual Story</p>
                </div>
              </motion.div>
              <motion.div 
                variants={slideFromRight}
                transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                className="relative h-40 md:h-60 mt-12 overflow-hidden rounded-2xl group cursor-pointer shadow-2xl"
                onClick={() => openGallery(BHMImages, 1)}
                >
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image src="/assets/BHM/2.jpg" alt="BHM 2" fill className="object-cover transition-all duration-700 group-hover:scale-125 group-hover:-rotate-2" />
                <div className="absolute bottom-3 left-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-xs font-semibold">Moments</p>
                </div>
              </motion.div>
              <motion.div 
                variants={slideFromLeft}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="relative h-40 md:h-60 -mt-8 overflow-hidden rounded-2xl group cursor-pointer shadow-2xl"
                onClick={() => openGallery(BHMImages, 2)}
                >
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image src="/assets/BHM/3.jpg" alt="BHM 3" fill className="object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-3" />
                <div className="absolute bottom-3 left-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-xs font-semibold">Perspectives</p>
                </div>
              </motion.div>
              <motion.div 
                variants={slideFromRight}
                transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
                className="relative h-64 md:h-80 -mt-20 overflow-hidden rounded-2xl group cursor-pointer shadow-2xl"
                onClick={() => openGallery(BHMImages, 3)}
                >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image src="/assets/BHM/4.jpg" alt="BHM 4" fill className="object-cover transition-all duration-700 group-hover:scale-125 group-hover:-rotate-2" />
                <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-sm font-semibold">Creativity</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Project 2 - TEDx */}
        <section className="min-h-screen flex items-center py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto w-full">
            {/* Image Grid */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="grid grid-cols-2 gap-4 order-2 lg:order-1"
            >
              <motion.div 
                variants={slideFromRight}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative h-64 md:h-80 overflow-hidden rounded-2xl group cursor-pointer shadow-2xl shadow-red-500/20 hover:shadow-red-500/60"
                onClick={() => openGallery(TEDxImages, 0)}
                whileHover={{ y: -5 }}
                >
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/70 via-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image src="/assets/Tedx/Speaker/Frame 75.png" alt="TEDx 1" fill className="object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2" />
                <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-sm font-semibold">Speaker Highlight</p>
                </div>
              </motion.div>
              <motion.div 
                variants={slideFromLeft}
                transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                className="relative h-40 md:h-60 mt-12 overflow-hidden rounded-2xl group cursor-pointer shadow-2xl"
                onClick={() => openGallery(TEDxImages, 1)}
                >
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image src="/assets/Tedx/Speaker/Frame 76.png" alt="TEDx 2" fill className="object-cover transition-all duration-700 group-hover:scale-125 group-hover:-rotate-2" />
                <div className="absolute bottom-3 left-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-xs font-semibold">Featured Talk</p>
                </div>
              </motion.div>
              <motion.div 
                variants={slideFromRight}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="relative h-40 md:h-60 -mt-8 overflow-hidden rounded-2xl group cursor-pointer shadow-2xl"
                onClick={() => openGallery(TEDxImages, 2)}
                >
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image src="/assets/Tedx/Merch/Tote bag.png" alt="TEDx 3" fill className="object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-3" />
                <div className="absolute bottom-3 left-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-xs font-semibold">Exclusive Merch</p>
                </div>
              </motion.div>
              <motion.div 
                variants={slideFromLeft}
                transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
                className="relative h-64 md:h-80 -mt-20 overflow-hidden rounded-2xl group cursor-pointer shadow-2xl"
                onClick={() => openGallery(TEDxImages, 3)}
                >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image src="/assets/Tedx/TeamPost/Frame 152.png" alt="TEDx 4" fill className="object-cover transition-all duration-700 group-hover:scale-125 group-hover:-rotate-2" />
                <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-sm font-semibold">Behind The Scenes</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Text Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="flex flex-col justify-center space-y-6 order-1 lg:order-2"
            >
              <motion.h1 
                variants={fadeInUp}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]"
                whileHover={{ scale: 1.05 }}
              >
                TEDx
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-sm md:text-base text-white/60 tracking-widest uppercase"
              >
                IIT Delhi Event
              </motion.p>
              <motion.p 
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-white/80 leading-relaxed"
              >
                A comprehensive event showcase featuring speakers, team, and merchandise for TEDx IIT Delhi.
              </motion.p>
              <motion.a 
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.3 }}
                href="/works/TedX" 
                className="flex items-center gap-3 text-white hover:text-red-400 transition-colors group w-fit"
              >
                <span className="text-sm tracking-widest uppercase">SEE COLLECTION</span>
                <span className="transform group-hover:translate-x-2 transition-transform">→</span>
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Project 3 - BECon24 */}
        <section className="min-h-screen flex items-center py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto w-full">
            {/* Text Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="flex flex-col justify-center space-y-6"
            >
              <motion.h1 
                variants={fadeInUp}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(99,102,241,0.5)]"
                whileHover={{ scale: 1.05 }}
              >
                BECon24
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-sm md:text-base text-white/60 tracking-widest uppercase"
              >
                Business & Entrepreneurship
              </motion.p>
              <motion.p 
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-white/80 leading-relaxed"
              >
                Showcasing the energy and innovation of the Business & Entrepreneurship Conclave 2024.
              </motion.p>
              <motion.a 
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.3 }}
                href="/works/BECon24" 
                className="flex items-center gap-3 text-white hover:text-red-400 transition-colors group w-fit"
              >
                <span className="text-sm tracking-widest uppercase">SEE COLLECTION</span>
                <span className="transform group-hover:translate-x-2 transition-transform">→</span>
              </motion.a>
            </motion.div>

            {/* Image Grid */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="grid grid-cols-2 gap-4"
            >
              <motion.div 
                variants={slideFromLeft}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative h-64 md:h-80 overflow-hidden rounded-2xl group cursor-pointer shadow-2xl"
                onClick={() => openGallery(BEConImages, 0)}
                >
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image src="/assets/BECon24/grid/1.png" alt="BECon 1" fill className="object-cover transition-all duration-700 group-hover:scale-125 group-hover:-rotate-2" />
                <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-sm font-semibold">Event Highlights</p>
                </div>
              </motion.div>
              <motion.div 
                variants={slideFromRight}
                transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                className="relative h-40 md:h-60 mt-12 overflow-hidden rounded-2xl group cursor-pointer shadow-2xl"
                onClick={() => openGallery(BEConImages, 1)}
                >
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image src="/assets/BECon24/grid/2.png" alt="BECon 2" fill className="object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2" />
                <div className="absolute bottom-3 left-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-xs font-semibold">Networking</p>
                </div>
              </motion.div>
              <motion.div 
                variants={slideFromLeft}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="relative h-40 md:h-60 -mt-8 overflow-hidden rounded-2xl group cursor-pointer shadow-2xl"
                onClick={() => openGallery(BEConImages, 2)}
                >
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image src="/assets/BECon24/grid/3.png" alt="BECon 3" fill className="object-cover transition-all duration-700 group-hover:scale-125 group-hover:-rotate-3" />
                <div className="absolute bottom-3 left-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-xs font-semibold">Innovation</p>
                </div>
              </motion.div>
              <motion.div 
                variants={slideFromRight}
                transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
                className="relative h-64 md:h-80 -mt-20 overflow-hidden rounded-2xl group cursor-pointer shadow-2xl"
                onClick={() => openGallery(BEConImages, 3)}
                >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image src="/assets/BECon24/grid/4.png" alt="BECon 4" fill className="object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2" />
                <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-sm font-semibold">Speakers</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Modal / Lightbox */}
      {modalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeGallery}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-5xl mx-4 md:mx-auto p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeGallery}
              className="absolute top-3 right-3 z-50 p-3 bg-black/60 hover:bg-red-500/80 text-white rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90 backdrop-blur-md border border-white/20"
              aria-label="Close gallery"
            >
              ✕
            </button>

            <motion.div 
              key={modalIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative h-[70vh] bg-gradient-to-br from-black via-gray-900 to-black rounded-lg overflow-hidden flex items-center justify-center shadow-2xl"
            >
              <Image
                src={modalImages[modalIndex]}
                alt={`Image ${modalIndex + 1}`}
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Prev / Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setModalIndex((i) => (i - 1 + modalImages.length) % modalImages.length);
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-50 p-4 bg-black/60 hover:bg-white/20 rounded-full text-white text-2xl transition-all duration-300 hover:scale-110 backdrop-blur-md border border-white/20"
              aria-label="Previous image"
            >
              ‹
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setModalIndex((i) => (i + 1) % modalImages.length);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-50 p-4 bg-black/60 hover:bg-white/20 rounded-full text-white text-2xl transition-all duration-300 hover:scale-110 backdrop-blur-md border border-white/20"
              aria-label="Next image"
            >
              ›
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-6">
              {modalImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalIndex(idx);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    idx === modalIndex 
                      ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] scale-110' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}

    </div>
  );
}
