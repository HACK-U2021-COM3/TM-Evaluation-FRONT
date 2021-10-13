import React from "react";
import { Box, Flex} from "@chakra-ui/react";
import HomeResultsCardsComponent from "components/Home/cards/HomeResultsCards";
import HomeGuestHeaderComponent from "components/Home/headers/HomeGuestHeader";
import HomePlanRouteComponent from "components/Home/plans/HomePlanRouteContent";
import HomeTimelineComponent from "components/Home/plans/HomeTimeline";
import HomeMapContentComponent from "components/Home/map/HomeMapContent";
import { RouteContextValue } from "lib/contexts/RouteContext";

const HomeGuestContent: React.VFC = () => {
    const {measureResults, pointResults} = RouteContextValue()
    return (
        <>
            <HomeGuestHeaderComponent />
            <Box maxW="1920px" mx="auto" py="6" px="6">
            <Flex>
                <Box w="50%" px="6">
                    <HomeResultsCardsComponent
                        routes={measureResults}
                        points={pointResults}
                    />
                    <HomeMapContentComponent
                    routes={measureResults}
                    points={pointResults}
                    />
                </Box>
                <Box w="50%" px="6">
                    <HomePlanRouteComponent>
                        <HomeTimelineComponent
                        routes={measureResults}
                        points={pointResults}
                        />
                    </HomePlanRouteComponent>
                </Box>
            </Flex>
            </Box>
        </>
    )
}

export default HomeGuestContent;
