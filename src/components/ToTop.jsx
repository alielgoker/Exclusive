import ScrollToTop from "react-scroll-to-top";
const ToTop = () => {
const style = {
  display:"flex" ,
  justifyContent:"center" ,
  alignItems:"center",
  borderRadius:"4px"
}
  return (
    <ScrollToTop smooth style={style} />
  )
}

export default ToTop