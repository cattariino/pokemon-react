import React, { Component } from "react";
import styles from "./mainPage.module.css";

export default class MainPage extends Component {
  render() {
    console.log(styles);
    return <div className={styles.body}> hola mundo</div>;
  }
}
