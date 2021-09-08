import React from "react";
import {　Box,Flex } from '@chakra-ui/react';  

const HeaderContainerComponent: React.FC = ({children}) => {
    return(
        <Box shadow={"sm"}　bgColor="#42444d">
            <Flex maxW="1920px" px="12" mx="auto" h={16} alignItems={'center'} justifyContent={'space-between'}>
                {children}
            </Flex>
        </Box>
    )
}

export default HeaderContainerComponent;