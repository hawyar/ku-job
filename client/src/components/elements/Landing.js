import React from "react";
import TextLoop from "react-text-loop";
// import QuickRegister from "../elements/QuickRegister";
import { Box, Image, Text, Link } from "@chakra-ui/core";
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
            color="teal.600"
          >
            <TextLoop>{listItem}</TextLoop>
          </Text>
          <Link
            mt={1}
            display="block"
            fontSize="lg"
            lineHeight="normal"
            fontWeight="semibold"
            href="#"
          >
            Finding customers for your new business
          </Link>
          <Text mt={2} color="gray.500" width={{ xl: "60%" }}>
            Getting a new business off the ground is a lot of hard work. Here
            are five ideas you can use to find your first customers.
          </Text>
        </Box>
        <Box flexShrink="0">
          <Image
            rounded="md"
            width={{ md: 40, lg: 560, xl: 560 }}
            backgroundSize="contain"
            backgroundRepeat="repeat"
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Woman paying for a purchase"
          />
        </Box>
      </Box>
    </div>
  );
};

export default Landing;
