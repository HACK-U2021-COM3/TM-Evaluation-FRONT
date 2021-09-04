import React from "react";
import { Wrap } from "@chakra-ui/react";
import HomeResultCardsComponent from "./HomeResultsCard";


const HomeResultsCardsCmponent: React.VFC = () => {
    const sum_time = 60
    const stay_time = 20
    const sum_distance = 20
    return(
        <Wrap justify="center" spacing="20px" mb="6">
            <HomeResultCardsComponent title="総距離" text={`${sum_distance}km`} />
            <HomeResultCardsComponent title="総徒歩時間" text={`${sum_time}分`}  />
            <HomeResultCardsComponent title="総合計時間" text={`${stay_time+sum_time}分`}/>
        </Wrap>
    )
}

export default HomeResultsCardsCmponent;
