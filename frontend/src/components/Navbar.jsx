import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink, useNavigate } from "react-router-dom";

const Links = [
  {
    to: "/",
    displayText: "Home",
  },
  {
    to: "/mytrip",
    displayText: "MyTrip",
  },
  {
    to: "/about",
    displayText: "About",
  },
];
export function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Flex justify={"center"} align={"center"} gap={"5px"}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <Box
              onClick={() => {
                navigate("/");
              }}
              fontWeight={800}
              fontSize={"24px"}
              color={"blue.300"}
              _hover={{
                cursor: "pointer",
                color: "blue.500",
              }}
            >
              WonderOn
            </Box>
          </Flex>

          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={10}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  style={({ isActive }) => ({
                    color: isActive ? "#3182ce" : "inherit",
                    fontWeight: "bold"
                  })}
               
                >
                  {link.displayText}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              variant={"solid"}
              bg={"blue.300"}
              color={"white"}
              size={"sm"}
              mr={4}
              rounded={"full"}
              _hover={{ bg: "blue.500" }}
              onClick={() => {
                navigate("/login");
              }}
            >
              Login / SignUp
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.to} to={link.to}
                style={({ isActive }) => ({
                    color: isActive ? "#3182ce" : "inherit",
                    fontWeight: "bold"
                  })}
                >
                  {link.displayText}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
