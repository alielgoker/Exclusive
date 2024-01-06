import { Box, Flex, Text } from "@chakra-ui/react"

// eslint-disable-next-line react/prop-types
const HearderSection = ({children ,title , desc ,colorT ,isTitleBack ,mt}) => {
  return (
    <Flex marginTop={mt} w={"full"} justifyContent={"space-between"} alignItems={"flex-end"}>
      {/* left side */}
      <Flex flexDirection={"column"} h={120} justifyContent={"flex-end"} >
        <Flex alignItems={"center"} gap={5} w={200}>
          {
            !isTitleBack ?<></> :<Box background={"#DB4444"} w={"20px"} h={"40px"} borderRadius={4}></Box>
          }
          
          <Text color={ colorT || "#DB4444"} fontSize={18} fontWeight={"500"}>{title}</Text>
        </Flex>
        <Text className="header-section-desc" fontSize={40} fontWeight={"bold"}>{desc}</Text>
      </Flex>
      {/* right side */}
      <Flex>
      {children}
      </Flex>
    </Flex>
  )
}

export default HearderSection