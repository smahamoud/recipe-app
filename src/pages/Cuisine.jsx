import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

function Cuisine() {
  
  const [recipes, setRecipes] = useState([]);
  let params = useParams();

  const getRecipes = async (cuisine) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${cuisine}`)
    const response = await data.json();
    setRecipes(response.results);
  };
  
  useEffect(() => {
    getRecipes(params.type);
    console.log(params.type);
  }, [params.type, getRecipes]);
  
  return (
    <div></div>
  )
}

export default Cuisine
