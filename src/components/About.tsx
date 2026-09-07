'use client';

import { useEffect, useRef } from 'react';
import SectionHeading from './SectionHeading';
import { siteContent } from '@/data/content';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-animate py-24 px-6"
    >
      <div className="max-w-3xl mx-auto">
        <SectionHeading label="about" />

        <div className="space-y-4">
          {siteContent.bio.map((paragraph, i) => (
            <p key={i} className="text-lg text-[#1a1816]/80 leading-relaxed font-light">
              {paragraph}
            </p>
          ))}
        </div>

        {siteContent.quote && (
          <div className="mt-8 pl-4 border-l-2 border-[#c26a3f]/50 py-1">
            <p className="font-mono text-xs text-[#8a8078] mb-1">// life quote</p>
            <p className="text-base sm:text-lg text-[#1a1816]/90 font-light italic">
              &ldquo;{siteContent.quote}&rdquo;
            </p>
          </div>
        )}

        {/* Currently section */}
        <div className="mt-12 space-y-3">
          <h3 className="font-mono text-xs tracking-wider text-[#8a8078] uppercase">
            currently
          </h3>
          <div className="space-y-2">
            {siteContent.currently.working && (
              <p className="text-[#1a1816]/70">
                <span className="text-[#c26a3f] mr-2">→</span>
                <span className="font-mono text-xs text-[#8a8078] mr-2">working:</span>
                {siteContent.currently.working}
              </p>
            )}
            <p className="text-[#1a1816]/70">
              <span className="text-[#c26a3f] mr-2">→</span>
              <span className="font-mono text-xs text-[#8a8078] mr-2">reading:</span>
              {siteContent.currently.reading}
            </p>
            <p className="text-[#1a1816]/70">
              <span className="text-[#c26a3f] mr-2">→</span>
              <span className="font-mono text-xs text-[#8a8078] mr-2">finished:</span>
              {siteContent.currently.finished}
            </p>
            <p className="text-[#1a1816]/70">
              <span className="text-[#c26a3f] mr-2">→</span>
              <span className="font-mono text-xs text-[#8a8078] mr-2">training:</span>
              {siteContent.currently.training}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
