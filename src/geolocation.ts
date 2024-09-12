import { Feature, View } from "ol";
import Geolocation from "ol/Geolocation";
import { el } from "./utils";
import { Point } from "ol/geom";

export const registerGeoLocation = (
  view: View,
  accuracyFeature: Feature,
  positionFeature: Feature
) => {
  const geolocation = new Geolocation({
    // enableHighAccuracy must be set to true to have the heading value.
    trackingOptions: {
      enableHighAccuracy: true,
    },
    projection: view.getProjection(),
  });

  geolocation.setTracking(true);

  // update the HTML page when the position changes.
  geolocation.on("change", function () {
    el("accuracy")!.innerText = geolocation.getAccuracy() + " [m]";
    el("altitude")!.innerText = geolocation.getAltitude() + " [m]";
    el("altitudeAccuracy")!.innerText =
      geolocation.getAltitudeAccuracy() + " [m]";
    el("heading")!.innerText = geolocation.getHeading() + " [rad]";
    el("speed")!.innerText = geolocation.getSpeed() + " [m/s]";
  });

  // handle geolocation error.
  geolocation.on("error", function (error) {
    const info = document.getElementById("info");
    if (!info) {
      return;
    }
    info.innerHTML = error.message;
    info.style.display = "";
  });

  geolocation.on("change:accuracyGeometry", function () {
    const accuracy = geolocation.getAccuracyGeometry();
    if (accuracy == null) return;
    accuracyFeature.setGeometry(accuracy);
  });

  geolocation.on("change:position", function () {
    const coordinates = geolocation.getPosition();
    if (coordinates == null) return;
    positionFeature.setGeometry(new Point(coordinates));
  });

  return geolocation;
};
