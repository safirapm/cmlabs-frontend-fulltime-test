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
        <div className="ilist-header">
          <h2>let's get cookin' and mealin'.</h2>
          <label htmlFor="site-search">look for ingredients here:</label>
          <input
            type="search"
            id="site-search"
            placeholder="type your ingredient"
          ></input>

          <Button type="submit">Search</Button>
        </div>

        <Container className="ilist-section" id="ingredient">
          <h5>click any ingredients of your choice below!</h5>
          <Container className="ilist-all pd-10">
            {allIng.map((ing) => {
              return (
                <Container key={ing.idIngredient} className="ilist-all">
                  <a href={`/ingredients-detail/${ing.strIngredient}`}>
                    <div className="card ingredient-card">
                      <div className="ilist-img">
                        <img
                          src={`${process.env.REACT_APP_BASEURL}images/ingredients/${ing.strIngredient}.png`}
                          alt={ing.strIngredient}
                        />
                      </div>
                      <div className="card-img-overlay ingredient-overlay layer-ing">
                        <h5 className="card-title layer-ing-title ingredient-title">
                          {ing.strIngredient}
                        </h5>
                      </div>
                    </div>
                  </a>
                </Container>
              );
            })}
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default IngredientsList;
