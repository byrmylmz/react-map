import React, { useEffect } from "react";
import signal from "../assets/wifi-signal.png";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.heat";
import "../map.css";

const HeatMap = () => {
  useEffect(() => {
    // init map
    var map = L.map("map").setView([40.99812, 39.77223], 19);
    
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom:19,
        maxNativeZoom:19
    }).addTo(map);
    // Heat layer
    L.heatLayer(
      [
        [40.99812, 39.77223, 0.9],
        [40.99805, 39.7717, 0.7],
      ],
      { radius: 35 }
    ).addTo(map);

    //Icon custom icon
    var myIcon = L.icon({
      iconUrl: signal,
      iconSize: [35, 35],
    });
    // Markers
    L.marker([40.99812, 39.77223], { icon: myIcon })
      .bindPopup("<b>Library 1!</b><br>Information.")
      .addTo(map);
    L.marker([40.99805, 39.7717], { icon: myIcon })
      .bindPopup("<b>Library 2!</b><br>Information.")
      .addTo(map);
  }, []);
  

  return (
    <div className="">
      <div class="wrap">
        <div id="map"></div>
      </div>
    </div>
  );
};

export default HeatMap;
