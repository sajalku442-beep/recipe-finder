import React from "react";
import Home from "./Components/Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import Recipe from "./Components/Reciepe/Recipe";
import Category from "./Components/Category/Category";
import Search from "./Components/Search/Search";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/category/:cate" element={<Category />} />
        <Route path="/search/:sear" element={<Search />} />
      </Routes>
    </div>
  );
};

export default App;
