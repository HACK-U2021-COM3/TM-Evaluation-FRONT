import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup, Polyline } from "react-leaflet";
import Leaflet from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { Button, Text, Stack, Checkbox } from "@chakra-ui/react";

import japan from "lib/data/ja.json"
import { searchResponseType } from "lib/models/search";
import { measureResponseType } from "lib/models/measure";
import { planDetailResponseType } from "lib/models/plan";

let DefaultIcon = Leaflet.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});
Leaflet.Marker.prototype.options.icon = DefaultIcon;



const HomeMapContentComponent: React.VFC<{
    addRoutesPoint: (address: string)=> Promise<void>,
    settingLocation: (e: any, address: string) => void,
    resultLocations: searchResponseType[],
    routes: measureResponseType[],
    plan: planDetailResponseType[]
}> = ({addRoutesPoint, settingLocation, resultLocations, routes, plan}) => {

    const defaultPosition = plan.find(_ => _)?.start_location
    
    return(
        plan.length > 0 ? (
            <MapContainer center={defaultPosition} zoom={13} style={{ height: "calc(100% - 112px)", borderRadius: "10px"}}>
        <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright";>OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {resultLocations.map((marker: searchResponseType) => (
            <Marker key={marker.address} position={marker.location}>
                <Popup>
                    <Text>{marker.address}</Text>
                        <Stack spacing={5} direction="row">
                            <Checkbox colorScheme="red" value="start" onChange={(e) => settingLocation(e, marker.address)}>
                                出発地点へ設定
                            </Checkbox>
                            <Checkbox colorScheme="green" value="end" onChange={(e) => settingLocation(e, marker.address)}>
                                到着地点へ設定
                            </Checkbox>
                        </Stack>
                        <Button colorScheme="blue" onClick={() => addRoutesPoint(marker.address)}>経路を追加</Button>
                </Popup>
            </Marker>        
        ))}
        {plan.map((marker: planDetailResponseType) => (
            <Marker key={marker.start_address} position={marker.start_location}>
                <Popup>
                    <Text>{marker.start_address}</Text>
                        <Stack spacing={5} direction="row">
                            <Checkbox colorScheme="red" value="start" onChange={(e) => settingLocation(e, marker.start_address)}>
                                出発地点へ設定
                            </Checkbox>
                            <Checkbox colorScheme="green" value="end" onChange={(e) => settingLocation(e, marker.start_address)}>
                                到着地点へ設定
                            </Checkbox>
                        </Stack>
                        <Button colorScheme="blue" onClick={() => addRoutesPoint(marker.start_address)}>経路を追加</Button>
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
        ) :  <div />
    )
}

export default HomeMapContentComponent