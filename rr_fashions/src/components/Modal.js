import React, { useState } from 'react';

function Modal({ design, onClose }) {
  const [message, setMessage] = useState('');

  const handleAddToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    localStorage.setItem('favorites', JSON.stringify([...favorites, design]));
    setMessage('Added to Favorites!');
  };

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    localStorage.setItem('cart', JSON.stringify([...cart, design]));
    setMessage('Added to Cart!');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          &times;
        </button>
        <img
          src={`http://127.0.0.1:5000/static/${design.image}`}
          alt={design.name}
          className="w-full h-48 object-cover rounded"
        />
        <h3 className="text-xl font-bold mt-4">{design.name}</h3>
        <p className="text-gray-600 mt-2">{design.description}</p>
        <div className="mt-4 flex justify-between">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded shadow"
            onClick={handleAddToFavorites}
          >
            Add to Favorites
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded shadow"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
        {message && <p className="text-green-600 mt-4">{message}</p>}
      </div>
    </div>
  );
}

export default Modal;
