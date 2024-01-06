import { Flex, Heading, Image, Text, useColorModeValue} from "@chakra-ui/react"
import { BiStoreAlt } from "react-icons/bi"
import { AiOutlineDollarCircle } from "react-icons/ai"
import { FiShoppingBag } from "react-icons/fi"
import { TbBasketDollar} from "react-icons/tb"
import AboutItem from "../components/Carousel/Carousel Item/AboutItem"
import Carousel from "react-multi-carousel"
import { responsive } from "../components/Carousel/responsive"
import Features from "../components/Features"



const About = () => {
  return (
    <Flex className="about"  flexDirection={"column"}>
      {/* section one */}
      <Flex alignItems={"center"}>
        {/* left side */}
        <Flex w={"40%"} flexDirection={"column"} h={"350px"} justifyContent={"space-evenly"}>
          <Heading fontSize={50} letterSpacing={"5px"}>Our Story</Heading>
          <Text>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </Text>
          <Text>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</Text>
        </Flex>
        {/* right side */}
        <Flex w={"60%"} justify={"center"}>
          <Image w={"340px"} src="/about.png" />
        </Flex>
      </Flex>
      {/* section tow */}
      <Flex className="about-sec-two" justify={"center"} alignItems={"center"} marginTop={"80px"} h={"320px"} >
      <Flex  w={"full"} h={"full"} justify={"space-between"}  alignItems={"center"}>
        {/* box one */}
        <Flex className="sec-two-item" _hover={{background:"#DB4444" , color:"white"}}  h={"100%"} w={"270px"} gap={"15px"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"}>
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
            <BiStoreAlt color={useColorModeValue("white" , "black")} size={35} />
            </Flex>
          </Flex>
          {/* text */}
          <Flex flexDirection={"column"} textAlign={"center"}>
            <Text fontSize={30} fontWeight={700} >10.5k </Text>
            <Text fontSize={"17.5px"}>Sallers active our site</Text>
          </Flex>
        </Flex>

        {/* box two */}
        <Flex className="sec-two-item" _hover={{background:"#DB4444" , color:"white"}}  h={"100%"} w={"270px"} gap={"15px"}  justifyContent={"center"} flexDirection={"column"} alignItems={"center"}>
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
            <AiOutlineDollarCircle color={useColorModeValue("white" , "black")} size={35} />
            </Flex>
          </Flex>
          {/* text */}
          <Flex flexDirection={"column"} textAlign={"center"}>
            <Text fontSize={30} fontWeight={700} >33k</Text>
            <Text fontSize={"17.5px"}>Mopnthly Produduct Sale</Text>
          </Flex>
        </Flex>
        {/* box three */}
        <Flex className="sec-two-item" _hover={{background:"#DB4444" , color:"white"}}  h={"100%"} w={"270px"} gap={"15px"}  justifyContent={"center"} flexDirection={"column"} alignItems={"center"}>
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
            <FiShoppingBag color={useColorModeValue("white" , "black")} size={35} />
            </Flex>
          </Flex>
          {/* text */}
          <Flex flexDirection={"column"} textAlign={"center"}>
            <Text fontSize={30} fontWeight={700} >45.5k</Text>
            <Text fontSize={"17.5px"}>Customer active in our site</Text>
          </Flex>
        </Flex>
        {/* box fore */}
        <Flex className="sec-two-item" _hover={{background:"#DB4444" , color:"white"}}  h={"100%"} w={"270px"} gap={"15px"}  justifyContent={"center"} flexDirection={"column"} alignItems={"center"}>
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
            <TbBasketDollar color={useColorModeValue("white" , "black")} size={35} />
            </Flex>
          </Flex>
          {/* text */}
          <Flex flexDirection={"column"} textAlign={"center"}>
            <Text fontSize={30} fontWeight={700} >25k</Text>
            <Text fontSize={"17.5px"}>Anual gross sale in our site</Text>
          </Flex>
        </Flex>

      </Flex>
    </Flex>
      {/* section three */}
      <Carousel 
        arrows={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
      >
        <AboutItem />
        <AboutItem />
        <AboutItem />
        <AboutItem />
        <AboutItem />
        <AboutItem />
      </Carousel>
      {/* section four */}
      < Features />
    </Flex>
  )
}

export default About