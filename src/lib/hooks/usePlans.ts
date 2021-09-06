import { useState, useEffect } from "react"
import { PlansService } from "lib/services/PlansService"
import { planResponseType } from "lib/models/plan"

const usePlans = () => {
    const [plans, setPlans] = useState<planResponseType[] | []>([])
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        const load = async (): Promise<void> => {
            try {
                const res = await (new PlansService()).getPastPlans()
                setPlans(res)
                setError(null)
            } catch(e) {
                setError(e as Error)
            }
        }
        void load()
    }, [])
    return { plans, error }
}

export default usePlans;