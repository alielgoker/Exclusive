
import BestSelling from "../components/BestSelling"
import CategorySection from "../components/CategorySection"
import Features from "../components/Features"
import NewArrival from "../components/NewArrival"
import SalesSection from "../components/SalesSection"
import Banner from "../components/banner/Banner"
import Product from "../components/product"
import Slier from "../components/slider/slider"

const Home = () => {
  return (
    <>
    < Slier />
    < SalesSection />
    <CategorySection />
    < BestSelling />
    < Banner />
    < Product />
    < NewArrival />
    < Features />
    </>
  )
}

export default Home