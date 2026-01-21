"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// List of all photos in the bill directory
const PHOTOS = [
  "/img/party1/bill/260106-1847-25.jpg",
  "/img/party1/bill/260106-1911-24.jpg",
  "/img/party1/bill/260106-1929-13.jpg",
  "/img/party1/bill/260106-1949-38.jpg",
  "/img/party1/bill/260106-1951-36.jpg",
  "/img/party1/bill/260106-1959-03.jpg",
  "/img/party1/bill/260106-2005-34.jpg",
  "/img/party1/bill/260106-2011-03.jpg",
  "/img/party1/bill/260106-2017-03.jpg",
  "/img/party1/bill/260106-2040-34.jpg",
  "/img/party1/bill/260106-2050-09.jpg",
  "/img/party1/bill/260106-2053-20.jpg",
  "/img/party1/bill/260106-2112-02.jpg",
  "/img/party1/bill/260106-2120-02.jpg",
  "/img/party1/bill/260106-2145-15.jpg",
  "/img/party1/bill/260106-2203-34.jpg",
];

// Shuffle array function
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function PhotoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledPhotos, setShuffledPhotos] = useState<string[]>([]);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Initialize with shuffled photos on mount and detect mobile
  useEffect(() => {
    const shuffled = shuffleArray(PHOTOS);
    setShuffledPhotos(shuffled);
    if (shuffled.length > 1) {
      setNextIndex(1);
    }
    
    // Detect mobile on mount
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (shuffledPhotos.length === 0) return;

    const interval = setInterval(() => {
      if (isMobile) {
        // On mobile: instant change, no transition
        setCurrentIndex((prev) => {
          const newIndex = (prev + 1) % shuffledPhotos.length;
          setNextIndex((newIndex + 1) % shuffledPhotos.length);
          return newIndex;
        });
      } else {
        // On desktop: fade transition
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentIndex((prev) => {
            const newIndex = (prev + 1) % shuffledPhotos.length;
            setNextIndex((newIndex + 1) % shuffledPhotos.length);
            return newIndex;
          });
          setIsTransitioning(false);
        }, 600); // Match transition duration
      }
    }, 4000); // 4 seconds per photo

    return () => clearInterval(interval);
  }, [shuffledPhotos.length, isMobile]);

  if (shuffledPhotos.length === 0) {
    return null;
  }

  const currentPhoto = shuffledPhotos[currentIndex];
  const nextPhoto = shuffledPhotos[nextIndex];

  return (
    <div className="w-full mb-6">
      <div className="rounded overflow-hidden border-4 border-black">
        <div className="relative w-full aspect-video">
          {/* Current image - fades out during transition on desktop, instant on mobile */}
          <Image
            key={`current-${currentIndex}`}
            src={currentPhoto}
            alt="Party photo"
            fill
            className={`object-cover photo-slider-image ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          />
          {/* Next image - fades in during transition on desktop, instant on mobile */}
          <Image
            key={`next-${nextIndex}`}
            src={nextPhoto}
            alt="Party photo"
            fill
            className={`object-cover photo-slider-image absolute inset-0 ${
              isTransitioning ? "opacity-100" : "opacity-0"
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          />
        </div>
      </div>
      <p className="text-lg text-black mt-3 font-medium font-['Baskerville'] text-center">
        From The Zahir&apos;s Inaugural Gala Benefit. Photos by{" "}
        <a
          href="https://billmccullough.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold hover:underline transition-all text-[#490f0f]"
        >
          Bill McCullough
        </a>
        .
      </p>
    </div>
  );
}
