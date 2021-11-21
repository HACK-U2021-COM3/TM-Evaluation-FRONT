import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Box, Flex} from "@chakra-ui/react";
import HomeResultsCardsComponent from "components/Home/cards/HomeResultsCards";
import HomeLoginHeaderComponent from "components/Home/headers/HomeLoginHeader";
import HomePlanRouteComponent from "components/Home/plans/HomePlanRouteContent";
import HomeTimelineComponent from "components/Home/plans/HomeTimeline";
import HomeMapContentComponent from "components/Home/map/HomeMapContent";
import usePlan from "lib/hooks/usePlan";
import usePlans from "lib/hooks/usePlans";
import {convertLocationObjectToString} from "lib/util/convert-location";
import { RouteContextValue } from "lib/contexts/RouteContext";



const HomeLoginContent: React.VFC = () => {
    const {measureResults, pointResults, initPlanDetailRequest} = RouteContextValue()
    const {plan_id} = useParams<{plan_id: string}>()
    const {plan} = usePlan(plan_id)


    useEffect(() => {
        const firstOrder = Math.min(...plan.map((p) => p.order_number))
        const lastOrder = Math.max(...plan.map((p) => p.order_number))
        const startPoint = plan.find(p => p.order_number === firstOrder)
        const endPoint = plan.find(p => p.order_number === lastOrder)
        const waypoints = plan.filter(p => p.order_number !== firstOrder && p.order_number !== lastOrder)

        const convertWaipointsToRequestWaipoint = waypoints.map(point => {
            return {
                point: convertLocationObjectToString(point.place_location),
                point_stay_time: point.stay_time,
                order: point.order_number
            }
        })
        const initRequestForm = {
            from: {
                from_name: convertLocationObjectToString(startPoint?.place_location),
                from_stay_time: startPoint?.stay_time ?? 0
            },
            to: {
                to_name: convertLocationObjectToString(endPoint?.place_location),
                to_stay_time: endPoint?.stay_time ?? 0
            },
            waypoints: [
                ...convertWaipointsToRequestWaipoint
            ]
        }

        initPlanDetailRequest(initRequestForm)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [plan])


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
            title={title}
            editTitleHandler={editTitleHandler}
            routes={measureResults}
            points={pointResults}
            />
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
                        plan={plan}
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

export default HomeLoginContent;
