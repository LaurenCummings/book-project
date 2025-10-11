import { Flex, Grid, Spinner, Text } from "@chakra-ui/react";
import BookCard from "./BookCard";
import { useEffect, useState } from "react";
import { BASE_URL } from "../App";

const UserGrid = ({ books, setBooks }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await fetch(BASE_URL + "/books")
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error);
        }
        setBooks(data);
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false);
      }
    }
    getBooks();
  },[setBooks]);

  return (
    <>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={4}
      >
        {books.map((book) => (
          <BookCard key={book.id} book={book} setBooks={setBooks} />
        ))}
      </Grid>    

      {isLoading && (
        <Flex justifyContent={"center"}>
          <Spinner size={"xl"} />
        </Flex>
      )}

      {!isLoading && books.length === 0 && (
        <Flex justifyContent={"center"}>
          <Text fontSize={"xl"}>
            <Text as={"span"} fontSize={"2xl"} fontWeight={"bold"} mr={2}>
              No Books Found
            </Text>
          </Text>
        </Flex>
      )}
    </>
  )
}

export default UserGrid