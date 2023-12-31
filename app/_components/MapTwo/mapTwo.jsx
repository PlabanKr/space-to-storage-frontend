"use client";

import React, { useEffect, useRef, useState } from "react";
import { TiArrowSync } from "react-icons/ti";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";

const MapTwoComponent = () => {

    const changeMapStyle = () => {
    };

    const mapContainer = useRef(null);
    const map = useRef(null);
    const tokyo = { lng: 76.8513, lat: 23.0775 };
    const [MapStyle, setMapStyle] = useState();
    const [zoom] = useState(14);
    maptilersdk.config.apiKey = "h95HIrR86GLDfZlWa9db";

    useEffect(() => {
        if (map.current) return;
      
        map.current = new maptilersdk.Map({
          container: mapContainer.current,
          style: maptilersdk.MapStyle.TOPO,
          center: [tokyo.lng, tokyo.lat],
          zoom: zoom,
          terrain: true,
          terrainExaggeration: 1.5,
          terrainControl: true,
        });
      
      }, [tokyo.lng, tokyo.lat, zoom]);

    return (
        <>
            <section style={{ position: "relative", width: "100vw", height: "100vh" }}>
                <map ref={mapContainer} style={{ position: "absolute", width: "100%", height: "100%" }}></map>
                <button 
                    className="fixed bottom-8 right-2.5 bg-white text-gray-800 font-bold p-2 rounded border border-gray-400 shadow-sm hover:bg-gray-100"
                    onClick={changeMapStyle}
                >
                    <TiArrowSync />
                </button>
            </section>
        </>
    );
};

export default MapTwoComponent;