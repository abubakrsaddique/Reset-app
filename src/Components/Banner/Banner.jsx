import React, { useState } from 'react';
import { ChakraProvider, Box, Flex, Heading, Button } from '@chakra-ui/react';
import { MdVideoLibrary } from 'react-icons/md'; 
import './banner.css';
import backgroundVideo from '../../Components/video/1.mp4';
import image2 from '../../Components/video/2.webp';
import Modal from 'react-modal';

const VideoButton = ({ onClick }) => (
  <div className="flex items-center justify-between">
    <button type="button" className="text-accent leading-6 font-semibold font-sfPro text-base" onClick={onClick}>
     
      <img
        alt="video play"
        loading="lazy"
        width="112"
        height="112"
        decoding="async"
        data-nimg="1"
        className="mx-2 video-button" 
        src={image2} 
      />
    </button>
  </div>
);



function Banner() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <ChakraProvider>
      <Box position="relative" className='banner-content'>
        <video autoPlay loop muted style={{ width: '100%', height: 'auto', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
          <source src={backgroundVideo} type="video/mp4" />
          <VideoButton onClick={() => setIsModalOpen(true)} />
          Your browser does not support the video tag.
        </video>
        <Box zIndex="1">
          <Flex justifyContent="space-between" alignItems="center" p="4">
            <Box>
              <Heading as="h1" size="md">Dark Mode has arrived</Heading>
            </Box>
            <Box>
              <Button variant="ghost" colorScheme="white">Support</Button>
              <Button variant="ghost" mr="2" colorScheme="white">Login</Button>
            </Box>
          </Flex>
          <Flex flexDirection="column" alignItems="center" p="4">
            <Heading   className="fitness-heading">
              <span >FITNESS F</span>
              <MdVideoLibrary onClick={() => setIsModalOpen(true)} style={{ cursor: 'pointer', verticalAlign: 'middle' }} />
              <span style={{ display: 'inline-block' }}>R</span>
            </Heading>
            <Heading as="h2" size="md" className="culture-heading">THE CULTURE</Heading>
            <Box mt="4">
              <p>Get ONE MONTH FREE of Reset in celebration of Black History Month</p>
              <Flex className="button-wrapper">
                <Button colorScheme="blue">Claim One Month Free Now</Button>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
     
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
        <h2>Video Modal</h2>
        <p>This is where your video content will be displayed.</p>
        <Button onClick={() => setIsModalOpen(false)}>Close</Button>
      </Modal>
    </ChakraProvider>
  );
}

export default Banner;
