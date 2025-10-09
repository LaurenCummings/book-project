import { Box, Card, CardHeader, Flex, Heading, Image, Text } from "@chakra-ui/react";

const BookCard = ({ book }) => {
  return (
    <Card>
        <CardHeader>
            <Flex gap={4}>
                <Flex flex={"1"} gap={"4"} alignItems={"center"}>
                    <Image src="./books.png" />

                    <Box>
                        <Heading size="sm">{book.title}</Heading>
                        <Text>{book.author}</Text>
                    </Box>
                </Flex>
                <Flex></Flex>
            </Flex>
        </CardHeader>
    </Card>
  )
}

export default BookCard