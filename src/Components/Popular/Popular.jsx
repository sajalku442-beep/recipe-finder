import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Popular.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Popular = () => {
  const [apiData, setApidata] = useState([]);
  const [link, setLink] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?a=American"
      );
      const data = await api.json();
      setApidata(data.meals);
      // console.log(data.meals);
    };

    fetchData();
  }, []);

  const settings = {
    dots: false, // dots add extra re-render
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000, // higher speed
    autoplaySpeed: 0, // no waiting between slides
    cssEase: "linear", // ensures smooth scrolling
    pauseOnHover: false, // prevent hover interruptions
  };

  return (
    <div className="popular">
      <div className="slider-container">
        <Slider {...settings}>
          {apiData.map((data) => (
            <Link to={`/recipe/${data.idMeal}`}>
              <div className="slide" key={data.idMeal}>
                <img src={data.strMealThumb} alt={data.strMeal} />
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Popular;
