
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white py-16 sm:py-24">
      {/* Background Decoration Elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-skill-purple-light opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-skill-blue opacity-10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          <div className="lg:col-span-6 lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              <span className="block">Prove your skills.</span>
              <span className="block text-gradient">Own your credentials.</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl max-w-xl">
              Earn verifiable, on-chain proof of your professional skills through challenges and assessments. No more self-reported skills—just immutable proof.
            </p>
            
            <div className="mt-10 sm:flex sm:justify-start">
              <div className="rounded-md shadow">
                <Link to="/challenges">
                  <Button className="w-full bg-gradient-primary text-white px-8 py-6 text-lg font-medium hover:opacity-90 transition-all">
                    Start Challenge
                  </Button>
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link to="/about">
                  <Button variant="outline" className="w-full px-8 py-6 text-lg font-medium border-skill-purple text-skill-purple hover:bg-skill-purple hover:text-white transition-all">
                    How It Works
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg">
              {/* Decorative Elements */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-skill-purple-light rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse-slow" />
              <div className="absolute left-1/3 top-1/3 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-skill-blue rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse-slow animation-delay-1000" />
              
              {/* Main Illustration: Credential Badge */}
              <div className="relative animate-float glass-effect p-6 rounded-2xl bg-opacity-50 backdrop-filter backdrop-blur-lg border border-opacity-20 shadow-xl max-w-xs mx-auto">
                <div className="w-full aspect-square bg-gradient-primary rounded-xl overflow-hidden flex flex-col items-center justify-center text-white p-4">
                  <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-1">Frontend Developer</h3>
                  <p className="text-xs text-center opacity-90 mb-2">Advanced Level</p>
                  <div className="w-full border-t border-white border-opacity-20 my-2"></div>
                  <p className="text-xs text-center opacity-90 mb-1">Verified On-Chain</p>
                  <p className="text-xs font-mono bg-white bg-opacity-20 px-2 py-1 rounded">0x7C...6DC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
