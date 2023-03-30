import React from "react";
import { useMainContext } from "../../context/MainContext";
import Card from "../Card/Card";
import styles from "./mainpage.module.scss";

const MainPage = () => {
  const { cards } = useMainContext();

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__container}>
        {cards.map((card, index) => {
          return (
            <Card index={index} card={card} key={Math.random().toString()} />
          );
        })}
      </div>
    </div>
  );
};

export default MainPage;
