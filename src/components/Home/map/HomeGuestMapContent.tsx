import React, {useState, Fragment} from "react";
import { GoogleMap, LoadScript, InfoWindow, Marker, Polyline} from "@react-google-maps/api";
import { Button, Text, Stack, Checkbox, Box } from "@chakra-ui/react";
// import japan from "lib/data/ja.json"
import { searchResponseType } from "lib/models/search";
import { measureResponseType } from "lib/models/measure";
import { decordMap } from "lib/util/map-decode";




const HomeMapGuestContentComponent: React.VFC<{
    addRoutesPoint: (point: searchResponseType)=> void,
    settingLocation: (e: any, address: string) => void,
    resultLocations: searchResponseType[],
    routes: measureResponseType[]
}> = ({addRoutesPoint, settingLocation, resultLocations, routes}) => {
    const [selected, setSelected] = useState<searchResponseType | null>(null)
    let center = {lat: 35.02664,lng: 136.622259}
    let zoom = 8
    const hitLocation = resultLocations.find(_=>_)?.location
    if(!!hitLocation) {
        center = hitLocation
        zoom = 13
    }

    return(
        <LoadScript googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`}>
            <GoogleMap
            mapContainerStyle={{ height: "calc(100% - 112px)", borderRadius: "10px"}}
            center={center}
            zoom={zoom}
            >
            {resultLocations.map((marker: searchResponseType, i: number) => (
                <Marker 
                key={i} position={marker.location}
                onClick={() => setSelected(marker)}
                />
            ))}
            {routes.map((marker: measureResponseType, i: number) => (
                <Fragment key={i}>
                <Marker 
                    position={marker.start_location}
                />
                <Polyline
                options={{
                    strokeColor: "#FF0000",
                    strokeOpacity: 0.8,
                }}
                path={decordMap(marker.routes_points, 5)}
                />
                </Fragment>
             ))}
            {!!selected && (
                <InfoWindow
                position={selected.location}
                onCloseClick={() => setSelected(null)}
                >
                    <Box p="4">
                        <Text>{selected.name}</Text>
                        <Stack spacing={5} direction="row" mb="6">
                            <Checkbox colorScheme="red" value="start" onChange={(e) => settingLocation(e, selected.address)}>
                                出発地点へ設定
                            </Checkbox>
                            <Checkbox colorScheme="green" value="end" onChange={(e) => settingLocation(e, selected.address)}>
                                到着地点へ設定
                            </Checkbox>
                        </Stack>
                        <Button colorScheme="blue" onClick={() => addRoutesPoint(selected)}>途中経路として追加</Button>
                    </Box>
                </InfoWindow>
                )}
            </GoogleMap>
    </LoadScript>
    )
}

export default HomeMapGuestContentComponent
