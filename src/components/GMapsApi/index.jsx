import React, { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
console.log(process.env.REACT_APP_GOOGLE_MAPS)
export default function GMaps() {
    const { isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS
    }) ;
    if (!isLoaded) return <div>Loading ... </div>;
    return (
      <Card>
        <CardHeader color="blueGray"><bold>Amazon Dat 6 </bold>7055 Campbellton Rd SW. Atlanta, Georgia 30331</CardHeader>
        <CardBody>
          <Map />
        </CardBody>
      </Card>
    );
}

function Map() {
    const center = useMemo(() => ({ lat: 33.69416, lng: -84.61744 }), []);

    return (
      <GoogleMap zoom={11.51} center={center} mapContainerStyle={{ height: "500px" }}>
        <Marker position={{ lat: 33.69416, lng: -84.61744 }} />
      </GoogleMap>
    );
}
