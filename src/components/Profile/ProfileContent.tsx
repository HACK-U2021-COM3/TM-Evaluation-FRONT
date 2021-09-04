import React from "react";
import { Box, Divider, Image, Text } from "@chakra-ui/react";

const ProfileContentComponent: React.VFC = () => {
    const bggradient = {
        backgroundImage: "linear-gradient(to right, #a18cd1 0%, #fbc2eb 100%)"
    }
    return(
        <>
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
        </>
    );
}

export default ProfileContentComponent;