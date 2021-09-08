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
    const [measureRequest, setMeasureRequest] = useState<measuseRequestType>({from: "",to: "",waypoints: []})

    // 出発地点と到着地点の設定
    const settingLocation = (e: any, address: string) => {
        if(e.target.value === "start") {
            setMeasureRequest({...measureRequest, from: address})
        }else if(e.target.value === "end") {
            setMeasureRequest({...measureRequest, to: address})
        }
    }

    // 経路の追加
    const addRoutesPoint = async (address: string) => {
        setMeasureRequest({...measureRequest, waypoints: [{
            "point": "久屋大通駅", // string　経由地点
            "order": 2 // int　経由地点の順序
        },
        {
            "point": "今池駅", // string　経由地点
            "order": 1 // int　経由地点の順序
        }]})
    }

    const {measureResults} = useMeasure(measureRequest)
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
