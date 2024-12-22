import React from 'react';

function Sidebar({ activeCategory, onCategoryChange }) {
  const categories = ['Trend', 'Floral', 'Animals', 'Mirror Work', 'Zari'];

  return (
    <aside className="bg-gray-200 w-1/4 h-screen p-4">
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className={`p-2 cursor-pointer ${activeCategory === category ? 'bg-blue-500 text-white' : ''}`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
