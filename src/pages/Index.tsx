import { useState } from 'react';
import Header from "../components/Header";
import Hero from "../components/Hero";
import PropertyGrid from "../components/PropertyGrid";
import PropertyDetail from "../components/PropertyDetail";

const Index = () => {
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(null);

  const handlePropertyClick = (id: string) => {
    setSelectedPropertyId(id);
  };

  const handleCloseDetail = () => {
    setSelectedPropertyId(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <PropertyGrid onPropertyClick={handlePropertyClick} />
      
      {selectedPropertyId && (
        <PropertyDetail
          propertyId={selectedPropertyId}
          onClose={handleCloseDetail}
        />
      )}
    </div>
  );
};

export default Index;
