import { useState, useEffect } from "react"
import { MeasureService } from "lib/services/MeasureService"
import { measureResponseType, measuseRequestType} from "lib/models/measure"

const useMeasure = (form: measuseRequestType) => {
    const [measureResults, setMeasureResults] = useState<measureResponseType[] | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        const load = async (): Promise<void> => {
            setLoading(true)
            try {
                const res = await (new MeasureService()).getMeasureLocations(form)
                setMeasureResults(res)
                setError(null)
            } catch(e) {
                setError(e as Error)
            }
            setLoading(false)
        }
        void load()
    }, [form])
    return { measureResults, loading, error }
}

export default useMeasure;