import { Box, Card, CardBody, CardHeader, Flex, Heading, IconButton, Image, Text } from "@chakra-ui/react";
import { BiTrash } from "react-icons/bi";
import EditModal from "./EditModal";

const BookCard = ({ book }) => {
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
                    />
                </Flex>
            </Flex>
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