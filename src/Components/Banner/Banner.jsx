import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HamburgerIcon, SmallCloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import "./banner.css";
import backgroundVideo from "../../Components/video/1.mp4";
import image2 from "../../Components/video/2.webp";

function Banner() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
                  zIndex="999"
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
              <Modal isOpen={isOpen} onClose={onClose} z>
                <ModalOverlay />
                <ModalContent
                  width="100%"
                  height="25vh"
                  paddingTop="16px"
                  bottom="60%"
                  background="rgb(31,31,47)"
                  borderRadius="33px"
                  position="absolute"
                  zIndex="99"
                >
                  <ModalBody>
                    <Button
                      variant="ghost"
                      colorScheme="white"
                      onClick={onClose}
                      color="white"
                    >
                      Support
                    </Button>
                    <Link to="/login">
                      <Button
                        variant="ghost"
                        mr="2"
                        colorScheme="white"
                        bg="rgb(255 117 101)"
                        onClick={onClose}
                        color="white"
                      >
                        Login
                      </Button>
                    </Link>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </Box>
          </Flex>
          <Flex flexDirection="column" alignItems="center" p="4">
            <Heading as="h2" fontSize="120px" className="fitness-heading">
              <span>FITNESS F</span>
              <img
                alt="video play"
                loading="lazy"
                width="130"
                onClick={() => setIsModalOpen(true)}
                decoding="async"
                data-nimg="1"
                objectFit="cover"
                src={image2}
              />
              <span>R</span>
            </Heading>
            <Heading as="h2" fontSize="110" className="culture-heading">
              THE CULTURE
            </Heading>
            <Box mt="4">
              <span className="font-normal text-[16px]">
                Get <b>ONE MONTH FREE</b> of Reset in celebration of Black
                History Month
              </span>
              <Flex className="button-wrapper">
                <Button colorScheme="blue" fontSize={18}>
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
          <ModalHeader>Image</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <img src={image2} alt="Banner Modal " style={{ width: "100%" }} />
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Banner;
