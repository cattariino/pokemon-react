import React, { useState, useEffect } from "react";
import styles from "./GetPokemonImage.module.css";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getPokemonImage(pokemonAleatorio, done) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonAleatorio}`;
  fetch(url)
    .then((resolve) => resolve.json())
    .then((data) => {
      const imgUrl = data.sprites.other["official-artwork"].front_default;
      const name = data.name;
      done(imgUrl, name);
    })
    .catch((error) => {
      console.error("Error fetching Pokémon data:", error);
      done(null);
    });
}

const PokemonComponent = () => {
  const [pokemonImgUrl, setPokemonImgUrl] = useState(null);
  const [pokemonName, setPokemonName] = useState(null);

  useEffect(() => {
    const pokemonIndexes = [...Array(150).keys()].map((index) => index + 1);

    const shuffledIndexes = shuffleArray(pokemonIndexes);

    const randomPokemonIndex = shuffledIndexes[0];
    getPokemonImage(randomPokemonIndex, (imgUrl, name) => {
      if (imgUrl && name) {
        setPokemonImgUrl(imgUrl);
        setPokemonName(name);
      }
    });
  }, []);

  return (
    <div>
      {pokemonImgUrl && pokemonName ? (
        <div>
          <img
            className={styles.imgPokemon}
            src={pokemonImgUrl}
            alt={pokemonName}
          />
        </div>
      ) : (
        <p>Cargando Pokémon...</p>
      )}
    </div>
  );
};

export default PokemonComponent;
