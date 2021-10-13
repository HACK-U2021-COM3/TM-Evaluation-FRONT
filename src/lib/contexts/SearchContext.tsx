import React, {createContext, useState, useContext} from "react";
import useSearch from "lib/hooks/useSearch";
import { searchResponseType } from "lib/models/search";

const SearchContext = createContext<{
    searchQuery: string,
    setSearchQueryHandler: (q: string) => void,
    resultLocations: searchResponseType[],
    handleSearch: (e: any) => void,
    keyword: string,
    setKeywordHandler: (text: string) => void
}>({
    searchQuery: "",
    setSearchQueryHandler: () => undefined,
    resultLocations: [],
    handleSearch: (e: any) => undefined,
    keyword: "",
    setKeywordHandler: (text: string) => undefined
})

export const SearchProvider: React.FC = ({children}) => {
    const [searchQuery, setSearchQuery] = useState<string>("")
    const [keyword, setKeyword] = useState<string>("")

    const {resultLocations} = useSearch(searchQuery)

    const handleSearch = (e: any) :void => {
        if(e.key === "Enter") {
            e.preventDefault()
            console.log(e.target.value)
            setSearchQuery(`${keyword} ${e.target.value}`)
          }
    }

    const setKeywordHandler = (text: string) => {
        setKeyword(text)
    }
    const setSearchQueryHandler = (q: string) => {
        setSearchQuery(q)
    }

    return(
        <SearchContext.Provider value={{
            resultLocations,
            handleSearch,
            searchQuery,
            setSearchQueryHandler,
            keyword,
            setKeywordHandler
        }}>
            {children}
        </SearchContext.Provider>
    );
}

export const SearchContextValue = () => useContext(SearchContext)
