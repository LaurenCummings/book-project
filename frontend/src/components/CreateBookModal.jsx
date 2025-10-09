import { Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select, Textarea, useDisclosure } from "@chakra-ui/react";
import { BiAddToQueue } from "react-icons/bi";

const CreateBookModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
        <Button onClick={onOpen}>
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
                        <FormControl isRequired>
                            <FormLabel>Title</FormLabel>
                            <Input placeholder="Type title here" />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Author</FormLabel>
                            <Input placeholder="Type author here" />
                        </FormControl>
                    </Flex>
                    <FormControl isRequired>
                        <FormLabel>Plot</FormLabel>
                        <Textarea placeholder="Type plot here" />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Genre</FormLabel>
                        <Select placeholder="Select genre">
                            <option value="option1">Mystery</option>
                            <option value="option1">Non-Fiction</option>
                            <option value="option1">Historical Fiction</option>
                            <option value="option1">Fantasy</option>
                            <option value="option1">Biography</option>
                            <option value="option1">YA Fiction</option>
                            <option value="option1">Thriller</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Image URL</FormLabel>
                        <Input placeholder="Type image URL here" />
                    </FormControl>
                </ModalBody>
            </ModalContent>

        </Modal>
    </>
  )
}

export default CreateBookModal