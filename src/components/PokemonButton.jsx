import React from "react";

const PokemonButton = ({ pokemonName }) => {
  const handleClick = () => {
    console.log(`Clicked on ${pokemonName} button`);
  };

  return <button onClick={handleClick}>{pokemonName}</button>;
};

export default PokemonButton;
