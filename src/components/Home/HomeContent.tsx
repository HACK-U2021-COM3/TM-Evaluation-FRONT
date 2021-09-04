import React from "react";
import { Box, Flex,} from "@chakra-ui/react";
import HomeResultsCardsComponent from "components/Home/cards/HomeResultsCards";
import HomePlanRouteComponent from "components/Home/HomePlanRoute";
import HomeMap from "containers/Home/HomeMap";

const HomeContentComponent: React.VFC = () => {
    
    return (
        <>
            <Box maxW="1920px" mx="auto" py="6" px="6">
                <Flex>
                    <Box w="50%" px="6">
                        <HomeResultsCardsComponent />
                        <HomeMap />
                    </Box>
                    <Box w="50%" px="6">
                        <HomePlanRouteComponent />
                    </Box>
                </Flex>
                
            </Box>
        </>
    )
}

export default HomeContentComponent;
