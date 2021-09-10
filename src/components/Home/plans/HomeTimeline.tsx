import React, {useState, useRef, useEffect, Fragment} from "react";
import { Box } from "@chakra-ui/react";
import HomeTimelineBodyComponent from "./HomeTimelineBody";
import {measureFixResponseType, pointResponseType} from "../../../lib/models/measure_point";

const HomeTimelineComponent: React.VFC<{
    // routes: measureResponseType[],
    routes: measureFixResponseType[],
    points: pointResponseType[],
    changeResultsHandler: (time: number, index: number) => void,
    deleteRoutesPoint: (point: number )=> void

}> = ({routes, points, changeResultsHandler, deleteRoutesPoint}) => {
    const timelineAfterStyle = {
        content: "''",
        position: "absolute",
        width: "3px",
        bgColor: "#3182ce",
        top: "0",
        bottom: "0",
        left: "31px",
        ml: "-2px"
    }

    const [item, setItem] = useState<any>(null)
  
    const unForcusInput = (time: number, index: number) => {
        setItem(null)
        changeResultsHandler(time, index)
    }

    const bodyClick = useRef<any>()
    const inputRefs = useRef<any>([])
    const iconsRef = useRef<any>([])

    points.forEach((_: any, i: number) => {
        inputRefs.current[i] = React.createRef()
        iconsRef.current[i] = React.createRef()
    });
    useEffect(() => {
        bodyClick.current = (e: any) => {
            console.log('documentClickHandler')
            console.log('target', e.target)
            console.log('icon ref', iconsRef.current)
            if (!!iconsRef.current?.find((item: any) => item.current?.contains(e.target))) return
            if (!!inputRefs.current?.find((item: any) => item.current?.contains(e.target))) return
            setItem(null)
            removeDocumentClickHandler()
        }
    }, [])
    
    const removeDocumentClickHandler = () => {
        console.log('removeDocumentClickHandler')
        document.removeEventListener('click', bodyClick.current)
    }

    const editHandler = (i: number) => {
        setItem(points[i])
        console.log('handleToggleButtonClick')
        document.addEventListener('click', bodyClick.current)
    }
    return(
        <Box width="90%" mx="auto">
            <Box position="relative" _after={{...timelineAfterStyle}}>
            {points.map((point: pointResponseType, i: number) => (
                <Fragment key={i}>
                    {i !== routes.length ? (
                        <HomeTimelineBodyComponent
                            index={i}
                            item={item}
                            point={points[i]}
                            // route={routes[i]}
                            distance={routes[i].distance}
                            duration={routes[i].duration}
                            address={points[i].address}
                            stayTime={points[i].stay_time}
                            inputRef={inputRefs.current[i]}
                            iconRef={iconsRef.current[i]}
                            unForcusInput={unForcusInput}
                            editHandler={editHandler}
                            deleteRoutesPoint={deleteRoutesPoint}
                        />
                    ) : (
                        <HomeTimelineBodyComponent
                            index={i}
                            item={item}
                            point={points[i]}
                            // route={routes[i]}
                            distance={0}
                            duration={0}
                            address={points[i].address}
                            stayTime={points[i].stay_time}
                            inputRef={inputRefs.current[i]}
                            iconRef={iconsRef.current[i]}
                            unForcusInput={unForcusInput}
                            editHandler={editHandler}
                            deleteRoutesPoint={deleteRoutesPoint}
                        />
                    )}
                </Fragment>
            ))}
        </Box>
        </Box>
    )
}
export default HomeTimelineComponent;