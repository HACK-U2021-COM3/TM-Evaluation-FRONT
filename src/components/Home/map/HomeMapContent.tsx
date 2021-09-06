import React, {useState} from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup, Polyline } from "react-leaflet";
import Leaflet, { LatLngExpression } from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { Button, Text } from "@chakra-ui/react";

import japan from "lib/data/ja.json"

let DefaultIcon = Leaflet.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});
Leaflet.Marker.prototype.options.icon = DefaultIcon;


const HomeMapContentComponent: React.VFC = () => {
    const defaultPosition = {lat: 35.02664,lng: 136.622259}

    const [searchResult, SetsearchResult] = useState(
        [{
            "location": {
                "lat": 34.7050271,
                "lng": 135.4984269
            },
            "address": "日本、〒530-0012 大阪府大阪市北区芝田１丁目１",
            "name": "大阪梅田駅"
        },
        {
            "location": {
                "lat": 34.7032152,
                "lng": 135.4976426
            },
            "address": "日本、〒530-0017 大阪府大阪市北区角田町８−６",
            "name": "梅田駅"
        },
        {
            "location": {
                "lat": 34.7013283,
                "lng": 135.497135
            },
            "address": "日本、〒530-0031 大阪府大阪市北区梅田３丁目１",
            "name": "大阪梅田駅"
        }]
    )
    const [routes, setRoutes] = useState<LatLngExpression[]>([])
    
    const set = (location: LatLngExpression) => {
        setRoutes([...routes, location])
    }
    
    return(
        <MapContainer center={defaultPosition} zoom={10} style={{ height: "calc(100% - 112px)", borderRadius: "10px"}}>
        <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright";>OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {searchResult.map(marker => (
            <Marker key={marker.address} position={marker.location}>
                <Popup>
                    <Text>{marker.address}</Text>
                    <Button onClick={() => set(marker.location)}>予定経路の追加</Button>
                </Popup>
            </Marker>        
        ))}
        {japan && (
            <GeoJSON key="map" style={() => ( {
                fillColor: "#4a83ec",
                fillOpacity: 0.5,
                color: "1a1d62",
                weight: 1
            })} data={japan.features as any} />
        )}
        {/* <Polyline positions={routes} /> */}
    </MapContainer>
    )
}

export default HomeMapContentComponent