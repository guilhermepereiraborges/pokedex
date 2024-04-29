import axios from "axios";
import { useEffect, useState } from "react";

import Tag from "../Tag/Tag";

export default function Card(props) {
  const pokemon = props.pokemon;

  const [pokemonInfo, setPokemonInfo] = useState({});
  const [pokemonType, setPokemonType] = useState({});

  useEffect(() => {
    getPokemonInfo();
  }, []);

  const getPokemonInfo = () => {
    axios
      .get(pokemon.url)
      .then((res) => {
        setPokemonInfo(res.data);
      })
      .catch((err) => console.log(err));
  };

  const renderPokemonImage = () => {
    if (
      pokemonInfo.sprites &&
      pokemonInfo.sprites.other.dream_world.front_default
    ) {
      return (
        <img
          src={pokemonInfo.sprites.other.dream_world.front_default}
          alt={pokemon.name}
        />
      );
    } else {
      return <div>Imagem não disponível</div>;
    }
  };

  const firstType = pokemonInfo.types && pokemonInfo.types.length > 0 ? `--${pokemonInfo.types[0].type.name}` : null;
console.log(firstType)

  return (
    <div className="card" style={{ backgroundColor: `var(${firstType})` }}>
      <div className="card-ls">
        <h1>{pokemon.name}</h1>

        {pokemonInfo.types && (
          <div className="tags">
            {pokemonInfo.types.map((type) => (
              <Tag type={type} />
            ))}
          </div>
        )}
      </div>
      <div className="card-rs">{renderPokemonImage()}</div>
    </div>
  );
}
