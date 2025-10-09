import { Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { BiAddToQueue } from "react-icons/bi";

const CreateBookModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
        <Button>
            <BiAddToQueue size={20} />
        </Button>

        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add New Book</ModalHeader>
                <ModalCloseButton />

                <ModalBody pb={6}>
                    <Flex alignItems={"center"} gap={4}>
                        <FormControl>
                            <FormLabel>Title</FormLabel>
                            <Input placeholder="Type title here" />
                        </FormControl>
                    </Flex>
                </ModalBody>
            </ModalContent>

        </Modal>
    </>
  )
}

export default CreateBookModal