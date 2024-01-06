import { Flex, Image, Input, Td, Tr } from "@chakra-ui/react"
import '../../../index.css';
import { useState } from "react";

const CartItem = () => {
  let [count , setCount] = useState(1)
  const handeleCount = ()=>{
  // const handeldecriment = ()=>{

  }
  return (
    <Tr>
    <Td > <Flex className="cart-product-info"  alignItems={"center"} ><Image src="/Iphone.png" w={"60px"} /> LCD Monitor </Flex></Td>
    <Td  >$650</Td>
    <Td className="cart-field" display={"flex"} alignItems={"center"} > <Input readOnly  value={count} appearance={"-moz-initial"} w={"70px"} border={"1px solid"}  type="number" /> 
    <Flex  flexDirection={"column"} marginLeft={"5px"}>
      <Flex onClick={()=>{setCount(count+ 1) 
      handeleCount()}} _hover={{background:"#2da742"}} cursor={"pointer"} color={"white"} marginBottom={"2px"} justifyContent={"center"} alignItems={"center"} borderRadius={4} w={"20px"} h={"20px"} bg={"#62c573"}>+</Flex>
      <Flex onClick={()=>{setCount(count- 1)
      handeleCount()}} _hover={{background:"#ff0000"}} cursor={"pointer"} color={"white"} justifyContent={"center"} alignItems={"center"} borderRadius={4} w={"20px"} h={"20px"} bg={"#db4444"}>-</Flex>
    </Flex>
    </Td>
    <Td >$650</Td>
  </Tr>
  )
}

export default CartItem