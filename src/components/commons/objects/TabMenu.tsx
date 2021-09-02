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
    Flex,
} from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons';
import Timeline from "./Timeline";

const TabMenu: React.VFC = () => {
    //TODO
    const isLogin = true
    const planList = [
        { id: 1, title: "渋谷デート", user_id: "aaa", sum_time: 60, created_at: "2021/09/11", round_trip_flag: 1},
        { id: 2, title: "渋谷デート", user_id: "bbb", sum_time: 60, created_at: "2021/09/11", round_trip_flag: 1},
        { id: 3, title: "渋谷デート", user_id: "ccc", sum_time: 60, created_at: "2021/09/11", round_trip_flag: 1},
        { id: 4, title: "渋谷デート", user_id: "ddd", sum_time: 60, created_at: "2021/09/11", round_trip_flag: 1},
        { id: 5, title: "渋谷デート", user_id: "eee", sum_time: 60, created_at: "2021/09/11", round_trip_flag: 1},
    ]

    const listIteStyle = (num: number) => {
        let color;
        if (num % 2 === 0) {
            color = "white"
        } else {
            color = "gray.200"
        }
        return color
    }

    return(
        <>
            <Tabs isFitted variant="enclosed">
                <TabList>
                    <Tab>予定経路</Tab>
                    <Tab>過去の経路</Tab>
                </TabList>
                <TabPanels border="1px" borderColor="gray.200" rounded="sm">
                    <TabPanel>
                        <Box overflowY="scroll" h="265px">
                            <Timeline />
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
                                    {planList.map((plan => (
                                        <ListItem key={plan.id} py="4" px="6" bgColor={listIteStyle(plan.id)}>
                                        <Link to="/">
                                            <Flex justify="space-between">
                                                <Box display="flex" justifyItems="center" alignItems="center">
                                                    <ChevronRightIcon mr="3" />
                                                    <Text>{plan.title}</Text>
                                                </Box>
                                                <Box>
                                                    <Text as="span">{plan.created_at}</Text>
                                                </Box>
                                            </Flex>
                                        </Link>
                                    </ListItem>
                                    )))}
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