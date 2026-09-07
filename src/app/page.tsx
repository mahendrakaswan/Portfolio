'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Writing from '@/components/Writing';
import Connect from '@/components/Connect';
import Footer from '@/components/Footer';
import GrainOverlay from '@/components/GrainOverlay';
import CursorGlow from '@/components/CursorGlow';

export default function Home() {
  return (
    <>
      <GrainOverlay />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <div className="border-t border-[#e8e2d9] max-w-3xl mx-auto" />
        <About />
        <div className="border-t border-[#e8e2d9] max-w-3xl mx-auto" />
        <Projects />
        <div className="border-t border-[#e8e2d9] max-w-3xl mx-auto" />
        <Writing />
        <div className="border-t border-[#e8e2d9] max-w-3xl mx-auto" />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
