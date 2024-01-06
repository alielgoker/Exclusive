import  { useEffect, useState } from 'react'
import './Slider.scss';
import { sliderData } from './slider-data.js' 
import { BsArrowRight , BsArrowLeft} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const Slider = () => {
  const navigate = useNavigate()
  const [currentSlide, setcurrentSlide] = useState(0)
  const slideLength = sliderData.length;
  const autoScroll = true;
  let sliderInterval;
  const intervalTime = 5000;

  const nextSlide = ()  => {setcurrentSlide( currentSlide === slideLength - 1 ? 0 : currentSlide + 1 )}
  const prevSlide = ()  => {setcurrentSlide( currentSlide === 0 ? slideLength - 1 : currentSlide -1 )}

  useEffect(()=>{setcurrentSlide(0)},[])
  useEffect(()=>{if (autoScroll){
    const auto = ()=>{
      // eslint-disable-next-line react-hooks/exhaustive-deps
      sliderInterval = setInterval(nextSlide,intervalTime)
    }
    auto()
  }
  return () =>clearInterval(sliderInterval)
},[currentSlide , intervalTime , autoScroll])
  return (
    <div className="slider">
      <BsArrowLeft  className="arrow prev"  onClick={prevSlide}/>
      <BsArrowRight  className="arrow next" onClick={nextSlide}/>
      {sliderData.map((slide, index) => {
        const {image , heading , desc} = slide
        return(
          <div key={index} className={index === currentSlide ? "slide current" : "slide"}>
            {index === currentSlide && (
              <>
              <img src={image} alt="slide" />
              <div className="content">
                <span className="span1"></span>
                <span className="span2"></span>
                <span className="span3"></span>
                <span className="span4"></span>
                <h1>{heading}</h1>
                <p>{desc}</p>
                <hr />
                <button className='--btn --btn-primary' onClick={() => navigate("/shop")}>Shop Now</button>
              </div>
              </>
            )}
            </div>
        )
      })}
    </div>
  )
}

export default Slider 