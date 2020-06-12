import React from "react";
import TextLoop from "react-text-loop";
import { Box, Text, Image } from "@chakra-ui/core";
import QuickRegister from "./QuickRegister";
import HeroImg from "../../assets/img/hero-builder.png";
import ResumeSection from "../resume-example/ResumeSection";
const Landing = () => {
  const jobFields = [
    "Engineering",
    "Finanace",
    "Business",
    "Education",
    "Petrolium",
  ];

  const listItem = jobFields.map((e) => <span key={e}>{e}</span>);

  return (
    <div>
      <Box
        mt={{ sm: "0", xl: "8" }}
        mb={{ sm: "8", xl: "8" }}
        paddingX={{ sm: "2rem", md: "4rem", lg: "6rem" }}
        display={{ md: "flex" }}
        flexDirection={{ sm: "column-reverse", xl: "row" }}
      >
        <Box mr={{ md: 6 }}>
          <Text
            width={{ xl: "90%" }}
            letterSpacing="tight"
            fontWeight="700"
            display="block"
            color="gray.700"
            fontSize={{ sm: "4xl", xl: "5.2rem" }}
            lineHeight={{ sm: "1.2", xl: " 5.6rem" }}
          >
            We help you start your career in
            <Text color="brand.800">
              <TextLoop>{listItem}</TextLoop>
            </Text>
          </Text>
          <Text mt={12} color="gray.500" width={{ xl: "60%" }}>
            Getting into a new career is not easy. Let us do the heavy lifting
            by providing a magic resume that actaully works.
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
      <ResumeSection />
    </div>
  );
};

export default Landing;
