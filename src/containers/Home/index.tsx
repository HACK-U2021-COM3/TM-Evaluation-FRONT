import React from "react";
import LeafletMap from "../../components/commons/objects/Map";
import japan from "../../data/ja.json"
import { 
    Box,
    Grid,
    GridItem,
    Center,
    Heading
} from "@chakra-ui/react";
import Loader from "../../components/commons/objects/Loader";
import TimelineComponent from "../../components/commons/objects/Timeline";

const Home: React.VFC = () => {
    return !japan ? <Loader /> : (
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
                    < Heading fontSize={'2xl'} fontWeight={"bold"}>
                        予定経路
                    </Heading>
                    <Box bgColor="gray.100" overflowY="scroll" h="358px" py="4" rounded="xl">
                        <TimelineComponent />
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default Home;
