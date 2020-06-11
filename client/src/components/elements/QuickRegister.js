import React, { useState } from "react";
import { Input, Button, Box } from "@chakra-ui/core";

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
      flexDirection={{ sm: "column", xl: "row" }}
      alignItems="center"
      margin={{ sm: "2rem 0 1.2rem 0", xl: "2rem 0" }}
      width="100"
    >
      <Input
        backgroundColor="gray.50"
        aria-label="Email Address"
        aria-describedby="Email Address"
        isRequired={true}
        value={value}
        onChange={handleChange}
        placeholder="Enter email address"
        size="md"
        padding="2"
        width={{ sm: "100%", xl: "50%" }}
      />
      <Button
        href="/register"
        as="a"
        width={{ sm: "100%", xl: "auto" }}
        mt={{ sm: "1.25rem", xl: "0" }}
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
  );
};

export default QuickRegister;
