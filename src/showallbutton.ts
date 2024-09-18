import { Map } from "ol";
import Control from "ol/control/Control";
import VectorSource from "ol/source/Vector";

export const registerShowAllButton = (
  map: Map,
  geolocationLayerSource: VectorSource
) => {
  const locate = document.getElementById("showAll");
  if (!locate) {
    return;
  }
  
  locate.addEventListener("click", function () {
    if (!geolocationLayerSource.isEmpty()) {
      map.getView().fit(geolocationLayerSource.getExtent(), {
        maxZoom: 15.5,
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
