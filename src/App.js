import React, { useEffect, useState } from "react";
import MainPage from "./components/MainPage/MainPage";
import styles from "./app.module.scss";
import YaMap from "./components/Map/YaMap";

const App = () => {
  const [cards, setCards] = useState([]);
  const [coordinates, setCoordinates] = useState();
  const [select, setSelect] = useState("");

  useEffect(() => {
    fetch("https://express-shina.ru/vacancy/geo-state")
      .then((response) => response.json())
      .then((data) => setCards(data.pickPoints))
      .catch((error) => console.error(error));
  }, []);

  const handleClick = (cards, index) => {
    setCoordinates([cards.latitude, cards.longitude]);
    setSelect(index);
  };
  return (
    <div className={styles.app}>
      <MainPage cards={cards} handleClick={handleClick} select={select} />
      <YaMap coordinates={coordinates} />
    </div>
  );
};

export default App;
