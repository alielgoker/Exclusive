import { Flex, Image, Text } from "@chakra-ui/react"


const CheckOuteItem = () => {
  return (
    <Flex align={"center"} justifyContent={"space-between"} marginBottom={"5px"}>
    <Flex w={"full"} alignItems={"center"}  >
      <Image src="/Iphone.png" w={"60px"} /> 
      LCD Monitor 
      </Flex>
      <Text>$650</Text>
      </Flex>
  )
}

export default CheckOuteItem