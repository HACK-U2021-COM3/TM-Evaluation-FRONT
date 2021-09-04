import React from "react";
import { Box, Flex,} from "@chakra-ui/react";
import HomeResultsCardsComponent from "components/Home/cards/HomeResultsCards";
import HomePlansComponent from "./plans";
import HomeMapComponent from "./map";

const HomeContentComponent: React.VFC = () => {
    
    return (
        <>
            <Box maxW="1920px" mx="auto" py="6" px="6">
                <Flex>
                    <Box w="50%" px="6">
                        <HomeResultsCardsComponent />
                        <HomeMapComponent />
                    </Box>
                    <Box w="50%" px="6">
                        <HomePlansComponent />
                    </Box>
                </Flex>
                
            </Box>
        </>
    )
}

export default HomeContentComponent;
