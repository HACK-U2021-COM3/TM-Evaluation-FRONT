
import React from "react"
import { Flex, Text, Image } from "@chakra-ui/react"

const HomeTimelineCardComponent: React.VFC<{distance: number, duration: number}> = ({distance, duration}) => {
    return(
        <>
        <Flex alignItems="center" w="100px" justify="space-between" color="gray.500" position="absolute" right="72px" bottom="-10px">
            <Image mx="2" src="/images/icons/walking.svg"/>
            <Text as="span">{Math.floor(duration / 60)}分</Text>
        </Flex>
        <Text as="span" color="gray.500" position="absolute" left="-38px" top="64px">{Math.floor(distance / 1000)}km</Text>
        </>
    )
}

export default HomeTimelineCardComponent