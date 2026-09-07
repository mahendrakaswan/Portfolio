'use client';

import { useEffect, useRef } from 'react';
import SectionHeading from './SectionHeading';
import { siteContent } from '@/data/content';

export default function Writing() {
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

  // Find substack link
  const substackLink = siteContent.social.find(s => s.label === 'substack');

  return (
    <section
      id="writing"
      ref={sectionRef}
      className="section-animate py-24 px-6"
    >
      <div className="max-w-3xl mx-auto">
        <SectionHeading label="writing" />
        <div className="space-y-6">
          <p className="text-lg text-[#1a1816]/80 font-light leading-relaxed">
            I write about things I&apos;m learning, thinking about, and working through.
            Mostly on Substack, with a mix of reflections, analysis, and whatever&apos;s on my mind.
          </p>
          {substackLink && (
            <a
              href={substackLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-mono text-sm text-[#c26a3f] hover:text-[#a85630] transition-colors group"
            >
              read on substack
              <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
