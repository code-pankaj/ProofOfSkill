
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const allChallenges = [
  {
    id: 1,
    title: "React Component Architecture",
    category: "Development",
    difficulty: "Intermediate",
    estimatedTime: "45 min",
    description: "Design and implement a component architecture for a given application scenario following best practices.",
  },
  {
    id: 2,
    title: "Web3 Smart Contract Integration",
    category: "Blockchain",
    difficulty: "Advanced",
    estimatedTime: "60 min",
    description: "Create a dApp that interacts with a smart contract on a testnet using ethers.js or web3.js.",
  },
  {
    id: 3,
    title: "UI/UX for NFT Marketplace",
    category: "Design",
    difficulty: "Intermediate",
    estimatedTime: "90 min",
    description: "Design a user-friendly interface for browsing, filtering, and purchasing NFTs on a marketplace.",
  },
  {
    id: 4,
    title: "Solana Program Development",
    category: "Blockchain",
    difficulty: "Advanced",
    estimatedTime: "120 min",
    description: "Build and deploy a simple program on Solana devnet using the Anchor framework.",
  },
  {
    id: 5,
    title: "Basic Web Development",
    category: "Development",
    difficulty: "Beginner",
    estimatedTime: "30 min",
    description: "Create a responsive webpage with HTML, CSS, and basic JavaScript.",
  },
  {
    id: 6,
    title: "DeFi Protocol Analysis",
    category: "Blockchain",
    difficulty: "Intermediate",
    estimatedTime: "60 min",
    description: "Analyze a given DeFi protocol, identify its components, and explain how they work together.",
  },
  {
    id: 7,
    title: "Brand Identity Design",
    category: "Design",
    difficulty: "Beginner",
    estimatedTime: "45 min",
    description: "Create a cohesive brand identity including logo, color palette, and typography for a Web3 project.",
  },
  {
    id: 8,
    title: "Smart Contract Security Audit",
    category: "Blockchain",
    difficulty: "Advanced",
    estimatedTime: "120 min",
    description: "Audit a provided smart contract for security vulnerabilities and suggest improvements.",
  },
];

const categories = ["All", "Development", "Blockchain", "Design"];
const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case 'beginner':
      return 'bg-green-100 text-green-800';
    case 'intermediate':
      return 'bg-blue-100 text-blue-800';
    case 'advanced':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const Challenges = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const filteredChallenges = allChallenges.filter(challenge => {
    const matchesSearch = challenge.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          challenge.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || challenge.category === selectedCategory;
    
    const matchesDifficulty = selectedDifficulty === 'All' || challenge.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Skill Challenges</h1>
            <p className="text-gray-500 mt-1">Prove your expertise through verified challenges</p>
          </div>

          <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <Input
                  type="text"
                  placeholder="Search challenges..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              
              <div className="flex gap-4">
                <select 
                  className="bg-white border border-gray-200 rounded-md px-3 py-2 text-sm"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                
                <select 
                  className="bg-white border border-gray-200 rounded-md px-3 py-2 text-sm"
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                >
                  {difficulties.map(difficulty => (
                    <option key={difficulty} value={difficulty}>{difficulty}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredChallenges.map((challenge) => (
              <Card key={challenge.id} className="challenge-card border border-gray-200 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <Badge className={`${getDifficultyColor(challenge.difficulty)}`}>
                      {challenge.difficulty}
                    </Badge>
                    <Badge variant="outline" className="text-gray-500">
                      {challenge.estimatedTime}
                    </Badge>
                  </div>
                  <h3 className="font-bold text-xl mt-3">{challenge.title}</h3>
                  <Badge variant="secondary" className="mt-2">
                    {challenge.category}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 text-sm">
                    {challenge.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Link to={`/challenges/${challenge.id}`} className="w-full">
                    <Button className="w-full bg-skill-blue hover:bg-skill-blue-dark transition-colors">
                      Start Challenge
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {filteredChallenges.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-1">No challenges found</h3>
              <p className="text-gray-500">
                Try adjusting your search or filters to find what you're looking for
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Challenges;
