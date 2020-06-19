import React from "react";
import { Box, Text, Flex } from "@chakra-ui/core";
import QuickRegister from "../elements/QuickRegister";
const Hero = () => {
  return (
    <div>
      <Flex
        py={20}
        width={["100%", "85%", "80%", "75%"]}
        px={{ sm: "2rem", md: "4rem", lg: "6rem" }}
        flexDirection="column"
        margin="0 auto"
      >
        <Box mb={24} textAlign="center">
          <Text
            letterSpacing={{ sm: "-2px", xl: "-4px" }}
            fontSize={{ sm: "2rem", md: "4.8rem", xl: "5.2rem" }}
            lineHeight={{ sm: "1.2", xl: " 5.6rem" }}
            fontWeight="700"
          >
            We help you jumpstart your career
          </Text>
          <Text mt={8} fontSize={{ sm: "md", xl: "xl" }}>
            Get started wth our <strong>recruiter aproved</strong> resume
            creator studio
          </Text>
        </Box>
        <QuickRegister />
      </Flex>
    </div>
  );
};

export default Hero;
