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
    const center = useMemo(() => ({ lat: 33, lng: -84 }), []);

    return (
      <GoogleMap zoom={20} center={center} mapContainerStyle={{ height: "500px" }}>
        <Marker position={{ lat: 33, lng: -84 }} />
      </GoogleMap>
    );
}
