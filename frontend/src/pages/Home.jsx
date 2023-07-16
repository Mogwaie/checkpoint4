import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CardBird from "../components/CardBird";

export default function Home() {
  const [birdList, setBirdList] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4242/api/birds`).then((response) => {
      setBirdList(response.data);
    });
  }, []);

  return (
    <div>
      <h2>BirDex</h2>
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
