import { useState, useEffect } from "react"
import { PlansService } from "lib/services/PlansService"
import { planDetailResponseType } from "lib/models/plan"

const usePlan = (user_id: string, plan_id: string) => {
    const [plan, setPlan] = useState<planDetailResponseType | null>(null)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        const load = async (): Promise<void> => {
            try {
                const res = await (new PlansService()).getPlanById(user_id)
                setPlan(res)
                setError(null)
            } catch(e) {
                setError(e as Error)
            }
        }
        void load()
    }, [user_id, plan_id])
    return { plan, error }
}

export default usePlan;