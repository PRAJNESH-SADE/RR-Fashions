import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../Redux/cartSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h2 className="mb-4 text-2xl font-bold">Cart</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {cart.length > 0 ? (
          cart.map((design) => (
            <div key={design.name} className="p-4 bg-white border rounded-lg shadow-md">
              <img
                src={design.image}
                alt={design.name}
                className="object-cover w-full h-48 mb-4 rounded"
              />
              <h3 className="font-bold">{design.name}</h3>
              <p className="text-gray-600">{design.description}</p>
              <button
                onClick={() => dispatch(removeFromCart(design))}
                className="mt-4 text-red-500 hover:text-red-700"
              >
                Remove from Cart
              </button>
            </div>
          ))
        ) : (
          <p>No items in cart.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
