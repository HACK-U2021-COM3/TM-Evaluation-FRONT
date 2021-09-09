import React from 'react';
import { useParams } from 'react-router';
import {
  Flex,
  HStack,
  Button,
  useToast,
  Image
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import SearchInputComponent from 'components/commons/forms/SearchInput';
import TitleInputComponent from 'components/commons/forms/TitleInput';
import NavMenuComponent from 'components/commons/objects/NavMenu';
import HeaderContainerComponent from 'components/commons/layouts/HeaderContainer';
import { measureResponseType } from 'lib/models/measure';
import { savePlanRequestType } from 'lib/models/plan';
import { PlansService } from 'lib/services/PlansService';



const HomeLoginHeaderComponent: React.VFC<{
  user: {name:  string, imageUrl: string},
  searchQuery: string,
  handleSearch: (e: any) => void,
  title: string,
  editTitleHandler: (title: string) => void,
  routes: measureResponseType[]
}> = ({
  user,
  searchQuery,
  handleSearch,
  title,
  editTitleHandler,
  routes
}) =>  {
  const toast = useToast()
  const {plan_id} = useParams<{plan_id: string}>()
  const sumRouteTime = () => {
    let res = 0
    for (const {duration} of routes) {
        res+= Math.floor(duration / 60)
    }
    return res
  }
  const sumStayTime = () => {
    let res = 0
    for (const {start_stay_time} of routes) {
        res+= start_stay_time
    }
    return res
  }

  const sumTime: number = sumRouteTime() + sumStayTime()

  const convertToWaypointsRequests = routes.map((route: measureResponseType, i: number) => {
    return {
      place_location: route.start_location,
      stay_time: route.start_stay_time,
      order_number: i
    }
  })

  console.log(convertToWaypointsRequests)

  const editAndSaveHandler = async (): Promise<void> => {
    const requestsPayload: savePlanRequestType = {
      title: title,
      sum_time: sumTime,
      details: [...convertToWaypointsRequests]
    }
    await (new PlansService()).editAndSavePlan(requestsPayload, plan_id)

    toast({
      title: "保存しました",
      position: "top",
      duration: 9000,
      isClosable: true,
  })
  }

  return (
    <>
        <HeaderContainerComponent>
            <HStack spacing={12} alignItems={'center'}>
                <Image src="/images/logo.png" w="50px" h="50px" />
                <TitleInputComponent
                title={title}
                editTitleHandler={editTitleHandler}
                />
                <SearchInputComponent searchQuery={searchQuery} handleSearch={handleSearch} />
            </HStack>
            <Flex alignItems={'center'}>
                <Button
                leftIcon={<CheckIcon />} 
                variant="outline"
                colorScheme="blue"
                mx="5"
                onClick={editAndSaveHandler}
                >
                保存する
                </Button>
                <NavMenuComponent user={user} />
            </Flex>
        </HeaderContainerComponent>
    </>
  );
}

export default HomeLoginHeaderComponent;