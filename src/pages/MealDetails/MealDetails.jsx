import { Container } from "react-bootstrap";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MealDetails = () => {
  const [allDetails, setAllDetails] = useState("");

  const { idMeal } = useParams();

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASEURL}api/json/v1/1/lookup.php?i=${idMeal}`
      )
      .then((res) => {
        setAllDetails(res.data.meals);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idMeal]);

  return (
    <>
      <Container className="details">
        <div className="details-menu">
          {allDetails &&
            allDetails.map((meal) => {
              return (
                <Container key={meal.idMeal}>
                  <p>{meal.strMeal}</p>
                  <img src={meal.strMealThumb} alt={meal.strMeal} />
                  <p>{meal.strInstructions}</p>
                </Container>
              );
            })}
        </div>
      </Container>
    </>
  );
};

export default MealDetails;
