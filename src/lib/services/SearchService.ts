import instance, { config } from "./api/ApiHeader";
import { searchResponseType } from "lib/models/search";

export class SearchService {
    async getSearchResultLocations(q: string): Promise<searchResponseType[]> {
        try {
            const {data} = await instance.get(`/search`, {params: {query_place: q}, ...config})
            return data.results
        } catch(e) {
            throw e;
        }
    }
}
