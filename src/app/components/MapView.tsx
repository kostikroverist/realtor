// components/OnTheMap/MapView.tsx
"use client";

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngExpression } from 'leaflet';
import { MappedProperty } from 'interfaces/property';


interface MapViewProps {
  properties: MappedProperty[]; 
  initialCenter?: LatLngExpression;
  initialZoom?: number;
}

const FitBoundsToMarkers: React.FC<{ properties: MappedProperty[] }> = ({ properties }) => {
  const map = useMap();

  useEffect(() => {
    if (properties.length > 0) {
      const bounds = L.latLngBounds(properties.map(p => [p.latitude, p.longitude] as LatLngExpression));
      if (bounds.isValid()) {
        map.fitBounds(bounds, { padding: [50, 50] });
      } else if (properties.length === 1) {
        map.setView([properties[0].latitude, properties[0].longitude], 13); // Зум для одного маркера
      }
    } else {
      // Можна скинути карту до початкового стану, якщо об'єктів немає
      // map.setView(map.options.center || [DEFAULT_LAT, DEFAULT_LNG], map.options.zoom || DEFAULT_ZOOM);
    }
  }, [properties, map]);

  return null;
};

const MapView: React.FC<MapViewProps> = ({
  properties,
  initialCenter = [49.8397, 24.0297], // Львів, зміни на своє
  initialZoom = 7,
}) => {
  return (
    <MapContainer
      center={initialCenter}
      zoom={initialZoom}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {properties.map((property) => (
        <Marker key={property.id} position={[property.latitude, property.longitude]}>
          <Popup>
            <strong>{property.name || `Об'єкт`}</strong>
            <br />
            {/* Тепер можна легко отримати доступ до всіх полів з originalData */}
            Адреса: {property.originalData.address.StreetAddress || property.originalData.address.Street_Name || 'N/A'}
            <br />
            Місто: {property.originalData.address.City || 'N/A'}
            {/* Додай будь-яку іншу інформацію з property.originalData */}
            <br />
            <small>ID: {typeof property.id === 'string' && property.id.includes('-') ? 'auto-gen' : property.id}</small>
          </Popup>
        </Marker>
      ))}
      <FitBoundsToMarkers properties={properties} />
    </MapContainer>
  );
};

export default MapView;