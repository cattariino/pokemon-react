import style from "./p.module.css";

const NamePokemon = (props) => {
  return (
    <h2>
      {props.children}
      <p className={style.pokeomon}>?</p>
    </h2>
  );
};

export default NamePokemon;
