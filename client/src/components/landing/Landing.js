import React from "react";
import { Box, Text, Flex, Grid } from "@chakra-ui/core";
import Hero from "../elements/Hero";
const Landing = () => {
  const jobFields = [
    "Musicians",
    "Bloggers",
    "Photographers",
    "Education",
    "Petrolium",
  ];

  return (
    <Grid gridTemplateRows="repeat(3, auto)">
      <Hero />
    </Grid>
  );
};

export default Landing;
