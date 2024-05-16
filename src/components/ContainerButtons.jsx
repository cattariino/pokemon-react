import styles from "./ContainerButtons.module.css";
import PokemonButton from "./PokemonButton";

const ContainerButtons = (props) => {
  return (
    <div className={styles.botones}>
      <PokemonButton pokemonName="togepi" />
      <PokemonButton pokemonName="raichu" />
      <PokemonButton pokemonName="charmander" />
      {props.children}
    </div>
  );
};
export default ContainerButtons;
