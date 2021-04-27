import React from "react";

const Card = ({ planets }) => {
  return planets.map((el) => {
    return (
      <div key={el.name} className="col-md-6 col-lg-4 col-xl-3 mb-4">
        <article className="bg-warning p-3 rounded">
          <h3>{el.name}</h3>
          <p className="fw-bold">Population</p>
          <p>{el.population}</p>
          <p className="fw-bold">Climate</p>
          <p>{el.climate}</p>
        </article>
      </div>
    );
  });
};

export default Card;
