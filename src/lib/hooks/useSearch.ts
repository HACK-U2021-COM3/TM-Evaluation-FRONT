import { useState, useEffect } from "react"
import { SearchService } from "lib/services/SearchService"
import { searchResponseType } from "lib/models/search"

const useSearch = (q: string) => {
    const [resultLocations, setResultLocations] = useState<searchResponseType[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        const load = async (): Promise<void> => {
            if(q.length >= 1) {
                setLoading(true)
                try {
                    const res = await (new SearchService()).getSearchResultLocations(q)
                    setResultLocations(res)
                    setError(null)
                } catch(e) {
                    setError(e as Error)
                }
                setLoading(false)    
            } else {
                setResultLocations([])
            }
        }
        void load()
    }, [q])

    return {resultLocations, loading, error}
}

export default useSearch;