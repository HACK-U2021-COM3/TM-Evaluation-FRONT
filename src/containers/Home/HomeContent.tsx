import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "lib/contexts/AuthContext";
import HomeGuestContent from "./HomeGuestContent";
import HomeLoginContent from "./HomeLoginContent";
import { measuseRequestType, measureResponseType } from "lib/models/measure";

import useSearch from "lib/hooks/useSearch";
import useMeasure from "lib/hooks/useMeasure";


const HomeContent: React.VFC = () => {
    const {user} = useContext(UserContext)

    // 経路検索
    const [searchQuery, setSearchQuery] = useState<string>("")
    const {resultLocations} = useSearch(searchQuery)
    const handleSearch = (e: any) :void => {
        if(e.key === "Enter") {
            e.preventDefault()
            console.log(e.target.value)
            setSearchQuery(e.target.value)
          }
    }

    // 経路計算リクエスト
    const [measureRequest, setMeasureRequest] = useState<measuseRequestType>(
        {
            "from": {
                "from_name": "",
                "from_stay_time": 0
              },
              "to": {
                "to_name": "",
                "to_stay_time": 0
              },
              "waypoints": []
        }
    )

    // 出発地点と到着地点の設定
    const settingLocation = (e: any, address: string) => {
        if(e.target.value === "start") {
            setMeasureRequest({...measureRequest, from: {from_name: address, from_stay_time: 0}})
        }else if(e.target.value === "end") {
            setMeasureRequest({...measureRequest, to: {
                to_name: address, 
                to_stay_time: 0
            }
        })
        }
    }

    // 経路の追加
    const addRoutesPoint = async (address: string) => {
        setMeasureRequest({...measureRequest, waypoints: [
            {
                "point": "大阪",
                "point_stay_time": 12,
                "order": 0
              }
        ]})
    }
    console.log("measureRequest", measureRequest)

    const {measureResults} = useMeasure(measureRequest)
    console.log(measureResults)
    const [results, setResults] = useState<measureResponseType[]>([])
    const changeResultsHandler = (time: number, index: number) => {
        results[index].start_stay_time = time
        setResults([...results])
    }
    const initPlanDetailRequest = (form: measuseRequestType) => {
        setMeasureRequest({...form})
    }
    useEffect(() => {
        setResults([...measureResults])
    }, [measureResults])
    return (
        <>
            {!user ? (
             <>
               <HomeGuestContent
               searchQuery={searchQuery}
               handleSearch={handleSearch}
               resultLocations={resultLocations}
               addRoutesPoint={addRoutesPoint}
               settingLocation={settingLocation}
               measureResults={results}
               changeResultsHandler={changeResultsHandler}
                />
             </>

            ): (
                <>
                    <HomeLoginContent 
                    user={user}
                    searchQuery={searchQuery}
                    handleSearch={handleSearch}
                    resultLocations={resultLocations}
                    addRoutesPoint={addRoutesPoint}
                    settingLocation={settingLocation}
                    measureResults={results}
                    changeResultsHandler={changeResultsHandler}
                    initPlanDetailRequest={initPlanDetailRequest}
                     />
                </>
                )}
        </>
    )
}

export default HomeContent;
