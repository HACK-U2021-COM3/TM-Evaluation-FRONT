import { Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import CardComponent from './PlanCard';

const PlanCards: React.VFC = () => {
    const planList = [
        { id: 1, title: "渋谷デート", user_id: "aaa", sum_time: 60, created_at: "2021/09/11", round_trip_flag: 1},
        { id: 2, title: "渋谷デート", user_id: "bbb", sum_time: 60, created_at: "2021/09/11", round_trip_flag: 1},
        { id: 3, title: "渋谷デート", user_id: "ccc", sum_time: 60, created_at: "2021/09/11", round_trip_flag: 1},
        { id: 4, title: "渋谷デート", user_id: "ddd", sum_time: 60, created_at: "2021/09/11", round_trip_flag: 1},
        { id: 5, title: "渋谷デート", user_id: "eee", sum_time: 60, created_at: "2021/09/11", round_trip_flag: 1},
    ]

    return(
        <Wrap spacing="20px">
            {planList.map(plan => (
                <WrapItem key={plan.id}>
                    <CardComponent />
                </WrapItem>            
            ))}
        </Wrap>
    );
}

export default PlanCards;