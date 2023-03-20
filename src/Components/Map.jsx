import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import { addressPoints } from "./addressPoints";

export default function Map() {
  useEffect(() => {
    var map = L.map("map").setView([40.99812, 39.77223], 18);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const points = addressPoints
      ? addressPoints.map((p) => {
          return [p[0], p[1]];
        })
      : [];

    L.heatLayer(points).addTo(map);
  }, []);

  return <div id="map" style={{ height: "100vh" }}></div>;
}
