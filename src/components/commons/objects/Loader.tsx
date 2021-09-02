import React from "react";
import { Box, Spinner } from "@chakra-ui/react";

const Loader: React.VFC = () => {
    const orverlayStyle = {
        top: "0",
        bottom: "0",
        right: "0",
        left: "0",
        zIndex: 100,
        bgColor: "rgba(255,255,255,0.7)"
    }

    const centerStyle = {
        top: "50%",
        left: "50%",
        transform: "transrate(-50%,-50%)"
    }
    return(
        <Box position="fixed" {...orverlayStyle}>
            <Box position="absolute" {...centerStyle}>
                <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.300"
                size="xl"
                />
            </Box>
        </Box>
    )
}

export default Loader;