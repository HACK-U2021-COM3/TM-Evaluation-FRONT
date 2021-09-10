import instance,  { config } from "./api/ApiHeader";
import { measureResponseType, measuseRequestType } from "lib/models/measure";
export class MeasureService {
    async getMeasureLocations(form: measuseRequestType): Promise<measureResponseType[]> {
        try {
            const {data} = await instance.post(`/measure`, form, config)
            return data.results
        } catch(e) {
            throw e;
        }
    }
}
