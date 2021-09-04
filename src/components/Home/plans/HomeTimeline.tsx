import React from "react";
import { Box } from "@chakra-ui/layout";

const HomeTimelineComponent: React.VFC = () => {
    const planList = [
        {result_id: "ヤフーオフィス", place_id: "11111", stay_time: 60, order_id: 1},
        {result_id: "新宿", place_id: "22222", stay_time: 60, order_id: 2},
        {result_id: "新宿", place_id: "33333", stay_time: 60, order_id: 3},
        {result_id: "新宿", place_id: "44444", stay_time: 60, order_id: 4},
        {result_id: "東京都", place_id: "44444", stay_time: 60, order_id: 5},
        {result_id: "東京都", place_id: "22222", stay_time: 60, order_id: 6},
        {result_id: "東京都", place_id: "33333", stay_time: 60, order_id: 7},
        {result_id: "東京都", place_id: "44444", stay_time: 60, order_id: 8},
        {result_id: "東京都", place_id: "44444", stay_time: 60, order_id: 9},

    ]

    const timelineItemStyle = {
        pl: "70px",
        pr: "25px",
        py: "25px",
        bgColor: "inherit",
        w: "100%",
        left: "0"
    }

    const timelinBeforeItemStyle = {
        content: "''",
        position: "absolute",
        width: "24px",
        height: "24px",
        left: "19px",
        bgColor: "#3182ce",
        border: "2px",
        borderColor: "white",
        top: "22px",
        borderRadius: "50%",
        zIndex: 1,
    }
    
    const timelineAfterStyle = {
        content: "''",
        position: "absolute",
        width: "3px",
        bgColor: "#3182ce",
        top: "0",
        bottom: "0",
        left: "31px",
        ml: "-2px"
    }

    const timelineContentStyle = {
        display: "block",
        px: "20px",
        py: "30px",
        bgColor: "white",
        borderRadius: "6px"
    }

    return(
        <Box width="90%" mx="auto">
            <Box position="relative" _after={{...timelineAfterStyle}}>
            {planList.map(plan => (
                <Box key={plan.order_id} position="relative" {...timelineItemStyle} _before={{...timelinBeforeItemStyle}}>
                    <Box shadow="sm" border="1px" borderColor="gray.200" position="relative" {...timelineContentStyle}>
                        {plan.result_id}
                    </Box>
                </Box>            
            ))}
        </Box>
        </Box>
    )
}

export default HomeTimelineComponent;