import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BackButton from "../components/BackButton";
import forest from "../assets/images/bg-forest.png";

function CreateBird() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [food, setFood] = useState("");
  const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");
  const [song, setSong] = useState("");
  const [is_protected, setIsProtected] = useState("");
  const [url, setUrl] = useState("");

  const navigateTo = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      name,
      url,
      description,
      food,
      size,
      weight,
      song,
      is_protected,
    };
    try {
      const reponse = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/birds`,
        body
      );
      if (reponse.status === 201) {
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
        <BackButton path={"/"} />
        <label> Nom : </label>
        <input
          type="text"
          placeholder="nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label> Images : </label>
        <input
          type="url"
          placeholder="https://image.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <label> Description : </label>
        <textarea
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          cols="30"
          rows="10"
        />
        <label> Régime alimentaire: </label>
        <textarea
          type="text"
          placeholder="alimentation"
          value={food}
          onChange={(e) => setFood(e.target.value)}
          cols="30"
          rows="10"
        />
        <label> Taille: </label>
        <input
          type="text"
          placeholder="taille"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
        <label> Poids : </label>
        <input
          type="text"
          placeholder="poids"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <label> Cris et chant : </label>
        <textarea
          type="text"
          placeholder="chant"
          value={song}
          onChange={(e) => setSong(e.target.value)}
          cols="30"
          rows="10"
        />
        <label> Protégé? </label>
        <input
          type="text"
          placeholder="protégé"
          value={is_protected}
          onChange={(e) => setIsProtected(e.target.value)}
        />
        <div className="buttons">
          <button className="primary-button" type="submit">
            Valider
          </button>
        </div>
      </form>
    </div>
  );
}
export default CreateBird;
