import { useState, useEffect } from "react"
import { PlansService } from "lib/services/PlansService"
import { planResponseType } from "lib/models/plan"

const usePlans = (planId: string = "") => {
    const [plans, setPlans] = useState<planResponseType[] | []>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        const load = async (): Promise<void> => {
            setLoading(true)
            try {
                const res = await (new PlansService()).getPastPlans()
                setPlans(res)
                setError(null)
            } catch(e) {
                setError(e as Error)
            }
            setLoading(false)
        }
        void load()
    }, [])
    useEffect(() => {
        if(planId.length !== 0) {
            setLoading(true)
            setPlans((planList: planResponseType[]) => {
                return planList.filter(plan => plan.id !== +planId)
            })
            setLoading(false)
        }
    }, [planId])
    return { plans, loading, error }
}

export default usePlans;