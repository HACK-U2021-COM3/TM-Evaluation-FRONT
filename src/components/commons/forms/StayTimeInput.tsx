import React, {useState} from 'react';
import { Input, Text, Flex } from "@chakra-ui/react";
import { EditIcon } from '@chakra-ui/icons';

const StayTimeInput: React.VFC = () => {
    const [time, setTime] = useState<number>(0)
    const [isEditMode, setIsEditMode] = useState<boolean>(false)
  
    const unForcusInput = () => {
        setIsEditMode(false)
        if(time === 0) {
            setTime(0)
        }
      }
      
    return(
        <Flex alignItems={"center"}>
            {!isEditMode ? (
                <Text fontSize={"2xl"} px={"3"}>
                {time}
                </Text>
            ) : (
                <Input 
                type="number"
                defaultValue={time}
                onBlur={unForcusInput}
                onChange={(e) => setTime(+e.target.value)}
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

export default StayTimeInput;