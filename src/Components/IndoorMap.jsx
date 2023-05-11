import * as Indoor from "indoorjs/src/Indoor";
import { useEffect } from "react";

const IndoorMap = () => {
  useEffect(() => {
    const mapEl = document.querySelector(".my-map");
    const map = new Indoor.Map(mapEl, {
      floorplan: new Indoor.Floor({
        url: "./fp2.png",
        opacity: 1,
        width: 800,
        zIndex: 1,
      }),
      minZoom: 0.001,
      maxZoom: 10,
    });

    const addMarkers = () => {
      const marker = new Indoor.Marker([110, 20], {
        text: `M`,
        draggable: false,
        zIndex: 100,
        id: 1,
        clickable: false,
      });
      // eslint-disable-next-line no-loop-func

      marker.addTo(map);
    };

    map.on("ready", () => {
      console.log("map is ready");
      addMarkers();
    });
  });

  return (
    <div className="">
      <div className="my-map h-screen"></div>
    </div>
  );
};

export default IndoorMap;
