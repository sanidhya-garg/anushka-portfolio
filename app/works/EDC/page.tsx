'use client';

import { useEffect } from 'react';
import Image from "next/image";
import Navbar from '../../components/Navbar';

export default function EDCPage() {
  useEffect(() => {
    document.title = 'EDC | Anushka Portfolio';
  }, []);

  const images = [2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="min-h-screen">
      <Navbar activePage="works" />

      <div className="pt-0">
      {images.map((num) => (
        <div
          key={num}
          className="relative w-full overflow-hidden"
        >
          <Image
            src={`/assets/edc24/${num}.png`}
            alt={`EDC ${num}`}
            width={1920}
            height={1080}
            className="w-full h-auto object-cover block"
          />
        </div>
      ))}
      </div>
    </div>
  );
}
