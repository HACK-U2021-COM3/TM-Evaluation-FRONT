import React, {useContext} from 'react';
import { useParams } from 'react-router';
import {
    Flex,
    Button,
    useToast,
    Image,
    Text,
    Box
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import SearchInputComponent from 'components/commons/forms/SearchInput';
import TitleInputComponent from 'components/commons/forms/TitleInput';
import NavMenuComponent from 'components/commons/objects/NavMenu';
import HeaderContainerComponent from 'components/commons/layouts/HeaderContainer';
import { savePlanRequestType } from 'lib/models/plan';
import { PlansService } from 'lib/services/PlansService';
import {measureFixResponseType, pointResponseType} from "../../../lib/models/measure_point";
import {SearchContextValue} from 'lib/contexts/SearchContext'
import { UserContext } from "lib/contexts/AuthContext";




const HomeLoginHeaderComponent: React.VFC<{
  title: string,
  editTitleHandler: (title: string) => void,
  // routes: measureResponseType[]
  routes: measureFixResponseType[],
  points: pointResponseType[],
}> = ({
  title,
  editTitleHandler,
  routes,
  points,
}) =>  {
  const {user} = useContext(UserContext)
  const toast = useToast()
  const {keyword, searchQuery, handleSearch} = SearchContextValue()
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
    for (const {stay_time} of points) {
        res+= stay_time
    }
    return res
  }

  const sumTime: number = sumRouteTime() + sumStayTime()

  const convertToWaypointsRequests = points.map((point:pointResponseType, i: number) => {
    return {
      place_location: point.location,
      stay_time: point.stay_time,
      order_number: i
    }
  })

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
            <Flex alignItems={'center'}>
                <Image src="/images/logo.png" w="50px" h="50px" />
                <Box mx={"3"}>
                    <TitleInputComponent
                        title={title}
                        editTitleHandler={editTitleHandler}
                    />
                </Box>
                <Box mx={"3"}>
                    <SearchInputComponent searchQuery={searchQuery} handleSearch={handleSearch} />
                </Box>
                <Text as={"span"} color="white">キーワード: {keyword}</Text>
            </Flex>
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
