import { Container } from "react-bootstrap";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./IngredientsFilter.css";

const IngredientsFilter = () => {
  const [listIng, setListIng] = useState("");

  const { i } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}api/json/v1/1/filter.php?i=${i}`)
      .then((res) => {
        setListIng(res.data.meals);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [i]);
  return (
    <>
      <Container className="ingfilter">
        <div className="ilist-menu">
          {listIng &&
            listIng.map((ing) => {
              return (
                <Container key={ing.idMeal}>
                  <img src={ing.strMealThumb} alt={ing.strMeal} />
                  <p>{ing.strMeal}</p>
                </Container>
              );
            })}
        </div>
      </Container>
    </>
  );
};

export default IngredientsFilter;
