import { Button, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";

const Banner = () => {
  return (
    <Flex
    
      w={"full"}
      h={500}
      bg={useColorModeValue("black", "#efefef")}
      marginTop={"100px"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {/* container */}
      <Flex
      className="banner"
        w="calc(100% - 150px)"
        h="calc(100% - 120px)"
        justifyContent={"space-between"}
      >
        {/* left side */}
        <Flex
        className="banner-left-side"
          w={"40%"}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Text fontSize={"18px"} fontWeight={"700"} color={"#DB4444"}>
            Categories
          </Text>
          <Text
            fontWeight={"600"}
            fontSize={50}
            color={useColorModeValue("white", "black")}
          >
            Enhance Your Music Experience
          </Text>
          <Flex gap={10} color={useColorModeValue("black", "white")}>
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              w={62}
              h={62}
              borderRadius={"50%"}
              flexDirection={"column"}
              bg={useColorModeValue("white", "black")}
            >
              {" "}
              <Text fontWeight={"800"}>05</Text>{" "}
              <Text fontSize={"11px"}>Days</Text>{" "}
            </Flex>
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              w={62}
              h={62}
              borderRadius={"50%"}
              flexDirection={"column"}
              bg={useColorModeValue("white", "black")}
            >
              {" "}
              <Text fontWeight={"800"}>23</Text>{" "}
              <Text fontSize={"11px"}>Hours</Text>{" "}
            </Flex>
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              w={62}
              h={62}
              borderRadius={"50%"}
              flexDirection={"column"}
              bg={useColorModeValue("white", "black")}
            >
              {" "}
              <Text fontWeight={"800"}>59</Text>{" "}
              <Text fontSize={"11px"}>Minutes</Text>{" "}
            </Flex>
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              w={62}
              h={62}
              borderRadius={"50%"}
              flexDirection={"column"}
              bg={useColorModeValue("white", "black")}
            >
              {" "}
              <Text fontWeight={"800"}>35</Text>{" "}
              <Text fontSize={"11px"}>Seconds</Text>{" "}
            </Flex>
          </Flex>
          <Button
            _hover={{ background: "#E07575" }}
            w={"171px"}
            h={"56px"}
            bg={"#DB4444"}
            color={"white"}
            borderRadius={4}
          >
            Buy Now!
          </Button>
        </Flex>
        {/* Right Side */}
        <Flex className="banner-right-side" w={"50%"} position={"relative"}>
          <Flex
            className="bg-blur"
            bg={useColorModeValue("rgb(114 108 95)", "black")}
          ></Flex>
          <Image zIndex={1} src="/JBL2.png" w={568} h={330} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Banner;
