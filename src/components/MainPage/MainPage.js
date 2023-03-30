import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./mainpage.module.scss";

const MainPage = ({ cards, handleClick, select }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__container}>
        {cards.map((card, index) => {
          return (
            <Card
            index={index}
              card={card}
              handleClick={handleClick}
              select={select}
              key={Math.random().toString()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainPage;
