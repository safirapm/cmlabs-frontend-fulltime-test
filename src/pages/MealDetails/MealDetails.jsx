import { Breadcrumb, Container } from "react-bootstrap";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./MealDetails.css";

const MealDetails = () => {
  const [allDetails, setAllDetails] = useState("");
  const { idMeal } = useParams();

  const navigate = useNavigate();

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
      <Container className="filter-section">
        <Breadcrumb>
          <Breadcrumb.Item href="/">home</Breadcrumb.Item>
          <Breadcrumb.Item href="/#ingredient">ingredients</Breadcrumb.Item>
          <Breadcrumb.Item onClick={() => navigate(-1)}>recipe</Breadcrumb.Item>
          <Breadcrumb.Item active>Details</Breadcrumb.Item>
        </Breadcrumb>
        {allDetails &&
          allDetails.map((meal) => {
            return (
              <Container key={meal.idMeal} className="details-menu">
                <Container className="details-box">
                  <h2 className="text-capitalize">{meal.strMeal}</h2>
                  <div className="details-two">
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                    <p>{meal.strInstructions}</p>
                  </div>
                </Container>
              </Container>
            );
          })}
      </Container>
    </>
  );
};

export default MealDetails;
