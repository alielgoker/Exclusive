
import { Flex } from "@chakra-ui/react";
import HearderSection from "./Header Section/HeaderSection";
import "../index.css";
import Btn from "./Button/Btn";
import ProductCorousel from "./Carousel/Carousel";
import CorouselItem from "./Carousel/Carousel Item/SalesItem";

const SalesSection = () => {

  return (
    <>
      <HearderSection title={"Today's"} desc={"Flash Sales"} isTitleBack={true} mt={100} />
      <Flex w={"full"} h={"50px"}></Flex>
        <ProductCorousel>
          <CorouselItem discount={true}/>
          <CorouselItem discount={true}/>
          <CorouselItem discount={true}/>
          <CorouselItem discount={true}/>
          <CorouselItem discount={true}/>
          <CorouselItem discount={true}/>
        </ProductCorousel>
        <Btn />
    </>
  );
};

export default SalesSection;
