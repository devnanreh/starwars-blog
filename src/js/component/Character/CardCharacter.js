import React, { useContext } from "react";
import { Context } from "../../store/appContext";

import { Link } from "react-router-dom";

export const CardCharacter = () => {
  const { store, actions } = useContext(Context);

  return store.characters.map((personaje, index) => {
    return (
      <>
        <div
          key={personaje.uid}
          className="card p-1 me-3"
          style={{ width: "18rem" }}
        >
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${
              index + 1
            }.jpg`}
            className="card-img-top"
            alt={personaje.name}
          />
          <div key={personaje.uid} className="card-body mt-2 p-0">
            <h5 className="card-title">{personaje.name}</h5>
            {/* <p className="card-text">Gender: {personaje.gender} </p>
            <p className="card-text">Height: {personaje.height} </p>
            <p className="card-text">Eyes color: {personaje.eye_color} </p> */}
            <div className="card-footer d-flex justify-content-between">
              <Link to={`/people/${personaje.uid}`}>
                <button className="btn btn-primary">Mas Info...</button>
              </Link>
              <button
                type="button"
                className="btn"
                onClick={() => {
                  actions.addFavorite(personaje);
                }}
              >
                {store.favorites.includes(personaje) ? (
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
