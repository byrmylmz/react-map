import React, { useEffect } from "react";
import signal from "../assets/wifi-signal.png";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.heat";
import "../map.css";
import 'leaflet-indoor-pytek';
import $ from 'jquery';
import data from './data.json';

const FloorMap = () => {
  useEffect(() => {
    // init map
    var map = L.map("map").setView([49.41873, 8.67689], 19);
    
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

   
        // This example uses a GeoJSON FeatureCollection saved to a file
        // (data.json), see the other example (live/index.html) for details on
        // fetching data using the OverpassAPI (this is also how the data in
        // data.json was generated)

        var indoorLayer = new L.Indoor(data, {
            getLevel: function(feature) {
            if (feature.properties.relations.length === 0) return null;
            return feature.properties.relations[0].reltags.level;
            },
            onEachFeature: function(feature, layer) {
            layer.bindPopup(JSON.stringify(feature.properties, null, 4));
            },
            style: function(feature) {
            var fill = 'white';
            if (feature.properties.tags.buildingpart === 'corridor') {
                fill = '#169EC6';
            } else if (feature.properties.tags.buildingpart === 'verticalpassage') {
                fill = '#0A485B';
            }
            return {
                fillColor: fill,
                weight: 1,
                color: '#666',
                fillOpacity: 1
            };
            }
        });
        indoorLayer.setLevel('0');
        indoorLayer.addTo(map);
        var levelControl = new L.Control.Level({
            level: '0',
            levels: indoorLayer.getLevels(),
            indoorLayer: indoorLayer
        });
        levelControl.addTo(map);
            
        }, []);





  return (
    <div className="">
      <div class="wrap">
        <div id="map"></div>
      </div>
    </div>
  );
};

export default FloorMap;
