import React from "react";
import TextLoop from "react-text-loop";
import {
  Box,
  Text,
  List,
  ListIcon,
  ListItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
} from "@chakra-ui/core";
import QuickRegister from "./QuickRegister";

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
        paddingX={{ sm: "2rem", md: "4rem", lg: "6rem" }}
        display={{ md: "flex" }}
        flexDirection={{ sm: "column-reverse", xl: "row" }}
      >
        <Box mr={{ md: 6 }} mb={{ base: 6 }}>
          <Text
            width={{ xl: "75%" }}
            letterSpacing="tight"
            fontWeight="700"
            display="block"
            fontSize={{ sm: "4xl", xl: "5.2rem" }}
            lineHeight={{ sm: "1.2", xl: " 5.2rem" }}
          >
            Everything you need to start your career in{" "}
            <Text color="brand.800">
              <TextLoop>{listItem}</TextLoop>
            </Text>
          </Text>
          <Text mt={12} color="gray.500" width={{ xl: "60%" }}>
            Getting into a new career is not easy. Let us do the heavy lifting
            by providing a magic resume that actaully works.
          </Text>
          <QuickRegister />
          <List
            spacing={3}
            display="flex"
            flexDirection={{ sm: "column", xl: "row" }}
          >
            <ListItem mr="8">
              <ListIcon icon="check-circle" color="gray.600" />
              Free 14-day trial
            </ListItem>
            <ListItem mr="8">
              <ListIcon icon="check-circle" color="gray.600" />
              One click magic resume
            </ListItem>
            <ListItem>
              <ListIcon icon="check-circle" color="gray.600" />
              24/7 Customer support
            </ListItem>
          </List>
        </Box>
        <Box
          display="flex"
          flexShrink="0"
          marginRight={{ sm: "0", xl: "12" }}
          flexDirection={{ sm: "column-reverse", xl: "column" }}
        >
          <Tabs variantColor="brand.900" size="md">
            <TabPanels>
              <TabPanel>
                <Box
                  width={{ sm: "100%", xl: "450px" }}
                  height={{ sm: "200px", xl: "450px" }}
                  position="relative"
                  backgroundColor="white"
                  height="550px"
                  rounded="md"
                  shadow="10px 10px 108px -53px rgba(0,0,0,0.4);"
                >
                  <Box padding="6" position="relative">
                    <Heading as="h3" size="md">
                      Ziad Masri
                    </Heading>
                    <Text fontSize="sm" marginTop="1">
                      Software Engineer
                    </Text>
                  </Box>
                </Box>
              </TabPanel>
              <TabPanel>
                <Box
                  width={{ sm: "100%", xl: "450px" }}
                  height={{ sm: "200px", xl: "450px" }}
                  position="relative"
                  backgroundColor="white"
                  height="550px"
                  rounded="md"
                  shadow="10px 10px 108px -53px rgba(0,0,0,0.4);"
                >
                  <Box padding="6">Panel Two</Box>
                </Box>
              </TabPanel>
              <TabPanel>
                <Box
                  width={{ sm: "100%", xl: "450px" }}
                  height={{ sm: "200px", xl: "450px" }}
                  position="relative"
                  backgroundColor="white"
                  height="550px"
                  rounded="md"
                  shadow="10px 10px 108px -53px rgba(0,0,0,0.4);"
                >
                  <Box padding="6">Panel Three</Box>
                </Box>
              </TabPanel>
            </TabPanels>
            <TabList marginTop="4">
              <Tab _hover={{ color: "brand.800" }}>Software Engineer</Tab>
              <Tab _hover={{ color: "brand.800" }}>Field Architect</Tab>
              <Tab _hover={{ color: "brand.800" }}>HR Manager</Tab>
            </TabList>
          </Tabs>
        </Box>
      </Box>
    </div>
  );
};

export default Landing;
