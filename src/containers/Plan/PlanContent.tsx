import React from "react";
import {useHistory} from "react-router-dom"
import { Wrap, WrapItem } from "@chakra-ui/react";
import PlanContentComponent from "components/Plan/PlanContent";
import usePlans from "lib/hooks/usePlans";
import Loader from "components/commons/objects/Loader";
import CardComponent from 'components/Plan/cards/PlanCard';


const PlanContent: React.VFC = () => {
    const history = useHistory()
    const {plans, loading} = usePlans()
    const createPlan = async () => {
        // ここで新しい奴が戻ってくる
        await true
        const plan_id = 1
        history.push(`/plans/${plan_id}`)
    }
    return(
        loading ? <Loader /> : (
        <PlanContentComponent createPlan={createPlan}>
            <Wrap spacing="20px">
                {plans.map(plan => (
                    <WrapItem key={plan.id}>
                        <CardComponent plan={plan} />
                    </WrapItem>            
                ))}
            </Wrap>
        </PlanContentComponent>
        )
    )
}

export default PlanContent;