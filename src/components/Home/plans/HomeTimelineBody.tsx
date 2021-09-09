
import React from "react"
import { Box, Flex, Text, Input } from "@chakra-ui/react"
import { EditIcon } from "@chakra-ui/icons"
import { measureResponseType } from "lib/models/measure"
import HomeTimelineCardComponent from "./HomeTimelineCard"

const HomeTimelineBodyComponent: React.VFC<{
    index: number
    item: measureResponseType,
    route: measureResponseType,
    distance: number
    duration: number,
    address: string,
    stayTime: number
    inputRef: any,
    iconRef: any,
    unForcusInput: (time: number, index: number) => void,
    editHandler: (index: number) => void
}> = ({ index, item, route, distance, duration, address, stayTime, inputRef, iconRef, unForcusInput, editHandler }) => {
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
            <Flex justify="space-between" alignItems="center" h="40px">
                <Text overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap" w="400px">
                {address}
                </Text>
                <Flex alignItems="center">
                    <Text mr="3">滞在時間:</Text>
                        {item !== route ? (
                    <Text as="span" >{stayTime}</Text>
                    ) : (
                            <Input
                            ref={inputRef}
                            type="number"
                            defaultValue={stayTime}
                            onBlur={(e) => unForcusInput(+e.target.value, index)}
                            w="90px"
                            textAlign="center"
                            _focus={{
                            border: "none"
                            }}
                            />
                        )}
                        分
                        <EditIcon ref={iconRef} color="gray.300" ml="3" onClick={() => editHandler(index)} />
                </Flex>
            </Flex>
            <HomeTimelineCardComponent distance={distance} duration={duration} />
        </Box>
        </Box>
        
    )
}

export default HomeTimelineBodyComponent;