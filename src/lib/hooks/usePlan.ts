import { useState, useEffect } from "react"
import { PlansService } from "lib/services/PlansService"
import { planDetailResponseType } from "lib/models/plan"

const usePlan = (plan_id: string) => {
    const [plan, setPlan] = useState<planDetailResponseType[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        const load = async (): Promise<void> => {
            setLoading(true)
            try {
                const res = await (new PlansService()).getPlanById(plan_id)
                setPlan(res)
                setError(null)
            } catch(e) {
                setError(e as Error)
            }
            setLoading(false)
        }
        void load()
    }, [plan_id])
    return { plan, loading, error }
}

export default usePlan;