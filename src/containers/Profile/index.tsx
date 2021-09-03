import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import CardsComponent from "../../components/commons/cards/Cards";
import AppProfileHeader from "../../components/commons/layouts/AppProfileHeader";
import {useHistory} from "react-router-dom"


const Profile: React.VFC = () => {
    const history = useHistory()
    const bggradient = {
        backgroundImage: "linear-gradient(to right, #a18cd1 0%, #fbc2eb 100%)"
    }

    const createPlan = async () => {
        // ここで新しい奴が戻ってくる
        await true
        const plan_id = 1
        history.push(`/aaaa/${plan_id}`)
    }
    
    return(
        <>
            <AppProfileHeader />
            <Box>
                <Box w="100%" {...bggradient}>
                    <Box position="relative" maxW="960px" minH="320px" mx="auto" px="40px" pt="160px">
                        <Box position="absolute" left="50%" bottom="-68px" transform="translateX(-50%)" zIndex="10">
                            <Image shadow="lg" borderRadius="lg" boxSize="150px" src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9" alt="hoge" mb="2" />
                            <Text fontSize="2xl" fontWeight="bold" textAlign="center">
                                tame
                            </Text>
                        </Box>
                    </Box>
                    <Divider borderColor="white" opacity="1"  borderBottomWidth="3px" />
                    <Box bgColor="gray.200" py="12" />
                </Box>
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
                        <CardsComponent />
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Profile;