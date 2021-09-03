import { SearchService } from "lib/services/SearchService"
import { useState, useEffect } from "react"

const useSearch = (input: string) => {
    const [resultLocations, setResultLocations] = useState(null)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        const load = async (): Promise<void> => {
            try {
                const res = await (new SearchService()).getSearchResultLocations(input)
                setResultLocations(res)
                setError(null)
            } catch(e) {
                setError(e as Error)
            }
        }
        void load()
    }, [input])

    return {resultLocations, error}
}

export default useSearch;