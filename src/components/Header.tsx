import { Search, Globe, Menu, User } from 'lucide-react';
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-[#FF5A5F] cursor-pointer">
              airbnb
            </h1>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex items-center bg-white border border-gray-300 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 py-2 px-4 max-w-md mx-auto">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700 px-4 border-r border-gray-300">
                Anywhere
              </span>
              <span className="text-sm font-medium text-gray-700 px-4 border-r border-gray-300">
                Any week
              </span>
              <span className="text-sm text-gray-500 px-4">Add guests</span>
            </div>
            <Button size="sm" className="rounded-full bg-[#FF5A5F] hover:bg-[#E74C3C] ml-2 p-2">
              <Search className="h-4 w-4" />
            </Button>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <span className="hidden md:block text-sm font-medium text-gray-700 hover:bg-gray-50 px-3 py-2 rounded-full cursor-pointer transition-colors">
              Become a Host
            </span>
            <Button variant="ghost" size="sm" className="p-2">
              <Globe className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-2 border border-gray-300 rounded-full py-1 px-2 hover:shadow-md transition-shadow cursor-pointer">
              <Menu className="h-4 w-4" />
              <div className="bg-gray-500 rounded-full p-1">
                <User className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
