import Feature from "ol/Feature";
import Map from "ol/Map";
import Point from "ol/geom/Point";
import View from "ol/View";
import {
  Circle as CircleStyle,
  Fill,
  Icon,
  Stroke,
  Style,
  Text,
} from "ol/style";
import { OSM, Vector as VectorSource } from "ol/source";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { Coordinate } from "ol/coordinate";
import { registerGeoLocation } from "./geolocation";
import { LineString } from "ol/geom";
import Control from "ol/control/Control";

const andgatanCoords = [
  [1834799.6359179495, 7688303.12479069],
  [1834799.038753666, 7688203.9955196325],
  [1834794.8586036817, 7688160.999691222],
  [1834786.498303713, 7688106.657741426],
  [1834771.569196626, 7688049.329970212],
  [1834741.7109824507, 7687959.75532769],
  [1834723.1988896623, 7687919.148156406],
  [1834705.2839611582, 7687883.318299403],
  [1834646.7618613772, 7687801.5067925695],
  [1834635.3733008327, 7687795.492710579],
  [1834431.3732868675, 7687841.076101246],
  [1834415.3142808853, 7687849.395241823],
  [1834399.5358480173, 7687865.403370893],
  [1834564.950354542, 7687990.807870428],
  [1834591.2255830152, 7688020.068920321],
  [1834622.2781257543, 7688069.633555848],
  [1834642.581711393, 7688144.876255567],
  [1834649.775420411, 7688159.80620406],
  [1834667.4450352257, 7688166.366180818],
  [1834794.9268536768, 7688160.988108158],
];

const tradgardsgatanCoords = [
  [1834849.6319105101, 7688042.237579816],
  [1834770.9777785249, 7688049.517392042],
  [1834621.24939665, 7688069.435590018],
  [1834544.0794228564, 7688082.685346465],
  [1834530.4972055468, 7688092.739994327],
  [1834527.5233414797, 7688114.82982224],
  [1834552.0855723056, 7688210.910507693],
  [1834561.0707959065, 7688310.922006121],
];

const grongatanCoords = [
  [1834561.1743462512, 7688311.032016575],
  [1834715.5556088062, 7688307.365044536],
  [1834799.9363334698, 7688304.20956349],
  [1834849.439022837, 7688303.964686213],
  [1834871.6984921028, 7688306.583430991],
  [1834888.133524748, 7688312.181338213],
  [1834904.2346719503, 7688322.964523063],
  [1834913.9594444653, 7688338.258326305],
];

const trastgatanCoords = [
  [1834916.8557174967, 7688338.473803116],
  [1835006.549565014, 7688303.184420486],
  [1835044.7797295295, 7688293.626879357],
  [1835147.707095533, 7688289.215706528],
  [1835232.9840932216, 7688289.077418856],
  [1835295.138819844, 7688292.229497194],
  [1835423.4764411447, 7688307.47394469],
];

const view = new View({
  center: [1834945.6270994311, 7688185.806455276],
  zoom: 17,
});

const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  target: "map",
  view: view,
});

map.on("moveend", () => {
  console.log("Current location", map.getView().getCenter());
});

map.on("click", (event) => {
  console.log("Mouse click", event.coordinate);
});

const streetStyle = new Style({
  stroke: new Stroke({
    color: "#f59b42B0",
    width: 10,
  }),
});

const streetAndgatanFeature = new Feature();
streetAndgatanFeature.setGeometry(new LineString(andgatanCoords));
streetAndgatanFeature.setStyle(streetStyle);

const streetTradgardsgatanFeature = new Feature();
streetTradgardsgatanFeature.setGeometry(new LineString(tradgardsgatanCoords));
streetTradgardsgatanFeature.setStyle(streetStyle);

const streetGrongatanFeature = new Feature();
streetGrongatanFeature.setGeometry(new LineString(grongatanCoords));
streetGrongatanFeature.setStyle(streetStyle);

const streetTrastgatanFeature = new Feature();
streetTrastgatanFeature.setGeometry(new LineString(trastgatanCoords));
streetTrastgatanFeature.setStyle(streetStyle);

const accuracyFeature = new Feature();
const positionFeature = new Feature();
positionFeature.set;
positionFeature.setStyle(
  new Style({
    image: new CircleStyle({
      radius: 6,
      fill: new Fill({
        color: "#3399CC",
      }),
      stroke: new Stroke({
        color: "#fff",
        width: 2,
      }),
    }),
  })
);

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
  createHouse([1834706.76138604, 7687969.035820373], 10),
];

registerGeoLocation(view, accuracyFeature, positionFeature);

new VectorLayer({
  map: map,
  source: new VectorSource({
    features: [
      ...houses,
      streetAndgatanFeature,
      streetTradgardsgatanFeature,
      streetGrongatanFeature,
      streetTrastgatanFeature,
      accuracyFeature,
    ],
  }),
});

const source = new VectorSource({
  features: [positionFeature],
});
const layer = new VectorLayer({
  map: map,
  source: source,
});

const locate = document.createElement("div");
locate.className = "ol-control ol-unselectable locate";
locate.innerHTML = '<button title="Locate me">◎</button>';
locate.addEventListener("click", function () {
  if (!source.isEmpty()) {
    map.getView().fit(source.getExtent(), {
      maxZoom: 18,
      duration: 500,
    });
  }
});
map.addControl(
  new Control({
    element: locate,
  })
);

function createHouse(coordinate: Coordinate, number: number) {
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
        /*stroke: new Stroke({
          color: 'white',
          width: 2,
        }),*/
      }),
    })
  );
  return house;
}
