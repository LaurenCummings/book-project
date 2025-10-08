import { Box, Container, Flex } from "@chakra-ui/react"

const Navbar = () => {
  return (
    <Container maxW={"900px"}>
        <Box px={4} my={4} borderRadius={5}>
            <Flex h="16" alignItems={"center"} justifyContent={"space-between"}>
                <Flex alignItems={"center"} justifyContent={"center"} gap={3} display={{base:"none", sm:"flex"}}>
                    <img src="/books_large.png" alt="books image" width={50} height={50} />
                </Flex>
                <Flex></Flex>
            </Flex>
        </Box>
    </Container>
  )
}

export default Navbar