import React from "react";
import { 
    Box,
    Heading,
} from "@chakra-ui/react";
import HomeTimelineComponent from "./HomeTimeline";



const HomePlanRouteComponent: React.VFC = () => {
    return(
        <>
            <Box bgColor="gray.100" pb="4" rounded="xl">
                <Box shadow="lg" bgColor="white" roundedTopLeft="xl" roundedTopRight="xl" zIndex="30">
                    <Heading py="4" width="90%" mx="auto" fontSize={'2xl'} fontWeight={"bold"}>
                        予定経路
                    </Heading>
                </Box>
                <Box overflowY="scroll" h="650px" py="4">
                    <HomeTimelineComponent />
                </Box>
            </Box>
        </>
    )
}

export default HomePlanRouteComponent;