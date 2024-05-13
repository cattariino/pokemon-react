import React, { Component } from "react";
import styles from "./mainPage.module.css";

const MainPage = (props) => {
  return <div className={styles.body}>{props.children}</div>;
};

export default MainPage;
