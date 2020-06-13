import React from "react";
import {
  ButtonGroup,
  IconButton,
  Flex,
  // Editable,
  // EditablePreview,
  // EditableInput,
  Box,
  Tabs,
  TabPanel,
  Tab,
  TabList,
  TabPanels,
  Heading,
} from "@chakra-ui/core";
import ResumeBase from "./ResumeTemplate";
const ResumeDemo = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ sm: "column", xl: "row" }}
      paddingX={{ sm: "2rem", md: "4rem", lg: "6rem" }}
      paddingY={16}
    >
      <Heading
        color="brand.800"
        as="h2"
        mr="2rem"
        fontWeight="700"
        fontSize={{ sm: "2xl", xl: "6xl" }}
        lineHeight={{ sm: "1.2", xl: " 4.4rem" }}
        letterSpacing="tight"
        mb={{ sm: "12", xl: "0" }}
      >
        Recuriter approved resumes that actuallly works
      </Heading>
      <Tabs
        variantColor="brand.900"
        size="md"
        width={{ sm: "100%", xl: "550px" }}
      >
        <TabList marginTop="4" marginBottom={{ base: "6" }} color="brand.900">
          <Tab _hover={{ color: "brand.800" }}>Software Engineer</Tab>
          <Tab _hover={{ color: "brand.800" }}>Field Architect</Tab>
          <Tab _hover={{ color: "brand.800" }}>HR Manager</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box
              width={{ sm: "100%", xl: "550px" }}
              position="relative"
              backgroundColor="white"
              rounded="sm"
              shadow="10px 10px 108px -53px rgba(0,0,0,0.4);"
              height={{ sm: "450px", xl: "710px" }}
            >
              <ResumeBase name="Karzan Ibrahmim" address="Erbil, Kurdistan" />
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
                <ResumeBase name="Zaid Masri" address="Bethlehem, Palestine" />
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
                <ResumeBase name="Ismael Pasha" address="Istanbul, Turkey" />
              </Box>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ResumeDemo;
