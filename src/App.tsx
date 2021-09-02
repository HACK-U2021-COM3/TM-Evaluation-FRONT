import React, {useState} from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import Leaflet from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import {Box, Container} from "@chakra-ui/react";
import "firebase/compat/storage"
import japan from "./data/ja.json"


let DefaultIcon = Leaflet.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});
Leaflet.Marker.prototype.options.icon = DefaultIcon;


const SimpleLeaflet = (json: any) => {
    const [lat, setLat] = useState(51.505);
    const [lng, setLng] = useState(-0.09);
    const [zoom, setZoom] = useState(13);
    const [position, setPosition] = useState({
        lat: 35.7010141,
        lng: 139.7042647,
    });

    const countryStyle = () => {
        return {
            fillColor: "red",
            fillOpacity: 0.7,
            color: "black",
            weight: 1    
        }
    }

    return(
        <Container py="24" px="34" maxW="1440">
            <Box>
                <MapContainer center={position} zoom={zoom} style={{ height: "730px", width: "686px" }}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright";>OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {json && (
                        <GeoJSON key="map" style={() => ( {
                            fillColor: "#4a83ec",
                            fillOpacity: 1,
                            color: "1a1d62",
                            weight: 1
                        })} data={json.features} />
                    )}
                </MapContainer>
            </Box>
        </Container>
    );
};

const App: React.VFC = () => {
    return(
        <SimpleLeaflet json={japan} />
    )
}

export default App;
