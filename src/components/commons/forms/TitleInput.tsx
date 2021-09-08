import React, {useState, useRef, useEffect} from 'react';
import { Input, Text, Flex } from "@chakra-ui/react";
import { EditIcon } from '@chakra-ui/icons';

const TitleInput: React.VFC<{
    title: string,
    editTitleHandler: (title: string) => void 
}> = ({title, editTitleHandler}) => {
    const [isEditMode, setIsEditMode] = useState<boolean>(false)
    const unForcusInput = () => {
        setIsEditMode(false)
        if(title.length === 0) {
            editTitleHandler("untitled")
        }
    }

    const bodyClick = useRef<any>()
    const inputRef = useRef<any>()
    const iconRef = useRef<any>()


    useEffect(() => {
        bodyClick.current = (e: any) => {
            console.log('documentClickHandler')
            console.log('target', e.target)
            if (inputRef.current?.contains(e.target)) return
            if (iconRef.current?.contains(e.target)) return
            setIsEditMode(false)
            removeDocumentClickHandler()
        }
    }, [])

    const removeDocumentClickHandler = () => {
        console.log('removeDocumentClickHandler')
        document.removeEventListener('click', bodyClick.current)
    }

    const editHandler = () => {
        setIsEditMode(true)
        console.log('handleToggleButtonClick')
        document.addEventListener('click', bodyClick.current)
    }


      
    return(
        <Flex alignItems={"center"}>
            {!isEditMode ? (
                <Text color="white" fontSize={"2xl"} px={"3"}>
                {title}
                </Text>
            ) : (
                <Input
                ref={inputRef}
                type="text"
                defaultValue={title}
                onBlur={unForcusInput}
                onChange={(e) => editTitleHandler(e.target.value)}
                display="inline-block"
                lineHeight="1"
                border="none"
                color="white"
                p="0"
                mr="3"
                _focus={{
                border: "none",
                color: "white"
                }}
                />
            )}
            <EditIcon ref={iconRef} color="gray.300" onClick={editHandler} />
        </Flex>
    );
}

export default TitleInput;