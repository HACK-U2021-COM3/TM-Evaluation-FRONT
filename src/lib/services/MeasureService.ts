import axios from "axios";
import { ApiHeader } from "./api/ApiHeader";
import { measureResponseType, measuseRequestType, mockMeasureResult } from "lib/models/measure";

export class MeasureService extends ApiHeader {
    async getMeasureLocations(form: measuseRequestType): Promise<measureResponseType[]> {
        try {
            // const {data} = await axios.post(`${this.url}/measure`, form, ...this.config)
            return mockMeasureResult
        } catch(e) {
            throw e;  
        }
    }
}