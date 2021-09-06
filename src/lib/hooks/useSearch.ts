import { useState, useEffect } from "react"
import { SearchService } from "lib/services/SearchService"
import { searchResponseType } from "lib/models/search"

const useSearch = (search_input: string) => {
    const [resultLocations, setResultLocations] = useState<searchResponseType[] | null>(null)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        const load = async (): Promise<void> => {
            try {
                const res = await (new SearchService()).getSearchResultLocations(search_input)
                setResultLocations(res)
                setError(null)
            } catch(e) {
                setError(e as Error)
            }
        }
        void load()
    }, [search_input])

    return {resultLocations, error}
}

export default useSearch;