import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/core";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [formData, setFromData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Success");
  };
  return (
    <Flex
      py={12}
      // paddingX={{ sm: "2rem", md: "6rem", lg: "10rem" }}
      direction="column"
      align={{ sm: "left", xl: "center" }}
      justify="center"
      paddingX={{ sm: "2rem", md: "4rem", lg: "6rem" }}
    >
      <form onSubmit={(e) => onSubmit(e)}>
        <FormControl
          mt={6}
          isRequired
          display="grid"
          gridRowGap={{ sm: "1.5rem", xl: "1.8rem" }}
          width={{ sm: "100%", xl: "100%" }}
          color="brand.900"
        >
          <Heading
            paddingBottom={{ base: "1.25rem" }}
            size="xl"
            color="brand.900"
          >
            Welcome back
          </Heading>

          <Box>
            <FormLabel fontWeight="bold" htmlFor="email">
              Email address
            </FormLabel>
            <Input
              backgroundColor="gray.50"
              placeholder="Email Address"
              type="email"
              name="email"
              aria-describedby="email-helper-text"
              isRequired
              value={email}
              onChange={(e) => onChange(e)}
            />
          </Box>
          <Box>
            <FormLabel fontWeight="bold" htmlFor="name">
              Password
            </FormLabel>

            <InputGroup size="md">
              <Input
                backgroundColor="gray.50"
                name="password"
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => onChange(e)}
              />
              <InputRightElement width="4.5rem">
                <Button
                  color="gray.50"
                  h="1.75rem"
                  size="sm"
                  onClick={handleClick}
                  backgroundColor="gray.400"
                  _hover={{ backgroundColor: "gray.400" }}
                >
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>

          <Box>
            <Button
              width="100%"
              type="submit"
              backgroundColor="brand.900"
              color="brand.600"
              mt={6}
              _hover={{ backgroundColor: "brand.800", color: "brand.900" }}
              value="Register"
            >
              Sign up
            </Button>
          </Box>
        </FormControl>
      </form>
    </Flex>
  );
};

export default Login;
