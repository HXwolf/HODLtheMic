'use client';

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ArtistsSection from '../components/ArtistsSection';
import TourDatesSection from '../components/TourDatesSection';
import Web3Section from '../components/Web3Section';
import NFTSection from '../components/NFTSection';
import ContactSection from '../components/ContactSection';
import SponsorsSection from '../components/SponsorsSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <ArtistsSection />
        <TourDatesSection />
        <Web3Section />
        <NFTSection />
        <ContactSection />
        <SponsorsSection />
      </main>
      <Footer />
    </div>
  );
}