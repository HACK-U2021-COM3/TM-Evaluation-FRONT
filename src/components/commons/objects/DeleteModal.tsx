import React from "react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
  } from "@chakra-ui/react";
import { PlansService } from "lib/services/PlansService";
import { useHistory } from "react-router";


type Props = {
  planId: string,
  isOpen: boolean
  onClose: () => void
}

const DeleteModalComponent: React.FC<Props> = ({
  children,
  planId,
  isOpen,
  onClose,
}) => {
    const history = useHistory() 
    const deletePlanHandler = async () => {
      await (new PlansService()).deletePlan(planId)
      onClose()
      history.go(0)
    }
    return (
      <>
        {children}
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          isCentered
        >
          <ModalOverlay background="rgba(0,0,0,0.7)"/>
          <ModalContent>
            <ModalHeader>予定の削除</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              この予定を削除しますか?
            </ModalBody>
            <ModalFooter>
              <Button onClick={deletePlanHandler} colorScheme="red" mr={3}>
                削除
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default DeleteModalComponent;