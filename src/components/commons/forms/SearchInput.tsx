import React, {useState} from "react";
import {InputGroup, InputLeftElement, Input} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchInput: React.VFC = () => {
    const [searchInput, setSearchInput] = useState<string>("")

    const handleSearch = (e: any) => {
        if(e.key === "Enter") {
          e.preventDefault()
          console.log(e.target.value)
          setSearchInput(e.target.value)
        }
      }
    
    return(
        <InputGroup>
            <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
                <Input
                    rounded="3xl" 
                    bgColor="white" 
                    w="520px" 
                    type="text" 
                    placeholder="search..." 
                    defaultValue={searchInput} 
                    onKeyPress={handleSearch} 
                    onChange={(e) => setSearchInput(e.target.value)} 
                />
        </InputGroup>

    );
}

export default SearchInput;