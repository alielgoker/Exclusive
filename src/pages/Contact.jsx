import { Button, Flex, Input, Text, Textarea} from "@chakra-ui/react"
import { BsTelephone } from "react-icons/bs"
import { MdOutlineMail } from "react-icons/md"


const Contact = () => {
  return (
    <Flex className="contact-page" >
      {/* left side */}
      <Flex flexDirection={"column"} h={"415px"} w={"270px"}  justifyContent={"center"}>

        <Flex flexDirection={"column"} gap={"13px"} h={"50%"} fontSize={"13px"} justifyContent={"center"}>
          <Flex alignItems={"center"} gap={"20px"}> <Flex alignItems={"center"} justifyContent={"center"} w={"30px"} h={"30px"} bg={"#db4444"} borderRadius={"50%"} color={"white"}> <BsTelephone size={19} /> </Flex>  Call To Us </Flex>
          <Text>We are available 24/7, 7 days a week.</Text>
          <Text>Phone: +8801611112222</Text>
        </Flex>
          <hr style={{borderColor:"rgb(165 165 165)" , width:"90%"}} />
        <Flex flexDirection={"column"} gap={"13px"} h={"50%"} fontSize={"13px"} justifyContent={"center"}>
          <Flex alignItems={"center"} gap={"20px"}> <Flex alignItems={"center"} justifyContent={"center"} w={"30px"} h={"30px"} bg={"#db4444"} borderRadius={"50%"} color={"white"}><MdOutlineMail size={19} /> </Flex>  Write To US</Flex>
          <Text>Fill out our form and we will contact you within 24 hours.</Text>
          <Text>Emails: customer@exclusive.com</Text>
          <Text>Emails: support@exclusive.com</Text>
        </Flex>

      </Flex>
      {/* right side */}
      <Flex marginTop={"5px"} flexDirection={"column"} w={"full"} h={"457px"} justifyContent={"space-between"}>
        <Flex gap={"20px"} justifyContent={"space-between"}>
          <Input type="text" placeholder="Your Name" isRequired />
          <Input type="email" placeholder="Your Email" isRequired />
          <Input type="text" placeholder="Your Phone" isRequired />
        </Flex>
        <Flex>
          <Textarea resize="none" h={"300px"} placeholder="Your Message" /> 
        </Flex>
        <Button _hover={{ background :"#E07575"}} alignSelf={"end"} color={"white"} w={"260px"} h={"56px"} bg={"#DB4444"}>Send Massage</Button>
      </Flex>
    </Flex>
  )
}

export default Contact