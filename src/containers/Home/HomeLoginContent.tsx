import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { Box, Flex} from "@chakra-ui/react";
import HomeResultsCardsComponent from "components/Home/cards/HomeResultsCards";
import HomeLoginHeaderComponent from "components/Home/headers/HomeLoginHeader";
import HomePlanRouteComponent from "components/Home/plans/HomePlanRouteContent";
import HomeTimelineComponent from "components/Home/plans/HomeTimeline";
import HomeMapContentComponent from "components/Home/map/HomeMapContent";

import usePlan from "lib/hooks/usePlan";
import { searchResponseType } from "lib/models/search";
import { measureResponseType } from "lib/models/measure";


const HomeLoginContent: React.VFC<{
    user: {name:  string, imageUrl: string},
    searchQuery: string,
    handleSearch: (e: any) => void,
    resultLocations: searchResponseType[],
    addRoutesPoint: (address: string)=> Promise<void>,
    settingLocation: (e: any, address: string) => void,
    measureResults: measureResponseType[],
    changeResultsHandler: (time: number, index: number) => void
}> = ({user,
    searchQuery,
    handleSearch,
    resultLocations,
    addRoutesPoint,
    settingLocation,
    measureResults,
    changeResultsHandler
}) => {

    const {plan_id} = useParams<{plan_id: string}>()
    const {plan} = usePlan(plan_id)

    return (
        <>
            <HomeLoginHeaderComponent user={user} searchQuery={searchQuery} handleSearch={handleSearch}  />
            <Box maxW="1920px" mx="auto" py="6" px="6">
                <Flex>
                    <Box w="50%" px="6">
                        <HomeResultsCardsComponent
                        results={measureResults}
                         />
                        <HomeMapContentComponent
                        addRoutesPoint={addRoutesPoint}
                        settingLocation={settingLocation}
                        resultLocations={resultLocations}
                        routes={measureResults}
                        plan={plan}
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

export default HomeLoginContent;
