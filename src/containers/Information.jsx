import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './styles/Information.css';

function Information() {
  const { id } = useParams();
  const [pueblo, setPueblo] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const users = await data.json();
      setPueblo(users);
    }
    getData();
  }, [id]);

  return (
    <div className="cards">
      <div className="card-flex">
        <Link className="card-link" to="/search-patients">Regreso</Link>
      </div>
      <div>
        <article className="card">
          <img src={pueblo.image} alt={pueblo.name} />
          <span>
            Name:
            {pueblo.name}
          </span>
          <span>
            Status:
            {pueblo.status}
          </span>
          <span>
            Species:
            {pueblo.species}
          </span>
          <span>
            Gender:
            {pueblo.gender}
          </span>
        </article>
      </div>
    </div>
  );
}

export default Information;
