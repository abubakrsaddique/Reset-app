import React from "react";
import image from "../../Components/video/3.jpg";

import {
  Box,
  Flex,
  Heading,
  Button,
  Input,
  FormControl,
  Link,
  Text,
} from "@chakra-ui/react";

function Login() {
  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <Flex height="100vh">
      <Box flex="1" style={backgroundImageStyle}>
        <Flex
          height="100%"
          alignItems="center"
          justifyContent="center"
          p="8"
          flexDirection="column"
        ></Flex>
      </Box>

      <Box flex="1" bg="rgb(4,4,21)" color="white">
        <Flex
          height="100%"
          alignItems="center"
          justifyContent="center"
          p="8"
          flexDirection="column"
        >
          <Heading
            as="h2"
            fontSize={50}
            fontWeight="bold"
            paddingRight="30%"
            mb="4"
          >
            Log In
          </Heading>

          <Text mb="4" fontWeight="bold" paddingRight="10%">
            You don’t have an account?{" "}
            <Link href="#" color="rgb(255,117,101)">
              Sign Up
            </Link>
            <Box />
          </Text>
          <FormControl id="email" mb="4" width="50%">
            <Input
              fontWeight="bold"
              type="email"
              placeholder="Email"
              borderRadius="full"
              height="14"
            />
          </FormControl>
          <FormControl id="password" mb="4" width="50%">
            <Input
              fontWeight="bold"
              type="password"
              placeholder="Enter your password"
              borderRadius="full"
              height="14"
            />
          </FormControl>
          <Link
            href="#"
            fontSize="sm"
            mb="4"
            color="rgb(255,117,101)"
            fontWeight="bold"
            paddingRight="30%"
          >
            Forgot password?
          </Link>
          <Button
            colorScheme="blue"
            width="50%"
            bg="rgb(255,117,101)"
            fontWeight="bold"
            borderRadius="full"
            height="14"
          >
            Log In
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Login;
