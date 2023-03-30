import React, { useEffect } from "react";
import MainPage from "./components/MainPage/MainPage";
import styles from "./app.module.scss";
import YaMap from "./components/Map/YaMap";
import { useMainContext } from "./context/MainContext";

const App = () => {
  const { cards, getFetch } = useMainContext();

  useEffect(() => {
    getFetch();
  }, []);

  return (
    <div className={styles.app}>
      {cards ? <MainPage /> : null}
      <YaMap />
    </div>
  );
};

export default App;
