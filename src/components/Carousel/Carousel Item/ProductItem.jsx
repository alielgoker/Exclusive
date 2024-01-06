import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import { BiHeart } from "react-icons/bi";
import { LiaEyeSolid } from "react-icons/lia";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
const CorouselItem = ({newProduct , img , costomColor}) => {
  const [num , setNum] = useState(1)
  const handleColor = (e)=>{
    let colorBox = document.querySelectorAll(".costum-color")
    let colorArray = Array.from(colorBox)
    colorArray.forEach((e)=>{
      e.classList.remove("costum-active-color")
    })
    e.target.classList.add("costum-active-color")
    
  }
  return (
    <Flex style={{width:"270px"}} className="box" flexDirection={"column"}  minH={350}>
    {/* product img */}
    <Flex
      h={250}
      flexDirection={"column"}
      justifyContent={"space-between"}
      position={"relative"}
      alignItems={"center"}
    >
      <Flex
        position={"absolute"}
        right={3}
        top={5}
        flexDirection={"column"}
        h={"65px"}
        justifyContent={"space-between"}
      >
        <BiHeart size={23} cursor={"pointer"} />
        <LiaEyeSolid size={23} cursor={"pointer"}  />
      </Flex>
      {newProduct && (
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
      {
        img ? <Image marginTop={5}  src={`/iphone-${num}.png`} w={"100px"} /> : <Image marginTop={5} src="/Iphone.png" w={"full"} /> 
      }
      {/* <Image marginTop={5} src="/Iphone.png" w={"full"} /> */}
      <Button
      w={"full"}
        className="cart-btn"
        _hover={{}}
        color={useColorModeValue("white", "black")}
        visibility={"hidden"}
        borderRadius={"none"}
        bg={useColorModeValue("black", "white")}
      >
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
      <Flex gap={3} w={88} justifyContent={"space-between"}>
          <Text color={"#DB4444"} fontWeight={"600"}>
            $120
          </Text>

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
        {
          costomColor &&(
            <Flex  gap={2}>
              <Box onClick={(e)=>{setNum(1)
                handleColor(e) }} id="color_1"  className="costum-color costum-active-color"   cursor={"pointer"} borderRadius={"50%"} bg={"#424242"} w={"20PX"} h={"20PX"}></Box>
              <Box onClick={(e)=>{setNum(2)
                handleColor(e) }} id="color_2"  className="costum-color "  cursor={"pointer"} borderRadius={"50%"} bg={"#d5d2cb"} w={"20PX"} h={"20PX"}></Box>
              <Box onClick={(e)=>{setNum(3)
                handleColor(e) }} id="color_3"  className="costum-color "  cursor={"pointer"} borderRadius={"50%"} bg={"#464c58"} w={"20PX"} h={"20PX"}></Box>
            </Flex>
          )
        }
    </Flex>
  </Flex>
  )
}

export default CorouselItem