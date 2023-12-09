"use client";

import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import { MapContainer, Marker, TileLayer, useMap, Popup } from 'react-leaflet';
import MarkerIcon from '../../../node_modules/leaflet/dist/images/marker-icon.png';
import MarkerShadow from '../../../node_modules/leaflet/dist/images/marker-shadow.png';
import "leaflet/dist/leaflet.css";

const position = [23.0775, 76.8513]

const MapComponent = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <>
            {isMounted && (
                <MapContainer style={{ height: "100vh", widows:"100vw" }} center={position} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <Marker icon={
                        new L.Icon({
                            iconUrl: MarkerIcon.src,
                            iconRetinaUrl: MarkerIcon.src,
                            iconSize: [25, 41],
                            iconAnchor: [12.5, 41],
                            popupAnchor: [0, -41],
                            shadowUrl: MarkerShadow.src,
                            shadowSize: [41, 41],
                        })
                    } position={position}>
                        <Popup>
                            VIT Bhopal University
                        </Popup>
                    </Marker>
                </MapContainer>
            )}
        </>
    );
};

export default MapComponent;