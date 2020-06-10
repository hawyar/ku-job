import React from "react";
import { Box, Heading, Flex, Text, Button } from "@chakra-ui/core";

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
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
      paddingX={{ sm: "2rem", md: "6rem", lg: "10rem" }}
      paddingY="1.25rem"
      bg="brand.900"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          K& Career
        </Heading>
      </Flex>

      <Box display={{ sm: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="white"
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
        <MenuItems>Jobs</MenuItems>
        <MenuItems>Blog</MenuItems>
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
          <Button size="md" bg="transparent" border="1px">
            Log in
          </Button>
          <Button
            ml={{ sm: show ? "0" : "1.25rem" }}
            backgroundColor="brand.700"
            size="md"
            mt={{ sm: show ? "1.25rem" : "0" }}
          >
            Button
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};
export default Navbar;
