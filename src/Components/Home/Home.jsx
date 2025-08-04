import React from "react";
import Navbar from "../Navbar/Navbar";
import Popular from "../Popular/Popular";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recipe from "../Reciepe/Recipe";
import TopPicks from "../Top PIcks/TopPicks";

const Home = () => {
  return (
    <div>
      
      <Popular />
      <TopPicks/>
      
    </div>
  );
};

export default Home;
