import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {Link, useParams} from "react-router-dom";

function Cuisine() {
  
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY_C}&cuisine=${name}`)
    const recipes = await data.json();
    setCuisine(recipes.results);
  };
  
  useEffect(() => {
     //getCuisine(`mexican`)
    console.log(params);
  },[]);
  
  return (
    <div></div>
  )
}

export default Cuisine