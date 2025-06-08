import { Star, Heart } from 'lucide-react';
import { Property } from '../data/properties';
import { useState } from 'react';

interface PropertyCardProps {
  property: Property;
  onClick: (id: string) => void;
}

const PropertyCard = ({ property, onClick }: PropertyCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  return (
    <div 
      className="bg-white rounded-xl overflow-hidden cursor-pointer group hover:shadow-lg transition-shadow duration-300"
      onClick={() => onClick(property.id)}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.images[currentImageIndex]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Image Navigation */}
        {property.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Image Dots */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {property.images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>

        {/* Like Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="absolute top-3 right-3 p-2 rounded-full hover:scale-110 transition-transform"
        >
          <Heart
            className={`w-5 h-5 ${
              isLiked ? 'fill-red-500 text-red-500' : 'text-white fill-black fill-opacity-50'
            }`}
          />
        </button>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-gray-900 text-lg leading-tight line-clamp-2">
            {property.title}
          </h3>
        </div>
        
        <p className="text-gray-600 text-sm mb-2">{property.location}</p>
        
        <div className="flex items-center mb-2">
          <Star className="w-4 h-4 fill-current text-yellow-400" />
          <span className="text-sm font-medium ml-1">{property.rating}</span>
          <span className="text-sm text-gray-500 ml-1">({property.reviewCount})</span>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-gray-600 text-sm">
            {property.guests} guests · {property.bedrooms} bedrooms
          </p>
          <div className="text-right">
            <span className="font-bold text-lg">${property.price}</span>
            <span className="text-gray-600 text-sm"> / night</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
