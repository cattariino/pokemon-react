import React, { Component } from "react";
import styles from "./PokemonContainer.module.css";

const PokemonCongtainer = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default PokemonCongtainer;
