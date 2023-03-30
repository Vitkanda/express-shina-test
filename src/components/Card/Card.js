import React from "react";
import styles from "./card.module.scss";

const Card = ({ card, handleClick, select, index }) => {
  const selectClassName = (select, index) =>
    select !== index ? styles.sidebar__items : styles.sidebar__items__selected;

  return (
    <div
      className={selectClassName(select, index)}
      key={Math.random().toString()}
      onClick={() => handleClick(card, index)}
    >
      <div className={styles.sidebar__content_address}>{card.address}</div>
      <div className={styles.sidebar__content_buttons}>
        {card.budgets.map((budget, index) => {
          return (
            <div
              className={styles.sidebar__content_button}
              key={budget + index}
            >
              {budget}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
