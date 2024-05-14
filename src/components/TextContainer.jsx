import styles from "./TextContainer.module.css";
import style from "./p.module.css";

const TextContainer = (props) => {
  return (
    <div className={styles.textContainer}>
      {props.children}
      <p className={style.pokeomon}>PoKeMoN</p>
    </div>
  );
};

export default TextContainer;
