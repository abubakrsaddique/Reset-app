import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import close from "../video/close.png";

function ProfileForm() {
  return (
    <Box>
      <Flex align="center" justify="center">
        <Box
          w="full"
          maxW="456px"
          rounded="2xl"
          bg="rgb(4,4,21)"
          padding="40px"
          position="relative"
        >
          <Flex marginTop="5px">
            <Text
              fontSize="25px"
              fontWeight="bold"
              lineHeight="6"
              color="white"
            >
              My Profile
            </Text>
            <Button
              type="button"
              background="none"
              _hover="none"
              position="absolute"
              top="40px"
              right="15px"
            >
              <img
                alt=""
                loading="lazy"
                width="24"
                height="24"
                decoding="async"
                data-nimg="1"
                src={close}
              />
            </Button>
          </Flex>
          <Flex items="center" w="full" marginTop="12%">
            <form>
              <NumberInput
                defaultValue={23}
                min={0}
                step={1}
                marginBottom="20px"
              >
                <NumberInputField
                  w="full"
                  h="56px"
                  py="2"
                  px="6"
                  rounded="22px"
                  bg="rgb(22,22,38)"
                  darkBg="#161626"
                  color="#98A7C3"
                  fontWeight="medium"
                  border="none"
                  _hover={{ borderColor: "none" }}
                  _focus={{
                    outline: "none",
                    borderColor: "none",
                    boxShadow: "none",
                  }}
                />
                <NumberInputStepper top="12px" right="12px">
                  <Box>
                    <NumberIncrementStepper
                      h="15px"
                      w="12px"
                      bg="rgb(22,22,38)"
                      darkBg="#161626"
                      color="#98A7C3"
                      fontWeight="medium"
                      border="none"
                      _hover={{ bg: "rgb(30, 30, 49)" }}
                    />
                    <NumberDecrementStepper
                      h="15px"
                      w="12px"
                      bg="rgb(22,22,38)"
                      darkBg="#161626"
                      color="#98A7C3"
                      fontWeight="medium"
                      border="none"
                      _hover={{ bg: "rgb(30, 30, 49)" }}
                    />
                  </Box>
                </NumberInputStepper>
              </NumberInput>

              <Box
                pos="relative"
                flex="1"
                rounded="22px"
                bg="rgb(22,22,38)"
                darkBg="#161626"
                border="none"
              >
                <Flex justify="space-between" items="center">
                  <Input
                    required
                    placeholder="Feet"
                    w="55%"
                    h="56px"
                    py="2"
                    px="6"
                    rounded="22px"
                    bg="rgb(22,22,38)"
                    color="#98A7C3"
                    fontWeight="medium"
                    type="number"
                    value="5"
                    name="feet"
                    border="none"
                  />
                  <Input
                    required
                    placeholder="Inches"
                    w="55%"
                    h="56px"
                    marginRight="40%"
                    py="2"
                    px="6"
                    rounded="22px"
                    bg="rgb(22,22,38)"
                    color="#98A7C3"
                    fontWeight="medium"
                    type="number"
                    value="0"
                    name="inches"
                    border="none"
                  />
                </Flex>
                <Flex
                  pos="absolute"
                  right="1"
                  bottom="5px"
                  bg="rgb(44 44 56)"
                  rounded="22px"
                  py="1"
                  px="2"
                >
                  <Box
                    ml="4px"
                    flex="1"
                    h="40px"
                    w="64px"
                    cursor="pointer"
                    rounded="16px"
                    color="white"
                    bg="rgb(255,117,101)"
                    darkBg="accent"
                    darkColor="white"
                    fontWeight="extrabold"
                    fontSize="16px"
                    textAlign="center"
                    justify="center"
                    align="center"
                  >
                    Cm
                  </Box>
                  <Box
                    mr="4px"
                    flex="1"
                    h="40px"
                    w="64px"
                    cursor="pointer"
                    rounded="16px"
                    color="white"
                    bg="rgb(255,117,101)"
                    darkBg="#1E2534"
                    fontWeight="extrabold"
                    fontSize="16px"
                    textAlign="center"
                    justify="center"
                    align="center"
                  >
                    Ft
                  </Box>
                </Flex>
              </Box>
              <Input
                required
                placeholder="Weight"
                w="full"
                h="56px"
                py="2"
                px="6"
                rounded="22px"
                bg="rgb(22,22,38)"
                darkBg="#161626"
                color="#98A7C3"
                fontWeight="medium"
                type="number"
                value="70"
                name="weight"
                border="none"
                marginTop="20px"
              />
              <Flex flexDir="column" my="4">
                <Text fontSize="16px" fontWeight="semibold" color="white">
                  Goal
                </Text>
                <Flex
                  justify="space-between"
                  alignItems="center"
                  rounded="22px"
                  px="5px"
                  py="10px"
                  fontSize="16px"
                  fontWeight="medium"
                >
                  <Text color="white">Lose Weight</Text>
                  <Box
                    h="15px"
                    w="15px"
                    bg="rgb(255,117,101)"
                    darkBg="white"
                    rounded="full"
                    border="2px solid white"
                  />
                </Flex>
                <Flex
                  justify="space-between"
                  alignItems="center"
                  rounded="22px"
                  px="5px"
                  py="10px"
                  fontSize="16px"
                  fontWeight="medium"
                >
                  <Text color="white">Maintain Weight</Text>
                  <Box
                    h="15px"
                    w="15px"
                    bg="rgb(255,117,101)"
                    darkBg="white"
                    rounded="full"
                    border="2px solid white"
                  />
                </Flex>
                <Flex
                  justify="space-between"
                  alignItems="center"
                  rounded="22px"
                  px="5px"
                  py="10px"
                  fontSize="16px"
                  fontWeight="medium"
                >
                  <Text color="white">Gain Weight</Text>
                  <Box
                    h="15px"
                    w="15px"
                    bg="rgb(255,117,101)"
                    darkBg="white"
                    rounded="full"
                    border="2px solid white"
                  />
                </Flex>
                <Flex
                  justify="space-between"
                  alignItems="center"
                  rounded="22px"
                  px="5px"
                  py="10px"
                  fontSize="16px"
                  fontWeight="medium"
                >
                  <Text color="white">Just Exploring</Text>
                  <Box
                    h="15px"
                    w="15px"
                    bg="rgb(255,117,101)"
                    darkBg="white"
                    border="2px solid white"
                    rounded="full"
                  />
                </Flex>
              </Flex>
              <Box>
                <Text
                  fontSize="20px"
                  fontWeight="semibold"
                  mt="25px"
                  color="white"
                >
                  Daily Meal Amount
                </Text>
                <Flex align="center" justify="center" gap="20px" mt="4">
                  <Box
                    cursor="pointer"
                    h="40px"
                    w="50px"
                    flex="none"
                    alignItems="center"
                    justify="center"
                    rounded="16px"
                    fontSize="20px"
                    fontWeight="semibold"
                    bg="rgb(255,117,101)"
                    darkBg="#161626"
                    paddingTop="3px"
                    color="#98AFC3"
                    paddingLeft="18px"
                  >
                    3
                  </Box>
                  <Box
                    cursor="pointer"
                    h="40px"
                    w="50px"
                    flex="none"
                    alignItems="center"
                    justify="center"
                    rounded="16px"
                    fontSize="20px"
                    fontWeight="semibold"
                    bg="rgb(255,117,101)"
                    darkBg="#161626"
                    color="#98AFC3"
                    paddingLeft="18px"
                    paddingTop="3px"
                  >
                    4
                  </Box>
                  <Box
                    cursor="pointer"
                    h="40px"
                    w="50px"
                    flex="none"
                    alignItems="center"
                    justify="center"
                    rounded="16px"
                    paddingTop="3px"
                    fontSize="20px"
                    fontWeight="semibold"
                    bg="rgb(255,117,101)"
                    darkBg="#161626"
                    paddingLeft="18px"
                    color="#98AFC3"
                  >
                    5
                  </Box>
                  <Box
                    cursor="pointer"
                    h="40px"
                    paddingLeft="18px"
                    paddingTop="3px"
                    w="50px"
                    flex="none"
                    alignItems="center"
                    justify="center"
                    rounded="16px"
                    fontSize="20px"
                    fontWeight="semibold"
                    bg="rgb(255,117,101)"
                    darkBg="#161626"
                    color="#98AFC3"
                  >
                    6
                  </Box>
                </Flex>
              </Box>
              <Button
                type="submit"
                bg="rgb(255,117,101)"
                w="full"
                maxH="55px"
                mb="3"
                mt="8"
                py="16px"
                px="40px"
                color="white"
                fontWeight="semibold"
                fontSize="16px"
                textAlign="center"
                rounded="16px"
                opacity="100"
                _hover="none"
              >
                Save Changes
              </Button>
            </form>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default ProfileForm;
