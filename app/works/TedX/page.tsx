'use client';

import { useEffect } from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from '../../components/Navbar';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function TedX() {
  useEffect(() => {
    document.title = 'TEDx | Anushka Portfolio';
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar activePage="works" />

      {/* Top section with video */}
      <div 
        className="h-screen flex flex-col overflow-hidden pt-0"
      >
        {/* Video section - fills full height */}
        <div className="flex-1 relative bg-black overflow-hidden">
          <video
            className="absolute top-1/2 left-1/2"
            autoPlay
            loop
            muted
            playsInline
            style={{ 
              transform: 'translate(-50%, -50%) rotate(270deg)',
              width: '177.78vh',
              height: 'auto',
              minHeight: '100%',
              minWidth: '100%'
            }}
          >
            <source src="/assets/Tedx/Tedx.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* About section with background */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
        className="bg-black px-8 md:px-16 lg:px-24 pt-20 pb-0"
      >
        <div className="max-w-6xl mb-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
            About TEDx IIT Delhi
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white/95 leading-relaxed max-w-5xl font-light">
            TEDx IIT Delhi is a platform where technology, society, and innovation converge to empower minds and inspire change. We bring together visionaries, industry leaders, and changemakers to share groundbreaking ideas that drive meaningful impact. Our mission is to spark conversations that bridge the gap between technological advancements and societal progress, fostering a future where innovation catalyzes empowerment.
          </p>
        </div>
      </motion.div>

      {/* New section with background */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="bg-black px-4 py-0"
      >
        <div className="grid grid-cols-3 gap-0 max-w-full leading-[0]">
          <motion.div variants={fadeIn} transition={{ duration: 0.5 }} className="relative w-full h-[600px] overflow-hidden leading-[0]">
            <Image
              src="/assets/Tedx/Car 1/Frame 29.png"
              alt="TEDx Frame 29"
              width={800}
              height={1200}
              className="w-full h-full object-cover object-top block"
            />
          </motion.div>
          <motion.div variants={fadeIn} transition={{ duration: 0.5 }} className="relative w-full h-[600px] overflow-hidden leading-[0]">
            <Image
              src="/assets/Tedx/Car 1/Frame 31.png"
              alt="TEDx Frame 31"
              width={800}
              height={1200}
              className="w-full h-full object-cover object-top block"
            />
          </motion.div>
          <motion.div variants={fadeIn} transition={{ duration: 0.5 }} className="relative w-full h-[600px] overflow-hidden leading-[0]">
            <Image
              src="/assets/Tedx/Car 1/Frame 33.png"
              alt="TEDx Frame 33"
              width={800}
              height={1200}
              className="w-full h-full object-cover object-top block"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Text section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="bg-black px-4 py-16"
      >
        <div className="max-w-full mx-auto text-center">
          <motion.h3 
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 leading-relaxed"
          >
            Ideas that empower minds, technology that shapes the future.
          </motion.h3>
          <motion.p 
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-white/90 leading-relaxed mb-4"
          >
            At TEDxIIT Delhi, we're bringing together visionary speakers, groundbreaking ideas, and the latest in technology to spark innovation and inspire the minds of tomorrow. Get ready to explore how technology is not just changing the world, but empowering each one of us to create a better, more connected future.
          </motion.p>
        </div>
      </motion.div>

      {/* Frame 163 Image */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        variants={fadeIn}
        className="bg-black px-4 py-0"
      >
        <div className="relative w-full overflow-hidden">
          <Image
            src="/assets/Tedx/Frame 163.png"
            alt="TEDx Frame 163"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover block"
          />
        </div>
      </motion.div>

      {/* Speaker Grid 3x4 */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="bg-black px-8 py-8"
      >
        <div className="grid grid-cols-3 gap-x-0 gap-y-6 max-w-full">
          {[75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86].map((num, index) => (
            <motion.div 
              key={num} 
              variants={fadeIn}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative w-full aspect-square overflow-hidden"
            >
              <Image
                src={`/assets/Tedx/Speaker/Frame ${num}.png`}
                alt={`Speaker ${num - 74}`}
                width={600}
                height={600}
                className="w-full h-full object-cover block"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Merchandise Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5 }}
        variants={fadeInUp}
        className="bg-black px-8 pt-12 pb-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Merchandise</h2>
      </motion.div>

      {/* Merch - 3 items in a row */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="bg-black px-8 py-0"
      >
        <div className="grid grid-cols-3 gap-6 max-w-full">
          <motion.div variants={fadeInUp} transition={{ duration: 0.5 }} className="relative w-full h-[600px] overflow-hidden">
            <Image
              src="/assets/Tedx/Merch/Tote bag.png"
              alt="Tote Bag"
              width={600}
              height={800}
              className="w-full h-full object-cover block"
            />
          </motion.div>
          <motion.div variants={fadeInUp} transition={{ duration: 0.5, delay: 0.1 }} className="relative w-full h-[600px] overflow-hidden">
            <Image
              src="/assets/Tedx/Merch/Book.png"
              alt="Book"
              width={600}
              height={800}
              className="w-full h-full object-cover block"
            />
          </motion.div>
          <motion.div variants={fadeInUp} transition={{ duration: 0.5, delay: 0.2 }} className="relative w-full h-[600px] overflow-hidden">
            <Image
              src="/assets/Tedx/Merch/Tshirt.png"
              alt="T-shirt"
              width={600}
              height={800}
              className="w-full h-full object-cover block"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* TEDx Team Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5 }}
        variants={fadeInUp}
        className="bg-black px-8 pt-12 pb-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">TEDx Team</h2>
      </motion.div>

      {/* Team Posts - 5 in a row */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="bg-black px-8 py-0"
      >
        <div className="grid grid-cols-5 gap-0 max-w-full">
          {[152, 149, 146, 145, 133].map((num, index) => (
            <motion.div 
              key={num} 
              variants={fadeIn}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative w-full overflow-hidden"
            >
              <Image
                src={`/assets/Tedx/TeamPost/Frame ${num}.png`}
                alt={`Team Post ${num}`}
                width={400}
                height={600}
                className="w-full h-auto object-cover block"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
