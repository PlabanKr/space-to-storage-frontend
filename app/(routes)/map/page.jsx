"use client";

import dynamic from "next/dynamic";
import React, { useMemo } from "react";


const Map = () => {
    const MapComponent = useMemo(
        () => dynamic(() => import("@/app/_components/Map/map"), {ssr: false}),
        []
    );
    return (
        <main>
            <MapComponent />
        </main>
    );
};

export default Map;
