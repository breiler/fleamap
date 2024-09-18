import { Map } from "ol";
import Control from "ol/control/Control";
import VectorSource from "ol/source/Vector";

export const registerLocateButton = (
  map: Map,
  geolocationLayerSource: VectorSource
) => {
  const locate = document.getElementById("locate");
  if (!locate) {
    return;
  }
  
  locate.addEventListener("click", function () {
    if (!geolocationLayerSource.isEmpty()) {
      map.getView().fit(geolocationLayerSource.getExtent(), {
        maxZoom: 17.8,
        duration: 500,
      });
    }
  });

  map.addControl(
    new Control({
      element: locate,
    })
  );
};
