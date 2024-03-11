import React from "react";
import image from "../../Components/video/3.jpg";
import appleLogo from "../../Components/video/apple.webp";
import googleLogo from "../../Components/video/google.png";
import image2 from "../../Components/video/5.png";
import { Link } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import "./signup.css";

import { firestore, auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const firstName = document.getElementById("first-name").value;
      const lastName = document.getElementById("last-name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      console.log("First Name:", firstName);
      console.log("Last Name:", lastName);
      console.log("Email:", email);
      console.log("Password:", password);

      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await firestore.collection("users").doc(userCredential.user.uid).set({
        firstName,
        lastName,
        email,
      });

      navigate("/dashboard");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <Flex height="100vh">
      <Box
        flex="1"
        style={backgroundImageStyle}
        position="relative"
        className="mobile-view-t"
      >
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
          <Link as={RouterLink} to="/banner" height="50" marginTop="-3">
            <img
              src={image2}
              alt="Image2"
              style={{
                cursor: "pointer",
                marginLeft: "100px",
                marginBottom: "97px",
              }}
              width="70%"
            />
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

      <Box flex="1" bg="rgb(4,4,21)" color="white" className="mobile-view-b">
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
            onClick={handleSignup}
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
