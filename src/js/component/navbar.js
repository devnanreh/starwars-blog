import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-dark bg-dark m-0">
      <div className="container">
        <Link to="/">
          <img
            className="navbar-brand mb-0"
            src="https://es.logodownload.org/wp-content/uploads/2020/09/star-wars-logo-3-11-1024x443.png"
            alt="logo starwars"
            style={{ width: "150px" }}
          />
        </Link>
        <div className="btn-group">
          <button
            className="btn btn-secondary dropdown-toggle text-center"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            FAVORITOS
          </button>
          <ul className="dropdown-menu dropdown-menu-end menu-size">
            {store.favorites && store.favorites.length ? (
              store.favorites.map((fav, i) => (
                <div key={i} className="container">
                  <li className="dropdown-item d-flex align-items-center ">
                    <div className="col-10">
                      <Link
                        to={`/people/${fav.uid}`}
                        className="text-decoration-none text-black"
                      >
                        {fav.name}
                      </Link>
                    </div>

                    <button
                      type="button"
                      className="btn btn-outline-secondary col align-self-end rounded"
                      onClick={() => {
                        actions.deleteFavorite(fav.name);
                      }}
                    >
                      <i className="far fa-trash-alt"></i>
                    </button>
                  </li>
                </div>
              ))
            ) : (
              <li className="dropdown-item"></li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
