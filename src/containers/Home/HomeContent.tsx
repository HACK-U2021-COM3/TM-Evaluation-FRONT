import React, { useContext } from "react";
import { UserContext } from "lib/contexts/AuthContext";
import { Box, Flex, useDisclosure} from "@chakra-ui/react";
import HomeResultsCardsComponent from "components/Home/cards/HomeResultsCards";
import HomeGuestHeaderComponent from "components/Home/headers/HomeGuestHeader";
import HomeLoginHeaderComponent from "components/Home/headers/HomeLoginHeader";
import HomePlanRouteComponent from "components/Home/plans/HomePlanRouteContent";
import HomeTimelineComponent from "components/Home/plans/HomeTimeline";
import HomeMapContentComponent from "components/Home/map/HomeMapContent";


const HomeContent: React.VFC = () => {
    const {user} = useContext(UserContext)

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

    return (
        <>
            {!user ? (
            <HomeGuestHeaderComponent />
            ): (
                <HomeLoginHeaderComponent user={user}  />
            )}
            <Box maxW="1920px" mx="auto" py="6" px="6">
                <Flex>
                    <Box w="50%" px="6">
                        <HomeResultsCardsComponent />
                        <HomeMapContentComponent />
                    </Box>
                    <Box w="50%" px="6">
                        <HomePlanRouteComponent>
                            <HomeTimelineComponent planList={planList} modal={{isOpen, onClose}} onOpen={onOpen} />
                        </HomePlanRouteComponent>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default HomeContent;
