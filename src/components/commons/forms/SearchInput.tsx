import React from "react";
import {InputGroup, InputLeftElement, Input, InputRightElement, Kbd} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchInput: React.VFC<{
    searchQuery: string,
    handleSearch: (e: any) => void
}> = ({searchQuery, handleSearch}) => {

    return(
        <InputGroup>
            <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
            <InputRightElement right="20px" pointerEvents="none" children={<Kbd>enter</Kbd>}/ >
                <Input
                    rounded="3xl" 
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