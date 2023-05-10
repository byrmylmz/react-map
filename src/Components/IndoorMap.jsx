import * as Indoor from "indoorjs/src/Indoor";
import { useEffect } from "react";

const IndoorMap = () => {
  
  useEffect(() => {
  
    const mapEl = document.querySelector(".my-map");
    const map = new Indoor.Map(mapEl, {
      floorplan: new Indoor.Floor({
        url: "./fp.jpg",
        opacity: 1,
        width: 400,
        zIndex: 1,
      }),
      minZoom: 0.001,
      maxZoom: 10,
    });


  });

  return (
    <div class="context">
      <div className="h-screen p-0 m-0 bg-slate-300">
        <div class="my-map h-screen"></div>
      </div>
    </div>
  );
};

export default IndoorMap;
