'use client';

import { useEffect } from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from '../../components/Navbar';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

export default function BHMPage() {
  useEffect(() => {
    document.title = 'BHM | Anushka Portfolio';
  }, []);

  const images = Array.from({ length: 18 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen">
      <Navbar activePage="works" />

      <div className="pt-0">
      {images.map((num) => (
        <motion.div
          key={num}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="relative w-full overflow-hidden"
        >
          <Image
            src={`/assets/BHM/${num}.jpg`}
            alt={`BHM ${num}`}
            width={1920}
            height={1080}
            className="w-full h-auto object-cover block"
          />
        </motion.div>
      ))}
      </div>
    </div>
  );
}
