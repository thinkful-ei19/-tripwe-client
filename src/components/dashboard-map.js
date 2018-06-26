import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline } from 'react-google-maps';

const DashboardMap = withScriptjs(withGoogleMap((props) => {
    const createFlightPlanCoordinates = props.group.map((member, index) => {
        return (
            <Polyline
                key={index}
                path={[
                    { lat: Number(member.incomingdeparturelatitude), lng: Number(member.incomingdeparturelongitude) },
                    { lat: Number(member.incomingarrivallatitude), lng: Number(member.incomingarrivallongitude) }
                ]}
                options={{
                    geodesic: true,
                    strokeColor: '#FF0000',
                    strokeWeight: 2
                }}
            />
        );
    });

    if (props.group[0]) {
        const destinationLatitude = Number(props.group[0].incomingarrivallatitude);
        const destinationLongitude = Number(props.group[0].incomingarrivallongitude);
        return (
            <GoogleMap
                defaultZoom={4}
                // defaultCenter={defaultCenter}
                defaultCenter={{ lat: destinationLatitude, lng: destinationLongitude }}
            >
                {props.isMarkerShown && <Marker position={{ lat: destinationLatitude, lng: destinationLongitude }} />}
                {props.group ? createFlightPlanCoordinates : null}
            </GoogleMap>
        );
    } else {
        return '';
    }
}));

export default DashboardMap;