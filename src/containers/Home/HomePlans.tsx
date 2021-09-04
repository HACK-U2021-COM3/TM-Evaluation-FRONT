import React from "react";
import HomePlanRouteComponent from "components/Home/plans/HomePlanRouteContent";
import HomeTimelineComponent from "components/Home/plans/HomeTimeline";
import { useDisclosure } from "@chakra-ui/react";

const HomePlansContent: React.VFC = () => {
    const { isOpen, onClose, onOpen } = useDisclosure()

    const planList = [
        {result_id: "ヤフーオフィス", place_id: "11111", stay_time: 0, order_id: 1},
        {result_id: "新宿", place_id: "22222", stay_time: 0, order_id: 2},
        {result_id: "新宿", place_id: "33333", stay_time: 0, order_id: 3},
        {result_id: "新宿", place_id: "44444", stay_time: 0, order_id: 4},
        {result_id: "東京都", place_id: "44444", stay_time: 0, order_id: 5},
        {result_id: "東京都", place_id: "22222", stay_time: 0, order_id: 6},
        {result_id: "東京都", place_id: "33333", stay_time: 0, order_id: 7},
        {result_id: "東京都", place_id: "44444", stay_time: 0, order_id: 8},
        {result_id: "東京都", place_id: "44444", stay_time: 0, order_id: 9},

    ]
    return(
        <>
            <HomePlanRouteComponent>
                <HomeTimelineComponent planList={planList} modal={{isOpen, onClose}} onOpen={onOpen} />
            </HomePlanRouteComponent>
        </>
    )
}

export default HomePlansContent;

