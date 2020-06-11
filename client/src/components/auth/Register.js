import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  InputRightElement,
  InputGroup,
  Text,
} from "@chakra-ui/core";

const Register = () => {
  // get emial from quick register localStorage
  const quickRegisterEmail = localStorage.getItem("quickRegisterEmail");

  const { handleSubmit, errors, register } = useForm({
    mode: "onBlur",
  });

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      paddingTop={{ base: "2rem" }}
      paddingX={{ sm: "2rem", md: "6rem", lg: "10rem" }}
    >
      <Heading paddingBottom={{ base: "1.25rem" }} size="md">
        Sign up
      </Heading>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isRequired display="grid" gridRowGap="1rem">
          <Box>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              name="name"
              ref={register({ required: true })}
              placeholder="Name"
              type="name"
              aria-describedby="name-helper-text"
              isRequired
              backgroundColor="gray.50"
            />
            <Text>{errors.name && "Name is required"}</Text>
          </Box>
          <Box>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              backgroundColor="gray.50"
              ref={register}
              placeholder="Email Address"
              type="email"
              name="email"
              aria-describedby="email-helper-text"
              isRequired
              defaultValue={
                quickRegisterEmail !== "" || undefined ? quickRegisterEmail : ""
              }
            />
          </Box>
          <Text>{errors.email && "Email Address is required"}</Text>
          <Box>
            <FormLabel htmlFor="name">Password</FormLabel>

            <InputGroup size="md">
              <Input
                backgroundColor="gray.50"
                ref={register}
                name="password"
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button
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
            <FormLabel htmlFor="name">Confirm Password</FormLabel>

            <InputGroup size="md">
              <Input
                backgroundColor="gray.50"
                ref={register}
                name="password2"
                pr="4.5rem"
                type="password"
                placeholder="Confirm password"
              />
            </InputGroup>
          </Box>
          <Box>
            <Button width={{ sm: "100%", xl: "auto" }} type="submit">
              SUBMIT
            </Button>
          </Box>
        </FormControl>
      </form>
    </Box>
  );
};

export default Register;
