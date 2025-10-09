import { Grid } from "@chakra-ui/react";
import { BOOKS } from "../dummyData";
import BookCard from "./BookCard";

const UserGrid = () => {
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