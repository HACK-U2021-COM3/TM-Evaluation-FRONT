import React from "react";
import LeafletMap from "./components/Map";
import japan from "./data/ja.json"

import { 
    Box,
    Tabs,
    Tab,
    TabList,
    TabPanel, 
    TabPanels,
    Grid,
    GridItem,
    Center,
    UnorderedList,
    ListItem,
    Text,
    Button
} from "@chakra-ui/react";

//TODO
const isLogin = false

const App: React.VFC = () => {
    return(
        <Box maxW="1920px" mx="auto" py="8" px="6">
            <Grid
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={10}
            >
                <GridItem rowSpan={2} colSpan={1}>
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
                <GridItem colSpan={4} >
                    <Tabs isFitted variant="enclosed">
                            <TabList>
                                <Tab>予定経路</Tab>
                                <Tab>過去の投稿</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                <Box overflowY="scroll" h="265px">
                                    sss
                                </Box>
                                </TabPanel>
                                <TabPanel>
                                        {!isLogin ? (
                                            <Box __before={{
                                                "content": "''",
                                                "bgImage": "url('/images/login.svg')",
                                                "bgRepeat": "no-repeat",
                                            }}>
                                                <Text fontWeight="bold" fontSize="lg">予定を保存するには<br/>ログインしよう!</Text>
                                                <Button colorScheme="blue">ログインする</Button>
                                            </Box>
                                        ) : (
                                            <Box overflowY="scroll" h="265px">
                                                <UnorderedList listStyleType="none" border="gray.100">
                                                    <ListItem py="4" px="6" bgColor="gray.200">sssss</ListItem>
                                                    <ListItem py="4" px="6" bgColor="white">sssss</ListItem>
                                                    <ListItem py="4" px="6" bgColor="gray.200">sssss</ListItem>
                                                    <ListItem py="4" px="6" bgColor="white">sssss</ListItem>
                                                    <ListItem py="4" px="6" bgColor="gray.200">sssss</ListItem>
                                                    <ListItem py="4" px="6" bgColor="white">sssss</ListItem>
                                                    <ListItem py="4" px="6" bgColor="gray.200">sssss</ListItem>
                                                    <ListItem py="4" px="6" bgColor="white">sssss</ListItem>
                                                    <ListItem py="4" px="6" bgColor="gray.200">sssss</ListItem>
                                                </UnorderedList>
                                            </Box>
                                        )}
                                </TabPanel>
                            </TabPanels>
                    </Tabs>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default App;
