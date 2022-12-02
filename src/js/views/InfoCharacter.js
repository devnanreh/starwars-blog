import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const InfoCharacter = () => {
  const { store, actions } = useContext(Context);

  const { id } = useParams();

  useEffect(() => {
    actions.getCharacter(id);
  }, [id]);

  return (
    <div key={id} className="container card border-0 mb-3">
      <div className="row g-0">
        <div className="col-md-4 my-2 d-flex justify-content-center align-items-center">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
            className="img-fluid rounded"
            alt="name"
          />
        </div>
        <div className="col-md-8 text-center">
          <div className="card-body">
            <h5 className="card-title text-uppercase">
              {store.character.name}
            </h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              saepe exercitationem! Suscipit tempora, perferendis quibusdam
              deserunt sit velit alias explicabo nostrum accusamus
              exercitationem obcaecati earum quos nam soluta nisi mollitia?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              saepe exercitationem! Suscipit tempora, perferendis quibusdam
              deserunt sit velit alias explicabo nostrum accusamus
              exercitationem obcaecati earum quos nam soluta nisi mollitia?
            </p>
          </div>
          <div className="container row border-top border-danger mt-4 text-capitalize">
            <div className="col-2 text-danger text-center">
              <p>nombre</p>
              <p>{store.character.name}</p>
            </div>
            <div className="col-2 text-danger text-center">
              <p>Género</p>
              <p>{store.character.gender}</p>
            </div>
            <div className="col-2 text-danger text-center">
              <p>nacimiento</p>
              <p>{store.character.birth_year}</p>
            </div>
            <div className="col-2 text-danger text-center">
              <p>ojos</p>
              <p>{store.character.eye_color}</p>
            </div>
            <div className="col-2 text-danger text-center">
              <p>Altura</p>
              <p>{store.character.height}</p>
            </div>
            <div className="col-2 text-danger text-center">
              <p>peso</p>
              <p>{store.character.mass}</p>
            </div>
          </div>
          <Link to="/">
            <span className="btn btn-primary btn-lg" href="#" role="button">
              Back home
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
