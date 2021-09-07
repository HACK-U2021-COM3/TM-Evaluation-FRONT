import React, {useState} from "react";
import {InputGroup, InputLeftElement, Input} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchInput: React.VFC<{
    searchQuery: string,
    handleSearch: (e: any) => void
}> = ({searchQuery, handleSearch}) => {
 
    return(
        <InputGroup>
            <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
                <Input
                    rounded="lg" 
                    bgColor="white" 
                    w="520px" 
                    type="text" 
                    placeholder="search..." 
                    defaultValue={searchQuery} 
                    onKeyPress={handleSearch} 
                />
        </InputGroup>

    );
}

export default SearchInput;