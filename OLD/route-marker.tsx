import { generateUniqueKey } from '@libs/utils';
import { FC } from 'react';
import { Marker, Popup } from 'react-leaflet';

export type RouteMarkerProps = {
  name: string;
  dist: number;
  elev: number;
  time: number;
  munrosIn: string[];
  corbettsIn: string[];
  latIn: number;
  lonIn: number;
};

export const RouteMarker: FC<RouteMarkerProps> = ({
  name,
  dist,
  elev,
  time,
  munrosIn,
  corbettsIn,
  latIn,
  lonIn,
}) => {
  var munros = null;
  // var corbetts = null;

  // if (munrosIn != null) {
  //     munros = munrosIn.map(({ x, index }: any) => {
  //         return (<li key={idx}>{munrosIn[idx]}</li>)
  //     });
  // }

  const array = ['Ben More', 'Stob Binnein', 'Ben Starav', 'Creise'];

  munros = array.map((x, index) => {
    return <li key={generateUniqueKey(index)}>{x}</li>;
  });

  // for (var i in corbettsIn) {
  //     corbetts = corbettsIn.map((index) => (
  //         <li key={generateUniqueKey(index)}>{corbettsIn[i]}</li>
  //     ));
  // }

  return (
    <Marker position={[latIn, lonIn]}>
      <Popup>
        <div style={{ textAlign: 'center' }}>
          <h3>{name}</h3>
          <div>
            <b>Distance:</b> {dist.toFixed(2)}mi
            <br />
            <b>Elevation Gain:</b> {elev.toLocaleString()}ft
            <br />
            <b>Avg. Duration:</b> {time}hrs
            <br />
            <b>Munros:</b>
            <ul>{munros}</ul>
            {/* <b>Corbetts:</b>{corbetts}<br /><br /> */}
          </div>
        </div>
      </Popup>
    </Marker>
  );
};
