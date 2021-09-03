import { useState, useEffect } from "react"
import { PlansService } from "lib/services/PlansService"

const usePlans = (user_id: string, plan_id: string) => {
    const [plans, setPlans] = useState(null)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        const load = async (): Promise<void> => {
            try {
                const res = await (new PlansService()).getPlans(user_id)
                setPlans(res)
                setError(null)
            } catch(e) {
                setError(e as Error)
            }
        }
        void load()
    }, [user_id, plan_id])
    return { plans, error }
}

export default usePlans;