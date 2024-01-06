import {
  Button,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import { LiaEyeSolid } from "react-icons/lia";
import {  BsCart3  } from 'react-icons/bs'
// eslint-disable-next-line react/prop-types
const ForyouItem = ({isSale , isNew}) => {
  return (
    <Flex style={{width:"270px"}} className="box" flexDirection={"column"}  minH={350}>
    {/* product img */}
    <Flex
      h={250}
      flexDirection={"column"}
      justifyContent={"space-between"}
      position={"relative"}
    >
      <Flex
        position={"absolute"}
        right={3}
        top={5}
        flexDirection={"column"}
        h={"65px"}
        justifyContent={"space-between"}
      >
        <LiaEyeSolid size={23} cursor={"pointer"}  />
      </Flex>
      {isSale && (
              <Flex
              position={"absolute"}
              bg={"#DB4444"}
              color={"white"}
              w={55}
              h={26}
              borderRadius={4}
              alignItems={"center"}
              justifyContent={"center"}
              top={3}
              left={3}
            >
              <Text fontSize={14}>-40%</Text>
            </Flex>
      )}
      {isNew && (
      <Flex
      position={"absolute"}
      bg={"#18c95f"}
      color={"white"}
      w={55}
      h={26}
      borderRadius={4}
      alignItems={"center"}
      justifyContent={"center"}
      top={3}
      left={3}
    >
      <Text fontSize={14}>New</Text>
    </Flex>
      )}
      <Image marginTop={5} src="/Iphone.png" w={"full"} />
      <Button
        _hover={{}}
        color={useColorModeValue("white", "black")}
        borderRadius={"none"}
        bg={useColorModeValue("black", "white")}
        textIndent={"11px"}
      ><BsCart3 cursor={"pointer"} size={25}  />
        Add To Cart
      </Button>
    </Flex>
    {/* product description */}
    <Flex
      w={201}
      flexDirection={"column"}
      marginTop={"10px"}
      h={87}
      justifyContent={"space-around"}
    >
      <Text fontFamily={"sans-serif"} fontWeight={"bold"}>
        Iphon 15 Pro Max 256g...
      </Text>
      <Flex w={88} justifyContent={"space-between"}>
        <Text color={"#DB4444"} fontWeight={"600"}>
          $120
        </Text>
      </Flex>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        w={115}
      >
        <Flex>
          <RiStarSFill color="#FFAD33" size={20} />
          <RiStarSFill color="#FFAD33" size={20} />
          <RiStarSFill color="#FFAD33" size={20} />
          <RiStarSFill color="#FFAD33" size={20} />
          <RiStarSLine
            color={useColorModeValue("#b7b4b4", "#3c3c3c")}
            size={20}
          />
        </Flex>
        <Text color={useColorModeValue("#979797", "#6a6969")}>(88)</Text>
      </Flex>
    </Flex>
  </Flex>
  )
}

export default ForyouItem