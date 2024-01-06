
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from './responsive';

// eslint-disable-next-line react/prop-types
const ProductCorousel = ({children}) => {
  return (
    <div>
      <Carousel
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        customTransition="all 500ms ease"
        transitionDuration={1000}
        itemClass="costom-carousel"
        containerClass="carousel-container"
      >
        {children}
      </Carousel>
    </div>
  )
}

export default ProductCorousel