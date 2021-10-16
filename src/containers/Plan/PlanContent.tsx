import React from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import PlanContentComponent from "components/Plan/PlanContent";
import usePlans from "lib/hooks/usePlans";
import Loader from "components/commons/objects/Loader";
import CardComponent from 'components/Plan/cards/PlanCard';
import { PlansService } from "lib/services/PlansService";
import { useHistory } from "react-router";

const PlanContent: React.VFC = () => {
    const {plans, loading} = usePlans()
    const history = useHistory()
    const createAndSavePlan = async () => {
        await (new PlansService()).createAndSavePlans({
            title: "untitled",
            sum_time: 0,
            details: [
                {
                    place_location: {lat: 36,lng: 138},
                    stay_time: 0,
                    order_number: 0
                }
            ]
        })
        history.go(0)
    }
    return(
        loading ? <Loader /> : (
        <PlanContentComponent createPlan={createAndSavePlan}>
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
