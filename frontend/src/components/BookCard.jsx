import { Box, Card, CardBody, CardHeader, Flex, Heading, IconButton, Image, Text, useToast } from "@chakra-ui/react";
import { BiTrash } from "react-icons/bi";
import EditModal from "./EditModal";
import { BASE_URL } from "../App";

const BookCard = ({ book }) => {

    const handleDeleteBook = async ({ books, setBooks }) => {
        const toast = useToast();
        try {
            const res = await fetch(BASE_URL + "/books/" + book.id, {
                method: "DELETE",
            })
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error)
            }
            setBooks((prevBooks) => prevBooks.filter((b) => b.id !== book.id))

        } catch (error) {

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
                    <EditModal book={book} />
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