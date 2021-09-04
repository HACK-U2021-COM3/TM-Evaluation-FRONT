import axios from "axios";
import { ApiHeader } from "./api/ApiHeader";
import { GoogleService } from "./google/GoogleService";

export class UsersService extends ApiHeader {
    async getUser(): Promise<any> {
        try {
            // const {data} = await axios.get(`${this.url}/`,tokenId)
            const token = "aaaaaaaaa"
            return {token}
        }catch(e) {
            localStorage.clear()
            throw e;
        }
    }

    async logout(): Promise<any> {
        try {
            localStorage.clear()
        }catch(e) {
            throw e
        }
    }
}