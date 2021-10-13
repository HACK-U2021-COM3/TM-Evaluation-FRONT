import React, {useState, useRef, useEffect, Fragment} from "react";
import { Box } from "@chakra-ui/react";
import HomeTimelineBodyComponent from "./HomeTimelineBody";
import {measureFixResponseType, pointResponseType} from "lib/models/measure_point";
import { RouteContextValue } from "lib/contexts/RouteContext";


const HomeTimelineComponent: React.VFC<{
    routes: measureFixResponseType[],
    points: pointResponseType[],
}> = ({routes, points}) => {
    console.log(routes)
    console.log(points)
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

    const {changeResultsHandler} = RouteContextValue()
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
            {routes.length !==0 && points.map((point: pointResponseType, i: number) => (
                <Fragment key={i}>
                    {i !== routes.length ? (
                        <HomeTimelineBodyComponent
                            index={i}
                            item={item}
                            point={points[i]}
                            distance={routes[i].distance}
                            duration={routes[i].duration}
                            address={points[i].address}
                            stayTime={points[i].stay_time}
                            inputRef={inputRefs.current[i]}
                            iconRef={iconsRef.current[i]}
                            unForcusInput={unForcusInput}
                            editHandler={editHandler}
                        />
                    ) : (
                        <HomeTimelineBodyComponent
                            index={i}
                            item={item}
                            point={points[i]}
                            distance={0}
                            duration={0}
                            address={points[i].address}
                            stayTime={points[i].stay_time}
                            inputRef={inputRefs.current[i]}
                            iconRef={iconsRef.current[i]}
                            unForcusInput={unForcusInput}
                            editHandler={editHandler}
                        />
                    )}
                </Fragment>
            ))}
        </Box>
        </Box>
    )
}
export default HomeTimelineComponent;