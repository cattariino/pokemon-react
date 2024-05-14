import styles from "./CountingContainer.module.css";

const CountingContainer = (props) => {
  return <div className={styles.counting}>{props.children}</div>;
};

export default CountingContainer;
