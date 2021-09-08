import { useState, useEffect } from "react"
import { MeasureService } from "lib/services/MeasureService"
import { measureResponseType, measuseRequestType} from "lib/models/measure"

const useMeasure = (form: measuseRequestType) => {
    const [measureResults, setMeasureResults] = useState<measureResponseType[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        const load = async (): Promise<void> => {
            if(form.from.from_name.length >= 1 && form.to.to_name.length >= 1 && form.waypoints.length >= 1) {
                setLoading(true)
                try {
                    const res = await (new MeasureService()).getMeasureLocations(form)
                    setMeasureResults(res)
                    setError(null)
                } catch(e) {
                    setError(e as Error)
                }
                setLoading(false)    
            } else {
                setMeasureResults([])
            }
        }
        void load()
    }, [form])
    return { measureResults, loading, error }
}

export default useMeasure;