import React, { useState } from "react";
import "./login.css";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  Link,
  Text,
} from "@chakra-ui/react";
import image from "../../Components/video/3.jpg";
import image2 from "../../Components/video/5.png";
import appleLogo from "../../Components/video/apple.webp";
import googleLogo from "../../Components/video/google.png";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);

      navigate("/dashboard");
    } catch (error) {
      console.error("Login Error:", error);
      setError(
        "Failed to log in. Please check your credentials and try again."
      );
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
        className="mobile-view-top"
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
              className="Welcome wl"
              as="h2"
              fontSize={40}
              fontWeight="bold"
              style={{ cursor: "pointer" }}
            >
              WELCOME TO
            </Heading>
          </Link>
          <Link as={RouterLink} to="/banner">
            <img className="mob-img2 m-t" src={image2} alt="Image2" />
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
            className="logo-1"
            src={appleLogo}
            alt="Apple Logo"
            width="150"
            height="150"
            style={{ marginRight: "16px" }}
          />
          <img
            className="logo-1"
            src={googleLogo}
            alt="Google Logo"
            width="150"
            height="150"
            style={{ marginLeft: "16px" }}
          />
        </Flex>
      </Box>

      <Box
        flex="1"
        bg="rgb(4,4,21)"
        color="white"
        className="mobile-view-bottom"
      >
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
            className="log-in"
          >
            Log In
          </Heading>

          <Text mb="4" fontWeight="bold" paddingRight="10%" className="tex-t">
            You don’t have an account?{" "}
            <Link as={RouterLink} to="/signup" color="rgb(255,117,101)">
              Sign Up
            </Link>
            <Box />
          </Text>
          <FormControl id="email" mb="4" width={{ base: "100%", md: "50%" }}>
            <Input
              fontWeight="bold"
              type="email"
              placeholder="Email"
              rounded="22px"
              height="14"
              bg="rgb(22,22,38)"
              border={"none"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" mb="4" width={{ base: "100%", md: "50%" }}>
            <Input
              fontWeight="bold"
              type="password"
              placeholder="Enter your password"
              rounded="22px"
              height="14"
              bg="rgb(22,22,38)"
              border={"none"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Link
            href="#"
            fontSize="sm"
            mb="4"
            color="rgb(255,117,101)"
            fontWeight="bold"
            paddingRight="30%"
            className="forgot"
          >
            Forgot password?
          </Link>

          <Button
            className="loginbtn"
            colorScheme="blue"
            width={{ base: "100%", md: "50%" }}
            bg="rgb(255,117,101)"
            fontWeight="bold"
            rounded="22px"
            height="14"
            _hover={{ bg: "rgb(255,117,101)" }}
            onClick={handleLogin}
            type="button"
          >
            Log In
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Login;
