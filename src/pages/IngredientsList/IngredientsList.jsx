import axios from "axios";
import { Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "./IngredientsList.css";
import defaultImage from "../../img/pic-2.png";

const IngredientsList = () => {
  const [allIng, setAllIng] = useState([]);

  const onImageError = (e) => {
    e.target.src = defaultImage;
  };

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
          <div className="ilist-input">
            <input
              className="form-control"
              type="search"
              placeholder="type your ingredient..."
            />
          </div>

          <button className="btn btn-primary ilist-btn" type="submit">
            search
          </button>
        </div>

        <Container className="ilist-section" id="ingredient">
          <h2>𓀁 list of ingredients 𓀁</h2>
          <h5>click any ingredients of your choice below!</h5>
          <Container className="ilist-all pd-10">
            {allIng.map((ing) => {
              return (
                <Container key={ing.idIngredient} className="ilist-all">
                  <a href={`/ingredients-detail/${ing.strIngredient}`}>
                    <div className="card ingredient-card">
                      <div className="ilist-img">
                        <img
                          src={
                            `${process.env.REACT_APP_BASEURL}images/ingredients/${ing.strIngredient}.png`
                              ? `${process.env.REACT_APP_BASEURL}images/ingredients/${ing.strIngredient}.png`
                              : defaultImage
                          }
                          alt={ing.strIngredient}
                          onError={onImageError}
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
