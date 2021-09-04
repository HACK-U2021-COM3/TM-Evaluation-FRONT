import React from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Heading,
    Text,
    Tag,
    TagLabel
} from '@chakra-ui/react';

const PranCard: React.VFC = () => {
return (
    <Box mb="4">
        <Link to="/hoge/plans/1">
            <Box
                minW={'330px'}
                w={'full'}
                boxShadow={'sm'}
                border={'1px'}
                borderColor="gray.100"
                rounded={'lg'}
                pos={'relative'}
            >
                <Box position="relative" bgColor="gray.100" minH="120px" roundedTopLeft="lg" roundedTopRight="lg">
                    <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
                    {/* TODO ランダムでさす */}
                    <Text fontSize="5xl">
                        🎉
                    </Text>
                    </Box>
                    <Tag
                    position="absolute"
                    top="10px"
                    right="10px"
                    size="lg"
                    borderRadius="full"
                    variant="solid"
                    colorScheme="green"
                    >
                        <TagLabel>Green</TagLabel>
                     </Tag>
                </Box>
                <Box px="6" pt="2" pb="6">
                    <Text display="inline-block" as="small" textColor="gray.400" mb="1">2021/09/11</Text>
                    <Heading fontSize={'xl'} fontWeight="bold">
                        渋谷デート
                    </Heading>
                </Box>
            </Box>
        </Link>
    </Box>
);
}
export default PranCard;