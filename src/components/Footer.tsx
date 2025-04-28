
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="font-bold text-lg">ProofOfSkill</span>
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              Decentralized skill verification platform with Soulbound NFT credentials.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/challenges" className="text-gray-500 hover:text-skill-purple text-sm">
                  Challenges
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-500 hover:text-skill-purple text-sm">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-500 hover:text-skill-purple text-sm">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/docs" className="text-gray-500 hover:text-skill-purple text-sm">
                  Documentation
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-skill-purple text-sm">
                  GitHub
                </a>
              </li>
              <li>
                <Link to="/faq" className="text-gray-500 hover:text-skill-purple text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-500 hover:text-skill-purple text-sm">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-skill-purple text-sm">
                  Twitter
                </a>
              </li>
              <li>
                <a href="mailto:contact@proofofskill.xyz" className="text-gray-500 hover:text-skill-purple text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-8 pt-8 flex flex-col md:flex-row md:justify-between">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} ProofOfSkill. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="text-xs text-gray-500 hover:text-skill-purple">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-gray-500 hover:text-skill-purple">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
