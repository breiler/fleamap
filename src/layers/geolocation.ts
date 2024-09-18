import { Feature, View } from "ol";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Fill, Stroke, Style } from "ol/style";
import CircleStyle from "ol/style/Circle";
import { registerGeoLocation } from "../geolocation";

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

export const createGeoLocationLayer = (view: View) => {
  registerGeoLocation(view, accuracyFeature, positionFeature);

  const source = new VectorSource({
    features: [positionFeature, accuracyFeature],
  });

  return {
    geolocationLayer: new VectorLayer({
      source: source,
    }),
    geolocationLayerSource: source,
  };
};
