import axios from "axios";
import React, { useEffect, useState } from "react";

import "./App.css";

import Card from "./components/Card/Card";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then((res) => {
        setPokemons(res.data.results)
        console.log(res)
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="cards">
        {pokemons.map(function (pokemon) {
          return <Card pokemon={pokemon} />
        })}
      </div>
    </>
  );
}

export default App;
