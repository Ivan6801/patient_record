/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import './styles/SearchPatients.css';

export default function SearchPatients() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      obtenerDatos();
    }, 300);
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch('https://rickandmortyapi.com/api/character/');
    const users = await data.json();
    setData(users.results);
  };

  return (
    <>
      <Header />
      <section className="Search">
        <div className="Search-left">
          <div className="cards">
            {data.map((item) => (
              <article key={item.id} className="card">
                <img width="50%" src={item.image} alt={item.name} />
                <p>{item.name}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="Search-right">test</div>
      </section>
    </>
  );
}
