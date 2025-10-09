import { Container, Stack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import BookGrid from "./components/BookGrid";

function App() {

  return (
    <Stack minH={"100vh"}>
      <Navbar />
      
      <Container maxW={"1200px"} my={4}>
        <BookGrid />

      </Container>
    </Stack>
  )
}

export default App
