import axios from "axios";
import { Container, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "./IngredientsList.css";

const IngredientsList = () => {
  const [allMeals, setAllMeals] = useState([]);

  const getMeals = (list) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`, {
        headers: {
          i: list,
        },
      })
      .then((res) => {
        setAllMeals(res.data.meals);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMeals();
  }, []);

  return (
    <>
      <Container className="ilist">
        <div className="ilist-menu">
          {allMeals &&
            allMeals.map((meals) => {
              return (
                <Container key={meals.idIngredient}>
                  <p>{meals.strIngredient}</p>
                  <p>{meals.strDescription}</p>
                  <p>{meals.strDescription}</p>
                </Container>
              );
            })}
        </div>
        <Button>Search</Button>
      </Container>
    </>
  );
};

export default IngredientsList;
