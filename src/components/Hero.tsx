import { Search, Calendar, Users } from 'lucide-react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Not sure where to go? Perfect.
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            I'm flexible
          </p>
        </div>

        {/* Enhanced Search Bar */}
        <div className="max-w-4xl mx-auto bg-white rounded-full shadow-2xl p-2">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
            <div className="flex items-center space-x-3 px-6 py-4 hover:bg-gray-50 rounded-full transition-colors">
              <Search className="h-5 w-5 text-gray-400" />
              <div>
                <div className="text-sm font-medium text-gray-900">Where</div>
                <Input 
                  placeholder="Search destinations" 
                  className="border-0 p-0 text-gray-600 placeholder-gray-400 focus:ring-0"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-3 px-6 py-4 hover:bg-gray-50 rounded-full transition-colors">
              <Calendar className="h-5 w-5 text-gray-400" />
              <div>
                <div className="text-sm font-medium text-gray-900">Check in</div>
                <div className="text-sm text-gray-600">Add dates</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 px-6 py-4 hover:bg-gray-50 rounded-full transition-colors">
              <Calendar className="h-5 w-5 text-gray-400" />
              <div>
                <div className="text-sm font-medium text-gray-900">Check out</div>
                <div className="text-sm text-gray-600">Add dates</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-gray-400" />
                <div>
                  <div className="text-sm font-medium text-gray-900">Who</div>
                  <div className="text-sm text-gray-600">Add guests</div>
                </div>
              </div>
              <Button className="bg-[#FF5A5F] hover:bg-[#E74C3C] rounded-full px-8 py-3 text-white font-medium">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
