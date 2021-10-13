
import React from "react"
import { Box, Flex, Text, NumberInput, NumberInputField } from "@chakra-ui/react"
import { EditIcon, DeleteIcon } from "@chakra-ui/icons"
import HomeTimelineCardComponent from "./HomeTimelineCard"
import {pointResponseType} from "lib/models/measure_point";
import { RouteContextValue } from "lib/contexts/RouteContext";


const HomeTimelineBodyComponent: React.VFC<{
    index: number
    item: pointResponseType,
    point: pointResponseType,
    distance: number
    duration: number,
    address: string,
    stayTime: number
    inputRef: any,
    iconRef: any,
    unForcusInput: (time: number, index: number) => void,
    editHandler: (index: number) => void,
}> = ({ index, item, point,distance, duration,  address, stayTime, inputRef, iconRef, unForcusInput, editHandler }) => {
    const {deleteRoutesPoint} = RouteContextValue()
    const timelineContentStyle = {
        display: "block",
        px: "20px",
        py: "30px",
        bgColor: "white",
        borderRadius: "6px",
    }

    const timelineItemStyle = {
        pl: "70px",
        pr: "25px",
        py: "25px",
        bgColor: "inherit",
        w: "100%",
        left: "0"
    }

    const timelinBeforeItemStyle = {
        content: "''",
        position: "absolute",
        width: "24px",
        height: "24px",
        left: "19px",
        bgColor: "#3182ce",
        border: "2px",
        borderColor: "white",
        top: "22px",
        borderRadius: "50%",
        zIndex: 1,
    }

    return(
        <Box position="relative" {...timelineItemStyle} _before={{...timelinBeforeItemStyle}}>
            <Box shadow="sm" border="1px" borderColor="gray.200" position="relative" {...timelineContentStyle}>
                <Flex justify="space-between" alignItems="center" h="40px" position="relative">
                    <Text overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap" w="400px">
                    {address}
                    </Text>
                    <Flex alignItems="center">
                        <Text mr="3">滞在時間:</Text>
                            {item !== point ? (
                        <Text as="span" >{stayTime}</Text>
                        ) : (
                                <NumberInput
                                ref={inputRef}
                                min={ 0 }
                                defaultValue={stayTime}
                                onBlur={(e) => unForcusInput(+e.target.value, index)}
                                w="80px"
                                textAlign="center"
                                _focus={{
                                border: "none"
                                }}
                                >
                                    <NumberInputField />
                                </NumberInput>
                            )}
                            分
                            <EditIcon ref={iconRef} color="gray.300" ml="3" onClick={() => editHandler(index)} />
                    </Flex>
                    <DeleteIcon right="-55" position="absolute" color="red" ml="3" onClick={() => deleteRoutesPoint(index)}/>
                </Flex>
            </Box>
            <HomeTimelineCardComponent distance={distance} duration={duration} />
        </Box>
        
    )
}

export default HomeTimelineBodyComponent;