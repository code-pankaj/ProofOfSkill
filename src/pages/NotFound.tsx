
import React, { useEffect } from 'react';
import { useLocation, Link } from "react-router-dom";
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <div className="w-24 h-24 rounded-full bg-skill-purple-light flex items-center justify-center mx-auto mb-6">
          <span className="text-skill-purple text-4xl font-bold">404</span>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        
        <Link to="/">
          <Button className="bg-gradient-primary hover:opacity-90 transition-all">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
