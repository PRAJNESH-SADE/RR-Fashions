import React from 'react';
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../Redux/favoritesSlice';
import { addToCart } from '../Redux/cartSlice';

function Modal({ design, onClose }) {
  const dispatch = useDispatch();

  const handleAddToFavorites = () => {
    dispatch(addToFavorites({ image: design.image, name: design.name, description: design.description }));
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ image: design.image, name: design.name, description: design.description }));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative p-6 bg-white rounded-lg shadow-lg w-96">
        <button
          className="absolute text-gray-600 top-2 right-2 hover:text-black"
          onClick={onClose}
        >
          &times;
        </button>
        <img
          src={design.image}
          alt={design.name}
          className="object-cover w-full h-48 rounded"
        />
        <h3 className="mt-4 text-xl font-bold">{design.name}</h3>
        <p className="mt-2 text-gray-600">{design.description}</p>
        <div className="flex justify-between mt-4">
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded shadow"
            onClick={handleAddToFavorites}
          >
            Add to Favorites
          </button>
          <button
            className="px-4 py-2 text-white bg-green-500 rounded shadow"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
