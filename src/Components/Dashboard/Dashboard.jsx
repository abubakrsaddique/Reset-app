import reset from "../../Components/video/reset.png";
import image3 from "../../Components/video/7.webp";
import appleLogo from "../../Components/video/apple.webp";
import googleLogo from "../../Components/video/google.png";
import "./dashboard.css";
import {
  Box,
  Button,
  Flex,
  Text,
  Image,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import ProfileForm from "../ProfileForm/ProfileForm";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function Dashboard() {
  const navigate = useNavigate();
  const { logout, isLoggedIn } = useAuth();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleResetClick = () => {
    if (isLoggedIn) {
      navigate("/banner", { state: { isLoggedIn } });
    } else {
      navigate("/banner");
    }
  };

  const handleLogoutClick = () => {
    logout();
    navigate("/banner");
  };

  return (
    <div
      style={{ backgroundColor: "rgb(4,4,21)" }}
      className="dashboard dashboard-mb"
    >
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
              cursor="pointer"
              onClick={handleResetClick}
            />
          </Box>
          <Box position="relative" display="flex" alignItems="center">
            <Button
              backgroundColor="transparent"
              _hover="none"
              color="none"
              onClick={handleLogoutClick}
            >
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
            cursor="pointer"
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
              className="section-1-flex s-1-f"
              justify="between"
              alignItems="center"
              w="full"
            >
              <Text
                className="myaccount my-account"
                fontSize="25px"
                fontWeight="bold"
                lineHeight="6"
                color="white"
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
                  cursor="pointer"
                >
                  Edit
                </Button>
              </div>
            </Flex>
            <Box
              className="my-account-box-detail my-a-b-d"
              height="145px"
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
                  className="my-account-email my-account-email-mb"
                  fontSize="sm"
                  fontWeight="bold"
                  lineHeight="5"
                  color="rgb(141,157,188)"
                  paddingTop="12px"
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
                  className="password password-mb"
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
            <Flex
              justify="between"
              alignItems="center"
              className="myplan-flex myplan-flex-mb"
            >
              <Text
                className="myplan-heading myplan-heading-mb"
                fontSize="25px"
                fontWeight="bold"
                lineHeight="6"
                color="white"
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
                cursor="pointer"
              >
                Edit
              </Button>
            </Flex>
            <Box
              className="plan-box plan-box-mb"
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
                  className="plan-box-value-mb"
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
        <section>
          <Box py="6" px="4" className="section-profile">
            <Flex marginLeft="141px">
              <Box
                maxW="530px"
                w="100%"
                minH="450px"
                className="my-profile-box-width  my-profile-box-width-mob"
              >
                <Flex
                  justify="between"
                  alignItems="center"
                  marginTop="10%"
                  whiteSpace="nowrap"
                  className="my-profile-flex"
                >
                  <Text
                    fontSize="25px"
                    fontWeight="bold"
                    lineHeight="6"
                    color="white"
                    marginLeft="8px"
                  >
                    My Profile
                  </Text>
                  <Button
                    className="my-profile-edit-btn my-profile-edit-btn-mb "
                    type="button"
                    color="rgb(255,117,101)"
                    fontSize="20px"
                    fontWeight="bold"
                    lineHeight="6"
                    bg="none"
                    _hover="none"
                    cursor="pointer"
                    onClick={onOpen}
                  >
                    Edit
                  </Button>
                </Flex>
                <Box
                  className="my-profile-detail-box"
                  bg="rgb(22,22,38)"
                  rounded="24px"
                  p="6"
                  mt="6"
                  boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
                >
                  <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent background="none">
                      <ModalBody>
                        <ProfileForm onClose={onClose} />
                      </ModalBody>
                    </ModalContent>
                  </Modal>

                  <Flex wrap="wrap" justify="between" alignItems="center">
                    <Text
                      fontSize="15px"
                      fontWeight="bold"
                      lineHeight="5"
                      color="white"
                      paddingBottom="10px"
                      paddingTop="10px"
                    >
                      Age
                    </Text>
                    <Text
                      fontSize="15px"
                      fontWeight="bold"
                      lineHeight="5"
                      color="rgb(141,157,188)"
                      paddingTop="10px"
                      paddingBottom="10px"
                      className="age age-mb"
                    >
                      23
                    </Text>
                  </Flex>
                  <Divider my="5" />
                  <Flex wrap="wrap" justify="between" alignItems="center">
                    <Text
                      fontSize="15px"
                      fontWeight="bold"
                      lineHeight="5"
                      color="white"
                      paddingBottom="10px"
                      paddingTop="10px"
                    >
                      Height
                    </Text>
                    <Text
                      fontSize="15px"
                      fontWeight="bold"
                      lineHeight="5"
                      color="rgb(141,157,188)"
                      paddingTop="10px"
                      paddingBottom="10px"
                      className="Height Height-mb"
                    >
                      5ft 0in
                    </Text>
                  </Flex>
                  <Divider my="5" />
                  <Flex wrap="wrap" justify="between" alignItems="center">
                    <Text
                      fontSize="15px"
                      fontWeight="bold"
                      lineHeight="5"
                      color="white"
                      paddingTop="10px"
                    >
                      Weight
                    </Text>
                    <Text
                      fontSize="15px"
                      fontWeight="bold"
                      lineHeight="5"
                      color="rgb(141,157,188)"
                      paddingTop="10px"
                      className="Weight Weight-mb"
                    >
                      70 kg
                    </Text>
                  </Flex>
                  <Divider my="5" />
                  <Flex wrap="wrap" justify="between" alignItems="center">
                    <Text
                      fontSize="15px"
                      fontWeight="bold"
                      lineHeight="5"
                      color="white"
                      paddingTop="10px"
                    >
                      Goal
                    </Text>
                    <Text
                      fontSize="15px"
                      fontWeight="bold"
                      lineHeight="5"
                      color="rgb(141,157,188)"
                      paddingTop="10px"
                      className="Goal Goal-mb"
                    >
                      Lose Weight
                    </Text>
                  </Flex>
                  <Divider my="5" />
                  <Flex wrap="wrap" justify="between" alignItems="center">
                    <Text
                      fontSize="15px"
                      fontWeight="bold"
                      lineHeight="5"
                      color="white"
                      paddingTop="10px"
                    >
                      Daily Meal Amount
                    </Text>
                    <Text
                      fontSize="15px"
                      fontWeight="bold"
                      lineHeight="5"
                      color="rgb(141,157,188)"
                      paddingTop="10px"
                      className="Amount Amount-mb"
                    >
                      6 meals
                    </Text>
                  </Flex>
                </Box>
              </Box>
            </Flex>
          </Box>
        </section>
        <section className="my-payment-method">
          <Box py="6" px="4" marginTop="-37%">
            <Flex justifyContent="flex-end" marginTop="-2%" marginRight="157px">
              <Box
                maxW="510px"
                w="100%"
                minH="450px"
                className="my-payment-method-box-width my-payment-method-box-width-mb"
              >
                <Flex
                  justify="between"
                  alignItems="center"
                  whiteSpace="nowrap"
                  className="my-payment-method-flex my-payment-method-flex-mb "
                >
                  <Text
                    fontSize="25px"
                    fontWeight="bold"
                    lineHeight="6"
                    color="white"
                  >
                    My Payment Method
                  </Text>
                  <Button
                    type="button"
                    color="rgb(255,117,101)"
                    fontSize="20px"
                    fontWeight="bold"
                    lineHeight="6"
                    bg="none"
                    _hover="none"
                    cursor="pointer"
                  >
                    Edit
                  </Button>
                </Flex>
                <Box
                  bg="rgb(22,22,38)"
                  rounded="24px"
                  p="6"
                  mt="6"
                  boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
                >
                  <Flex wrap="wrap" justify="between" alignItems="center">
                    <Text
                      fontSize="15px"
                      fontWeight="bold"
                      lineHeight="5"
                      color="white"
                      paddingBottom="10px"
                      paddingTop="10px"
                    >
                      Payment Method
                    </Text>
                    <Text
                      fontSize="15px"
                      fontWeight="bold"
                      lineHeight="5"
                      color="rgb(141,157,188)"
                      paddingTop="10px"
                      paddingBottom="10px"
                      className="Credit Credit-mb"
                    >
                      Credit Card
                    </Text>
                  </Flex>
                  <Divider my="5" />
                  <Flex wrap="wrap" justify="between" alignItems="center">
                    <Text
                      fontSize="15px"
                      fontWeight="bold"
                      lineHeight="5"
                      color="white"
                      paddingBottom="10px"
                      paddingTop="10px"
                    >
                      Number Card
                    </Text>
                    <Text
                      fontSize="15px"
                      fontWeight="bold"
                      lineHeight="5"
                      color="rgb(141,157,188)"
                      paddingTop="10px"
                      paddingBottom="10px"
                      className="Card Card-mb"
                    >
                      •••• •••• •••• 1234
                    </Text>
                  </Flex>
                  <Divider my="5" />
                  <Flex wrap="wrap" justify="between" alignItems="center">
                    <Text
                      fontSize="15px"
                      fontWeight="bold"
                      lineHeight="5"
                      color="white"
                      paddingBottom="10px"
                      paddingTop="10px"
                    >
                      Expiry Date
                    </Text>
                    <Text
                      fontSize="15px"
                      fontWeight="bold"
                      lineHeight="5"
                      color="rgb(141,157,188)"
                      paddingTop="10px"
                      paddingBottom="10px"
                      className="Expiry Expiry-mb"
                    >
                      01/2000
                    </Text>
                  </Flex>
                  <Divider my="5" />
                  <Flex wrap="wrap" justify="between" alignItems="center">
                    <Text
                      fontSize="15px"
                      fontWeight="bold"
                      lineHeight="5"
                      color="white"
                      paddingBottom="10px"
                      paddingTop="10px"
                    >
                      Email
                    </Text>
                    <Text
                      fontSize="15px"
                      fontWeight="bold"
                      lineHeight="5"
                      color="rgb(141,157,188)"
                      paddingTop="10px"
                      paddingBottom="10px"
                      className="Email-Card Email-Card-mb"
                    >
                      trialmonth@gmail.com
                    </Text>
                  </Flex>
                </Box>
              </Box>
            </Flex>
          </Box>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
