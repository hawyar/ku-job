import React, { useState } from "react";
import { Input, Button, Box } from "@chakra-ui/core";

const QuickRegister = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => setValue(e);
  return (
    <Box
      display="flex"
      flexDirection={{ sm: "column", xl: "row" }}
      alignItems="center"
      margin={{ sm: "2rem 0 1.2rem 0", xl: "2rem 0" }}
      width={{ sm: "100%", lg: "100%", xl: "75%" }}
    >
      <Input
        value={value}
        onChange={handleChange}
        placeholder="Enter email address"
        size="md"
        width={{ sm: "100%", xl: "70%" }}
      />
      <Button
        width={{ sm: "100%", xl: "auto" }}
        mt={{ sm: "1.25rem", xl: "0" }}
        ml={{ xl: "1rem" }}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default QuickRegister;
