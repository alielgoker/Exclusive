import { Button, Flex, useColorModeValue } from "@chakra-ui/react";

const Btn = () => {
  return (
    <Flex w={"full"} justifyContent={"center"} marginTop={"50px"}>
    <Button
    w={"234px"}
    h={"56px"}
    bg={"#DB4444"}
    borderRadius={4}
    _hover={{background:"#E07575"}}
    color={useColorModeValue("white", "white")}
    >View All Products</Button>
  </Flex>
  )
}

export default Btn