import { Button, Flex, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
      <Image w={"830px"} src="/404.png" />
    <Link to="/"> <Button  _hover={{ background :"#E07575"}}  color={"white"} w={"260px"} h={"56px"} bg={"#DB4444"}> Back to home page</Button> </Link>
    </Flex>
  )
}

export default NotFound