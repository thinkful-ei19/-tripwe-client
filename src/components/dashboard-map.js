import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline } from 'react-google-maps';
// import { Polyline } from 'react-google-maps';

const flightPlanCoordinates = [
    { lat: -31.9505, lng: 115.8605 },
    { lat: 41.8781, lng: -87.6298 }
];

const DashboardMap = withScriptjs(withGoogleMap((props) => {
    return (
        <GoogleMap
            defaultZoom={4}
            defaultCenter={{ lat: -31.9505, lng: 115.8605 }}
        >
            {props.isMarkerShown && <Marker position={{ lat: -31.9505, lng: 115.8605 }} />}
            <Polyline
                path={flightPlanCoordinates}
                options={{
                    geodesic: true,
                    strokeColor: '#FF0000',
                    strokeWeight: 2
                }}
            />
        </GoogleMap>
    );
}));

export default DashboardMap;