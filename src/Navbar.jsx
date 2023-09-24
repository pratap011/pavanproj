// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          View Posts
        </Link>
        <Link className="navbar-brand" to="/newpost">
          Add Post
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
