import React from "react";
import TextLoop from "react-text-loop";
import { Box, Text, Image } from "@chakra-ui/core";
import QuickRegister from "./QuickRegister";
import HeroImg from "../../assets/img/hero-builder.png";
import ResumeSection from "../resume-example/ResumeSection";
import ResumeDemo from "../resume-demo/ResumeDemo";
const Landing = () => {
  const jobFields = [
    "Musicians",
    "Bloggers",
    "Photographers",
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
            width={{ sm: "90%", xl: "90%" }}
            letterSpacing="tight"
            fontWeight="700"
            display="block"
            color="gray.700"
            fontSize={{ sm: "4xl", xl: "5.2rem" }}
            lineHeight={{ sm: "1.2", xl: " 5.6rem" }}
          >
            We help
            <Text color="brand.800">
              <TextLoop>{listItem}</TextLoop>
            </Text>
            create their online presence
          </Text>
          <Text mt={12} color="gray.500" width={{ xl: "60%" }}>
            Start earning by taking on offers from different companies. Start
            earning by taking on offers from different companies.
          </Text>
          <QuickRegister />
        </Box>
        <Box flexShrink="0">
          {/* <HeroCards /> */}
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
      <ResumeDemo />
    </div>
  );
};

export default Landing;
