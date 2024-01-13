import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

function Cards({ driver }) {
  const { id, forename, surname, image, dob, teams } = driver;

  let teamsDb;
  if (Array.isArray(driver.Teams)) {
    teamsDb = driver.Teams.map((team, index) => (
      <p key={index}>{team.teams}</p>
    ));
  } else {
    teamsDb = <p>{driver.Teams}</p>;
  }

  return (
    <div className="card">
      <Link to={`/driver/${id}`} className="texto">
        <h2>
          {forename} {surname}
        </h2>
        <div>
          <img src={image} alt={forename} className="img" />
        </div>
        <h2>Equipos:</h2>
        {teamsDb} {teams}
        <h3>Nacimiento:</h3>
        <h3>{dob}</h3>
      </Link>
    </div>
  );
}

export default Cards;