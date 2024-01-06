import { Button, Flex, Image, Input, InputGroup, InputRightElement, Link, Text} from "@chakra-ui/react"
import { useState } from "react"



const SignUp = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  return (
    <Flex className="login-page" w={"full"} h={781} marginTop={"100px"} alignItems={"center"} justifyContent={"space-around"}>
      {/* left side */}
      <Flex>
        <Image w={650} src="/signin.svg"  />
      </Flex>
      {/* right side */}
      <Flex justifyContent={"flex-start"} flexDirection={"column"} w={"400px"} h={"395px"}>
        {/* text child */}
        <Flex flexDirection={"column"}>
          <Text fontSize={30} >Sign in to Exclusive</Text>
          <Text marginTop={"10px"}>Enter your details below</Text>
        </Flex>
        {/* input child */}
        <Flex className="form" justifyContent={"space-evenly"} h={"215px"} flexDirection={"column"}>
        <Input 
        type="email"
          borderRadius={0}
          borderTop={0}
          borderLeft={0}
          borderRight={0}
          placeholder="Email" 
        />
            <InputGroup size='md'>
      <Input
                borderRadius={0}
                borderTop={0}
                borderLeft={0}
                borderRight={0}
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
        {/* <Input 
        type="password"
          borderRadius={0}
          borderTop={0}
          borderLeft={0}
          borderRight={0}
          placeholder="Password" 
        /> */}
        </Flex>
        {/* btn */}
        <Flex alignItems={"center"} justifyContent={"space-between"} h={"100px"}>
        <Button w={143} h={"56px"} _hover={{background:"#E07575"}} bg={"#DB4444"} color={"white"} borderRadius={4} >Sign in</Button>
        <Link color={"#DB4444"}>Forget Password?</Link>
        </Flex>
        {/*  */}
        {/* <Flex justifyContent={"center"} >
        <Text >Already have account?</Text>
        <Link className="link-auth" to="/signup">Sign up</Link>
        </Flex> */}
      </Flex>
    </Flex>
  )
}

export default SignUp