import { useState, useEffect } from "react"
import { MeasureService } from "lib/services/MeasureService"
import { measureResponseType, measuseRequestType} from "lib/models/measure"
import { pointResponseType, measureFixResponseType } from "../models/measure_point";

const useMeasure = (form: measuseRequestType) => {
    // const [measureResults, setMeasureResults] = useState<measureResponseType[]>([])
    const [measureResults, setMeasureResults] = useState<measureFixResponseType[]>([])
    const [pointResults, setPointResults] = useState<pointResponseType[]>([])
    const [measureLoading, setMeasureLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>(null)
    useEffect(() => {
        const load = async (): Promise<void> => {
            if(form.from.from_name.length >= 1 && form.to.to_name.length >= 1) {
                try {
                    setMeasureLoading(true)
                    const res = await (new MeasureService()).getMeasureLocations(form)

                    // 経路 -> polyline・距離・移動時間
                    let measure_list: measureFixResponseType[] = [];
                    // 場所 -> 座標・住所・待機時間
                    let point_list: pointResponseType[] = [];

                    // lengthが1の時
                    if(res.length === 1){
                        let routes_item = res[0];

                        // points
                        let start_dict_point = {
                            location: routes_item.start_location,
                            address: routes_item.start_address,
                            stay_time: routes_item.start_stay_time
                        };
                        let end_dict_point = {
                            location: routes_item.end_location,
                            address: routes_item.end_address,
                            stay_time: routes_item.end_stay_time
                        };

                        point_list.push(start_dict_point);
                        point_list.push(end_dict_point);

                        // measures
                        let start_dict_measure = {
                            routes_points: routes_item.routes_points,
                            distance: routes_item.distance,
                            duration: routes_item.duration
                        };

                        measure_list.push(start_dict_measure);
                    }else {
                        for (let idx = 0; idx < res.length; ++idx){
                            let routes_item = res[idx];
                            if(idx !== res.length - 1){
                                let dict_point = {
                                    location: routes_item.start_location,
                                    address: routes_item.start_address,
                                    stay_time: routes_item.start_stay_time
                                };

                                point_list.push(dict_point);

                                let dict_measure = {
                                    routes_points: routes_item.routes_points,
                                    distance: routes_item.distance,
                                    duration: routes_item.duration
                                };

                                measure_list.push(dict_measure);
                            }else{
                                let start_dict_point = {
                                    location: routes_item.start_location,
                                    address: routes_item.start_address,
                                    stay_time: routes_item.start_stay_time
                                };

                                point_list.push(start_dict_point);

                                let end_dict_point = {
                                    location: routes_item.end_location,
                                    address: routes_item.end_address,
                                    stay_time: routes_item.end_stay_time
                                };

                                point_list.push(end_dict_point);

                                let dict_measure = {
                                    routes_points: routes_item.routes_points,
                                    distance: routes_item.distance,
                                    duration: routes_item.duration
                                };

                                measure_list.push(dict_measure);
                            }
                        }
                    }
                    console.log("###########################");
                    console.log(point_list, "point");
                    console.log(measure_list, "measure");
                    console.log("###########################");


                    setPointResults(point_list)
                    setMeasureResults(measure_list)
                    // setMeasureResults(res)
                    setError(null)
                } catch(e) {
                    setError(e as Error)
                }
                setMeasureLoading(false)
            } else {
                setMeasureResults([])
            }
        }
        void load()
    }, [form])
    // return { measureResults, measureLoading, error }
    return {measureResults, pointResults, measureLoading, error }
}

export default useMeasure;