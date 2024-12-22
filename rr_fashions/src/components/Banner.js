import React from 'react';
import { useNavigate } from 'react-router-dom';

function Banner() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/path/to/banner-image.jpg")' }}>
      <div className="absolute bottom-10 left-0 right-0 text-center">
        <button
          onClick={() => navigate('/categories')}
          className="bg-blue-500 text-white px-6 py-3 rounded shadow"
        >
          Browse Categories
        </button>
      </div>
    </div>
  );
}

export default Banner;
