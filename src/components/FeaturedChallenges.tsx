
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const challenges = [
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
  }
];

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

const FeaturedChallenges = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Featured Skill Challenges
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500">
            Prove your expertise by completing these community-vetted challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((challenge) => (
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

        <div className="mt-10 text-center">
          <Link to="/challenges">
            <Button variant="outline" className="border-skill-purple text-skill-purple hover:bg-skill-purple hover:text-white transition-all">
              View All Challenges
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedChallenges;
