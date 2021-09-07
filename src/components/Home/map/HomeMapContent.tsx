import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup, Polyline } from "react-leaflet";
import Leaflet, { LatLngExpression } from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { Button, Text } from "@chakra-ui/react";

import japan from "lib/data/ja.json"
import { searchResponseType } from "lib/models/search";

let DefaultIcon = Leaflet.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});
Leaflet.Marker.prototype.options.icon = DefaultIcon;


const HomeMapContentComponent: React.VFC<{
    resultLocations: searchResponseType[]
}> = ({resultLocations}) => {
    const defaultPosition = {lat: 35.02664,lng: 136.622259}

    
    
    return(
        <MapContainer center={defaultPosition} zoom={8} style={{ height: "calc(100% - 112px)", borderRadius: "10px"}}>
        <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright";>OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {resultLocations.map((marker: searchResponseType) => (
            <Marker key={marker.address} position={marker.location}>
                <Popup>
                    <Text>{marker.name}</Text>
                </Popup>
            </Marker>        
        ))}
        {/* {japan && (
            <GeoJSON key="map" style={() => ( {
                fillColor: "#4a83ec",
                fillOpacity: 0.5,
                color: "1a1d62",
                weight: 1
            })} data={japan.features as any} />
        )} */}
        {/* <Polyline positions={routes} /> */}
    </MapContainer>
    )
}

export default HomeMapContentComponent