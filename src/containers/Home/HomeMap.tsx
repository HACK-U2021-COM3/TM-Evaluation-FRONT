import React, {useState} from "react";
import HomeMapComponent from "components/Home/HomeMap";

const HomeMap: React.VFC = () => {
    const [lat, setLat] = useState(51.505);
    const [lng, setLng] = useState(-0.09);
    const [zoom, setZoom] = useState(13);
    const [position, setPosition] = useState({
        lat: 35.7010141,
        lng: 139.7042647,
    });

    return(
        <HomeMapComponent />
    )
}

export default HomeMap;