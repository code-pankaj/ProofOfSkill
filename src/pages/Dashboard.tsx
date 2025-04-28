
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const Dashboard = () => {
  const userSBTs = [
    {
      id: 1,
      title: "React Expert",
      category: "Development",
      level: "Advanced",
      issueDate: "Apr 12, 2025",
      address: "0x7C66...DC3F",
      badgeColor: "from-blue-500 to-indigo-600",
    },
    {
      id: 2,
      title: "Solana Developer",
      category: "Blockchain",
      level: "Intermediate",
      issueDate: "Apr 18, 2025",
      address: "0x8B37...FD2E",
      badgeColor: "from-purple-500 to-purple-700",
    },
  ];

  const inProgressChallenges = [
    {
      id: 101,
      title: "UI/UX for NFT Marketplace",
      progress: 60,
      deadline: "Apr 30, 2025",
      category: "Design"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-gray-500 mt-1">Manage your verified skills and ongoing challenges</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="bg-gradient-primary hover:opacity-90 transition-all">
                Find New Challenges
              </Button>
            </div>
          </div>

          <Tabs defaultValue="credentials">
            <TabsList className="mb-6">
              <TabsTrigger value="credentials">My Credentials</TabsTrigger>
              <TabsTrigger value="in-progress">In Progress</TabsTrigger>
              <TabsTrigger value="profile">Public Profile</TabsTrigger>
            </TabsList>
            
            <TabsContent value="credentials">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {userSBTs.map((token) => (
                  <div 
                    key={token.id}
                    className="glass-effect rounded-2xl p-1 backdrop-blur-xl shadow-lg"
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
                
                <Card className="border-dashed border-2 border-gray-200 flex flex-col items-center justify-center p-6 hover:border-skill-purple transition-colors cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-skill-purple bg-opacity-10 flex items-center justify-center mb-4 text-skill-purple">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Earn New Credential</h3>
                  <p className="text-sm text-center text-gray-500">
                    Complete a challenge to earn your next proof of skill
                  </p>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="in-progress">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {inProgressChallenges.map((challenge) => (
                  <Card key={challenge.id} className="overflow-hidden">
                    <CardHeader>
                      <CardTitle>{challenge.title}</CardTitle>
                      <div className="flex justify-between items-center">
                        <Badge variant="outline" className="text-gray-500">
                          {challenge.category}
                        </Badge>
                        <CardDescription>
                          Due: {challenge.deadline}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>{challenge.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-primary h-2 rounded-full" 
                              style={{ width: `${challenge.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <Button className="w-full bg-skill-blue hover:bg-skill-blue-dark transition-colors">
                          Continue Challenge
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                <Card className="border-dashed border-2 border-gray-200 flex flex-col items-center justify-center p-6 hover:border-skill-purple transition-colors cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-skill-purple bg-opacity-10 flex items-center justify-center mb-4 text-skill-purple">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Start New Challenge</h3>
                  <p className="text-sm text-center text-gray-500">
                    Browse available challenges and start proving your skills
                  </p>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Public Profile</CardTitle>
                  <CardDescription>
                    Manage how your credentials appear to others
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Profile Visibility</h3>
                        <p className="text-sm text-gray-500">
                          Allow others to view your verified skills
                        </p>
                      </div>
                      <div className="flex items-center">
                        <div className="h-6 w-11 bg-green-500 rounded-full p-1 cursor-pointer">
                          <div className="h-4 w-4 bg-white rounded-full transform translate-x-5"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-100 pt-6">
                      <h3 className="font-medium mb-4">Your Public Profile URL</h3>
                      <div className="flex">
                        <input 
                          type="text" 
                          value="https://proofofskill.xyz/profile/0x7C6..." 
                          readOnly
                          className="flex-grow bg-gray-50 px-3 py-2 border border-gray-200 rounded-l-md text-sm"
                        />
                        <Button variant="outline" className="rounded-l-none border-l-0">
                          Copy
                        </Button>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        Share this link with recruiters or add it to your portfolio
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
