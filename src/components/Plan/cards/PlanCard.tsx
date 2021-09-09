import React from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Heading,
    Text,
    IconButton,
    useDisclosure
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { planResponseType } from 'lib/models/plan';
import DeleteModalComponent from 'components/commons/objects/DeleteModal';


const PranCard: React.VFC<{plan: planResponseType}> = ({plan}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
return (
    <Box mb="4" position="relative">
        <DeleteModalComponent
        planId={plan.id.toString()}
        isOpen={isOpen}
        onClose={onClose}
        >
        <IconButton 
        position="absolute"
        zIndex="100"
        right="10px"
        top="10px" 
        rounded="full"
        colorScheme="red"
        aria-label="delete past plan"
        icon={<DeleteIcon />}
        onClick={onOpen}
        />
        </DeleteModalComponent>
        <Link to={`/plans/${plan.id}`}>
            <Box
                minW={'330px'}
                w={'full'}
                boxShadow={'sm'}
                border={'1px'}
                borderColor="gray.100"
                rounded={'lg'}
                pos={'relative'}
            >
                <Box position="relative" bgColor="gray.100" minH="120px" roundedTopLeft="lg" roundedTopRight="lg">
                    <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
                    {/* TODO ランダムでさす */}
                    <Text fontSize="5xl">
                        🎉
                    </Text>
                    </Box>
                </Box>
                <Box px="6" pt="2" pb="6">
                    <Text display="inline-block" as="small" textColor="gray.400" mb="1">{plan.updated_at}</Text>
                    <Heading fontSize={'xl'} fontWeight="bold">
                        {plan.title}
                    </Heading>
                </Box>
            </Box>
        </Link>
    </Box>
);
}
export default PranCard;