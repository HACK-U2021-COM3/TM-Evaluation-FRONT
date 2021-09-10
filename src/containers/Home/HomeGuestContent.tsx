import React from "react";
import { Box, Flex} from "@chakra-ui/react";
import HomeResultsCardsComponent from "components/Home/cards/HomeResultsCards";
import HomeGuestHeaderComponent from "components/Home/headers/HomeGuestHeader";
import HomePlanRouteComponent from "components/Home/plans/HomePlanRouteContent";
import HomeTimelineComponent from "components/Home/plans/HomeTimeline";
import HomeMapContentComponent from "components/Home/map/HomeMapContent";

import { searchResponseType } from "lib/models/search";
import {measureFixResponseType, pointResponseType} from "../../lib/models/measure_point";


const HomeGuestContent: React.VFC<{
    searchQuery: string,
    handleSearch: (e: any) => void,
    resultLocations: searchResponseType[],
    addRoutesPoint: (point: searchResponseType)=> void,
    settingLocation: (e: any, point: searchResponseType | null) => void,
    measureResults: measureFixResponseType[],
    pointResults: pointResponseType[],
    changeResultsHandler: (time: number, index: number) => void,
    setKeywordHandler: (text: string) => void,
    keyword: string
}> = ({
    searchQuery,
    handleSearch,
    resultLocations,
    addRoutesPoint,
    settingLocation,
    measureResults,
    pointResults,
    changeResultsHandler,
    setKeywordHandler,
    keyword
}) => {

    console.log("measures -> ", measureResults);
    return (
        <>
            <HomeGuestHeaderComponent keyword={keyword} searchQuery={searchQuery} handleSearch={handleSearch}  />
            <Box maxW="1920px" mx="auto" py="6" px="6">
            <Flex>
                <Box w="50%" px="6">
                    <HomeResultsCardsComponent
                        // results={measureResults}
                        measureResults={measureResults}
                        pointResults={pointResults}
                    />
                    <HomeMapContentComponent
                    routes={measureResults}
                    points={pointResults}
                    addRoutesPoint={addRoutesPoint}
                    settingLocation={settingLocation}
                    resultLocations={resultLocations}
                    setKeywordHandler={setKeywordHandler}
                    />
                </Box>
                <Box w="50%" px="6">
                    <HomePlanRouteComponent>
                        <HomeTimelineComponent
                        changeResultsHandler={changeResultsHandler}
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
