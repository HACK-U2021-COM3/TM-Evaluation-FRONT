import React, {useState} from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import Leaflet from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";


let DefaultIcon = Leaflet.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});
Leaflet.Marker.prototype.options.icon = DefaultIcon;

type Props = {
    geojson: any
}

const LeafletMap: React.VFC<Props> = ({ geojson }) => {
    const [lat, setLat] = useState(51.505);
    const [lng, setLng] = useState(-0.09);
    const [zoom, setZoom] = useState(13);
    const [position, setPosition] = useState({
        lat: 35.7010141,
        lng: 139.7042647,
    });

    return(
        <MapContainer center={position} zoom={zoom} style={{ height: "720px", width: "800px" }}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright";>OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {geojson && (
                <GeoJSON key="map" style={() => ( {
                    fillColor: "#4a83ec",
                    fillOpacity: 0.5,
                    color: "1a1d62",
                    weight: 1
                })} data={geojson.features} />
            )}
        </MapContainer>
    
    );
};

export default LeafletMap;