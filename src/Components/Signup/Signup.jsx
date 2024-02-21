import React from "react";
import image from "../../Components/video/3.jpg";
import appleLogo from "../../Components/video/apple.webp";
import googleLogo from "../../Components/video/google.png";
import image2 from "../../Components/video/5.png";
import { Link } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import "./signup.css";

import {
  Box,
  Flex,
  Heading,
  Button,
  Input,
  FormControl,
  Text,
} from "@chakra-ui/react";

function Signup() {
  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <Flex height="100vh">
      <Box flex="1" style={backgroundImageStyle} position="relative">
        <Flex
          height="100%"
          alignItems="center"
          justifyContent="center"
          p="8"
          flexDirection="column"
        >
          <Link as={RouterLink} to="/banner">
            <Heading
              className="Welcome"
              as="h2"
              fontSize={40}
              fontWeight="bold"
              mb="4"
              cursor="pointer"
              marginBottom="-70"
              marginLeft="6"
              marginTop="90"
            >
              WELCOME TO
            </Heading>
          </Link>
          <Link
            as={RouterLink}
            to="/banner"
            marginLeft="10"
            marginBottom="100"
            width="70%"
            height="50"
            marginTop="-3"
          >
            <img src={image2} alt="Image2" style={{ cursor: "pointer" }} />
          </Link>
        </Flex>
        <Flex
          position="absolute"
          bottom="16"
          left="50%"
          transform="translateX(-50%)"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
        >
          <img
            src={appleLogo}
            alt="Apple Logo"
            width="150"
            height="150"
            style={{ marginRight: "16px" }}
          />
          <img
            src={googleLogo}
            alt="Google Logo"
            width="150"
            height="150"
            style={{ marginLeft: "16px" }}
          />
        </Flex>
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
            fontSize={45}
            fontWeight="bold"
            paddingRight="40%"
            mb="4"
          >
            Sign Up
          </Heading>

          <Text mb="4" fontWeight="bold" paddingRight="27%">
            Already have an account?{" "}
            <Link to="/login" color="rgb(255,117,101)">
              Log In
            </Link>
          </Text>

          <Heading
            as="h3"
            fontSize={25}
            fontWeight="bold"
            mb="4"
            paddingRight="25%"
          >
            Create Your Account
          </Heading>

          <FormControl id="first-name" mb="4" width="60%" marginRight="5%">
            <Input
              fontWeight="bold"
              type="text"
              placeholder="First Name"
              rounded="22px"
              height="14"
              bg="rgb(22,22,38)"
              border={"none"}
            />
          </FormControl>

          <FormControl id="last-name" mb="4" width="60%" marginRight="5%">
            <Input
              fontWeight="bold"
              type="text"
              placeholder="Last Name"
              rounded="22px"
              height="14"
              bg="rgb(22,22,38)"
              border={"none"}
            />
          </FormControl>

          <FormControl id="email" mb="4" width="60%" marginRight="5%">
            <Input
              fontWeight="bold"
              type="email"
              placeholder="Email"
              rounded="22px"
              height="14"
              bg="rgb(22,22,38)"
              border={"none"}
            />
          </FormControl>

          <FormControl id="password" mb="4" width="60%" marginRight="5%">
            <Input
              fontWeight="bold"
              type="password"
              placeholder="Enter your Password"
              rounded="22px"
              height="14"
              bg="rgb(22,22,38)"
              border={"none"}
            />
          </FormControl>

          <Button
            className="loginbtn"
            colorScheme="blue"
            width="60%"
            bg="rgb(255,117,101)"
            fontWeight="bold"
            rounded="22px"
            height="14"
            _hover={{ bg: "rgb(255,117,101)" }}
            mb="4"
            marginRight="5%"
          >
            Get Started
          </Button>

          <Text
            fontSize="sm"
            paddingRight="5%"
            color="rgb(124 126 129)"
            fontWeight="bold"
          >
            SECURED CHECKOUT WITH 256-BIT SSL ENCRYPTION
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Signup;
