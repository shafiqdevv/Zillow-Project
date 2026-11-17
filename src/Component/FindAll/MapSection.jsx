import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const afghanistanBounds = [
  [29.3, 60.5], // South-West
  [38.5, 74.9], // North-East
];

function MapSection() {
  return (
    <div className="h-full min-h-0 w-full overflow-hidden z-1">
      <MapContainer
        center={[33.9391, 67.71]}
        zoom={6.5}
        scrollWheelZoom={true}
        className="h-full w-full"
        maxBounds={afghanistanBounds}
        maxBoundsViscosity={1.0}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default MapSection;
