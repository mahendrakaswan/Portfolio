'use client';

import Image from 'next/image';
import { siteContent } from '@/data/content';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6">
      <div className="max-w-3xl mx-auto w-full">
        {/* Profile photo above intro, zoomed into face, enlarged circle */}
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-[#e8e2d9] shadow-md mb-8">
          <Image
            src="/profile.jpg"
            alt={siteContent.name}
            fill
            className="object-cover scale-[1.75] origin-[50%_48%]"
            sizes="(max-width: 640px) 160px, 208px"
            priority
          />
        </div>

        <div>
          <p className="font-mono text-sm text-[#8a8078] mb-3">
            hi, i&apos;m
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1a1816] mb-2 tracking-tight">
            Mahendra Kaswan.
          </h1>
          <p className="text-lg sm:text-xl text-[#8a8078] mb-4 font-light">
            <span className="text-[#1a1816]/50 text-sm font-mono">
              or Mahi (nickname)
            </span>
          </p>
          <p className="text-xl sm:text-2xl font-medium text-[#1a1816] mt-6 tracking-tight">
            {siteContent.role}
          </p>
          <p className="text-lg sm:text-xl text-[#8a8078] mt-2 font-light max-w-lg">
            {siteContent.tagline}
          </p>
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
