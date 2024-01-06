import { Button, Flex } from "@chakra-ui/react"
import HearderSection from "../components/Header Section/HeaderSection"
import WishListItem from "../components/Carousel/Carousel Item/WishListItem"
import ProductCorousel from "../components/Carousel/Carousel"
import ForyouItem from "../components/Carousel/Carousel Item/ForyouItem"


const WishList = () => {
  return (
    <Flex  flexDirection={"column"}>
      <HearderSection title={"Wishlist (3)"}  isTitleBack={false} mt={0} />
      <ProductCorousel>
      <WishListItem />
      <WishListItem isSale={true} />
      <WishListItem />
      <WishListItem isSale={true} />
      <WishListItem />
      </ProductCorousel>
      <HearderSection title={"Just For You"}  isTitleBack={true} >
        <Button
        w={150}
        h={"56px"}
        border={"1px solid #cbcaca"}
        >See All</Button>
        </HearderSection>
        <ProductCorousel>
      <ForyouItem isNew={true} />
      <ForyouItem />
      <ForyouItem isSale={true}/>
      <ForyouItem isNew={true} />
      <ForyouItem />
      <ForyouItem isSale={true}/>
      </ProductCorousel>
    </Flex>
  )
}

export default WishList