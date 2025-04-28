
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import FeaturedChallenges from '@/components/FeaturedChallenges';
import SBTShowcase from '@/components/SBTShowcase';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <FeaturedChallenges />
        <SBTShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
