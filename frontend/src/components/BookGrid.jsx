import { Grid } from "@chakra-ui/react";
import { BOOKS } from "../dummyData";
import BookCard from "./BookCard";
import { useEffect, useState } from "react";

const UserGrid = ({ books, setBooks }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/books")
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error);
        }
        setBooks(data);
      } catch (error) {

      }
    }
  },[]);

  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={4}
    >
      {BOOKS.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </Grid>
  )
}

export default UserGrid