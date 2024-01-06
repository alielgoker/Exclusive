import { Box, Button, Flex,  Image, Text, useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react'
import { AiOutlineMinus } from 'react-icons/ai'
import { BsHeart, BsPlusLg } from 'react-icons/bs'
import { HiMiniArrowPath } from 'react-icons/hi2'
import { RiStarSFill, RiStarSLine } from 'react-icons/ri'
import { TbTruckDelivery } from 'react-icons/tb'
import HearderSection from '../components/Header Section/HeaderSection'
import ProductCorousel from '../components/Carousel/Carousel'
import ProductInfoItem from '../components/Carousel/Carousel Item/ProductInfoItem'


 const Product = () => {
   const isMultipleSizes = true
   const [imgColor , setImgColor] = useState("")
  const [imgView , setImgView] = useState(1)
  const [quantity , setQuantity] = useState(1)
  const handleProductColor = (e)=>{
    let colors = document.querySelectorAll(".color-group div")
    let colorsArray = Array.from(colors)
    colorsArray.forEach((ele)=>{
      ele.classList.remove('active-product-color')
    })
    e.target.classList.add("active-product-color")
  }
  const handleProductSize = (e)=>{
    let size = document.querySelectorAll(".size")
    let sizeArray = Array.from(size)
    sizeArray.forEach((ele)=>{
      ele.classList.remove('active-product-size')
    })
    e.target.classList.add("active-product-size")
  }
  
  return (
    <Flex className='product-info-page' flexDirection={"column"}>
      {/* section one */}
      <Flex className='product-info-sec1' justifyContent={"space-between"} w={"full"} h={"600px"}>

        {/* left item */}
        <Flex flexDirection={"column"}>
          <Flex onClick={()=>{setImgView(2)}} cursor={"pointer"}><Image w={"110px"} src={`/product-img-${imgColor}2.png`} /></Flex>
          <Flex onClick={()=>{setImgView(3)}} cursor={"pointer"}><Image w={"110px"} src={`/product-img-${imgColor}3.png`} /></Flex>
          <Flex onClick={()=>{setImgView(4)}} cursor={"pointer"}><Image w={"110px"} src={`/product-img-${imgColor}4.png`} /></Flex>
          <Flex onClick={()=>{setImgView(5)}} cursor={"pointer"}><Image w={"110px"} src={`/product-img-${imgColor}5.png`} /></Flex>
        </Flex>
        {/* center item */}
        <Flex>
        <Image src={`/product-img-${imgColor}${imgView}.png`} />
        </Flex>
        {/* right item */}
        <Flex flexDirection={"column"} w={"399px"}>

          <Flex h={"210px"} justifyContent={"space-around"} borderBottom={"1px solid "} borderColor={useColorModeValue("#d7d7d7","#333333")} paddingBottom={"10px"} flexDirection={"column"}>
            <Text fontSize={"25px"} fontWeight={"bold"}>Havic HV G-92 Gamepad</Text>
            <Flex>
            <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          
        >
          <Flex>
            <RiStarSFill color="#FFAD33" size={20} />
            <RiStarSFill color="#FFAD33" size={20} />
            <RiStarSFill color="#FFAD33" size={20} />
            <RiStarSFill color="#FFAD33" size={20} />
            <RiStarSLine
              color={useColorModeValue("#b7b4b4", "#3c3c3c")}
              size={20}
            />
          </Flex>
          <Text color={useColorModeValue("#979797", "#6a6969")}>(150 Reviews) | <span style={{color:"#29e329"}}> in stock</span></Text>
        </Flex>
            </Flex>
            <Text fontSize={"25px"}> $192.00 </Text>
            <Text color={useColorModeValue("black" , "#777777")}>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</Text>
          </Flex>

          <Flex flexDirection={"column"} h={"150px"} justifyContent={"space-evenly"}>
            {/* color */}
            <Flex  gap={"10px"} alignItems={"center"}><Text>Colours:</Text> 
            <Flex gap={"10px"}  className='color-group'>
            <Box id='color-1' className='active-product-color' onClick={ (e)=>{setImgColor("")
            handleProductColor(e)} } cursor={"pointer"} w={" 15px"} h={" 15px"} bg={"#494351"} borderRadius={"50%"} ></Box>

            <Box id='color-2' onClick={ (e)=>{setImgColor("g")
            handleProductColor(e)} } cursor={"pointer"} w={" 15px"} h={" 15px"} bg={"#f3e5cb"} borderRadius={"50%"} ></Box>
            </Flex>
            </Flex>
            {/* size */}
            {
              isMultipleSizes &&(
                <Flex gap={15}>
                <Text>Size:</Text>
                <Flex onClick={handleProductSize} className='size' cursor={"pointer"} fontSize={"12px"} justifyContent={"center"} alignItems={"center"} borderRadius={4} w={"25px"} h={"25px"} border={"1px solid #333333"}  >XS</Flex>
                <Flex onClick={handleProductSize} className='size' cursor={"pointer"} fontSize={"12px"} justifyContent={"center"} alignItems={"center"} borderRadius={4} w={"25px"} h={"25px"} border={"1px solid #333333"}  >S</Flex>
                <Flex onClick={handleProductSize} className='size active-product-size' cursor={"pointer"} fontSize={"12px"} justifyContent={"center"} alignItems={"center"} borderRadius={4} w={"25px"} h={"25px"} border={"1px solid #333333"}  >M</Flex>
                <Flex onClick={handleProductSize} className='size' cursor={"pointer"} fontSize={"12px"} justifyContent={"center"} alignItems={"center"} borderRadius={4} w={"25px"} h={"25px"} border={"1px solid #333333"}  >L</Flex>
                <Flex onClick={handleProductSize} className='size' cursor={"pointer"} fontSize={"12px"} justifyContent={"center"} alignItems={"center"} borderRadius={4} w={"25px"} h={"25px"} border={"1px solid #333333"}  >XL</Flex>
              </Flex>
              )
            }
            {/* quantity */}
            <Flex justifyContent={"space-between"}>
              <Flex w={"159px"} h={"44px"}>
                <Flex onClick={()=>{setQuantity(quantity - 1)}} _hover={{background:"#DB4444" , color:"white"}} fontSize={"22px"} cursor={"pointer"} border={"1px solid "} borderColor={useColorModeValue("#d7d7d7","#333333")} justifyContent={"center"} alignItems={"center"} w={"41px"} h={"44px"}><AiOutlineMinus /></Flex>
                <Flex fontSize={"20px"} border={"1px solid "} borderColor={useColorModeValue("#d7d7d7","#333333")} justifyContent={"center"} alignItems={"center"} w={"80px"} h={"44px"}>{quantity}</Flex>
                <Flex onClick={()=>{setQuantity(quantity + 1)}} _hover={{background:"#DB4444" , color:"white"}} fontSize={"22px"} cursor={"pointer"} border={"1px solid "} borderColor={useColorModeValue("#d7d7d7","#333333")} justifyContent={"center"} alignItems={"center"} w={"41px"} h={"44px"}><BsPlusLg /> </Flex>
              </Flex>
              <Flex justifyContent={"space-evenly"} w={"250px"}>
                <Button borderRadius={4} _hover={{ background :"#E07575"}} alignSelf={"center"} color={"white"} w={"156px"} h={"44px"} bg={"#DB4444"}>Buy Now</Button>
                <Flex justifyContent={"center"} alignItems={"center"} w={"44px"} h={"44px"}  border={"1px solid"} borderColor={useColorModeValue("#d7d7d7","#333333")}><BsHeart /></Flex>
              </Flex>
            </Flex>
          </Flex>

            {/* features */}
            <Flex flexDirection={"column"} w={"399px"} h={"180px"}  >

              <Flex justifyContent={"space-evenly"} alignItems={"center"} w={"full"} h={"50%"} border={"1px solid "} borderColor={useColorModeValue("#d7d7d7","#333333")}><TbTruckDelivery size={"40px"}/>
                <Flex w={"80%"} flexDirection={"column"}>
                  <Text fontWeight={600}>Free Delivery</Text>
                  <Text color={useColorModeValue("black" , "#777777")} fontSize={"14"}>Enter your postal code for Delivery Availability</Text>
                </Flex>
              </Flex>

              <Flex justifyContent={"space-evenly"} alignItems={"center"} w={"full"} h={"50%"} border={"1px solid "} borderColor={useColorModeValue("#d7d7d7","#333333")}><HiMiniArrowPath size={"40px"}/>
                <Flex w={"80%"} flexDirection={"column"}>
                  <Text fontWeight={600}>Return Delivery</Text>
                  <Text color={useColorModeValue("black" , "#777777")} fontSize={"14"}>Free 30 Days Delivery Returns. Details</Text>
                </Flex>
              </Flex>
            </Flex>

        </Flex>

      </Flex>
      {/* section two */}
      < HearderSection title={"Related Item"} isTitleBack={true} />
      <ProductCorousel>
      < ProductInfoItem />
      < ProductInfoItem />
      < ProductInfoItem />
      < ProductInfoItem />
      < ProductInfoItem />
      </ProductCorousel>
    </Flex>
  )
}

export default Product