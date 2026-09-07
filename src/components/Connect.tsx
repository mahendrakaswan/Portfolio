'use client';

import { useEffect, useRef } from 'react';
import SectionHeading from './SectionHeading';
import { siteContent } from '@/data/content';

export default function Connect() {
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
      id="connect"
      ref={sectionRef}
      className="section-animate py-24 px-6"
    >
      <div className="max-w-3xl mx-auto">
        <SectionHeading label="connect" />
        <p className="text-lg text-[#1a1816]/80 font-light leading-relaxed mb-8">
          I&apos;m always up for a good conversation: whether it&apos;s about data,
          sports, books, or an idea you&apos;re excited about.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {siteContent.social.map((link, i) => (
            <span key={link.label} className="flex items-center">
              <a
                href={link.url}
                target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="link-underline font-mono text-sm text-[#c26a3f] hover:text-[#a85630] transition-colors"
              >
                {link.label}
              </a>
              {i < siteContent.social.length - 1 && (
                <span className="text-[#e8e2d9] ml-6 hidden sm:inline">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
