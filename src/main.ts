import Map from "ol/Map";
import View from "ol/View";
import { Tile as TileLayer } from "ol/layer";
import { OSM } from "ol/source";
import VectorSource from "ol/source/Vector";
import { createGeoLocationLayer } from "./layers/geolocation";
import { housesLayer } from "./layers/houses";
import { streetsLayer } from "./layers/streets";
import { registerLocateButton } from "./locatebutton";
import { registerShowAllButton } from "./showallbutton";

const view = new View({
  center: [1834945.6270994311, 7688185.806455276],
  zoom: 15.5,
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

map.addLayer(streetsLayer);
map.addLayer(housesLayer);

const { geolocationLayer, geolocationLayerSource } =
  createGeoLocationLayer(view);
map.addLayer(geolocationLayer);

registerLocateButton(map, geolocationLayerSource);
registerShowAllButton(map, streetsLayer.getSource() as VectorSource);
