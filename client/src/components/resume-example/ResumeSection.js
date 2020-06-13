import React from "react";
import { Heading, Box, Text, Image } from "@chakra-ui/core";
import ResumeCardBase from "./ResumeCardBase";
import Img from "../../assets/img/05.png";

const ResumeSection = () => {
  return (
    <div>
      <Box
        paddingX={{ sm: "2rem", md: "4rem", lg: "6rem" }}
        paddingY={{ sm: "2rem", md: "4rem", lg: "6rem" }}
        mt="16"
        backgroundColor="gray.700"
        display="flex"
        justifyContent="space-between"
        flexDirection={{ sm: "column", xl: "row" }}
      >
        <Box width={{ sm: "100%", xl: "85%" }}>
          <Heading
            color="brand.600"
            as="h2"
            mr="2rem"
            fontWeight="700"
            fontSize={{ sm: "2xl", xl: "6xl" }}
            lineHeight={{ sm: "1.2", xl: " 4.4rem" }}
            letterSpacing="tight"
          >
            Recuriter approved resumes that actuallly works
          </Heading>
          <Text
            mt={12}
            color="brand.600"
            width="75%"
            mb={{ sm: "12", xl: "0" }}
          >
            We customize each reusme based on your intesrest and needs. Our pdf
            generator is grid-based which means we dont rely on templates. You
            cant fully customize your resume.
          </Text>
          <ResumeCardBase />
        </Box>
        <Image
          display={{ sm: "none", xl: "block" }}
          size="450px"
          objectFit="cover"
          src={Img}
          alt="Dan Abramov"
        />
      </Box>
    </div>
  );
};

export default ResumeSection;
