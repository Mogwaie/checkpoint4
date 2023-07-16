import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function BirdDescription() {
  const { id } = useParams();
  const [selectedBird, setselectedBird] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:4242/api/birds/${id}`).then((response) => {
      setselectedBird(response.data);
    });
  }, [id]);

  return (
    <div>
      <h2>{selectedBird.name}</h2>
      <p>{selectedBird.description}</p>
      <p>{selectedBird.food}</p>
      <p>{selectedBird.size}</p>
      <p>{selectedBird.weight}</p>
      <p>{selectedBird.song}</p>
      <p>{selectedBird.is_protected}</p>
      <Link to="/">
        <button type="button">Retour</button>
      </Link>
    </div>
  );
}
