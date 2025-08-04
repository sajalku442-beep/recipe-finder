import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [input, setInput] = useState();
  const navigate = useNavigate();
  const handleSubmit = (data) => {
    data.preventDefault();
    navigate(`/search/${input}`);
  };
  return (
    <div className="navbar">
      <div className="appName">
        <Link to={`/`}>
          <h2 className="logo">🍴 Welcome Foodie</h2>
        </Link>
      </div>

      <div className="search">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(data) => setInput(data.target.value)}
            type="text"
            placeholder="Search by dish or what's in your fridge"
          />
        </form>
      </div>
      <div className="btn">
        <Link to={`/category/Vegetarian`}>
          <div>Vegetarian</div>
        </Link>
        <Link to={`/category/Vegan`}>
          <div>Vegan</div>
        </Link>
        <Link to={`/category/Chicken`}>
          <div>Chicken</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
