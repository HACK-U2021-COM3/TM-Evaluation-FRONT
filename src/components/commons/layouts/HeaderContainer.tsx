import React from "react";
import {　Box,Flex　} from '@chakra-ui/react';  

const HeaderContainerComponent: React.FC = ({children}) => {
    return(
        <Box shadow={"sm"} border="1px" borderColor="gray.200">
            <Flex maxW="1920px" px="6" mx="auto" h={16} alignItems={'center'} justifyContent={'space-between'}>
                {children}
            </Flex>
        </Box>
    )
}

export default HeaderContainerComponent;