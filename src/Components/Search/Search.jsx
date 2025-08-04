import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Search.css";
const Search = () => {
  const { sear } = useParams();
  // console.log(useParams());

  const [apiData, setApidata] = useState([]);

  const [ingriData, setIngriData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${sear}`
      );
      const data = await api.json();
      setApidata(data.meals);
      console.log(data.meals);
    };
    fetchData();
  }, [sear]);
  useEffect(() => {
    const fetchData2 = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${sear}`
      );
      const data = await api.json();
      setIngriData(data.meals);
      console.log(data.meals);
    };

    fetchData2();
  }, [sear]);

  return (
    <div>
      <h1>Cook, Taste, and Fall in Love with Food</h1>
      <div className="searchResult">
        {apiData.map((data) => (
          <Link to={`/recipe/${data.idMeal}`}>
            <div key={data.idMeal}>
              <img src={data.strMealThumb} alt={data.strMeal} />
              <h2>{data.strMeal}</h2>
            </div>
          </Link>
        ))}
        {ingriData.map((data) => (
          <Link to={`/recipe/${data.idMeal}`}>
            <div key={data.idMeal}>
              <img src={data.strMealThumb} alt={data.strMeal} />
              <h2>{data.strMeal}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
