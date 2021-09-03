import axios from "axios";
import { ApiHeader } from "./api/ApiHeader";
import { GoogleService } from "./google/GoogleService";

export class UsersService extends ApiHeader {
    async getUser(): Promise<any> {
        const id_token = await (new GoogleService()).loginWithGoogle()
        const {data} = await axios.get(`${this.url}/`,{id_token, ...this.config})
        localStorage.setItem("token", data.token)
        return data
    }
}