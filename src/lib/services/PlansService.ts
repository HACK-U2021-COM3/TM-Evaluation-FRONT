import axios from "axios";
import { ApiHeader } from "./api/ApiHeader";

export class PlansService extends ApiHeader {
    async getPlans(user_id: string) {
        try {
            const { data } = await axios.get(`${this.url}/`, {params: {user_id}, ...this.config})
            return data    
        } catch(e) {
            throw e
        }
    }

    async getPlanById(user_id: string, result_id: string): Promise<any> {
        try {
            const { data } = await axios.get(`${this.url}/`,{params: {user_id,result_id}, ...this.config})
            return data    
        } catch(e) {
            throw e
        }
    }

    async createPlan(): Promise<any> {
        try {
            const {data} = await axios.post(`${this.url}/`, ...this.config)
            return data
        } catch(e) {
            throw e
        }
    }

    async editPlan(payload: any): Promise<any> {
        try {
            const {data} = await axios.post(`${this.url}/`, {params: {...payload}, ...this.config})
            return data
        } catch(e) {
            throw e
        }
    }
}