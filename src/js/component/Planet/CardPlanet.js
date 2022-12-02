import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";

export const CardPlanet = () => {
  const { store, actions } = useContext(Context);

  return store.planets.map((planeta, index) => {
    return (
      <>
        <div
          key={planeta.name}
          className="card p-1 me-3"
          style={{ width: "18rem" }}
        >
          <img
            src={
              index == 0 || index == 1
                ? "https://starwars-visualguide.com/assets/img/placeholder.jpg"
                : "https://starwars-visualguide.com/assets/img/planets/" +
                  index +
                  ".jpg"
            }
            className="card-img-top"
            alt={planeta.name}
            style={{ width: "280px" }}
          />
          <div key={planeta.name} className="card-body mt-2 p-0">
            <h5 className="card-title"> {planeta.name} </h5>
            <p className="card-text">Population: {planeta.population} </p>
            <p className="card-text">Climate: {planeta.climate} </p>
            <p className="card-text">Terrain: {planeta.terrain} </p>
            <div className="card-footer d-flex justify-content-between">
              <a href="#" className="btn btn-primary">
                Mas Info...
              </a>
              <button
                type="button"
                className="btn"
                onClick={() => {
                  actions.addFavorite(planeta);
                }}
              >
                {store.favorites.includes(planeta) ? (
                  <i className="fas fa-heart"></i>
                ) : (
                  <i className="far fa-heart"></i>
                )}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  });
};

// https://starwars-visualguide.com/assets/img/placeholder.jpg
