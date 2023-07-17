import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

import BackButton from "../components/BackButton";

export default function BirdDescription() {
  const { id } = useParams();

  const [selectedBird, setselectedBird] = useState("");

  // get bird by id
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/birds/${id}`)
      .then((response) => {
        setselectedBird(response.data);
      });
  }, [id]);

  return (
    <div className="bird-description-container">
      <div className="back-and-protected">
        <BackButton path={"/"} />
        <p>{selectedBird.is_protected}</p>
      </div>

      <h2>{selectedBird.name}</h2>

      <img src={selectedBird.image} alt={selectedBird.name} />
      <div className="weight-and-size">
        <p>Taille: {selectedBird.size}</p>
        <p>Poids: {selectedBird.weight}</p>
      </div>
      <div className="container-text">
        <p>
          Description: <br /> {selectedBird.description}
        </p>
      </div>
      <div className="food-and-song">
        <h3>Régime alimentaire:</h3>
        <p>{selectedBird.food}</p>

        <h3>Chant ou cris:</h3>
        <p> {selectedBird.song}</p>
      </div>

      <Link to={`/card-bird-modif/${selectedBird.bird_id}`}>
        <button className="primary-button" type="button">
          Modifier
        </button>
      </Link>
    </div>
  );
}
