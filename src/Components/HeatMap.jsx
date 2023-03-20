import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.heat";
import '../map.css'



const HeatMap = () => {
    useEffect(() => {
        var map = L.map("map").setView([40.99812, 39.77223], 18);
    
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    
         L.heatLayer([
          [40.99812, 39.77223, 0.8],
          [40.99805, 39.77170, 0.5 ],
         
        ], {radius: 20}).addTo(map);
    
      }, []);

    return ( 
        <div className=''>
             <div class="wrap">
                 <div id="map" ></div>
             </div>
        </div>
     );
}
 
export default HeatMap;