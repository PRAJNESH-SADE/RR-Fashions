import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import DesignCard from './DesignCard';

function CategoriesPage() {
  const [designs, setDesigns] = useState([]);
  const [filteredDesigns, setFilteredDesigns] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Trend');

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/designs')
      .then((response) => response.json())
      .then((data) => {
        setDesigns(data);
        setFilteredDesigns(data.filter((design) => design.category === 'Trend'));
      });
  }, []);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setFilteredDesigns(category === 'Trend' ? designs : designs.filter((design) => design.category === category));
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
        <main className="p-4 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredDesigns.map((design) => (
            <DesignCard key={design.id} design={design} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default CategoriesPage;
