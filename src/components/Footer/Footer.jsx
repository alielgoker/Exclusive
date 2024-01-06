import {  Flex, Image, Input, Text, useColorModeValue } from "@chakra-ui/react"
import { SlSocialTwitter , SlSocialInstagram , SlSocialFacebook , SlSocialLinkedin } from 'react-icons/sl'
import { VscSend } from 'react-icons/vsc'

const Footer = () => {
  return (
    <Flex className="footer-section" flexDirection={"column"} marginTop={"130px"} w={"full"} h={440} bg={"black"} justifyContent={"center"} alignItems={"center"}>
      <Flex className="footer" w="calc(100% - 300px)" h="calc(100% - 100px)"  justifyContent={"space-evenly"} alignItems={"center"} >
        {/* child */}
        <Flex color={"white"} w={217} h={188} flexDirection={"column"} justifyContent={"space-between"}>
          <Text fontWeight={"500"} fontSize={30}>Exclusive</Text>
          <Text fontWeight={"400"} fontSize={20}>Subscribe</Text>
          <Text>Get 10% off your first order</Text>
          <Flex>
          <Input 
          className="custom-input"
          placeholder="Enter your email" 
          borderRadius={4} 
          fontSize={"small"} 
          w={"160px"} 
          borderRightColor={"transparent"} 
          borderTopRightRadius={0}
          borderBottomRightRadius={0}
          />
            <Flex
            w={"50px"}
            h={"40px"}
            className="send"
            justifyContent={"center"}
            border={"1px solid"}
            borderColor={useColorModeValue("white" , "#2a2a2a")}
            borderRadius={"4px"}
            borderLeftColor={"transparent"}
            borderTopLeftRadius={0}
            borderBottomLeftRadius={0}
            alignItems={"center"}>
              <VscSend size={20} color="white"  cursor={"pointer"}/>
            </Flex>
          </Flex>
        </Flex>
        <Flex className="footer-slice" >
        {/* child */}
        <Flex color={"white"} w={217} h={188} flexDirection={"column"} justifyContent={"space-between"}>
          <Text fontWeight={"400"} fontSize={20}>Support</Text>
          <Text>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</Text>
          <Text>exclusive@gmail.com</Text>
          <Text>+88015-88888-9999</Text>
        </Flex>
        {/* child */}
        <Flex color={"white"} w={217} h={188} flexDirection={"column"} justifyContent={"space-between"}>
          <Text fontWeight={"400"} fontSize={20}>Account</Text>
          <Text>My Account</Text>
          <Text>Login / Register</Text>
          <Text>Cart</Text>
          <Text>Wishlist</Text>
          <Text>Shop</Text>
        </Flex>
        </Flex>
        <Flex className="footer-slice" >
        {/* child */}
        <Flex color={"white"} w={217} h={188} flexDirection={"column"} justifyContent={"space-between"}>
          <Text fontWeight={"400"} fontSize={20}>Quick Link</Text>
          <Text>Privacy Policy</Text>
          <Text>Terms Of Use</Text>
          <Text>FAQ</Text>
          <Text>Contact</Text>
        </Flex>
        {/* child */}
        <Flex color={"white"} w={217} h={200} flexDirection={"column"} justifyContent={"space-between"}>
          <Text fontWeight={"400"} fontSize={20}>Download App</Text>
          <Flex flexDirection={"column"} h={110} justifyContent={"space-between"}>
            <Text fontSize={"14.9px"}>Save $3 with App New User Only</Text>
            <Flex >
                < Image  src="/download.png" />
            </Flex>
          </Flex>
          {/* social */}
          <Flex w={"full"} justifyContent={"space-around"}>
          <SlSocialFacebook cursor={"pointer"} size={20} color={"white"}  className="social-icon" />
          <SlSocialTwitter cursor={"pointer"} size={20}  color={"white"}  className="social-icon" />
          <SlSocialInstagram cursor={"pointer"} size={20} color={"white"} className="social-icon" />
          <SlSocialLinkedin cursor={"pointer"} size={20}  color={"white"} className="social-icon" />
          </Flex>
        </Flex>
        </Flex>
      </Flex>
      <hr style={{width:"100%" , borderColor:"#161616"}} />
      <Text marginTop={"25px"} color={"#303030"} fontFamily={"sans-serif"} >&copy;Copyright Rimel 2022. All right reserved</Text>
    </Flex>
  )
}

export default Footer