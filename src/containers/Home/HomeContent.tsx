import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "lib/contexts/AuthContext";
import { Box, Flex} from "@chakra-ui/react";
import HomeResultsCardsComponent from "components/Home/cards/HomeResultsCards";
import HomeGuestHeaderComponent from "components/Home/headers/HomeGuestHeader";
import HomeLoginHeaderComponent from "components/Home/headers/HomeLoginHeader";
import HomePlanRouteComponent from "components/Home/plans/HomePlanRouteContent";
import HomeTimelineComponent from "components/Home/plans/HomeTimeline";
import HomeMapContentComponent from "components/Home/map/HomeMapContent";
import HomeGuestTimelineComponent from "components/Home/plans/HomeGuestTimeline";

import usePlan from "lib/hooks/usePlan";
import useSearch from "lib/hooks/useSearch";
import useMeasure from "lib/hooks/useMeasure";

import { measuseRequestType, mockMeasureRequest } from "lib/models/measure";


const HomeContent: React.VFC = () => {
    const [searchQuery, setSearchQuery] = useState<string>("")
    const {resultLocations} = useSearch(searchQuery)
    const handleSearch = (e: any) :void => {
        if(e.key === "Enter") {
            e.preventDefault()
            console.log(e.target.value)
            setSearchQuery(e.target.value)
          }
    }
    console.log(resultLocations)

    const {user} = useContext(UserContext)
    const {plan_id} = useParams<{plan_id: string}>()
    const {plan} = usePlan(plan_id)

    const form: measuseRequestType = mockMeasureRequest
    const {measureResults} = useMeasure(form)

    return (
        <>
            {!user ? (
             <>
                <HomeGuestHeaderComponent searchQuery={searchQuery} handleSearch={handleSearch}  />
                <Box maxW="1920px" mx="auto" py="6" px="6">
                <Flex>
                    <Box w="50%" px="6">
                        <HomeResultsCardsComponent />
                        <HomeMapContentComponent resultLocations={resultLocations} />
                    </Box>
                    <Box w="50%" px="6">
                        <HomePlanRouteComponent>
                            <HomeTimelineComponent planRoutes={plan} />
                        </HomePlanRouteComponent>
                    </Box>
                </Flex>
                </Box>
             </>

            ): (
                <>
                    <HomeLoginHeaderComponent user={user} searchQuery={searchQuery} handleSearch={handleSearch}  />
                    <Box maxW="1920px" mx="auto" py="6" px="6">
                        <Flex>
                            <Box w="50%" px="6">
                                <HomeResultsCardsComponent />
                                <HomeMapContentComponent resultLocations={resultLocations} />
                            </Box>
                            <Box w="50%" px="6">
                                <HomePlanRouteComponent>
                                    <HomeGuestTimelineComponent measureRoutes={plan} />
                                </HomePlanRouteComponent>
                            </Box>
                        </Flex>
                    </Box>
                </>
                )}
        </>
    )
}

export default HomeContent;
