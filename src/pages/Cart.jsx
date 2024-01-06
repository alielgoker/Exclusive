import CartItem from "../components/Carousel/Carousel Item/CartItem"

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Flex,
  Button,
  Input,
  Text,
  Image,
} from '@chakra-ui/react'

const Cart = () => {
  let  cartCount = 1
  return (
    <>
    {
      cartCount > 0 ? 
      <Flex  flexDirection={"column"} >
      {/* top side */}
      <Flex flexDirection={"column"}>
      <TableContainer w={"full"}>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>Product</Th>
        <Th>price</Th>
        <Th>Quantity</Th>
        <Th>Subtotal</Th>
      </Tr>
    </Thead>
    <Tbody>
      < CartItem />
      < CartItem />
      < CartItem />
    </Tbody>
  </Table>
      </TableContainer>
      <Flex w={"full"} justifyContent={"space-between"}>
        <Button w={"146px"} h={"40px"} borderRadius={4} border={"1px solid #00000038"}>Return To Shop</Button>
        <Button w={"146px"} h={"40px"} borderRadius={4} border={"1px solid #00000038"}>Update Cart</Button>
      </Flex>
      </Flex>
      {/* down side */}
      <Flex className="cart-down-side" flexWrap={"wrap"} gap={"10px"} marginTop={"100px"}  w={"full"} h={324} justifyContent={"space-between"}>
        {/* left side */}
        <Flex w={"527px"} h={"56px"} justifyContent={"space-between"} >
          <Input borderColor={"black"} placeholder={"Coupon Code"} borderRadius={4} w={"300px"} h={"56px"} />
          <Button _hover={{ background :"#E07575"}} color={"white"} w={"211px"} h={"56px"} bg={"#DB4444"} >Apply Coupon</Button>
        </Flex>
        {/* right side */}
        <Flex >
          <Flex className="cart-total" borderRadius={4} px={"30px"} w={"470px"} h={"324px"} border={"2px solid"} flexDirection={"column"} justifyContent={"space-evenly"}>
            <Text fontSize={23} fontWeight={"bold"} >Cart Total</Text>
            <Flex justifyContent={"space-between"} borderBottom={"1px solid #e9e9e9"} paddingBottom={"12px"} >
              <Text>Subtotal</Text>
              <Text>$1750</Text>
            </Flex>

            <Flex justifyContent={"space-between"} borderBottom={"1px solid #cfcfcf9c"} paddingBottom={"12px"} >
              <Text>Shipping</Text>
              <Text>Free</Text>
            </Flex>

            <Flex justifyContent={"space-between"} borderBottom={"1px solid #d5c2c2"} paddingBottom={"12px"} >
              <Text>Total</Text>
              <Text>$1750</Text>
            </Flex>

            <Button _hover={{ background :"#E07575"}} alignSelf={"center"} color={"white"} w={"260px"} h={"56px"} bg={"#DB4444"}>Procees to checkout</Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
    :
    <Flex marginTop={"150px"} justifyContent={"center"}>
      <Image w={"700px"} src="/Empty_cart.png" />
    </Flex>
    }
    </>
  )
}

export default Cart