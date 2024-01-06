import { Button, Flex, FormControl, FormLabel, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react"
import { useState } from "react"

const Profile = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  return (
    <Flex className="profile-page"  h={"500px"} flexDirection={"column"} justifyContent={"space-around"}>
      <Flex justifyContent={"space-between"}>
      <Text >Edit Your Profile</Text>
      <Text  >Welcome! <span style={{color:"#DB4444"}} >Ali</span> </Text>
      </Flex>

      <Flex gap={"50px"}>
        <Flex>
        <FormControl>
          <FormLabel  >First Name</FormLabel>
          <Input w={"300px"} type='text' placeholder={"Ali"} />
        </FormControl>
        </Flex>
        <Flex>
        <FormControl>
          <FormLabel  >Last Name</FormLabel>
          <Input w={"300px"} type='text' placeholder={"Elgoker"} />
        </FormControl>
        </Flex>
      </Flex>

      <Flex gap={"50px"}>
        <Flex>
        <FormControl>
          <FormLabel  >Email</FormLabel>
          <Input w={"300px"} type='text' placeholder={"Alielgoker39@mail.com"} />
        </FormControl>
        </Flex>
        <Flex>
        <FormControl>
          <FormLabel  >Address</FormLabel>
          <Input w={"300px"} type='text' placeholder={"42 Elamir Mostafa"} />
        </FormControl>
        </Flex>
      </Flex>
      {/* password */}
      <Flex w={"fit-content"} >
      <FormControl>
          <FormLabel  >Password Changes</FormLabel>
          
          <InputGroup size='md' flexDirection={"column"} justifyContent={"space-between"} h={"200px"}>
      <Input
       id="1"
      w={"400px"}
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Current Passwod'
      />
              <Input id="2" w={"400px"} type="password" placeholder={"New Passwod"} />
        <Input id="3" w={"400px"} type="password" placeholder={"Confirm New Passwod"} />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
          </InputGroup>

        </FormControl>
      </Flex>
      {/* buttons */}
      <Flex alignSelf={"flex-end"}>
        <Button _hover={{ background :"#E07575"}} color={"white"} w={"170px"} h={"56px"} bg={"#DB4444"}>Save Changes</Button>
        <Button w={"190px"} h={"56px"} >Cancel</Button>
      </Flex>
    </Flex>
  )
}

export default Profile