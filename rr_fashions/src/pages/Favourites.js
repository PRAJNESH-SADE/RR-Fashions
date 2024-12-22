import React, { useState, useEffect } from 'react';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Favorites</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {favorites.map((design, index) => (
          <div key={index} className="border rounded-lg shadow-lg p-4">
            <img
              src={`http://127.0.0.1:5000/static/${design.image}`}
              alt={design.name}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-lg font-bold mt-2">{design.name}</h3>
            <p className="text-gray-600 mt-1">{design.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
