import React from "react";

const Navbar = () => (
  <nav className="flex justify-between p-4 bg-blue-500 text-white">
    <div className="text-lg font-bold">Embroidery</div>
    <div>
      <button className="mx-2">Favorites</button>
      <button>Cart</button>
    </div>
  </nav>
);

export default Navbar;
