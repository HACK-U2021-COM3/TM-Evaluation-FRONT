import React from "react";
import { Box, Flex} from "@chakra-ui/react";
import HomeResultsCardsComponent from "components/Home/cards/HomeResultsCards";
import HomeGuestHeaderComponent from "components/Home/headers/HomeGuestHeader";
import HomePlanRouteComponent from "components/Home/plans/HomePlanRouteContent";
import HomeTimelineComponent from "components/Home/plans/HomeTimeline";
import HomeGuestMapContentComponent from "components/Home/map/HomeGuestMapContent";

import { measureResponseType } from "lib/models/measure";
import { searchResponseType } from "lib/models/search";


const HomeGuestContent: React.VFC<{
    searchQuery: string,
    handleSearch: (e: any) => void,
    resultLocations: searchResponseType[],
    addRoutesPoint: (point: searchResponseType)=> void,
    settingLocation: (e: any, address: string) => void,
    measureResults: measureResponseType[],
    changeResultsHandler: (time: number, index: number) => void
}> = ({
    searchQuery,
    handleSearch,
    resultLocations,
    addRoutesPoint,
    settingLocation,
    measureResults,
    changeResultsHandler
}) => {
    return (
        <>
            <HomeGuestHeaderComponent searchQuery={searchQuery} handleSearch={handleSearch}  />
            <Box maxW="1920px" mx="auto" py="6" px="6">
            <Flex>
                <Box w="50%" px="6">
                    <HomeResultsCardsComponent
                        results={measureResults}
                    />
                    <HomeGuestMapContentComponent
                    routes={measureResults}
                    addRoutesPoint={addRoutesPoint}
                    settingLocation={settingLocation}
                    resultLocations={resultLocations} 
                    />
                </Box>
                <Box w="50%" px="6">
                    <HomePlanRouteComponent>
                        <HomeTimelineComponent
                        changeResultsHandler={changeResultsHandler}
                        routes={measureResults} 
                        />
                    </HomePlanRouteComponent>
                </Box>
            </Flex>
            </Box>
        </>
    )
}

export default HomeGuestContent;
