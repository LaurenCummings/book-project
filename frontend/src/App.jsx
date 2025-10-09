import { Container, Stack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import UserGrid from "./components/UserGrid";

function App() {

  return (
    <Stack minH={"100vh"}>
      <Navbar />
      
      <Container maxW={"1200px"} my={4}>
        <UserGrid />

      </Container>
    </Stack>
  )
}

export default App
