import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { useAuth } from "../../contexts/AuthContext";
import "./banner.css";
import backgroundVideo from "../../Components/video/1.mp4";
import image2 from "../../Components/video/2.webp";

function Banner() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const isDashboardPage = location.pathname === "/dashboard";

  useEffect(() => {
    if (location.state && location.state.fromDashboard) {
      setIsModalOpen(true);
    }
  }, [location.state]);

  const handleResetImageClick = () => {
    if (isLoggedIn) {
      navigate("/banner", { state: { fromDashboard: true } });
    }
  };

  return (
    <>
      <Box position="relative" className="banner-content">
        <video
          autoPlay
          loop
          muted
          style={{
            zIndex: -1,
          }}
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Box zIndex="1">
          <Flex justifyContent="space-between" alignItems="center" p="4">
            <Box className="darkmode">
              <Heading as="h1" size="md">
                Dark Mode has arrived
              </Heading>
            </Box>
            <Box className="screen">
              {isLoggedIn ? (
                <Link to="/dashboard">
                  <Button
                    variant="ghost"
                    mr="2"
                    colorScheme="white"
                    bg="rgb(255 117 101)"
                  >
                    Dashboard
                  </Button>
                </Link>
              ) : (
                <>
                  <Button variant="ghost" colorScheme="white">
                    Support
                  </Button>
                  <Link to="/login">
                    <Button
                      variant="ghost"
                      mr="2"
                      colorScheme="white"
                      bg="rgb(255 117 101)"
                    >
                      Login
                    </Button>
                  </Link>
                </>
              )}
            </Box>
            <Box className="mob" position="relative">
              {isOpen ? (
                <IconButton
                  aria-label="Close"
                  icon={<SmallCloseIcon />}
                  onClick={onClose}
                  position="absolute"
                  top="4px"
                  right="4px"
                  zIndex={1}
                />
              ) : (
                <IconButton
                  background="none"
                  color="white"
                  _hover="none"
                  aria-label="Open"
                  icon={<HamburgerIcon />}
                  onClick={onOpen}
                  position="relative"
                  zIndex="1"
                />
              )}
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent
                  width="100%"
                  height="25vh"
                  paddingTop="16px"
                  bottom="60%"
                  background="rgb(31,31,47)"
                  borderRadius="33px"
                  position="absolute"
                >
                  <ModalBody>
                    {isLoggedIn ? (
                      <Link to="/dashboard">
                        <Button
                          variant="ghost"
                          mr="2"
                          colorScheme="white"
                          bg="rgb(255 117 101)"
                        >
                          Dashboard
                        </Button>
                      </Link>
                    ) : (
                      <>
                        <Button
                          variant="ghost"
                          colorScheme="white"
                          color="white"
                          marginLeft="36%"
                          marginTop="5%"
                        >
                          Support
                        </Button>
                        <br />
                        <Link to="/login">
                          <Button
                            variant="ghost"
                            mr="2"
                            colorScheme="white"
                            bg="rgb(255 117 101)"
                            marginLeft="39%"
                            marginTop="2%"
                          >
                            Login
                          </Button>
                        </Link>
                      </>
                    )}
                  </ModalBody>
                </ModalContent>
              </Modal>
            </Box>
          </Flex>
          <Flex flexDirection="column" alignItems="center" p="4">
            <Heading as="h2" fontSize="120px" className="fitness-heading">
              <span className="fit">FITNESS </span>
              <span className="fit-f  top fit-h">F</span>
              <img
                className="fit-video top"
                alt="video play"
                loading="lazy"
                width="130"
                onClick={() => {
                  setIsModalOpen(true);
                  handleResetImageClick();
                }}
                decoding="async"
                data-nimg="1"
                objectFit="cover"
                src={image2}
              />
              <span className="fit-r top">R</span>
            </Heading>
            <Heading as="h2" fontSize="110px" className="culture-heading ">
              THE CULTURE
            </Heading>
            <Heading fontSize="60px" className="c-h">
              THE
            </Heading>
            <Heading fontSize="60px" className="c-h">
              CULTURE
            </Heading>
            <Box mt="4">
              <span className="font-normal ">
                Get <b>ONE MONTH FREE</b> of Reset in celebration of Black{" "}
                <span
                  className="font-normal f-n "
                  style={{ marginRight: "5px" }}
                >
                  History Month
                </span>
              </span>
              <Flex className="button-wrapper">
                <Button colorScheme="blue" fontSize={18} className="b-w">
                  Claim One Month Free Now
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <img src={image2} alt="Banner Modal" style={{ width: "100%" }} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Banner;
