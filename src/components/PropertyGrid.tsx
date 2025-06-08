import { properties } from '../data/properties';
import PropertyCard from './PropertyCard';

interface PropertyGridProps {
  onPropertyClick: (id: string) => void;
}

const PropertyGrid = ({ onPropertyClick }: PropertyGridProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Stay anywhere
        </h2>
        <p className="text-gray-600">
          Over {properties.length} homes plus hotels for unforgettable trips
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            onClick={onPropertyClick}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyGrid;
