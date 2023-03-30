import React from "react";
import { useMainContext } from "../../context/MainContext";
import styles from "./card.module.scss";

const Card = ({ card, index }) => {
  const { setCoordinates, setSelect, select } = useMainContext();

  const selectClassName = (select, index) =>
    select !== index ? styles.sidebar__items : styles.sidebar__items__selected;

  const handleClick = (cards, index) => {
    setCoordinates([cards.latitude, cards.longitude]);
    setSelect(index);
  };

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
