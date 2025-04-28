
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">About Proof of Skill</h1>
              <p className="text-lg text-gray-600 mb-8">
                We're building a decentralized platform that replaces unreliable self-reported skills with 
                verifiable, on-chain credentials through Soulbound Tokens.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
              
              <div className="prose prose-lg mx-auto">
                <p>
                  The professional world has long relied on self-reported skills, endorsements from connections, 
                  and easily falsifiable credentials. Proof of Skill aims to revolutionize this broken system 
                  by providing a decentralized platform for skill verification.
                </p>
                
                <p>
                  Through our platform, professionals can prove their expertise by completing real-world 
                  challenges or assessments designed by industry experts. These skills are then permanently 
                  recorded on the blockchain as Soulbound Tokens (SBTs) - non-transferable NFTs that serve as 
                  indisputable proof of competence.
                </p>
                
                <p>
                  For recruiters and organizations, this means access to talent with verified, trustworthy credentials. 
                  For professionals, it means owning your skills in a transparent, portable, and verifiable way.
                </p>
                
                <h3>What are Soulbound Tokens?</h3>
                
                <p>
                  Soulbound Tokens (SBTs) are non-transferable tokens that represent "commitments, credentials, 
                  and affiliations." Unlike regular NFTs, SBTs cannot be sold or transferred to another wallet, 
                  making them perfect for representing achievements, credentials, and verified skills.
                </p>
                
                <p>
                  By using SBTs, we ensure that your credentials are both publicly verifiable and permanently 
                  attached to your digital identity, creating a Web3-native professional reputation system.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
              
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-1/3 flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-skill-purple-light flex items-center justify-center mx-auto">
                      <span className="text-skill-purple text-2xl font-bold">1</span>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">Select a Challenge</h3>
                    <p className="text-gray-600">
                      Browse our catalog of skill challenges across different domains like development, 
                      design, marketing, and more. Each challenge is designed to test real-world capabilities.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-1/3 flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-skill-purple-light flex items-center justify-center mx-auto">
                      <span className="text-skill-purple text-2xl font-bold">2</span>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">Complete Verification</h3>
                    <p className="text-gray-600">
                      Work on the challenge requirements and submit your solution. Depending on the challenge type, 
                      verification happens either automatically or through expert review.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-1/3 flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-skill-purple-light flex items-center justify-center mx-auto">
                      <span className="text-skill-purple text-2xl font-bold">3</span>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">Earn Your SBT</h3>
                    <p className="text-gray-600">
                      Upon successful verification, a Soulbound Token is minted directly to your connected wallet, 
                      permanently proving your skill on the blockchain. This credential can be displayed on your 
                      profile and shared with potential employers.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <Link to="/challenges">
                  <Button className="bg-gradient-primary hover:opacity-90 transition-all px-8 py-6 text-lg">
                    Start Your First Challenge
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
