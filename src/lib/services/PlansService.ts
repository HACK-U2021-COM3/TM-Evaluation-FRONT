import instance, { config } from "./api/ApiHeader";
import {planResponseType, planDetailResponseType, savePlanRequestType} from "lib/models/plan"

export class PlansService {
    async getPastPlans(): Promise<planResponseType[]> {
        try {
            const { data } = await instance.get(`/past_plans`,config)
            return data.results
            // return mockPlans
        } catch(e) {
            throw e
        }
    }

    async getPlanById(plans_id: string): Promise<planDetailResponseType[]> {
        try {
            const { data } = await instance.get(`/past_plans/${plans_id}`,{params: {"plans-id": plans_id}, ...config})
            return data.results
            // return mockPlansDetail
        } catch(e) {
            throw e
        }
    }

    async createAndSavePlans(payload: savePlanRequestType): Promise<void> {
        try {
            await instance.post(`/past_plans`, payload, config)
        }catch(e) {
            throw e
        }
    }

    async editAndSavePlan(payload: savePlanRequestType, plans_id: string): Promise<void> {
        try {
            await instance.put(`/past_plans/${plans_id}`, payload, config)
        } catch(e) {
            throw e
        }
    }

    async deletePlan(plan_id: string): Promise<void> {
        try {
            await instance.delete(`/past_plans/${plan_id}`, config)
        }catch(e) {
            throw e
        }
    }
}
