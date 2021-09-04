import React from "react";
import { 
    Heading,
    WrapItem,
    Text,
    Center,
} from "@chakra-ui/react";


const HomeResultsCardComponent: React.VFC<{title: string, text: string}> = ({title, text}) => {
    return(
        <WrapItem>
            <Center
            minW={'230px'}
            minH={"90px"} 
            boxShadow={'sm'}
            border={'1px'}
            borderColor="gray.100"
            rounded={'lg'}
            pos={'relative'}
            p="2"
            >
                <Heading position="absolute" top="10px" left="10px" fontSize="sm" fontWeight="bold">{title}</Heading>
                <Text fontSize="xl" fontWeight="bold" mt="4" textColor="green.500">{text}</Text>
            </Center>
        </WrapItem>
    )
}

export default HomeResultsCardComponent;