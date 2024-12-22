import React from "react";
import { Link } from "react-router-dom"; 

const Navbar = () => (
  <nav className="flex justify-between p-4 text-white bg-blue-500">
    <div className="text-lg font-bold">Embroidery</div>
    <div>
      <Link to="/favorites" className="mr-4 hover:underline">
        Favorites
      </Link>
      <Link to="/cart" className="hover:underline">
        Cart
      </Link>
    </div>
  </nav>
);

export default Navbar;
