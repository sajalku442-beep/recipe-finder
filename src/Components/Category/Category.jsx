import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./category.css";

const Category = () => {
  const { cate } = useParams();
  console.log(useParams());

  const [apiData, setApidata] = useState([]);

  const [link, setLink] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cate}`
      );
      const data = await api.json();
      setApidata(data.meals);
      console.log(data.meals);
    };

    fetchData();
  }, [cate]);

  return (
    <div>
      <h1>Discover the Secret Behind Every Flavor</h1>
      <div className="category">
        {apiData.map((data) => (
          <Link to={`/recipe/${data.idMeal}`}>
            <div key={data.idMeal}>
              <img src={data.strMealThumb} alt={data.strMeal} />
              <h2>{data.strMeal }</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
