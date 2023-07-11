import React, { useState, useEffect } from "react";
const axios = require("axios");

const Draginfo = () => {
  const [joke, setJoke] = useState(null);
  useEffect(() => {
    fetch(
      "https://drug-info-and-price-history.p.rapidapi.com/1/druginfo?drug=napa",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "9018e02ab7msh555b3962b0eaa18p16597ajsn4e88d3eeef20",
          "X-RapidAPI-Host": "drug-info-and-price-history.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return <div></div>;
};

export default Draginfo;
