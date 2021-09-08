import React, {useState, useRef, useEffect} from "react";
import { Flex, Box, Text, Input } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { planDetailResponseType } from "lib/models/plan";
import { measureResponseType } from "lib/models/measure"

const HomeTimelineComponent: React.VFC<{
    routes: measureResponseType[],
    changeResultsHandler: (time: number, index: number) => void
}> = ({routes, changeResultsHandler}) => {
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
    
    const timelineAfterStyle = {
        content: "''",
        position: "absolute",
        width: "3px",
        bgColor: "#3182ce",
        top: "0",
        bottom: "0",
        left: "31px",
        ml: "-2px"
    }

    const timelineContentStyle = {
        display: "block",
        px: "20px",
        py: "30px",
        bgColor: "white",
        borderRadius: "6px",
    }

    const [item, setItem] = useState<any>(null)
  
    const unForcusInput = (time: number, index: number) => {
        setItem(null)
        changeResultsHandler(time, index)
    }

    const bodyClick = useRef<any>()
    const inputRefs = useRef<any>([])
    const iconsRef = useRef<any>([])

    routes.forEach((_: any, i: number) => {
        inputRefs.current[i] = React.createRef()
        iconsRef.current[i] = React.createRef()
    });
    useEffect(() => {
        bodyClick.current = (e: any) => {
            console.log('documentClickHandler')
            console.log('target', e.target)
            if (!!iconsRef.current?.find((item: any) => item.current?.contains(e.target))) return
            if (!!inputRefs.current?.find((item: any) => item.current?.contains(e.target))) return
            setItem(null)
            removeDocumentClickHandler()
        }
    }, [])
    
    const removeDocumentClickHandler = () => {
        console.log('removeDocumentClickHandler')
        document.removeEventListener('click', bodyClick.current)
    }

    const editHandler = (i: number) => {
        setItem(routes[i])
        console.log('handleToggleButtonClick')
        document.addEventListener('click', bodyClick.current)
    }



    return(
        <Box width="90%" mx="auto">
            <Box position="relative" _after={{...timelineAfterStyle}}>
            {routes.map((planRoute: planDetailResponseType, i: number) => (
                <Box key={i} position="relative" {...timelineItemStyle} _before={{...timelinBeforeItemStyle}}>
                    <Box shadow="sm" border="1px" borderColor="gray.200" position="relative" {...timelineContentStyle}>
                        <Flex justify="space-between" alignItems="center" h="40px">
                            <Text overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap" w="400px">
                            {planRoute.start_address}
                            </Text>
                            <Flex alignItems="center">
                                <Text mr="3">滞在時間:</Text>
                                    {item !== routes[i] ? (
                                <Text as="span" >{routes[i].start_stay_time}</Text>
                                ) : (
                                        <Input
                                        ref={inputRefs.current[i]}
                                        type="number"
                                        defaultValue={routes[i].start_stay_time}
                                        onBlur={(e) => unForcusInput(+e.target.value, i)}
                                        w="90px"
                                        textAlign="center"
                                        _focus={{
                                        border: "none"
                                        }}
                                        />
                                    )}
                                    分
                                    <EditIcon ref={iconsRef.current[i]} color="gray.300" ml="3" onClick={() => editHandler(i)} />
                            </Flex>
                        </Flex>
                    </Box>
                </Box>            
            ))}
        </Box>
        </Box>
    )
}
export default HomeTimelineComponent;