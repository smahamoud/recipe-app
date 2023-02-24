import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import React from 'react'

function Recipe() {
  let params = useParams();

  const [details, setDetails] = useState();
  const [activeTab, setActiveTab] = useState("instructions");

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY_C}`
      );
      const detailData = await data.json();
      setDetails(detailData);
      console.log(detailData);
    };
    fetchDetails();
  }, [params.name]);


  return (
    <div>Recipe</div>
  )
}

export default Recipe