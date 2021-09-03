import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import CardsComponent from "../../components/commons/cards/Cards";


const Profile: React.VFC = () => {
    const bggradient = {
        backgroundImage: "linear-gradient(to right, #a18cd1 0%, #fbc2eb 100%)"
    }
    return(
        <div>
            <Box w="100%" {...bggradient}>
                <Box position="relative" maxW="960px" minH="320px" mx="auto" px="40px" pt="160px">
                    <Box position="absolute" left="50%" bottom="-68px" transform="translateX(-50%)" zIndex="10">
                        <Image shadow="lg" borderRadius="lg" boxSize="150px" src="https://bit.ly/sage-adebayo" alt="hoge" mb="2" />
                        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
                            tame
                        </Text>
                    </Box>
                </Box>
                <Divider borderColor="white" opacity="1"  borderBottomWidth="3px" />
                <Box bgColor="gray.200" py="12" />
            </Box>
            <Box w="100%" minH="60vh" py="10">
                <Box maxW="1200px" mx="auto" pt="20px" pb="3rem">
                    <Box mb="6">
                        <Flex justify="space-between" mb="2">
                            <Heading fontSize="2xl" fontWeight="bold">
                                過去の予定
                            </Heading>
                            <Button colorScheme="blue" rounded="3xl">
                                <AddIcon mr="2" />
                                <Text>予定の作成</Text>
                            </Button>
                        </Flex>
                        <Divider />
                    </Box>
                    <CardsComponent />
                </Box>
            </Box>
        </div>
    );
}

export default Profile;