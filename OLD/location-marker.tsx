import { FC, useState } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';

export const LocationMarker: FC = () => {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e: any) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here dood</Popup>
    </Marker>
  );
};
