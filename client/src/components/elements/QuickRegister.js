import React, { useState } from "react";
import { Input, List, ListIcon, ListItem, Button, Box } from "@chakra-ui/core";
import * as yup from "yup";

let EmailSchema = yup.object().shape({
  email: yup.string().email().required(),
});
const QuickRegister = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    localStorage.setItem("quickRegisterEmail", e.target.value);
    setValue(e.target.value);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="left"
      marginTop="12"
      width="100%"
    >
      <Box
        width={{ sm: "100%", xl: "75%" }}
        display="flex"
        flexDirection={{ sm: "column", xl: "row" }}
      >
        <Input
          backgroundColor="gray.50"
          aria-label="Email Address"
          aria-describedby="Email Address"
          isRequired={true}
          value={value}
          onChange={handleChange}
          placeholder="Enter email address"
          size="lg"
          padding="2"
          width="100%"
          marginBottom="4"
        />
        <Button
          href="/register"
          as="a"
          size="lg"
          width={{ sm: "100%", xl: "auto" }}
          mt={{ sm: "1", xl: "0" }}
          ml={{ xl: "1rem" }}
          _hover={{
            backgroundColor: "brand.800",
            borderColor: "brand.800",
            color: "brand.900",
          }}
          backgroundColor="brand.900"
          color="brand.600"
        >
          Get Started
        </Button>
      </Box>
      <List
        mt="6"
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
          One click resume
        </ListItem>
        <ListItem>
          <ListIcon icon="check-circle" color="gray.600" />
          24/7 Customer support
        </ListItem>
      </List>
    </Box>
  );
};

export default QuickRegister;
