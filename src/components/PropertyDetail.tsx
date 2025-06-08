import { useState } from 'react';
import { Star, Heart, Share, Wifi, Car, Waves, Users, X } from 'lucide-react';
import { Button } from "./ui/button";
import { properties } from '../data/properties';

interface PropertyDetailProps {
  propertyId: string;
  onClose: () => void;
}

const PropertyDetail = ({ propertyId, onClose }: PropertyDetailProps) => {
  const property = properties.find(p => p.id === propertyId);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!property) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="text-center px-4">
          <h2 className="text-2xl font-semibold mb-4">Property Not Found</h2>
          <p className="text-gray-600 mb-6">The property you are looking for doesn't exist or might have been removed.</p>
          <button 
            onClick={onClose} 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const amenityIcons: { [key: string]: any } = {
    'WiFi': Wifi,
    'Parking': Car,
    'Pool': Waves,
    'Kitchen': Users,
  };

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
        <Button
          variant="ghost"
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <X className="h-5 w-5" />
        </Button>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="flex items-center space-x-2">
            <Share className="h-4 w-4" />
            <span>Share</span>
          </Button>
          <Button variant="ghost" className="flex items-center space-x-2">
            <Heart className="h-4 w-4" />
            <span>Save</span>
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Title and Location */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-current text-yellow-400 mr-1" />
              <span className="font-medium">{property.rating}</span>
              <span className="text-gray-500 ml-1">({property.reviewCount} reviews)</span>
            </div>
            <span className="text-gray-500">·</span>
            <span className="font-medium text-gray-900">{property.location}</span>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-4 gap-2 mb-8 h-96">
          <div className="col-span-2 row-span-2">
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-full object-cover rounded-l-xl cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedImageIndex(0)}
            />
          </div>
          <div className="grid gap-2">
            <img
              src={property.images[1] || property.images[0]}
              alt={property.title}
              className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedImageIndex(1)}
            />
            <img
              src={property.images[2] || property.images[0]}
              alt={property.title}
              className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedImageIndex(2)}
            />
          </div>
          <div className="grid gap-2">
            <img
              src={property.images[1] || property.images[0]}
              alt={property.title}
              className="w-full h-full object-cover rounded-tr-xl cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedImageIndex(1)}
            />
            <div className="relative">
              <img
                src={property.images[2] || property.images[0]}
                alt={property.title}
                className="w-full h-full object-cover rounded-br-xl cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedImageIndex(2)}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-br-xl flex items-center justify-center cursor-pointer hover:bg-opacity-40 transition-colors">
                <span className="text-white font-medium">Show all photos</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Host Info */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold mb-2">
                    {property.type} hosted by {property.host}
                  </h2>
                  <p className="text-gray-600">
                    {property.guests} guests · {property.bedrooms} bedrooms · {property.bathrooms} bathrooms
                  </p>
                </div>
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              </div>
            </div>

            {/* Description */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <p className="text-gray-700 leading-relaxed">{property.description}</p>
            </div>

            {/* Amenities */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">What this place offers</h3>
              <div className="grid grid-cols-2 gap-4">
                {property.amenities.map((amenity, index) => {
                  const IconComponent = amenityIcons[amenity];
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      {IconComponent ? (
                        <IconComponent className="h-5 w-5 text-gray-600" />
                      ) : (
                        <div className="w-5 h-5 bg-gray-300 rounded"></div>
                      )}
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-2xl font-bold">${property.price}</span>
                  <span className="text-gray-600 ml-1">night</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 fill-current text-yellow-400 mr-1" />
                  <span className="font-medium">{property.rating}</span>
                  <span className="text-gray-500 ml-1">({property.reviewCount})</span>
                </div>
              </div>

              <div className="border border-gray-300 rounded-lg mb-4">
                <div className="grid grid-cols-2">
                  <div className="p-3 border-r border-gray-300">
                    <div className="text-xs font-medium text-gray-900 uppercase">Check-in</div>
                    <div className="text-sm text-gray-600">Add date</div>
                  </div>
                  <div className="p-3">
                    <div className="text-xs font-medium text-gray-900 uppercase">Checkout</div>
                    <div className="text-sm text-gray-600">Add date</div>
                  </div>
                </div>
                <div className="p-3 border-t border-gray-300">
                  <div className="text-xs font-medium text-gray-900 uppercase">Guests</div>
                  <div className="text-sm text-gray-600">1 guest</div>
                </div>
              </div>

              <Button className="w-full bg-[#FF5A5F] hover:bg-[#E74C3C] text-white font-medium py-3 mb-4">
                Reserve
              </Button>

              <p className="text-center text-sm text-gray-600 mb-4">
                You won't be charged yet
              </p>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">${property.price} x 5 nights</span>
                  <span>${property.price * 5}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cleaning fee</span>
                  <span>$75</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Service fee</span>
                  <span>$83</span>
                </div>
                <hr />
                <div className="flex justify-between font-medium">
                  <span>Total before taxes</span>
                  <span>${property.price * 5 + 75 + 83}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
