import React, {useState, useRef, useEffect, Fragment} from "react";
import { Box } from "@chakra-ui/react";
import { measureResponseType } from "lib/models/measure"
import HomeTimelineBodyComponent from "./HomeTimelineBody";

const HomeTimelineComponent: React.VFC<{
    routes: measureResponseType[],
    changeResultsHandler: (time: number, index: number) => void
}> = ({routes, changeResultsHandler}) => { 
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

    routes.forEach((_: any, i: number) => {
        inputRefs.current[i] = React.createRef()
        iconsRef.current[i] = React.createRef()
    });
    useEffect(() => {
        bodyClick.current = (e: any) => {
            console.log('documentClickHandler')
            console.log('target', e.target)
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
        setItem(routes[i])
        console.log('handleToggleButtonClick')
        document.addEventListener('click', bodyClick.current)
    }

    console.log(routes)

    return(
        <Box width="90%" mx="auto">
            <Box position="relative" _after={{...timelineAfterStyle}}>
            {routes.map((route: measureResponseType, i: number) => (
                <Fragment key={i}>
                    
                    {route !== routes[routes.length - 1] ? (
                        <>
                            <HomeTimelineBodyComponent
                            index={i}
                            item={item}
                            route={routes[i]}
                            distance={routes[i].distance}
                            duration={routes[i].duration}
                            address={routes[i].start_address}
                            stayTime={routes[i].start_stay_time}
                            inputRef={inputRefs.current[i]}
                            iconRef={iconsRef.current[i]}
                            unForcusInput={unForcusInput}
                            editHandler={editHandler}
                            />
                        </>
                    ): (
                        <>
                            <HomeTimelineBodyComponent
                            index={i}
                            item={item}
                            route={routes[i]}
                            distance={routes[i].distance}
                            duration={routes[i].duration}
                            address={routes[i].start_address}
                            stayTime={routes[i].start_stay_time}
                            inputRef={inputRefs.current[i]}
                            iconRef={iconsRef.current[i]}
                            unForcusInput={unForcusInput}
                            editHandler={editHandler}
                            />
                            <HomeTimelineBodyComponent
                            index={i}
                            item={item}
                            route={routes[i]}
                            distance={routes[i].distance}
                            duration={routes[i].duration}
                            address={routes[i].end_address}
                            stayTime={routes[i].end_stay_time}
                            inputRef={inputRefs.current[i]}
                            iconRef={iconsRef.current[i]}
                            unForcusInput={unForcusInput}
                            editHandler={editHandler}
                            />
                        </>

                    )}
                    
                </Fragment>            
            ))}
        </Box>
        </Box>
    )
}
export default HomeTimelineComponent;