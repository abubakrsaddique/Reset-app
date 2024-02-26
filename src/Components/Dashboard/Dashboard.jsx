import { Flex, Box, Button, Image, Text, Divider } from "@chakra-ui/react";
import reset from "../../Components/video/reset.png";
import image3 from "../../Components/video/7.webp";
import appleLogo from "../../Components/video/apple.webp";
import googleLogo from "../../Components/video/google.png";
import "./dashboard.css";

function Dashboard() {
  return (
    <div style={{ backgroundColor: "rgb(4,4,21)", height: "200vh" }}>
      <main>
        <Flex
          justify="space-between"
          alignItems="center"
          py="6"
          px={["5%", "10%"]}
        >
          <Box>
            <Image
              src={reset}
              width="220px"
              height="100px"
              marginLeft="-30px"
            />
          </Box>
          <Box position="relative" display="flex" alignItems="center">
            <Button backgroundColor="transparent" _hover="none">
              <Text
                fontSize="18px"
                py="2"
                paddingBottom="30px"
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
            color="rgb(141,157,188)"
            marginTop="30px"
            textAlign="center"
          >
            Download the app below and login with the same
            <br />
            credentials you just used to create your account
          </Text>
        </Flex>
        <Flex justifyContent="center" paddingTop="25px" gap="15px">
          <Image
            src={appleLogo}
            alt="Apple Button"
            width="170px"
            height="50px"
            cursor="pointer"
          />
          <Image
            src={googleLogo}
            alt="Google Button"
            width="170px"
            height="50px"
            cursor="pointer"
          />
        </Flex>
        <section>
          <Box>
            <Flex
              justify="between"
              alignItems="center"
              w="full"
              gap="23%"
              marginTop="5%"
            >
              <Text
                fontSize="25px"
                fontWeight="bold"
                lineHeight="6"
                color="white"
                marginLeft="165px"
              >
                MyAccount
              </Text>
              <div>
                <Button
                  type="button"
                  color="rgb(255,117,101)"
                  fontSize="20px"
                  fontWeight="bold"
                  lineHeight="6"
                  bg="none"
                  _hover="none"
                >
                  Edit
                </Button>
              </div>
            </Flex>
            <Box
              marginLeft="160px"
              width="37%"
              bg="rgb(22,22,38)"
              rounded="24px"
              p="6"
              mt="6"
              boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
            >
              <Flex justify="between" alignItems="center" w="full">
                <Text
                  fontSize="sm"
                  fontWeight="bold"
                  lineHeight="5"
                  color="white"
                >
                  Email
                </Text>
                <Text
                  fontSize="sm"
                  fontWeight="bold"
                  lineHeight="5"
                  color="rgb(141,157,188)"
                  marginLeft="60%"
                >
                  trialmonth@gmail.com
                </Text>
              </Flex>
              <Divider my="5" />
              <Flex justify="between" alignItems="center" w="full">
                <Text
                  fontSize="sm"
                  fontWeight="bold"
                  lineHeight="5"
                  color="white"
                >
                  Password
                </Text>
                <Text
                  className="password"
                  fontSize="sm"
                  fontWeight="bold"
                  lineHeight="5"
                  color="rgb(141,157,188)"
                >
                  ********
                </Text>
              </Flex>
            </Box>
          </Box>
        </section>
        <section className="myplan">
          <Box>
            <Flex justify="between" alignItems="center" gap="122%">
              <Text
                fontSize="25px"
                fontWeight="bold"
                lineHeight="6"
                color="white"
                marginLeft="-140%"
              >
                My Plan
              </Text>
              <Button
                type="button"
                color="rgb(255,117,101)"
                fontSize="20px"
                fontWeight="bold"
                lineHeight="6"
                bg="none"
                _hover="none"
              >
                Edit
              </Button>
            </Flex>
            <Box
              className="plan-box"
              bg="rgb(22,22,38)"
              rounded="24px"
              p="7"
              mt="7"
              boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
            >
              <Flex justify="between" alignItems="center" gap="45%">
                <Text
                  fontSize="sm"
                  fontWeight="bold"
                  lineHeight="5"
                  color="black"
                >
                  <span style={{ color: "white" }}>1 Month •</span>{" "}
                  <span style={{ color: "rgb(255,117,101)" }}>Best deal</span>
                  <br />
                  <span style={{ color: "rgb(141,157,188)" }}>
                    Term expires March 5, 2024
                  </span>
                </Text>
                <Text
                  gap="10px"
                  fontSize="15px"
                  fontWeight="bold"
                  lineHeight="5"
                  style={{ color: "rgb(255,117,101)" }}
                >
                  $19.99
                </Text>
              </Flex>
            </Box>
          </Box>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
