import React from "react";
import { Wrap } from "@chakra-ui/react";
import HomeResultCardsComponent from "./HomeResultsCard";
import {measureFixResponseType, pointResponseType} from "../../../lib/models/measure_point";


const HomeResultsCardsCmponent: React.VFC<{
    pointResults: pointResponseType[],
    measureResults: measureFixResponseType[],
    // results: measureResponseType[],
}> = ({pointResults, measureResults}) => {
    const sumDistance = () => {
        let res = 0
        for (const {distance} of measureResults) {
            res+= Math.floor(distance / 1000)
        }
        return res
    }
    const sumRouteTime = () => {
        let res = 0
        for (const {duration} of measureResults) {
            res+= Math.floor(duration / 60)
        }
        return res
    }
    const sumStayTime = () => {
        let res = 0
        for (const {stay_time} of pointResults) {
            res+= stay_time
        }
        return res
    }
    return(
        <Wrap justify="center" spacing="20px" mb="6">
            <HomeResultCardsComponent title="総距離" text={`${sumDistance()}km`} />
            <HomeResultCardsComponent title="総徒歩時間" text={`${sumRouteTime()}分`}  />
            <HomeResultCardsComponent title="総合計時間" text={`${sumStayTime() + sumRouteTime()}分`}/>
        </Wrap>
    )
}

export default HomeResultsCardsCmponent;
