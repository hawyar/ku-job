import React, { useState, useEffect } from "react";
import { Input, List, ListIcon, ListItem, Button, Flex } from "@chakra-ui/core";
import { LinkWrapper } from "../utils";

const QuickRegister = () => {
  const [value, setValue] = useState(localStorage.getItem("quickEmail") || "");

  useEffect(() => {
    sessionStorage.setItem("quickEmail", value);
  });
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Flex direction="column" width="100%" align="center" justify="center">
      <Flex
        width={{ sm: "100%", xl: "65%" }}
        direction={{ sm: "column", xl: "row" }}
      >
        <Input
          width={{ sm: "100%", xl: "65%" }}
          backgroundColor="gray.50"
          aria-label="Email Address"
          aria-describedby="Email Address"
          isRequired={true}
          defaultValue=""
          value={value}
          onChange={handleChange}
          placeholder="Enter email address"
          size="lg"
          padding="2"
          width="100%"
          mb={[2, 4, 0, 0]}
        />

        <LinkWrapper to="/register">
          <Button
            fontSize="md"
            size="lg"
            width={{ sm: "100%", xl: "auto" }}
            mt={{ sm: "1", xl: "0" }}
            ml={{ xl: "1rem" }}
            _hover={{
              backgroundColor: "brand.800",
              color: "brand.900",
            }}
            backgroundColor="brand.900"
            color="brand.600"
          >
            Get Started
          </Button>
        </LinkWrapper>
      </Flex>
      <List mt={12} display="flex" flexDirection={{ sm: "column", xl: "row" }}>
        <ListItem mr="8">
          <ListIcon icon="check-circle" color="gray.600" />
          Free 14-day trial
        </ListItem>
        <ListItem mr="8">
          <ListIcon icon="check-circle" color="gray.600" />
          One click resume
        </ListItem>
        <ListItem>
          <ListIcon icon="check-circle" color="gray.600" />
          24/7 Customer support
        </ListItem>
      </List>
    </Flex>
  );
};

export default QuickRegister;
