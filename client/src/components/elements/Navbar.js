import React from "react";
import { Box, Heading, Flex, Link, Button } from "@chakra-ui/core";
import { LinkWrapper } from "../utils";
const MenuItems = ({ children, link }) => (
  <Link href={link} mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Link>
);

const Navbar = (props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      px={{ sm: "2rem", md: "4rem", lg: "6rem" }}
      paddingY="2rem"
      color="brand.900"
      {...props}
      position="sticky"
      top="0"
      zIndex="12"
      backgroundColor="white"
    >
      <Flex align="center" mr={5}>
        <Heading
          as="a"
          href="/"
          fontSize={{ sm: "1.5rem" }}
          letterSpacing={"-.09rem"}
          fontFamily="Playfair Display"
        >
          Norem
        </Heading>
      </Flex>

      <Box display={{ sm: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="brand.900"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={0}
      >
        <MenuItems link="/">Dashboard</MenuItems>
        <MenuItems link="/register">Studio</MenuItems>
        <MenuItems>Career Center</MenuItems>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Box
          display={{ sm: show ? "flex" : "block" }}
          flexDirection={{ sm: show ? "column" : "row" }}
        >
          <LinkWrapper to="/login">
            <Button
              _hover={{
                backgroundColor: "brand.800",
                borderColor: "brand.800",
              }}
              fontSize="sm"
              size="md"
              bg="transparent"
            >
              Log in
            </Button>
          </LinkWrapper>

          <LinkWrapper to="/register">
            <Button
              ml={{ sm: show ? "0" : "1.25rem" }}
              backgroundColor="brand.900"
              color="brand.600"
              fontSize="sm"
              size="md"
              mt={{ sm: show ? "1.25rem" : "0" }}
              _hover={{ backgroundColor: "brand.800", color: "brand.900" }}
            >
              Sign up
            </Button>
          </LinkWrapper>
        </Box>
      </Box>
    </Flex>
  );
};
export default Navbar;
