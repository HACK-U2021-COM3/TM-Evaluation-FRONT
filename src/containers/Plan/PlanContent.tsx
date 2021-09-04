import React from "react";
import {useHistory} from "react-router-dom"
import PlanContentComponent from "components/Plan/PlanContent";

const PlanContent: React.VFC = () => {
    const history = useHistory()
    const createPlan = async () => {
        // ここで新しい奴が戻ってくる
        await true
        const plan_id = 1
        history.push(`/aaaa/plans/${plan_id}`)
    }
    return(
        <>
           <PlanContentComponent createPlan={createPlan} />
        </>
    )
}

export default PlanContent;