import { useState, useEffect } from "react"
import { MeasureService } from "lib/services/MeasureService"
import { measureResponseType, measuseRequestType} from "lib/models/measure"

const useMeasure = (form: measuseRequestType) => {
    const [measure, setMeasure] = useState<measureResponseType[] | null>(null)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        const load = async (): Promise<void> => {
            try {
                const res = await (new MeasureService()).getMeasureLocations(form)
                setMeasure(res)
                setError(null)
            } catch(e) {
                setError(e as Error)
            }
        }
        void load()
    }, [form])
    return { measure, error }
}

export default useMeasure;