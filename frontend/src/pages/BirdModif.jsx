import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import BackButton from "../components/BackButton";
import forest from "../assets/images/bg-forest.png";

export default function BirdModif() {
  const { id } = useParams();
  const navigateTo = useNavigate();

  const [selectedBird, setSelectedBird] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [food, setFood] = useState("");
  const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");
  const [song, setSong] = useState("");
  const [is_protected, setIsProtected] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/birds/${id}`)
      .then((response) => {
        setSelectedBird(response.data);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { name, description, food, size, weight, song, is_protected };
    try {
      const reponse = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/birds/${id}`,
        body
      );
      if (reponse.status === 204) {
        navigateTo("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // delete bird
  const handleOnClickSupp = async (e) => {
    e.preventDefault();
    try {
      const reponse = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/birds/${id}`
      );
      if (reponse.status === 204) {
        navigateTo("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="create-modif-conatiner"
      style={{ backgroundImage: `url(${forest})` }}
    >
      <form onSubmit={(e) => handleSubmit(e)} className="form-bird-description">
        <BackButton path={`/card-bird/${selectedBird.bird_id}`} />
        <label> Nom : </label>
        <input
          type="text"
          placeholder={selectedBird.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="image-conatiner">
          <img
            src={selectedBird.image}
            alt={selectedBird.name}
            className="image-bird"
          />
        </div>
        <label> Description : </label>
        <textarea
          type="text"
          placeholder={selectedBird.description}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          cols="30"
          rows="10"
        />
        <label> Régime alimentaire: </label>
        <textarea
          type="text"
          placeholder={selectedBird.food}
          value={food}
          onChange={(e) => setFood(e.target.value)}
          cols="30"
          rows="10"
        />
        <label> Taille: </label>
        <input
          type="text"
          placeholder={selectedBird.size}
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
        <label> Poids : </label>
        <input
          type="text"
          placeholder={selectedBird.weight}
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <label> Cris et chant : </label>
        <textarea
          type="text"
          placeholder={selectedBird.song}
          value={song}
          onChange={(e) => setSong(e.target.value)}
          cols="30"
          rows="10"
        />
        <label> Protégé? </label>
        <input
          type="text"
          placeholder={selectedBird.is_protected}
          value={is_protected}
          onChange={(e) => setIsProtected(e.target.value)}
        />
        <div className="buttons">
          <button className="primary-button" type="submit">
            Valider
          </button>
          <button
            className="primary-button"
            type="button"
            onClick={handleOnClickSupp}
          >
            Supprimer
          </button>
        </div>
      </form>
    </div>
  );
}
