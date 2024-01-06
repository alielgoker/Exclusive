import { Flex, Text, useColorModeValue } from "@chakra-ui/react"
import { TbTruckDelivery } from 'react-icons/tb'

const Features = () => {
  return (
    <Flex justify={"center"} alignItems={"center"} marginTop={"100px"} >
      <Flex className="features-section"  w={"80%"} h={161} justify={"space-between"}  alignItems={"center"}>
        {/* box one */}
        <Flex h={"100%"} justifyContent={"space-between"} flexDirection={"column"} alignItems={"center"}>
          <Flex 
          w={"80px"}
          h={"80px"}
          borderRadius={"50%"}
          justifyContent={"center"}
          alignItems={"center"}
          bg={useColorModeValue("#8d8d8d" , "#303030")}  >
            <Flex
          w={"60px"}
          h={"60px"}
          borderRadius={"50%"}
          justifyContent={"center"}
          alignItems={"center"}
          bg={useColorModeValue("black" , "#c3c2c2")}  >
            <TbTruckDelivery color={useColorModeValue("white" , "black")} size={35} />
            </Flex>
          </Flex>
          {/* text */}
          <Flex flexDirection={"column"} textAlign={"center"}>
            <Text fontSize={23} fontWeight={700} >FREE AND FAST DELIVERY</Text>
            <Text fontSize={"17.5px"}>Free delivery for all orders over $140</Text>
          </Flex>
        </Flex>
        {/* box two */}
        <Flex h={"100%"} justifyContent={"space-between"} flexDirection={"column"} alignItems={"center"}>
          <Flex 
          w={"80px"}
          h={"80px"}
          borderRadius={"50%"}
          justifyContent={"center"}
          alignItems={"center"}
          bg={useColorModeValue("#8d8d8d" , "#303030")}  >
            <Flex
          w={"60px"}
          h={"60px"}
          borderRadius={"50%"}
          justifyContent={"center"}
          alignItems={"center"}
          bg={useColorModeValue("black" , "#c3c2c2")}  >
            <TbTruckDelivery color={useColorModeValue("white" , "black")} size={35} />
            </Flex>
          </Flex>
          {/* text */}
          <Flex flexDirection={"column"} textAlign={"center"}>
            <Text fontSize={23} fontWeight={700} >24/7 CUSTOMER SERVICE</Text>
            <Text fontSize={"17.5px"}>Friendly 24/7 customer support</Text>
          </Flex>
        </Flex>
        {/* box three */}
        <Flex h={"100%"} justifyContent={"space-between"} flexDirection={"column"} alignItems={"center"}>
          <Flex 
          w={"80px"}
          h={"80px"}
          borderRadius={"50%"}
          justifyContent={"center"}
          alignItems={"center"}
          bg={useColorModeValue("#8d8d8d" , "#303030")}  >
            <Flex
          w={"60px"}
          h={"60px"}
          borderRadius={"50%"}
          justifyContent={"center"}
          alignItems={"center"}
          bg={useColorModeValue("black" , "#c3c2c2")}  >
            <TbTruckDelivery color={useColorModeValue("white" , "black")} size={35} />
            </Flex>
          </Flex>
          {/* text */}
          <Flex flexDirection={"column"} textAlign={"center"}>
            <Text fontSize={23} fontWeight={700} >MONEY BACK GUARANTEE</Text>
            <Text fontSize={"17.5px"}>We reurn money within 30 days</Text>
          </Flex>
        </Flex>

      </Flex>
    </Flex>
  )
}

export default Features