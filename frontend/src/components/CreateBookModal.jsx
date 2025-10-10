import { Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Textarea, useDisclosure, useToast } from "@chakra-ui/react";
import { BiAddToQueue } from "react-icons/bi";
import { useState } from "react";
import { BASE_URL } from "../App";

const CreateBookModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLoading, setIsLoading] = useState(false);
    const [inputs, setInputs] = useState({
        title: "",
        author: "",
        plot: "",
        genre: "",
        imgUrl: "",
    });

    const toast = useToast();

    const handleCreateBook = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(BASE_URL + "/books", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(inputs),
            })

            const data = await res.json();
            if(!res.ok) {
                throw new Error(data.error)
            }

            toast({
                status: "success",
                title: "Success",
                description: "Book created successfully",
                duration: 2000,
                position: "top-center",
            });
            onClose();

        } catch (error) {
            toast({
                status: "error",
                title: "An error occurred",
                description: error.message,
                duration: 4000,
            });
        }
    };

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
            <form onSubmit={handleCreateBook}>
                <ModalContent>
                    <ModalHeader>Add New Book</ModalHeader>
                    <ModalCloseButton />

                    <ModalBody pb={6}>
                        <Flex alignItems={"center"} gap={4}>
                            <FormControl isRequired>
                                <FormLabel>Title</FormLabel>
                                <Input 
                                    placeholder="Type title here" 
                                    value={inputs.title}
                                    onChange={(e) => setInputs({...inputs, title: e.target.value})}
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Author</FormLabel>
                                <Input 
                                    placeholder="Type author here" 
                                    value={inputs.author}
                                    onChange={(e) => setInputs({...inputs, author: e.target.value})}
                                />
                            </FormControl>
                        </Flex>
                        <FormControl mt={4} isRequired>
                            <FormLabel>Plot</FormLabel>
                            <Textarea 
                                placeholder="Type plot here" 
                                value={inputs.plot}
                                onChange={(e) => setInputs({...inputs, plot: e.target.value})}
                            />
                        </FormControl>
                        <FormControl mt={4} isRequired>
                            <FormLabel>Genre</FormLabel>
                            <Select 
                                placeholder="Select genre"
                                value={inputs.genre}
                                onChange={(e) => setInputs({...inputs, genre: e.target.value})}
                            >
                                <option value="mystery">Mystery</option>
                                <option value="nonFiction">Non-Fiction</option>
                                <option value="historicalFiction">Historical Fiction</option>
                                <option value="fantasy">Fantasy</option>
                                <option value="biography">Biography</option>
                                <option value="yaFiction">YA Fiction</option>
                                <option value="thriller">Thriller</option>
                                <option value="dystopian">Dystopian</option>
                            </Select>
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Image URL</FormLabel>
                            <Input 
                                placeholder="Type image URL here" 
                                value={inputs.imgUrl}
                                onChange={(e) => setInputs({...inputs, imgUrl: e.target.value})}
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} type="submit">
                            Add
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>                
            </form>

        </Modal>
    </>
  )
}

export default CreateBookModal