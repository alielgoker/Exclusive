import HearderSection from "./Header Section/HeaderSection"
import ProductItem from '../components/Carousel/Carousel Item/ProductItem'
import ProductCorousel from "./Carousel/Carousel"
import Btn from "./Button/Btn"
import { Flex } from "@chakra-ui/react"
const Product = () => {
  return (
    <>
    < HearderSection title={"Our Products"} desc={"Explore Our Products"} isTitleBack={true} mt={100}/>
    <Flex w={"full"} h={"50px"}></Flex>
    <ProductCorousel>
    < ProductItem costomColor={true} img={true} newProduct={true} />
    < ProductItem />
    < ProductItem costomColor={true} img={true} newProduct={true} />
    < ProductItem />
    < ProductItem />
    < ProductItem costomColor={true} img={true} newProduct={true} />
    < ProductItem />
    </ProductCorousel>
    <Flex className="separator" w={"full"} h={"90px"}></Flex>
    <ProductCorousel>
    < ProductItem />
    < ProductItem />
    < ProductItem />
    < ProductItem newProduct={true} />
    < ProductItem />
    < ProductItem />
    < ProductItem costomColor={true} img={true} />
    < ProductItem newProduct={true} />
    </ProductCorousel>
    <Btn />
    </>
  )
}

export default Product