import { Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import HearderSection from "./Header Section/HeaderSection";

const NewArrival = () => {
  return (
    <Flex flexDirection={"column"} gap={20}>
      <HearderSection title={"Featured"} desc={"New Arrival"} isTitleBack={true}  mt={100}/>
      <Flex className="new-arrival" justifyContent={"space-between"} w={"full"} h={"600"}>
        {/* left side */}
        <Flex
          borderRadius={4}
          position={"relative"}
          overflow={"hidden"}
          justify={"center"}
          alignItems={"center"}
          w="calc(50% - 20px)"
          bg={useColorModeValue("black" , "black")}
        >
          <Image zIndex={1}  h={"93%"} src="/Market-removebg-preview.png" />
          <Flex
          w={242}
          h={144}
          color={"white"}
          position={"absolute"}
          bottom={"50px"}
          left={"50px"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          zIndex={9999}
          >
            <Text fontSize={25} fontWeight={500} >Iphone 15</Text>
            <Text fontSize={16}>Black and White version of the PS5 coming out on sale.</Text>
            <Text className="shop-btn" position={"relative"} cursor={"pointer"} w={81} h={"24px"} >Shop Now <span className="line" ></span></Text>
          </Flex>
        </Flex>
        {/* right side */}
        <Flex
        className="new-right-side"
          justifyContent={"space-between"}
          flexDirection={"column"}
          w="calc(50% - 20px)"
        >
          <Flex borderRadius={4} position={"relative"} overflow={"hidden"} w={"full"} h={284} bg={useColorModeValue("black" , "#7171716b")} justifyContent={"flex-end"}>
            <Text className="bg-blur"bg={useColorModeValue("rgb(68 68 67)", "transparent")}></Text>
            <Image zIndex={1} w={"44%"} marginRight={"60px"} src="/pc-removebg-preview.png" />
            <Flex
          w={242}
          h={144}
          color={"white" }
          position={"absolute"}
          bottom={"50px"}
          left={"50px"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          zIndex={9999}
          >
            <Text fontSize={25} fontWeight={500} >PC</Text>
            <Text fontSize={16}>NSX GAMING PC Gamer Ryzen 7 5700X, 16 GB 2X 8GB RAM 1 TB</Text>
            <Text className="shop-btn" position={"relative"} cursor={"pointer"} w={81} h={"24px"} >Shop Now <span className="line" ></span></Text>
          </Flex>
          </Flex>
          <Flex className="new-right-down" gap={"10px"} justifyContent={"space-between"}>

            <Flex 
            alignItems={"center"}
            borderRadius={4}
            position={"relative"}
            overflow={"hidden"}
            w={"50%"} h={284} bg={useColorModeValue("black" , "#7171716b")}>
            <Text className="bg-blur"bg={useColorModeValue("rgb(68 68 67)", "transparent")}></Text>
              <Image zIndex={1} src="/play-station.png" />
              <Flex
          w={242}
          h={144}
          color={"white" }
          position={"absolute"}
          bottom={"30px"}
          left={"30px"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          zIndex={9999}
          >
            <Text fontSize={19} fontWeight={500} >PlayStation 5</Text>
            <Text className="new-right-text" fontSize={15}>Black and White version of the PS5 coming out on sale.</Text>
            <Text className="shop-btn" position={"relative"} cursor={"pointer"} w={81} h={"24px"} >Shop Now <span className="line" ></span></Text>
              </Flex>
            </Flex>

            <Flex
            borderRadius={4}
            position={"relative"}
            overflow={"hidden"}
              w={"50%"}
              h={284}
              bg={useColorModeValue("black" , "#7171716b")}
              justifyContent={"center"}
              alignItems={"center"}
            >
            <Text justifyContent={"flex-end"} className="bg-blur"bg={useColorModeValue("rgb(68 68 67)", "transparent")}></Text>
              <Image marginRight={"10px"} zIndex={1} w={267} h={214} src="/laptop.png" />
              <Flex
          w={242}
          h={144}
          color={"white" }
          position={"absolute"}
          bottom={"30px"}
          left={"30px"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          zIndex={9999}
          >
            <Text fontSize={19} fontWeight={500} >Laptop</Text>
            <Text className="new-right-text" fontSize={15}>Black and White version of the PS5 coming out on sale.</Text>
            <Text className="shop-btn" position={"relative"} cursor={"pointer"} w={81} h={"24px"} >Shop Now <span className="line" ></span></Text>
              </Flex>
            </Flex>

          </Flex>

        </Flex>
      </Flex>
    </Flex>
  );
};

export default NewArrival;
