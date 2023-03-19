import signal from "../assets/wifi-signal.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

function NormalMap() {
  const position = [40.99812, 39.77223];
  const position1 = [40.99805, 39.77170];

  const customIcon = new Icon({
    iconUrl: signal,
    iconSize: [33, 33],
  });

  return (
      <div className="" >
        <div className="map" id="map">
          <MapContainer center={position} scrollWheelZoom={true} zoom={19} >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              maxZoom={22}
              maxNativeZoom={19}
            />
            <Marker position={position} icon={customIcon}>
              <Popup>Library 1</Popup>
            </Marker>
            <Marker position={position1} icon={customIcon}>
              <Popup>Library 2</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
  );
}

export default NormalMap;
