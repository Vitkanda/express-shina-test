import React, { createContext, useState, useContext } from "react";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [coordinates, setCoordinates] = useState();
  const [select, setSelect] = useState("");
  const [cards, setCards] = useState([]);

  const getFetch = () => {
    fetch("https://express-shina.ru/vacancy/geo-state")
      .then((response) => response.json())
      .then((data) => setCards(data.pickPoints))
      .catch((error) => console.error(error));
  };

  const value = {
    setCoordinates,
    setSelect,
    cards,
    coordinates,
    select,
    getFetch,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

export const useMainContext = () => useContext(MainContext);
