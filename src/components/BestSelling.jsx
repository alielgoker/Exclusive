import {  Flex } from "@chakra-ui/react"
import HearderSection from "./Header Section/HeaderSection"
import ProductCorousel from "./Carousel/Carousel"
import BestSellingItem from '../components/Carousel/Carousel Item/BestSellingItem'
import Btn from "./Button/Btn"


const BestSelling = () => {
  return (
    <>
    <HearderSection title={"This Month"} desc={"Best Selling Products"} isTitleBack={true} mt={100} />
      {/* <Flex alignItems={"flex-end"}>
      <Button
      bg={"#DB4444"}
      color={"white"}
      w={"159px"}
      h={"56px"}
      _hover={{background:"#E07575"}}
      >View All</Button>
      </Flex>
      </HearderSection> */}
      <Flex h={50}></Flex>
      <ProductCorousel>
        <BestSellingItem />
        <BestSellingItem />
        <BestSellingItem />
        <BestSellingItem />
        <BestSellingItem />
        <BestSellingItem />
        <BestSellingItem />
      </ProductCorousel>
      < Btn />
    </>
  )
}

export default BestSelling