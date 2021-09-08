import axios from "axios";
import { ApiHeader } from "./api/ApiHeader";
import {planResponseType, planDetailResponseType, savePlanRequestType} from "lib/models/plan"

export class PlansService extends ApiHeader {
    async getPastPlans(): Promise<planResponseType[]> {
        try {
            const { data } = await axios.get(`${this.url}/past_plans`,this.config)
            return data.results
            // return mockPlans
        } catch(e) {
            throw e
        }
    }

    async getPlanById(plans_id: string): Promise<planDetailResponseType[]> {
        try {
            const { data } = await axios.get(`${this.url}/past_plans/${plans_id}`,{params: {"plans-id": plans_id}, ...this.config})
            return data.results
            // return mockPlansDetail
        } catch(e) {
            throw e
        }
    }

    async savePlans(payload: savePlanRequestType): Promise<void> {
        await axios.post(`${this.url}/past_plans/`, payload, this.config)
    }

    // TODO
    async createPlan(): Promise<any> {
        try {
            const {data} = await axios.post(`${this.url}/`, this.config)
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