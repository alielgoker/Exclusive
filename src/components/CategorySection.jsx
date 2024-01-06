import {  Flex, Text, useColorModeValue } from "@chakra-ui/react"
import HearderSection from "./Header Section/HeaderSection"
import { CiMobile4 , CiMonitor , CiLaptop , CiKeyboard} from 'react-icons/ci'
import { PiMonitorThin } from 'react-icons/pi'
import { SiPlaystation5 } from 'react-icons/si'
const CategorySection = () => {
  return (
    <Flex className="category-section" justifyContent={"space-between"} flexDirection={"column"} h={435}>
    <HearderSection title={"categories"} desc={"Browse By Category"} isTitleBack={true} mt={100}/>
    <Flex className="category" w={"full"} justifyContent={"space-between"}>
      {/* boxs */}
      <Flex 
      flexDirection={"column"} 
      w={170} 
      h={145} 
      border={"1px solid"} 
      borderColor={useColorModeValue("#e5e5e5" , "#2e2e2e")}
      justifyContent={"center"} 
      alignItems={"center"}
      gap={2.5}
      borderRadius={4}
      cursor={"pointer"}
      _hover={{backgroundColor:"#DB4444" , color:"white"}}
      >
      <CiMobile4 size={56} />
      <Text>Phones</Text>
      </Flex>
      <Flex 
      flexDirection={"column"} 
      w={170} 
      h={145} 
      border={"1px solid"} 
      borderColor={useColorModeValue("#e5e5e5" , "#2e2e2e")}
      justifyContent={"center"} 
      alignItems={"center"}
      gap={2.5}
      borderRadius={4}
      cursor={"pointer"}
      _hover={{backgroundColor:"#DB4444" , color:"white"}}
      >
      <CiMonitor size={56} />
      <Text>Computers</Text>
      </Flex>
      <Flex 
      flexDirection={"column"} 
      w={170} 
      h={145} 
      border={"1px solid"} 
      borderColor={useColorModeValue("#e5e5e5" , "#2e2e2e")}
      justifyContent={"center"} 
      alignItems={"center"}
      gap={2.5}
      borderRadius={4}
      cursor={"pointer"}
      _hover={{backgroundColor:"#DB4444" , color:"white"}}
      >
      <CiLaptop size={56} />
      <Text>Lap Top</Text>
      </Flex>
      <Flex 
      flexDirection={"column"} 
      w={170} 
      h={145} 
      border={"1px solid"} 
      borderColor={useColorModeValue("#e5e5e5" , "#2e2e2e")}
      justifyContent={"center"} 
      alignItems={"center"}
      gap={2.5}
      borderRadius={4}
      cursor={"pointer"}
      _hover={{backgroundColor:"#DB4444" , color:"white"}}
      >
      <PiMonitorThin size={56} />
      <Text>Monitors</Text>
      </Flex>
      <Flex 
      flexDirection={"column"} 
      w={170} 
      h={145} 
      border={"1px solid"} 
      borderColor={useColorModeValue("#e5e5e5" , "#2e2e2e")}
      justifyContent={"center"} 
      alignItems={"center"}
      gap={2.5}
      borderRadius={4}
      cursor={"pointer"}
      _hover={{backgroundColor:"#DB4444" , color:"white"}}
      >
      <CiKeyboard size={56} />
      <Text>Accessories</Text>
      </Flex>
      <Flex 
      flexDirection={"column"} 
      w={170} 
      h={145} 
      border={"1px solid"} 
      borderColor={useColorModeValue("#e5e5e5" , "#2e2e2e")}
      justifyContent={"center"} 
      alignItems={"center"}
      gap={2.5}
      borderRadius={4}
      cursor={"pointer"}
      _hover={{backgroundColor:"#DB4444" , color:"white"}}
      >
      <SiPlaystation5 size={56} />
      <Text>PlatStation</Text>
      </Flex>
    </Flex>
    </Flex>
  )
}

export default CategorySection