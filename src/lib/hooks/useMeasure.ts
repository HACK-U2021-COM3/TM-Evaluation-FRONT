import { useState, useEffect } from "react"
import { MeasureService } from "lib/services/MeasureService"
import { measureResponseType, measuseRequestType} from "lib/models/measure"

const useMeasure = (form: measuseRequestType) => {
    const [measureResults, setMeasureResults] = useState<measureResponseType[]>([])
    const [measureLoading, setMeasureLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>(null)
    useEffect(() => {
        const load = async (): Promise<void> => {
            if(form.from.from_name.length >= 1 && form.to.to_name.length >= 1 && form.waypoints.length >= 1) {
                try {
                    setMeasureLoading(true)
                    const res = await (new MeasureService()).getMeasureLocations(form)
                    setMeasureResults(res)
                    setError(null)
                } catch(e) {
                    setError(e as Error)
                }
                setMeasureLoading(false)    
            } else {
                setMeasureResults([])
            }
        }
        void load()
    }, [form])
    return { measureResults, measureLoading, error }
}

export default useMeasure;