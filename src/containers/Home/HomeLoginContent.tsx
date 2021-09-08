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
import { measureResponseType, measuseRequestType } from "lib/models/measure";
import { useEffect } from "react";
import usePlans from "lib/hooks/usePlans";


const HomeLoginContent: React.VFC<{
    user: {name:  string, imageUrl: string},
    searchQuery: string,
    handleSearch: (e: any) => void,
    resultLocations: searchResponseType[],
    addRoutesPoint: (address: string)=> Promise<void>,
    settingLocation: (e: any, address: string) => void,
    measureResults: measureResponseType[],
    changeResultsHandler: (time: number, index: number) => void,
    initPlanDetailRequest: (form: measuseRequestType) => void
}> = ({user,
    searchQuery,
    handleSearch,
    resultLocations,
    addRoutesPoint,
    settingLocation,
    measureResults,
    changeResultsHandler,
    initPlanDetailRequest
}) => {

    const {plan_id} = useParams<{plan_id: string}>()
    const {plan} = usePlan(plan_id)

    useEffect(() => {
        initPlanDetailRequest({
            "from": "ナゴヤドーム", // string　出発地点
            "to": "テレビ塔", // string　到着地点
            "waypoints": [
                {
                    "point": "久屋大通駅", // string　経由地点
                    "order": 2 // int　経由地点の順序
                },
                {
                    "point": "今池駅", // string　経由地点
                    "order": 1 // int　経由地点の順序
                }
            ]
        })
    }, [])
    console.log(measureResults)

    const {plans} = usePlans()
    const [title, setTitle] = useState<string>("")
    useEffect(() => {
        const planTitle = plans.find(p=> p.id === +plan_id)?.title ?? ""
        editTitleHandler(planTitle)
    }, [plan_id, plans])

    const editTitleHandler = (title: string) => {
        setTitle(title)
    }

    return (
        <>
            <HomeLoginHeaderComponent
            user={user}
            searchQuery={searchQuery}
            handleSearch={handleSearch}
            title={title}
            editTitleHandler={editTitleHandler}
            />
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
