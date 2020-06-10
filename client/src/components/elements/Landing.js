import React from "react";
import TextLoop from "react-text-loop";
import { Box, Image, Text } from "@chakra-ui/core";
import HeroImg from "../../assets/img/07.png";
import QuickRegister from "./QuickRegister";
const Landing = () => {
  const jobFields = [
    "Engineering",
    "Finanace",
    "Business",
    "Education",
    "Petrolium",
  ];

  const listItem = jobFields.map((e) => <span>{e}</span>);

  return (
    <div>
      <Box
        py="1.25rem"
        px={{ sm: "2rem", md: "6rem", lg: "10rem" }}
        display={{ md: "flex" }}
      >
        <Box mt={{ base: 4, md: 0 }} mr={{ md: 6 }} mb={{ base: 6 }}>
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="cl"
            letterSpacing="wide"
            color="brand.700"
          >
            <TextLoop>{listItem}</TextLoop>
          </Text>
          <Text
            mt={1}
            display="block"
            fontSize={{ sm: "4xl", xl: "6xl" }}
            lineHeight="normal"
            fontWeight="7"
          >
            Jumpstart your career with one resume
          </Text>
          <Text mt={2} color="gray.500" width={{ xl: "60%" }}>
            Getting a new business off the ground is a lot of hard work. Here
            are five ideas you can use to find your first customers.
          </Text>

          <QuickRegister />
        </Box>
        <Box flexShrink="0">
          <Image
            display={{ sm: "none", xl: "block" }}
            rounded="md"
            width={{ md: 40, lg: 560, xl: 560 }}
            objectFit="cover"
            src={HeroImg}
            size={{ sm: "100%", xl: "md" }}
            alt="Connections"
          />
        </Box>
      </Box>
    </div>
  );
};

export default Landing;
