
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleConnect = () => {
    // In real implementation, this would connect to a Web3 wallet
    setIsConnected(true);
  };

  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <span className="font-bold text-xl">ProofOfSkill</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/challenges" className="text-gray-600 hover:text-skill-purple">
            Challenges
          </Link>
          <Link to="/dashboard" className="text-gray-600 hover:text-skill-purple">
            Dashboard
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-skill-purple">
            About
          </Link>
        </nav>

        {/* Connect Wallet Button (Desktop) */}
        <div className="hidden md:block">
          {isConnected ? (
            <Button variant="outline" className="border border-skill-purple text-skill-purple hover:bg-skill-purple hover:text-white transition-all">
              Connected
            </Button>
          ) : (
            <Button 
              className="bg-gradient-primary hover:opacity-90 transition-all"
              onClick={handleConnect}
            >
              Connect Wallet
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="font-bold text-xl">ProofOfSkill</span>
            </div>
            <button 
              className="text-gray-500 hover:text-gray-700 focus:outline-none" 
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex flex-col space-y-6 text-lg">
            <Link to="/challenges" className="py-2" onClick={() => setIsMenuOpen(false)}>
              Challenges
            </Link>
            <Link to="/dashboard" className="py-2" onClick={() => setIsMenuOpen(false)}>
              Dashboard
            </Link>
            <Link to="/about" className="py-2" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </div>
          
          <div className="mt-auto">
            {isConnected ? (
              <Button variant="outline" className="w-full border border-skill-purple text-skill-purple hover:bg-skill-purple hover:text-white transition-all">
                Connected
              </Button>
            ) : (
              <Button 
                className="w-full bg-gradient-primary hover:opacity-90 transition-all"
                onClick={() => {
                  handleConnect();
                  setIsMenuOpen(false);
                }}
              >
                Connect Wallet
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
