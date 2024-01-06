import { Button, Flex, Image, Input, InputGroup,InputRightElement , Text} from "@chakra-ui/react"
import { useState } from "react"
import { Link } from "react-router-dom"



const SignUp = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  return (
    <Flex className="signup-page" w={"full"} h={781} marginTop={"100px"} alignItems={"center"} justifyContent={"space-around"}>
      {/* left side */}
      <Flex>
        <Image w={650} src="/signup.png"  />
      </Flex>
      {/* right side */}
      <Flex justifyContent={"space-between"} flexDirection={"column"} w={"400px"} h={"550px"}>
        {/* text child */}
        <Flex flexDirection={"column"}>
          <Text fontSize={30} >Create an account</Text>
          <Text marginTop={"10px"}>Enter your details below</Text>
        </Flex>
        {/* input child */}
        <Flex className="form" justifyContent={"space-between"} h={"215px"} flexDirection={"column"}>
        <Input 
        type="text"
          borderRadius={0}
          borderTop={0}
          borderLeft={0}
          borderRight={0}
          placeholder="Name" 
        />
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
        <Flex justifyContent={"space-between"} h={"100px"}  flexDirection={"column"}>
        <Button _hover={{background:"#E07575"}} bg={"#DB4444"} color={"white"} borderRadius={4} >Create Account</Button>
        <Button   border={"1px solid #ddd8d8"} borderRadius={4} > <Image w={"35px"} src="/googleicon.png" /> Sign up with Google</Button>
        </Flex>
        {/*  */}
        <Flex justifyContent={"center"} >
        <Text >Already have account?</Text>
        <Link className="link-auth" to="/signin">Log in</Link>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SignUp