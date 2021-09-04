import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import Leaflet from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

import japan from "lib/data/ja.json"

let DefaultIcon = Leaflet.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});
Leaflet.Marker.prototype.options.icon = DefaultIcon;

const HomeMapContentComponent: React.VFC = () => {
    return(
        <MapContainer center={{lat: 35.7010141,lng: 139.7042647,}} zoom={13} style={{ height: "calc(100% - 112px)", borderRadius: "10px"}}>
        <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright";>OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {japan && (
            <GeoJSON key="map" style={() => ( {
                fillColor: "#4a83ec",
                fillOpacity: 0.5,
                color: "1a1d62",
                weight: 1
            })} data={japan.features as any} />
        )}
    </MapContainer>
    )
}

export default HomeMapContentComponent