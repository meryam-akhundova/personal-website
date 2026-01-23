"use client";

import { useState } from "react";
import Image from "next/image";

interface MobileCarouselProps {
  images: string[];
  alt: string;
}

export default function MobileCarousel({ images, alt }: MobileCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Number of images visible at once (2.5 means 2 full + 1 half visible)
  const imagesPerView = 2.5;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const goToNext = () => {
    const maxIndex = Math.max(0, images.length - imagesPerView);
    setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1));
  };

  const goToSlide = (index: number) => {
    const maxIndex = Math.max(0, images.length - imagesPerView);
    setCurrentIndex(Math.min(maxIndex, Math.max(0, index)));
  };

  if (!images || images.length === 0) {
    return null;
  }

  const maxIndex = Math.max(0, images.length - imagesPerView);
  const canGoNext = currentIndex < maxIndex;
  const canGoPrev = currentIndex > 0;

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div className="relative h-96 sm:h-[500px] w-full overflow-hidden rounded-t-3xl bg-gradient-to-b from-white/10 to-transparent">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full gap-2 px-4"
          style={{
            transform: `translateX(calc(-${currentIndex} * (100% / ${imagesPerView} + 0.5rem)))`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 relative"
              style={{
                width: `calc(${100 / imagesPerView}% - 0.25rem)`,
              }}
            >
              <div className="relative h-full w-full mx-auto rounded-xl overflow-hidden" style={{ maxWidth: '180px' }}>
                <Image
                  src={image}
                  alt={`${alt} - Image ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {images.length > imagesPerView && (
          <>
            <button
              onClick={goToPrevious}
              disabled={!canGoPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full glass backdrop-blur-sm hover:scale-110 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous image"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ color: '#543618' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={goToNext}
              disabled={!canGoNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full glass backdrop-blur-sm hover:scale-110 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next image"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ color: '#543618' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > imagesPerView && (
          <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full glass backdrop-blur-sm text-sm font-medium"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', color: '#543618' }}
          >
            {Math.floor(currentIndex) + 1} / {Math.ceil(maxIndex) + 1}
          </div>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="flex gap-2 p-4 overflow-x-auto scrollbar-hide bg-white/10 backdrop-blur-sm">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                index >= currentIndex && index < currentIndex + imagesPerView
                  ? "border-[#DB5079] scale-105"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={image}
                alt={`${alt} thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
