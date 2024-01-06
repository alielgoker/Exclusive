import { Button, Checkbox, Flex, FormControl, FormLabel, Image, Input, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react"
import CheckOuteItem from "../components/Carousel/Carousel Item/CheckOuteItem"


export const CheckOute = () => {
  return (
    <Flex className="checkout-page"  justifyContent={"space-around"} alignItems={"center"} >
      {/* left silde */}
      <Flex flexDirection={"column"} h={"814px"} justifyContent={"space-between"}>
        <Text fontSize={"25px"} fontWeight={"bold"}>Billing Details</Text>
        <FormControl isRequired>
          <FormLabel color={"#a7a7a7"}>First Name</FormLabel>
          <Input type='text' />
        </FormControl>
        <FormControl>
          <FormLabel color={"#a7a7a7"}>Company Name</FormLabel>
          <Input type='text' />
        </FormControl>
        <FormControl isRequired>
          <FormLabel color={"#a7a7a7"}>Street Address</FormLabel>
          <Input  type='text' />
        </FormControl>
        <FormControl>
          <FormLabel color={"#a7a7a7"}>Apartment, floor, etc. (optional)</FormLabel>
          <Input type='text' />
        </FormControl>
        <FormControl isRequired>
          <FormLabel color={"#a7a7a7"}>Town/City</FormLabel>
          <Input  type='text' />
        </FormControl>
        <FormControl isRequired>
          <FormLabel color={"#a7a7a7"}>Phone Number</FormLabel>
          <Input  type='text' />
        </FormControl>
        <FormControl isRequired>
          <FormLabel color={"#a7a7a7"}>Email Address</FormLabel>
          <Input  type='email' />
        </FormControl>
        <Checkbox className="check"   defaultChecked>Save this information for faster check-out next time</Checkbox>
      </Flex>
      {/* right silde */}
      <Flex w={527} h={600} flexDirection={"column"} justifyContent={"space-evenly"}>
        <Flex flexDirection={"column"}>
        <CheckOuteItem />
        <CheckOuteItem />
        <CheckOuteItem />
        </Flex>

        <Flex h={"155px"} flexDirection={"column"} justifyContent={"space-between"}>
        <Flex justifyContent={"space-between"} borderBottom={"1px solid #e9e9e9"} paddingBottom={"12px"} >
              <Text>Subtotal</Text>
              <Text>$1950</Text>
            </Flex>

            <Flex justifyContent={"space-between"} borderBottom={"1px solid #cfcfcf9c"} paddingBottom={"12px"} >
              <Text>Shipping</Text>
              <Text>Free</Text>
            </Flex>

            <Flex justifyContent={"space-between"} borderBottom={"1px solid #d5c2c2"} paddingBottom={"12px"} >
              <Text>Total</Text>
              <Text>$1950</Text>
            </Flex>
        </Flex>

        <RadioGroup w={"full"}>
      <Stack direction='column' w={"full"}>
      <Flex justifyContent={"space-between"}> <Radio colorScheme="red" value='1'>Bank</Radio> <Flex><Image w={"80px"} src="/visa.png" /></Flex> </Flex>
        <Radio  colorScheme="red" value='2'>Cash on delivery</Radio>
      </Stack>
    </RadioGroup>

        <Flex w={"527px"} h={"56px"} justifyContent={"space-between"} >
          <Input borderColor={"black"} placeholder={"Coupon Code"} borderRadius={4} w={"300px"} h={"56px"} />
          <Button _hover={{ background :"#E07575"}} color={"white"} w={"211px"} h={"56px"} bg={"#DB4444"} >Apply Coupon</Button>
        </Flex>
        <Button _hover={{ background :"#E07575"}} color={"white"} w={"190px"} h={"56px"} bg={"#DB4444"}>Place Order</Button>
      </Flex>
    </Flex>
  )
}
