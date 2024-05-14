import React, { Component } from "react";
import styles from "../components/LiveContainer.module.css";

const LiveContainer = (props) => {
  return <div className={styles.contenedor}>{props.children}</div>;
};

export default LiveContainer;
