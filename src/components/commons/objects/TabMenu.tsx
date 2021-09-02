import React from "react";
import { Link } from 'react-router-dom'
import { 
    Box,
    Tabs,
    Tab,
    TabList,
    TabPanel, 
    TabPanels,
    UnorderedList,
    ListItem,
    Text,
    Button,
} from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons';

const TabMenu: React.VFC = () => {
    //TODO
    const isLogin = false

    return(
        <>
            <Tabs isFitted variant="enclosed">
                <TabList>
                    <Tab>予定経路</Tab>
                    <Tab>過去の投稿</Tab>
                </TabList>
                <TabPanels border="1px" borderColor="gray.200" rounded="sm">
                    <TabPanel>
                        <Box overflowY="scroll" h="265px">
                            sss
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        {!isLogin ? (
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
                        ) : (
                            <Box overflowY="scroll" h="265px">
                                <UnorderedList listStyleType="none" border="gray.100">
                                    <ListItem py="4" px="6" bgColor="gray.200">
                                        <Link to="/">
                                            <ChevronRightIcon mr="3" />
                                            <Text>渋谷デート</Text>
                                        </Link>
                                    </ListItem>
                                </UnorderedList>
                            </Box>
                        )}
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    );
}

export default TabMenu;