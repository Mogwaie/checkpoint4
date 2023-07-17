import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CardBird from "../components/CardBird";

export default function Home() {
  const [birdList, setBirdList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/birds`
        );
        setBirdList(response.data);
      } catch (error) {
        console.error("Error fetching bird list:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home-container">
      <Link to="/create-bird">
        <button type="button" className="primary-button">
          créer
        </button>
      </Link>
      <ul>
        {birdList.map((bird) => {
          return (
            <li key={bird.bird_id}>
              <Link to={`/card-bird/${bird.bird_id}`}>
                <CardBird bird={bird} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
