import React from "react";
import { Box, Heading, Progress } from "@chakra-ui/core";
const HeroCards = () => {
  return (
    <Box
      width={{ md: 40, lg: 560, xl: 450 }}
      backgroundColor="green.400"
      display="grid"
      gridTemplateColumns="1fr 1fr"
    >
      <Box
        rounded="35px"
        backgroundColor="brand.700"
        width="210px"
        height="160px"
        padding={6}
      />
      <Box
        rounded="35px"
        backgroundColor="gray.100"
        width="260px"
        height="380px"
        padding={6}
      />
    </Box>
  );
};

export default HeroCards;
