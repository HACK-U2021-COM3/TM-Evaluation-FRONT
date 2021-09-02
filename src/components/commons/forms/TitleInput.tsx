import React, {useState} from 'react';
import { Input, Text, Flex } from "@chakra-ui/react";
import { EditIcon } from '@chakra-ui/icons';

const TitleInput: React.VFC = () => {
    const [title, setTitle] = useState<string>("untitled")
    const [isEditMode, setIsEditMode] = useState<boolean>(false)
  
    const unForcusInput = () => {
        setIsEditMode(false)
        if(title.length === 0) {
          setTitle("untitled")
        }
      }
      
    return(
        <Flex alignItems={"center"}>
            {!isEditMode ? (
                <Text fontSize={"2xl"} px={"3"}>
                {title}
                </Text>
            ) : (
                <Input 
                type="text"
                defaultValue={title}
                onBlur={unForcusInput}
                onChange={(e) => setTitle(e.target.value)}
                border="none"
                mr="3"
                _focus={{
                border: "none"
                }}
                />
            )}
            <EditIcon color="gray.300" onClick={() => setIsEditMode(true)} />
        </Flex>
    );
}

export default TitleInput;