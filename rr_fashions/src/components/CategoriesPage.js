import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import DesignCard from './DesignCard';

function CategoriesPage() {
  const staticCategories = [
    { name: 'Floral', image: '/images/floral.jpg' },
    { name: 'Animals', image: '/images/animal.jpg' },
    { name: 'Mirror Work', image: '/images/mirror.jpg' },
    { name: 'Zari', image: '/images/zari.jpg' },
  ];

  const [activeCategory, setActiveCategory] = useState('Floral');

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const filteredDesigns = staticCategories.filter(
    (category) => category.name === activeCategory
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex">
        <Sidebar
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        <main className="grid w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3">
          {filteredDesigns.length > 0 ? (
            filteredDesigns.map((category, index) => (
              <DesignCard
                key={index}
                design={{ name: category.name, image: category.image }}
              />
            ))
          ) : (
            <div className="text-center text-gray-500 col-span-full">
              No designs available for this category.
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default CategoriesPage;
