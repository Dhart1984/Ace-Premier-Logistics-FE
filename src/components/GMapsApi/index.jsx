import React, { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { Card, CardHeader, CardBody } from "@material-tailwind/react";

export default function GMaps() {
    const { isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyBiDARWKSlUWcYhMETzcMJAN4fVw1JvXwY"
    }) ;
    if (!isLoaded) return <div>Loading ... </div>;
    return (
      <Card>
        <CardHeader color="blueGray">Location</CardHeader>
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
