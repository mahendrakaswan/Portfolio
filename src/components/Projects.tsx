'use client';

import { useEffect, useRef } from 'react';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import { siteContent } from '@/data/content';

export default function Projects() {
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
      id="projects"
      ref={sectionRef}
      className="section-animate py-24 px-6"
    >
      <div className="max-w-3xl mx-auto">
        <SectionHeading label="projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {siteContent.projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
