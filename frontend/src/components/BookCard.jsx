import { Box, Card, CardBody, CardHeader, Flex, Heading, IconButton, Image, Text, useToast } from "@chakra-ui/react";
import { BiTrash } from "react-icons/bi";
import EditModal from "./EditModal";
import { BASE_URL } from "../App";

const BookCard = ({ book, setBooks }) => {
    const toast = useToast();

    const handleDeleteBook = async () => {
        try {
            const res = await fetch(BASE_URL + "/books/" + book.id, {
                method: "DELETE",
            })
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error)
            }
            setBooks((prevBooks) => prevBooks.filter((u) => u.id !== book.id))
            toast({
                status: "success",
                title: "Success",
                description: "Book deleted successfully",
                duration: 2000,
                position: "top-center",
                isClosable: true,
            })

        } catch (error) {
            toast({
                title: "An error occurred",
                description: error.message,
                status: "error",
                duration: 4000,
                position: "top-center",
                isClosable: true,
            })
        }
    }

  return (
    <Card>
        <CardHeader>
            <Flex gap={4}>
                <Flex flex={"1"} gap={"4"} alignItems={"center"}>
                    <Image src="./books_large.png" />

                    <Box>
                        <Heading size="sm">{book.title}</Heading>
                        <Text>{book.author}</Text>
                    </Box>
                </Flex>
                <Flex>
                    <EditModal book={book} setBooks={setBooks} />
                    <IconButton 
                        variant="ghost"
                        colorScheme="red"
                        size={"sm"}
                        aria-label="See menu"
                        icon={<BiTrash size={20} />}
                        onClick={handleDeleteBook}
                    />
                </Flex>
            </Flex>
            <Text fontStyle="italic">{book.genre}</Text>
        </CardHeader>

        <CardBody>
            <Text>
                {book.plot}
            </Text>
        </CardBody>
    </Card>
  )
}

export default BookCard