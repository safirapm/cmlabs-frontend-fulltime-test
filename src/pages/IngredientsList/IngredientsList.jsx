import axios from "axios";
import { Container, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "./IngredientsList.css";

const IngredientsList = () => {
  const [allIng, setAllIng] = useState([]);
  // const [browseMeals, setBrowseMeals] = useState("");

  const getIngredients = () => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}api/json/v1/1/list.php?i=list`)
      .then((res) => {
        setAllIng(res.data.meals);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getIngredients();
  }, []);

  return (
    <>
      <Container className="ilist">
        <div className="ilist-menu">
          {allIng.map((ing) => {
            return (
              <Container key={ing.idIngredient}>
                <a href={`/ingredients-detail/${ing.strIngredient}`}>
                  <img
                    src={`https://www.themealdb.com/images/ingredients/${ing.strIngredient}.png`}
                    alt={ing.strIngredient}
                  />
                </a>
                <p>{ing.strIngredient}</p>
                <p>{ing.strDescription}</p>
                <p>{ing.strDescription}</p>
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
