import { Feature } from "ol";
import { Coordinate } from "ol/coordinate";
import { Point } from "ol/geom";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Fill, Icon, Style, Text } from "ol/style";

const createHouse = (coordinate: Coordinate, number: number) => {
  const house = new Feature();
  house.setGeometry(new Point(coordinate));
  house.setStyle(
    new Style({
      image: new Icon({
        anchor: [0.5, 0.5],
        anchorXUnits: "fraction",
        anchorYUnits: "fraction",
        src: "star.svg",
      }),
      text: new Text({
        text: "" + number,
        font: "bold 14px Calibri,sans-serif",
        fill: new Fill({
          color: "white",
        }),
        offsetY: 3,
      }),
    })
  );

  return house;
};

const houses = [
  createHouse([1834832.536092162, 7688211.446470313], 3),
  createHouse([1834583.8121689286, 7688210.549791083], 21),
  createHouse([1834795.548464707, 7688014.252600205], 11),
  createHouse([1834819.0747197934, 7688077.47941075], 9),
  createHouse([1834552.292539619, 7688109.416662841], 10),
  createHouse([1834508.8222308403, 7687796.634740654], 27),
  createHouse([1834654.695639067, 7688283.715815516], 29),
  createHouse([1834563.9618911995, 7687953.966571541], 5),
  createHouse([1835181.526087219, 7688345.09056236], 15),
  createHouse([1834833.0434337505, 7688279.658165404], 23),
  createHouse([1834612.4847923152, 7688149.528566952], 8),
  createHouse([1834706.76138604, 7687969.035820373], 8),
];

export const housesLayer = new VectorLayer({
  source: new VectorSource({
    features: houses,
  }),
});
