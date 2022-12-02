import React from "react";
import { CardCharacter } from "./Character/CardCharacter.js";
import { CardPlanet } from "./Planet/CardPlanet.js";
import { CardStarship } from "./Starships/CardStarship.js";

export const Carousel = () => {
  return (
    <div className="container">
      <div className="pt-3">
        <h1 className="text-white">CHARACTERS</h1>
        <div className="row flex-row flex-nowrap overflow-auto">
          <CardCharacter />
        </div>
      </div>
      <div>
        <h1 className="mt-3 text-white">PLANETS</h1>
        <div className="row flex-row flex-nowrap overflow-auto">
          <CardPlanet />
        </div>
      </div>
      <div>
        <h1 className="mt-3 text-white">STARSHIPS</h1>
        <div className="row flex-row flex-nowrap overflow-auto">
          <CardStarship />
        </div>
      </div>
    </div>
  );
};
