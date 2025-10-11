import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	IconButton,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
    Select,
	Textarea,
	useDisclosure,
	useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { BASE_URL } from "../App";

function EditModal({ book, setBooks }) {
	const toast = useToast();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [isLoading, setIsLoading] = useState(false);
	const [inputs, setInputs] = useState({
		title: book.title,
		author: book.author,
		plot: book.plot,
		genre: book.genre,
		imgUrl: book.imgUrl,
	})

	const handleEditBook = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const res = await fetch(BASE_URL + "/books/" + book.id, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(inputs)
			})
			const data = await res.json();
			if (!res.ok) {
				throw new Error(data.error)
			}
			setBooks((prevBooks) => prevBooks.map((u) => u.id === book.id ? data : u));
			toast({
				status: "success",
				title: "Success",
				description: "Book updated successfully",
				duration: 2000,
				position: "top-center",
			});
		} catch (error) {

		}
	}

	return (
		<>
			<IconButton
				onClick={onOpen}
				variant='ghost'
				colorScheme='blue'
				aria-label='See menu'
				size={"sm"}
				icon={<BiEditAlt size={20} />}
			/>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<form onSubmit={handleEditBook}>
					<ModalContent>
						<ModalHeader>Update Book</ModalHeader>
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
						<FormControl mt={4} isRequired>
							<FormLabel>Plot</FormLabel>
							<Textarea placeholder="Type plot here" />
						</FormControl>
						<FormControl mt={4} isRequired>
							<FormLabel>Genre</FormLabel>
							<Select placeholder="Select genre">
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
							<Input placeholder="Type image URL here" />
						</FormControl>
						</ModalBody>

						<ModalFooter>
							<Button colorScheme='blue' mr={3} type="submit" isLoading={isLoading}>
								Add
							</Button>
							<Button onClick={onClose}>Cancel</Button>
						</ModalFooter>
					</ModalContent>					
				</form>

			</Modal>
		</>
	);
}

export default EditModal;
