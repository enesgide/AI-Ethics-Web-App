import React from 'react';
import {GoogleMap} from "@react-google-maps/api";
import {useLoadScript} from "@react-google-maps/api";

const containerStyle = {
    width: '100vw',
    height: '100vh',
}
const center = {
    lat: 31.968599,
    lng: -99.901810,
}

export const cssEffect = {
    position: 'relative',
    width: '400px',
    height: '400px'
}

export default function GoogleMaps() {
    const{isLoaded, loadError} = useLoadScript({
        // Uncomment the line below and add your API key
        // googleMapsApiKey: '<Your API Key>',
    });

    if (loadError) return "Error loading Maps";
    if (!isLoaded) return "Loading Maps";

    return(
        <GoogleMap

            zoom={11}
            center={center}
        />
    )
}