import React from "react";
import { 
    Box,
    Tabs,
    Tab,
    TabList,
    TabPanel, 
    TabPanels,
    Text,
    Button,
} from "@chakra-ui/react";
import CardsComponent from "../cards/Cards";

const hoge: React.VFC = () => (
    <Box display="flex" alignItems="center" maxWidth="600px" mx="auto"  position="relative" h="265px" _before={{
        "content": "''",
        "display": "inline-block",
        "bgImage": "url('/images/login.svg')",
        "bgRepeat": "no-repeat",
        "position": "absolute",
        "top": "30px",
        "right": "10px",
        "width": "354px",
        "height": "212px"
    }}>
        <Box>
            <Text fontWeight="bold" fontSize="xl" mb="4">予定を保存するには<br/>ログインしよう!</Text>
            <Button colorScheme="blue">ログインする</Button>
        </Box>
    </Box>
) 

const TabMenu: React.VFC = () => {

    return(
        <>
            <Tabs>
                <TabList>
                    <Tab>過去の予定</Tab>
                    <Tab>aaaaa</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <CardsComponent />
                    </TabPanel>
                    <TabPanel>
                        aaaa
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    );
}

export default TabMenu;