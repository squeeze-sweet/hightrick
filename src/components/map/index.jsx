import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  return (
    <MapContainer
      center={[56.826166081488516, 60.59849314370995]}
      zoom={17}
      scrollWheelZoom={false}
      id="map"
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[56.826166081488516, 60.59849314370995]}>
        <Popup>Куйбышева 32а к1, ДС “Снежинка”</Popup>
      </Marker>
    </MapContainer>
  );
}
