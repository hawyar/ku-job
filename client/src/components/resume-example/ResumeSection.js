import React from "react";
import {
  Heading,
  Box,
  TabPanel,
  Tabs,
  TabPanels,
  TabList,
  Tab,
  Text,
} from "@chakra-ui/core";
import ResumeBase from "../resume-example/ResumeBase";

const ResumeSection = () => {
  return (
    <div>
      <Box
        paddingX={{ sm: "2rem", md: "4rem", lg: "6rem" }}
        paddingY={{ sm: "2rem", md: "4rem", lg: "6rem" }}
        mt="16"
        mb="16"
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
        </Box>
        <Box
          display="flex"
          flexDirection={{ sm: "column-reverse", xl: "column" }}
        >
          <Tabs
            variantColor="brand.900"
            size="md"
            width={{ sm: "100%", xl: "550px" }}
          >
            <TabList
              marginTop="4"
              marginBottom={{ base: "6" }}
              // backgroundColor="red.700"
            >
              <Tab color="brand.600" _hover={{ color: "brand.800" }}>
                Software Engineer
              </Tab>
              <Tab color="brand.600" _hover={{ color: "brand.800" }}>
                Field Architect
              </Tab>
              <Tab color="brand.600" _hover={{ color: "brand.800" }}>
                HR Manager
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Box
                  width={{ sm: "100%", xl: "550px" }}
                  position="relative"
                  backgroundColor="white"
                  rounded="sm"
                  shadow="10px 10px 108px -53px rgba(0,0,0,0.4);"
                  height={{ sm: "450px", xl: "750px" }}
                >
                  <ResumeBase
                    name="Karzan Ibrahmim"
                    address="Erbil, Kurdistan"
                  />
                </Box>
              </TabPanel>
              <TabPanel>
                <Box
                  width={{ sm: "100%", xl: "550px" }}
                  position="relative"
                  backgroundColor="white"
                  rounded="sm"
                  shadow="10px 10px 108px -53px rgba(0,0,0,0.4);"
                  height={{ sm: "450px", xl: "750px" }}
                >
                  <Box>
                    <ResumeBase
                      name="Zaid Masri"
                      address="Bethlehem, Palestine"
                    />
                  </Box>
                </Box>
              </TabPanel>
              <TabPanel>
                <Box
                  width={{ sm: "100%", xl: "550px" }}
                  position="relative"
                  backgroundColor="white"
                  rounded="sm"
                  shadow="10px 10px 108px -53px rgba(0,0,0,0.4);"
                  height={{ sm: "450px", xl: "750px" }}
                >
                  <Box>
                    <ResumeBase
                      name="Ismael Pasha"
                      address="Istanbul, Turkey"
                    />
                  </Box>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </div>
  );
};

export default ResumeSection;
