import React, { useState } from "react";
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
} from "@chakra-ui/react";
import "./banner.css";
import backgroundVideo from "../../Components/video/1.mp4";
import image2 from "../../Components/video/2.webp";

function Banner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Box position="relative" className="banner-content">
        <video
          autoPlay
          loop
          muted
          style={{
            width: "100%",
            height: "auto",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Box zIndex="1">
          <Flex justifyContent="space-between" alignItems="center" p="4">
            <Box>
              <Heading as="h1" size="md">
                Dark Mode has arrived
              </Heading>
            </Box>
            <Box>
              <Button variant="ghost" colorScheme="white">
                Support
              </Button>
              <Button
                variant="ghost"
                mr="2"
                colorScheme="white"
                bg="rgb(255 117 101)"
              >
                Login
              </Button>
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
