import { Box } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { getQuantity } from '../../../utils/getquanity';
import Container from '../Container';
import AvatarNavbar from './AvatarNavbar';

import HamburgerOptions from './Hamburger';
import Logo from './Logo';
import Menuitem from './Menuitem';

import Searchbar from './Searchbar';

const Navbar = () => {
  
  const authDetails = useSelector((store) => store.authReducer);
 
  return (
    <Box
      backgroundColor={"white"}
      width={"full"}
      boxShadow={"xl"}
      position={"fixed"}
      p={0}
      px={[2, 4]}
      py={[2, 2]}
      zIndex={50}
      top={0}
      left={0}
      mt={0}
    >
      <Container>
        <Box
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
          gap={"4"}
        >
          <Box width={{ base: "40%", lg: "10%" }}>
            <Logo />
          </Box>
          <Box
            display={{ base: "none", lg: "flex" }}
            width={{ base: "auto", md: "30%" }}
          >
           
          </Box>
          <Box width={{ base: "auto", md: "25%" }}>
            <Searchbar />
          </Box>

          <Box
            display={{ base: "none", lg: "flex" }}
            width={{ base: "auto", md: "15%" }}
          >
           
          </Box>

          <Box width={{ base: "auto", md: "5%" }}>
            <Menuitem isAuth={authDetails.isAuth}>
              <AvatarNavbar authDetails={authDetails} />
            </Menuitem>
          </Box>
          <Box display={{ base: "flex", lg: "none" }} alignItems={"center"}>
           

          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
