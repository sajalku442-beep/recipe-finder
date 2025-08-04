import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Recipe.css";
const Recipe = () => {
  const { id } = useParams();
  const [apiData, setApidata] = useState([]);

  const [link, setLink] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await api.json();
      setApidata(data.meals);
      // console.log(data.meals);
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <div>
        <h1>🔥 Time to Make Something Delicious </h1>
        {apiData.map((data) => (
          <div key={data.idMeal}>
            <div className="recipe">
              <div>
                <img src={data.strMealThumb} alt={data.strMeal} />
                <h2>{data.strMeal}</h2>
              </div>
              <div className="ingredients">
                {Array.from({ length: 20 }, (_, i) => {
                  const ingredient = data[`strIngredient${i + 1}`];
                  const measure = data[`strMeasure${i + 1}`];
                  return (
                    ingredient && (
                      <h2 key={i}>
                        {ingredient} - {measure}
                      </h2>
                    )
                  );
                })}
              </div>
            </div>
            <div className="instructions">
              <p>{data.strInstructions}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
