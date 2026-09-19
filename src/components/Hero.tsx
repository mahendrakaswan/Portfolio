'use client';

import Image from 'next/image';
import { siteContent } from '@/data/content';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6">
      <div className="max-w-3xl mx-auto w-full">
        {/* Picture and intro standing parallel next to each other with generous spacing */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 sm:gap-14 md:gap-16">
          {/* Profile photo: slightly bigger with slight shadow */}
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 shrink-0 rounded-full overflow-hidden border-2 border-[#e8e2d9] shadow-lg shadow-[#1a1816]/10">
            <Image
              src="/profile.jpg"
              alt={siteContent.name}
              fill
              className="object-cover scale-[1.75] origin-[50%_48%]"
              sizes="(max-width: 640px) 176px, (max-width: 768px) 208px, 224px"
              priority
            />
          </div>

          {/* Introduction section */}
          <div className="flex-1">
            <p className="font-mono text-sm text-[#8a8078] mb-2">
              hi, i&apos;m
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1a1816] mb-3 tracking-tight">
              Mahendra Kaswan.
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-[#1a1816] mt-4 tracking-tight">
              {siteContent.role}
            </p>
            <p className="text-base sm:text-lg text-[#8a8078] mt-2 font-light max-w-lg">
              {siteContent.tagline}
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-6">
          <a
            href="#about"
            className="font-mono text-xs text-[#8a8078] hover:text-[#c26a3f] transition-colors"
          >
            ↓ scroll
          </a>
        </div>
      </div>
    </section>
  );
}
