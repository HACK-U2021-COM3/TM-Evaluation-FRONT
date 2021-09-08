import axios from "axios";
import { ApiHeader } from "./api/ApiHeader";
import { searchResponseType, mockSearchResult } from "lib/models/search";

export class SearchService extends ApiHeader {
    async getSearchResultLocations(q: string): Promise<searchResponseType[]> {
        try {
            // const {data} = await axios.get(`${this.url}/search`, {params: {query_place: q}, ...this.config})
            // return data.results
            return mockSearchResult
        } catch(e) {
            throw e;  
        }
    }
}