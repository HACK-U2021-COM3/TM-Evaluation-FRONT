import React, {useState} from "react";
import { Button, Text, Stack, Checkbox, Box } from "@chakra-ui/react";
import { GoogleMap, LoadScript, InfoWindow, Marker} from "@react-google-maps/api";
import { searchResponseType } from "lib/models/search";
import { measureResponseType } from "lib/models/measure";
import { planDetailResponseType } from "lib/models/plan";


const HomeMapContentComponent: React.VFC<{
    addRoutesPoint: (address: string)=> Promise<void>,
    settingLocation: (e: any, address: string) => void,
    resultLocations: searchResponseType[],
    routes: measureResponseType[],
    plan: planDetailResponseType[]
}> = ({addRoutesPoint, settingLocation, resultLocations, routes, plan}) => {

    const center = plan.find(_ => _)?.start_location
    const [selected, setSelected] = useState<searchResponseType | null>(null)
    const [selectedPlan, setSelectedPlan] = useState<planDetailResponseType | null>(null)

    return (
        plan.length > 0 ? (
            <>
                <LoadScript googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`}>
                    <GoogleMap
                    mapContainerStyle={{ height: "calc(100% - 112px)", borderRadius: "10px"}}
                    center={center}
                    zoom={12}
                    >
                    {resultLocations.map((marker: searchResponseType, i: number) => (
                        <Marker 
                        key={i} position={marker.location}
                        onMouseOver={() => setSelected(marker)}
                        />
                    ))}
                    {plan.map((marker: planDetailResponseType, i: number) => (
                        <Marker 
                        key={i} position={marker.start_location}
                        onMouseOver={() => setSelectedPlan(marker)}
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
                    {!!selectedPlan && (
                        <InfoWindow
                        position={selectedPlan.start_location}
                        onCloseClick={() => setSelectedPlan(null)}
                        >
                            <Box p="4">
                                <Text>{selectedPlan.start_address}</Text>
                                <Stack spacing={5} direction="row" mb="6">
                                    <Checkbox colorScheme="red" value="start" onChange={(e) => settingLocation(e, selectedPlan.start_address)}>
                                        出発地点へ設定
                                    </Checkbox>
                                    <Checkbox colorScheme="green" value="end" onChange={(e) => settingLocation(e, selectedPlan.start_address)}>
                                        到着地点へ設定
                                    </Checkbox>
                                </Stack>
                                <Button colorScheme="blue" onClick={() => addRoutesPoint(selectedPlan.start_address)}>途中経路として追加</Button>
                            </Box>
                        </InfoWindow>
                        )}
                    </GoogleMap>
            </LoadScript>
            </>
        ) : <div /> 
    )
}

export default HomeMapContentComponent;