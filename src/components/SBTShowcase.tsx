
import React from 'react';

const tokens = [
  {
    title: "React Expert",
    category: "Development",
    level: "Advanced",
    issueDate: "Apr 12, 2025",
    address: "0x7C66...DC3F",
    badgeColor: "from-blue-500 to-indigo-600",
  },
  {
    title: "Solana Developer",
    category: "Blockchain",
    level: "Intermediate",
    issueDate: "Apr 18, 2025",
    address: "0x8B37...FD2E",
    badgeColor: "from-purple-500 to-purple-700",
  },
  {
    title: "UI/UX Designer",
    category: "Design",
    level: "Advanced",
    issueDate: "Apr 5, 2025",
    address: "0x6A29...EF4C",
    badgeColor: "from-pink-500 to-rose-500",
  },
];

const SBTShowcase = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-skill-gray-light opacity-60 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Soulbound Token Showcase
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500">
            Real verifiable proof of your skills on-chain
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {tokens.map((token, index) => (
            <div 
              key={index}
              className="glass-effect rounded-2xl p-1 backdrop-blur-xl shadow-lg max-w-xs w-full transform hover:translate-y-[-5px] transition-all"
            >
              <div className={`bg-gradient-to-br ${token.badgeColor} rounded-xl p-5 text-white h-full flex flex-col`}>
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-white bg-opacity-30 rounded-lg px-3 py-1 text-sm">
                    {token.category}
                  </div>
                  <div className="h-8 w-8 rounded-full border border-white flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-1">{token.title}</h3>
                <p className="text-sm opacity-90 mb-4">{token.level} Level</p>
                
                <div className="mt-auto">
                  <div className="border-t border-white border-opacity-20 pt-4">
                    <div className="flex justify-between items-center">
                      <div className="text-xs opacity-90">Issued: {token.issueDate}</div>
                      <div className="text-xs font-mono bg-white bg-opacity-20 px-2 py-1 rounded">
                        {token.address}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SBTShowcase;
