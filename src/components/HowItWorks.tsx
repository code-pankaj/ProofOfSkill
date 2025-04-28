
import React from 'react';

const steps = [
  {
    title: "Select Challenge",
    description: "Browse challenges by category and difficulty. Find the skill validation that matches your expertise.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Complete Verification",
    description: "Solve problems, create deliverables, or take assessments to demonstrate your proficiency.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Earn SBT",
    description: "Get a Soulbound Token (non-transferable NFT) minted to your wallet as proof of your skill.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a4 4 0 00-4-4H8.8a4 4 0 00-3.6 2.3L4 7.3m8 5v5m0 0v4m0-4h8m-8-4h5.7m-5.7 4H4" />
      </svg>
    ),
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            How It Works
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500">
            Three simple steps to get verifiable proof of your professional skills
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="glass-effect bg-white p-8 rounded-2xl flex flex-col items-center text-center transition-all hover:transform hover:translate-y-[-8px]"
            >
              <div className="w-16 h-16 rounded-full bg-skill-purple bg-opacity-10 flex items-center justify-center mb-6 text-skill-purple">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
