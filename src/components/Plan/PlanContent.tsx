import React from "react";
import { Box, Button, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";



const PlanContentComponent: React.FC<{
    createPlan: () => void
}> = ({children,createPlan}) => {
    return(
        <>
            <Box w="100%" minH="60vh" py="10">
                <Box maxW="1200px" mx="auto" pt="6" pb="10" px="4">
                    <Box mb="6">
                        <Flex justify="space-between" alignItems="center" mb="2">
                            <Heading fontSize="2xl" fontWeight="bold">
                                過去の予定
                            </Heading>
                            <Button mx="4" colorScheme="blue" rounded="3xl" onClick={createPlan}>
                                <AddIcon mr="2" />
                                <Text>予定の作成</Text>
                            </Button>
                        </Flex>
                        <Divider />
                    </Box>
                    {children}
                </Box>
            </Box>
        </>
    )
}

export default PlanContentComponent;