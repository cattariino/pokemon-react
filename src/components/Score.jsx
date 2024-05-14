import styles from "./Score.module.css";

const Score = (props) => {
  return (
    <>
      <div className={styles.font}>{props.children}</div>
    </>
  );
};

export default Score;
