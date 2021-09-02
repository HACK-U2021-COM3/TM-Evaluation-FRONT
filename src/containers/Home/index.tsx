import React from "react";
import LeafletMap from "../../components/Map";
import japan from "../../data/ja.json"

import TabMenuComponent from "../../components/commons/objects/TabMenu";

import { 
    Box,
    Grid,
    GridItem,
    Center,
} from "@chakra-ui/react";

const Home: React.VFC = () => {
    return(
        <Box maxW="1920px" mx="auto" py="6" px="6">
            <Grid
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={10}
            >
                <GridItem rowSpan={3} colSpan={1}>
                    <LeafletMap geojson={japan} />
                </GridItem>
                <GridItem colSpan={2}>
                    <Box w="100%" height="100%" shadow="sm" border="1px" borderColor="gray.200" rounded="xl">
                        <Center>
                            aaaaa
                        </Center>
                    </Box>
                </GridItem>
                <GridItem colSpan={2} >
                <Box w="100%" height="100%" shadow="sm" border="1px" borderColor="gray.200" rounded="xl">
                        <Center>
                            aaaaa
                        </Center>
                    </Box>
                </GridItem>
                <GridItem colSpan={4} rowSpan={2}>
                    <TabMenuComponent />
                </GridItem>
            </Grid>
        </Box>
    )
}

export default Home;
