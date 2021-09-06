import axios from "axios";
import { ApiHeader } from "./api/ApiHeader";
import {planResponseType, planDetailResponseType} from "lib/models/plan"

export class PlansService extends ApiHeader {
    async getPastPlans(): Promise<planResponseType[]> {
        try {
            const { data } = await axios.get(`${this.url}/past-plans`,this.config)
            return data    
        } catch(e) {
            throw e
        }
    }

    async getPlanById(plans_id: string): Promise<planDetailResponseType> {
        try {
            const { data } = await axios.get(`${this.url}/past-plans/${plans_id}`,{params: {"plans-id": plans_id}, ...this.config})
            return data    
        } catch(e) {
            throw e
        }
    }

    // TODO
    async createPlan(): Promise<any> {
        try {
            const {data} = await axios.post(`${this.url}/`, ...this.config)
            return data
        } catch(e) {
            throw e
        }
    }

    // TODO
    async editPlan(payload: any): Promise<any> {
        try {
            const {data} = await axios.post(`${this.url}/`, {params: {...payload}, ...this.config})
            return data
        } catch(e) {
            throw e
        }
    }
}