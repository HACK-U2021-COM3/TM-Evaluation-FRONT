import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "lib/contexts/AuthContext";
import HomeGuestContent from "./HomeGuestContent";
import HomeLoginContent from "./HomeLoginContent";
import { measuseRequestType, measureResponseType } from "lib/models/measure";
import { searchResponseType } from "lib/models/search";

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
    const settingLocation = (e: any, point: searchResponseType | null) => {
        console.log(point)
        if(!point) return
        if(e.target.value === "start") {
            setMeasureRequest({...measureRequest, from: {
                from_name: point.address,
                from_stay_time: 0
            }
            })
        }else if(e.target.value === "end") {
            setMeasureRequest({...measureRequest, to: {
                to_name: point.address, 
                to_stay_time: 0
            }
            })
        }
    }

    // 経路の追加
    const addRoutesPoint = (point: searchResponseType) => {
        if(measureRequest.to.to_name === point.address) {
            window.alert("すでに到着地点として登録されています")
            return
        }
        if(measureRequest.from.from_name === point.address) {
            window.alert("すでに出発地点として登録されています")
            return
        }

        const waypoints = [...measureRequest.waypoints]
        const isSamePoint = !!waypoints.find(p => p.point === point.address)
        if(isSamePoint) {
            window.alert("重複する経路は追加できません")
            return 
        } 

        const orders: Array<number> = waypoints.map(routePoint => routePoint.order)
        const newOrder: number = orders.length === 0 ? 0 : Math.max(...orders) + 1
        waypoints.push({
            point: point.address,
            point_stay_time: 0,
            order: newOrder
        })
        setMeasureRequest({...measureRequest, waypoints: [...waypoints]})
    }

    // 経路計算結果
    const {measureResults} = useMeasure(measureRequest)

    // 経路計算結果の管理
    const [results, setResults] = useState<measureResponseType[]>([])

    // 滞在時間の編集
    const changeResultsHandler = (time: number, index: number) => {
        results[index].start_stay_time = time
        setResults([...results])
    }

    // 初回リクエスト時に過去予定を計算するため
    const initPlanDetailRequest = (form: measuseRequestType) => {
        setMeasureRequest({...form})
    }

    // 経路計算のデータが変更されたら計算
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
