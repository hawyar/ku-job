import React from "react";
import {
  Box,
  Text,
  List,
  ListItem,
  Heading,
  Divider,
  Stack,
} from "@chakra-ui/core";

const ResumeBase = (props) => {
  return (
    <div>
      <Box padding="6" position="relative">
        <Heading as="h3" size="md">
          {props.name}
        </Heading>
        <Text fontSize="xs" marginTop="1">
          {props.address}
        </Text>
        <Divider />
        <Heading marginTop="4" as="h6" size="xs">
          Summary
        </Heading>
        <Text fontSize="10px" marginTop="2">
          Ambitious Software Engineer eager to contribute developed knowledge in
          Object-Oriented Programming. Skilled in Java, MySQL, and Web Services
          developed using Node js. Adaptable and willing to relocate.
        </Text>
        <Heading marginTop="2" as="h6" size="xs">
          Skills
        </Heading>
        <Text fontSize="xs" marginTop="2">
          <Stack isInline spacing={8}>
            <List styleType="disc">
              <ListItem>Java</ListItem>
              <ListItem>React</ListItem>
              <ListItem>HTML / CSS</ListItem>
            </List>
            <List styleType="disc">
              <ListItem>Git / GitHub</ListItem>
              <ListItem>Node</ListItem>
              <ListItem>Postman</ListItem>
            </List>
          </Stack>
        </Text>
        <Heading marginTop="2" as="h6" size="xs">
          Summary
        </Heading>
        <Text fontSize="xs" marginTop="2">
          Ambitious Software Engineer eager to contribute developed knowledge in
          Object-Oriented Programming. Skilled in Java, MySQL, and Web Services
          developed using Node js. Adaptable and willing to relocate.
        </Text>
      </Box>
    </div>
  );
};

export default ResumeBase;
