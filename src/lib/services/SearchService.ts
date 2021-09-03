import axios from "axios";
import { ApiHeader } from "./api/ApiHeader";

export class SearchService extends ApiHeader {
    async getSearchResultLocations(input: string): Promise<any> {
        try {
            const {data} = await axios.post(`${this.url}`, {params: input, ...this.config})
            return data
        } catch(e) {
            throw e;  
        }
    }
}