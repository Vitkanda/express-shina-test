import React from "react";
import styles from "./yaMap.module.scss";
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  ZoomControl,
} from "react-yandex-maps";
import { useMainContext } from "../../context/MainContext";

const YaMap = () => {
  const { coordinates } = useMainContext();

  return (
    <YMaps>
      <Map
        className={styles.map}
        state={{
          center: coordinates || [55.752004, 37.617734],
          zoom: 15,
        }}
      >
        <Placemark
          geometry={coordinates}
          options={{
            iconLayout: "default#image",
            iconImageHref:
              "https://moskva.express-shina.ru/images/baloon-for-map2.png",
            iconImageSize: [40, 54],
            iconImageOffset: [-15, -15],
          }}
        />

        <FullscreenControl />
        <ZoomControl />
      </Map>
    </YMaps>
  );
};

export default YaMap;
