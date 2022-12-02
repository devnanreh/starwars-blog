import React, { useContext } from "react";
import { Context } from "../../store/appContext";

import { Link } from "react-router-dom";

export const CardStarship = () => {
  const { store, actions } = useContext(Context);

  return store.starships.map((nave, index) => {
    return (
      <>
        <div
          key={nave.name}
          className="card p-1 me-3"
          style={{ width: "18rem" }}
        >
          <img
            src={`https://starwars-visualguide.com/assets/img/starships/${
              index + 9
            }.jpg`}
            className="card-img-top"
            alt={nave.name}
          />
          <div key={nave.name} className="card-body mt-2 p-0">
            <h5 className="card-title">{nave.name}</h5>
            <p className="card-text">Model: {nave.model} </p>
            <p className="card-text">Manufacturer: {nave.manufacturer} </p>
            <p className="card-text">Passengers: {nave.passengers} </p>
            <div className="card-footer d-flex justify-content-between">
              <a href="#" className="btn btn-primary">
                Mas Info...
              </a>
              <button
                type="button"
                className="btn"
                onClick={() => {
                  actions.addFavorite(nave);
                }}
              >
                {store.favorites.includes(nave) ? (
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
