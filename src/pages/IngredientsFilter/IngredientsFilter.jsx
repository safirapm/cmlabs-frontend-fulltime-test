import { Breadcrumb, Container } from "react-bootstrap";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./IngredientsFilter.css";
import defaultImage from "../../img/pic-2.png";

const IngredientsFilter = () => {
  const [filterIng, setFilterIng] = useState("");
  const { i } = useParams();

  const onImageError = (e) => {
    e.target.src = defaultImage;
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}api/json/v1/1/filter.php?i=${i}`)
      .then((res) => {
        setFilterIng(res.data.meals);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [i]);

  return (
    <>
      <Container className="filter-section">
        <Breadcrumb>
          <Breadcrumb.Item href="/">home</Breadcrumb.Item>
          <Breadcrumb.Item href="/#ingredient">ingredients</Breadcrumb.Item>
          <Breadcrumb.Item active>recipe</Breadcrumb.Item>
        </Breadcrumb>
        <h2
          style={{
            fontFamily: "'General Sans', sans-serif",
            fontWeight: 600,
            color: "#B73E3E",
            paddingBottom: "15px",
          }}
        >
          recipes
        </h2>
        <Container className="ilist-all pd-10">
          {filterIng &&
            filterIng.map((filter) => {
              return (
                <Container key={filter.idMeal} className="ilist-all">
                  <a href={`/meal-details/${filter.idMeal}`}>
                    <div className="card filter-card">
                      <div className="filter-img">
                        <img
                          src={
                            filter.strMealThumb
                              ? filter.strMealThumb
                              : defaultImage
                          }
                          alt={filter.strMeal}
                          onError={onImageError}
                        />
                      </div>
                      <div className="card-img-overlay filter-ing">
                        <h5 className="card-title filter-ing-title filter-title text-capitalize">
                          {filter.strMeal}
                        </h5>
                      </div>
                    </div>
                  </a>
                </Container>
              );
            })}
        </Container>
      </Container>
      ;
    </>
  );
};

export default IngredientsFilter;
