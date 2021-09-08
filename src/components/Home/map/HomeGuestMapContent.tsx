import React, {useState} from "react";
import { GoogleMap, LoadScript, InfoWindow, Marker} from "@react-google-maps/api";
import { Button, Text, Stack, Checkbox, Box } from "@chakra-ui/react";
import japan from "lib/data/ja.json"
import { searchResponseType } from "lib/models/search";

const center = {lat: 35.02664,lng: 136.622259}


const HomeMapGuestContentComponent: React.VFC<{
    addRoutesPoint: (address: string)=> Promise<void>,
    settingLocation: (e: any, address: string) => void,
    resultLocations: searchResponseType[]
}> = ({addRoutesPoint, settingLocation, resultLocations}) => {
    const [selected, setSelected] = useState<searchResponseType | null>(null)
    
    return(
        <LoadScript googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`}>
            <GoogleMap
            mapContainerStyle={{ height: "calc(100% - 112px)", borderRadius: "10px"}}
            center={center}
            zoom={8}
            >
            {resultLocations.map((marker: searchResponseType, i: number) => (
                <Marker 
                key={i} position={marker.location}
                onClick={() => setSelected(marker)}
                />
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
                        <Button colorScheme="blue" onClick={() => addRoutesPoint(selected.address)}>途中経路として追加</Button>
                    </Box>
                </InfoWindow>
                )}
            </GoogleMap>
    </LoadScript>
    )
}

export default HomeMapGuestContentComponent
