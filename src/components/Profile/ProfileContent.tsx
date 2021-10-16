import React from "react";
import { Box, Divider, Image, Text } from "@chakra-ui/react";
import {User} from "lib/models/user"

const ProfileContentComponent: React.VFC<{user: User}> = ({user}) => {
    const bggradient = {
        backgroundImage: "linear-gradient(to right, #a18cd1 0%, #fbc2eb 100%)"
    }
    return(
        <>
            <Box w="100%" {...bggradient}>
                <Box position="relative" maxW="960px" minH="320px" mx="auto" px="40px" pt="160px">
                    <Box position="absolute" left="50%" bottom="-68px" transform="translateX(-50%)" zIndex="10">
                        <Image shadow="lg" borderRadius="lg" mx="auto" boxSize="150px" src={user?.imageUrl} alt="hoge" mb="2" />
                        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
                            {user?.name}
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