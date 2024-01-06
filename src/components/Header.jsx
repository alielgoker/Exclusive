import {
  Box,
  Flex,
  Input,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  CiSearch,
  CiHeart,
  CiShoppingCart,
  CiDark,
  CiLight,
} from "react-icons/ci";
import { PiUserThin } from "react-icons/pi";
import { BsBagCheck, BsStar } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";

const Header = () => {
  const { toggleColorMode } = useColorMode();
  let mode = localStorage.getItem("chakra-ui-color-mode");
  let isCartCount = false;
  let isWishList = false;
  const accountPanel = (e) => {
    let dropdown = document.querySelector(".dropdowm");
    e.target.classList.toggle("user-account-active");
    if (e.target.classList.contains("user-account-active")) {
      dropdown.classList.add("show-dropdown");
    } else {
      dropdown.classList.remove("show-dropdown");
    }
  };
  const handleMenu = () => {
    let menuIcon = document.querySelector(".mobile-menu");
    let midLine = document.querySelector(".mid-line");
    menuIcon.classList.toggle("active-menu");
    midLine.classList.toggle("active-mid-line");
  };
  const handleClick = () => {
    let dropdown = document.querySelector(".dropdowm");
    let userIcon = document.querySelector(".user-icon");
    dropdown.classList.remove("show-dropdown");
    userIcon.classList.remove("user-account-active");
  };
  return (
    <>
      <Flex
        top={0}
        left={0}
        zIndex={999999999}
        w={"full"}
        bg={useColorModeValue("#edf2f7", "rgb(16 16 16)")}
        position={"fixed"}
        justifyContent={"space-around"}
        paddingY={"30px"}
      >
        <Flex justifyContent={"space-between"} w={"50%"}>
          {/* Logo */}
          <Link to="/" style={{ fontSize: "27px" }}>
            Exclusive
          </Link>
          {/* links */}
          <Flex
            alignItems={"center"}
            className="nav-links"
            justifyContent={"space-around"}
            w={330}
          >
            <Link className="links" to="/">Home</Link>
            <Link className="links" to="/contact">Contact</Link>
            <Link className="links" to="/about">About</Link>
            <Link className="links" to="/signin">Sign in</Link>
          </Flex>
        </Flex>
        {/* icons */}
        <Flex className="nav-icon">
          {mode === "dark" ? (
            <Box _hover={{color:"gold" ,transition:"0.5s"}}>
            <CiLight size={30} cursor={"pointer"} onClick={toggleColorMode} />
            </Box>
          ) : (            
          <Box _hover={{color:"#085ba9" ,transition:"0.5s"}}>
            <CiDark size={30} cursor={"pointer"} onClick={toggleColorMode} />
            </Box>
          )}
        </Flex>
        {/* Nav Features */}
        <Flex
          className="nav-features"
          alignItems={"center"}
          justifyContent={"space-between"}
          w={400}
        >
          {/* search box */}
          <Flex
            className="search-box"
            alignItems={"center"}
            justifyContent={"space-between"}
            w={260}
          >
            <Input
              w={"85%"}
              border={"none"}
              placeholder="What are you looking for?"
            />
            <Box _hover={{transform:"scale(1.2)" , transition:"0.5s"}}>
            <CiSearch cursor={"pointer"}  size={30} />
            </Box>
          </Flex>
          <Flex
            className="nav-control"
            position={"relative"}
            justifyContent={"space-between"}
            w={"110px"}
          >
            <Link to="/wishlist">
              <CiHeart size={30} />
            </Link>
            {/* wishlist */}
            {isWishList && (
              <Flex
                color={"white"}
                justifyContent={"center"}
                top={"-3px"}
                right={"73px"}
                alignItems={"center"}
                w={"18px"}
                h={"18px"}
                fontSize={"14"}
                borderRadius={"50%"}
                position={"absolute"}
                bg={"#db4444"}
              >
                0
              </Flex>
            )}
            <Link to="/cart">
              <CiShoppingCart size={30} />
            </Link>
            {/* cart count */}
            {isCartCount && (
              <Flex
                color={"white"}
                justifyContent={"center"}
                top={"-5px"}
                right={"30px"}
                alignItems={"center"}
                w={"18px"}
                h={"18px"}
                fontSize={"14"}
                borderRadius={"50%"}
                position={"absolute"}
                bg={"#db4444"}
              >
                0
              </Flex>
            )}

                <PiUserThin
                  className="user-icon"
                  onClick={(e) => {
                    accountPanel(e);
                  }}
                  color={useColorModeValue("black", "white")}
                  cursor={"pointer"}
                  size={30}
                />

            {/* user panel */}
            <Flex
              className="dropdowm"
              color={"white"}
              borderRadius={4}
              flexDirection={"column"}
              justifyContent={"space-evenly"}
              bg={useColorModeValue(
                "rgb(0 0 0 / 18%)",
                "rgb(255 255 255 / 18%)"
              )}
              backdropFilter="blur(75px)"
              position={"absolute"}
              top={"18px"}
              right={0}
              opacity={0}
              visibility={"hidden"}
              w={"225px"}
              h={"208px"}
            >
              <Link onClick={handleClick} to="profile">
                <Flex
                  style={{ paddingLeft: "15px" }}
                  cursor={"pointer"}
                  className="profile-boxs"
                  p={"3px"}
                >
                  <AiOutlineUser cursor={"pointer"} size={25} />
                  <Text marginLeft={"20px"}> Manage My Account </Text>
                </Flex>
              </Link>

              <Link onClick={handleClick}>
                <Flex
                  style={{ paddingLeft: "15px" }}
                  cursor={"pointer"}
                  className="profile-boxs"
                  p={"3px"}
                >
                  <BsBagCheck cursor={"pointer"} size={25} />
                  <Text marginLeft={"20px"}> My Order </Text>
                </Flex>
              </Link>

              <Link onClick={handleClick}>
                <Flex
                  style={{ paddingLeft: "15px" }}
                  cursor={"pointer"}
                  className="profile-boxs"
                  p={"3px"}
                >
                  <MdOutlineCancel cursor={"pointer"} size={25} />
                  <Text marginLeft={"20px"}> My Cancellations </Text>
                </Flex>
              </Link>

              {/* <Flex style={{paddingLeft:"15px"}} cursor={"pointer"}  className="profile-boxs"  p={"3px"}>
        <AiOutlineHeart   cursor={"pointer"} size={25} />
        <Text marginLeft={"20px"}> My Favorite </Text>
          </Flex> */}
              <Link onClick={handleClick}>
                <Flex
                  style={{ paddingLeft: "15px" }}
                  cursor={"pointer"}
                  className="profile-boxs"
                  p={"3px"}
                >
                  <BsStar cursor={"pointer"} size={25} />
                  <Text marginLeft={"20px"}> My Reviews </Text>
                </Flex>
              </Link>
              <Link onClick={handleClick}>
                <Flex
                  style={{ paddingLeft: "15px" }}
                  cursor={"pointer"}
                  className="profile-boxs"
                  p={"3px"}
                >
                  <BiLogOut cursor={"pointer"} size={25} />
                  <Text marginLeft={"20px"}> Logout </Text>
                </Flex>
              </Link>

            </Flex>
          </Flex>
          {/* mobile menu */}
          <Flex
            onClick={handleMenu}
            display={"none"}
            className="mobile-menu-icon"
            h={"40px"}
            cursor={"pointer"}
            flexDirection={"column"}
            justifyContent={"space-around"}
            alignItems={"flex-end"}
          >
            <Box
              borderTopLeftRadius={5}
              borderBottomLeftRadius={5}
              w={"35px"}
              h={"2px"}
              bg={useColorModeValue("black", "white")}
            ></Box>
            <Box
              transition={"0.5s"}
              className="mid-line"
              borderTopLeftRadius={5}
              borderBottomLeftRadius={5}
              w={"25px"}
              h={"2px"}
              bg={useColorModeValue("black", "white")}
            ></Box>
            <Box
              borderTopLeftRadius={5}
              borderBottomLeftRadius={5}
              w={"35px"}
              h={"2px"}
              bg={useColorModeValue("black", "white")}
            ></Box>
          </Flex>
        </Flex>
      </Flex>
      {/* submenu */}
      <Flex
        transition={"0.5s"}
        className="mobile-menu"
        display={"none"}
        opacity={0}
        left={"550px"}
        flexDirection={"column"}
        position={"absolute"}
        bg={useColorModeValue("white", "black")}
        w={"full"}
        h={"full"}
        zIndex={999999}
      >
        <Link onClick={handleMenu} to="/signup">
          {" "}
          <Flex
            _hover={{ background: "#7d7c7d21" }}
            cursor={"pointer"}
            marginTop={"15px"}
            fontSize={"20px"}
            w={"full"}
            h={"90px"}
            justifyContent={"center"}
            alignItems={"center"}
            border={"1px solid "}
            borderColor={useColorModeValue("#a3a3a3", "#3d3c3c")}
          >
            {" "}
            Sign Up{" "}
          </Flex>{" "}
        </Link>
        <Link onClick={handleMenu} to="/">
          {" "}
          <Flex
            _hover={{ background: "#7d7c7d21" }}
            cursor={"pointer"}
            marginY={"5px"}
            fontSize={"20px"}
            w={"full"}
            h={"90px"}
            justifyContent={"center"}
            alignItems={"center"}
            border={"1px solid "}
            borderColor={useColorModeValue("#a3a3a3", "#3d3c3c")}
          >
            {" "}
            Home{" "}
          </Flex>{" "}
        </Link>
        <Link onClick={handleMenu} to="/about">
          {" "}
          <Flex
            _hover={{ background: "#7d7c7d21" }}
            cursor={"pointer"}
            marginY={"5px"}
            fontSize={"20px"}
            w={"full"}
            h={"90px"}
            justifyContent={"center"}
            alignItems={"center"}
            border={"1px solid "}
            borderColor={useColorModeValue("#a3a3a3", "#3d3c3c")}
          >
            {" "}
            About{" "}
          </Flex>{" "}
        </Link>
        <Link onClick={handleMenu} to="/contact">
          {" "}
          <Flex
            _hover={{ background: "#7d7c7d21" }}
            cursor={"pointer"}
            marginY={"5px"}
            fontSize={"20px"}
            w={"full"}
            h={"90px"}
            justifyContent={"center"}
            alignItems={"center"}
            border={"1px solid "}
            borderColor={useColorModeValue("#a3a3a3", "#3d3c3c")}
          >
            {" "}
            Contact{" "}
          </Flex>{" "}
        </Link>
        <Flex
          gap={"10px"}
          _hover={{ background: "#7d7c7d21" }}
          cursor={"pointer"}
          marginY={"5px"}
          fontSize={"20px"}
          w={"full"}
          h={"90px"}
          justifyContent={"center"}
          alignItems={"center"}
          border={"1px solid "}
          borderColor={useColorModeValue("#a3a3a3", "#3d3c3c")}
        >
          {" "}
          Color Mode
          <Flex>
            {mode === "dark" ? (
              <Flex gap={"10px"}>
                {" "}
                <CiLight
                  size={30}
                  cursor={"pointer"}
                  onClick={toggleColorMode}
                />{" "}
                Light{" "}
              </Flex>
            ) : (
              <Flex gap={"10px"}>
                {" "}
                <CiDark
                  size={30}
                  cursor={"pointer"}
                  onClick={toggleColorMode}
                />{" "}
                Dark{" "}
              </Flex>
            )}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
