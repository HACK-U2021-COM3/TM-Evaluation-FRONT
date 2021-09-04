import React from "react";
import { Flex, Box, Text, ModalProps } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import StayTimeModalComponent from "components/commons/objects/StayTimeModal";

const HomeTimelineComponent: React.VFC<{planList: any, modal: any, onOpen: () => void}> = ({planList, modal, onOpen}) => {
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
            {planList.map((plan: any) => (
                <Box key={plan.order_id} position="relative" {...timelineItemStyle} _before={{...timelinBeforeItemStyle}}>
                    <Box shadow="sm" border="1px" borderColor="gray.200" position="relative" {...timelineContentStyle}>
                        <Flex justify="space-between">
                            <Text>
                            {plan.result_id}
                            </Text>
                            <Flex alignItems="center">
                                <Text as="span" mx="4" >滞在時間: {plan.stay_time}分</Text>
                                <StayTimeModalComponent isOpen={modal.isOpen} onClose={modal.onClose}>
                                    <EditIcon onClick={onOpen} />
                                </StayTimeModalComponent>
                            </Flex>
                        </Flex>
                    </Box>
                </Box>            
            ))}
        </Box>
        </Box>
    )
}

export default HomeTimelineComponent;