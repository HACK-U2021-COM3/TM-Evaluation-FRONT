import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useToast
} from '@chakra-ui/react';
import { SearchIcon, EditIcon } from '@chakra-ui/icons';


const AppLoginHeader: React.VFC = () =>  {
  const toast = useToast()
  return (
    <>
      <Box shadow={"sm"} border="1px" borderColor="gray.200" px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={12} alignItems={'center'}>
              <Flex alignItems={"center"}>
                <Text fontSize={"2xl"} px={"3"}>
                  titletitit
                </Text>
                <EditIcon color="gray.300" />
            </Flex>
            <InputGroup>
            <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
            <Input rounded="3xl" bgColor="white" w="520px" type="text" placeholder="search..." />
            </InputGroup>
          </HStack>
          <Flex alignItems={'center'}>
            <Button
              colorScheme="blue"
              mx="5"
              onClick={() => toast({
                title: "保存しました",
                position: "top",
                duration: 9000,
                isClosable: true,
              })}
            >
              保存する
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>ログアウト</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default AppLoginHeader;