import { Flex, Box, Button, Image, Text } from "@chakra-ui/react";
import image2 from "../../Components/video/5.png";
import image3 from "../../Components/video/7.webp";

function Dashboard() {
  return (
    <div style={{ backgroundColor: "rgb(4,4,21)" }}>
      <main>
        <Flex
          justify="space-between"
          alignItems="center"
          py="6"
          px={["5%", "10%"]}
        >
          <Box>
            <Image src={image2} width="220px" height="100px" />
          </Box>
          <Box position="relative" display="flex" alignItems="center">
            <Button backgroundColor="transparent" _hover="none">
              <Text
                fontSize="16px"
                py="2"
                paddingBottom="43px"
                pr="3"
                color="white"
                fontWeight="normal"
                lineHeight="6"
                letterSpacing="0.48px"
              >
                Logout
              </Text>
            </Button>
          </Box>
        </Flex>
        <Flex justifyContent="center">
          <Image
            src={image3}
            alt="edit plus icon"
            width="100px"
            height="100px"
          />
        </Flex>
        <Flex justifyContent="center">
          <Text
            fontSize="25px"
            fontWeight="bold"
            color="rgb(30,37,52)"
            marginTop="14px"
          >
            Welcome, trial
          </Text>
        </Flex>
        <Flex justifyContent="center">
          <Text
            fontSize="15px"
            paddingLeft="20px"
            color="rgb(141 157 188)"
            marginTop="30px"
          >
            Download the app below and login with the same
            <br />
            credentials you just used to create your account
          </Text>
        </Flex>
      </main>
    </div>
  );
}

export default Dashboard;
