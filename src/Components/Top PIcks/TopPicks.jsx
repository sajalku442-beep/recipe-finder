import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./TopPick.css";

const TopPicks = () => {
  const [apiData, setApidata] = useState([]);
  const [toppick, setTopPick] = useState("Canadian");
  const scrollRef = useRef();
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${toppick}`
      );
      const data = await api.json();
      setApidata(data.meals);
      // console.log(data.meals);
    };
    fetchData();
  }, [toppick]);

  return (
    <div>
      <h1>✨ Taste the World, One Dish at a Time</h1>
      <div className="country">
        <button onClick={() => setTopPick("Indian")}>Indian</button>
        <button onClick={() => setTopPick("American")}>American</button>
        <button onClick={() => setTopPick("British")}>British</button>
        <button onClick={() => setTopPick("Portuguese")}>Portuguese</button>
        <button onClick={() => setTopPick("Canadian")}>Canadian</button>
        <button onClick={() => setTopPick("French")}>French</button>
        <button onClick={() => setTopPick("Italian")}>Italian</button>
        <button onClick={() => setTopPick("Japanese")}>Japanese</button>
        <button onClick={() => setTopPick("Mexican")}>Mexican</button>
        <button onClick={() => setTopPick("Russian")}>Russian</button>
      </div>

      <div className="toppicks" ref={scrollRef}>
        {apiData.map((data) => (
          <Link to={`/recipe/${data.idMeal}`} key={data.idMeal}>
            <div>
              <img src={data.strMealThumb} alt={data.strMeal} />
              <h3>{data.strMeal}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopPicks;

// const [pickChoose, setPickChoose] = useState("c");

// useEffect(() => {
//   const fetchData = async () => {
//     const api = await fetch(
//       `https://www.themealdb.com/api/json/v1/1/list.php?${pickChoose}=list`
//     );
//     const data = await api.json();
//     setApidata(data.meals);
//     console.log(data.meals);
//   };

//   fetchData();
// }, [pickChoose]);

// {/* <div className="pickChoose">
//         <button onClick={() => setPickChoose("a")}>Country</button>
//         <button onClick={() => setPickChoose("c")}>Category</button>
//         {/* <button onClick={() => setPickChoose("i")}>Ingredients</button> */}
//       </div> */}
//       <div></div>
