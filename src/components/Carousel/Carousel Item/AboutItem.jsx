import { Flex, Heading, Image, Text } from "@chakra-ui/react"
import { SlSocialTwitter , SlSocialInstagram , SlSocialLinkedin} from 'react-icons/sl'

const AboutItem = () => {
  return (
    <Flex  flexDirection={"column"}>
      <Flex> <Image w={"260px"} src="/about-3.png" /> </Flex>
      <Flex justifyContent={"space-evenly"} h={"110px"} flexDirection={"column"}>
        <Heading>Will Smith</Heading>
        <Text>Product Designer</Text>
        <Flex gap={"15px"}>
        <SlSocialTwitter cursor={"pointer"} className="social-icon"/>
        <SlSocialInstagram cursor={"pointer"} className="social-icon" />
        <SlSocialLinkedin cursor={"pointer"} className="social-icon" />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default AboutItem