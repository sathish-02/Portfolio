import { React, useState, useEffect } from "react";
import {
  Box,
  Flex,
  Icon,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
  useStyleConfig,
  Skeleton,
} from "@chakra-ui/react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import contactimg from "../../assets/contact.png";
import contactimg1 from "../../assets/contact1.png";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Contact() {
  const [loadedimage1, setloadedimage1] = useState(false);
  const [loadedimage2, setloadedimage2] = useState(false);
  const styles = useStyleConfig("Card");
  const textColorPrimary = useColorModeValue("lightblue.100", "lightpeach.100");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].navbarDisplayName;
      }
    }
  };
  return (
    <Box>
      <Navbar displayText={getActiveRoute(routes)} />
      <Box pt="30px">
        <Flex justifyContent="center" alignItems="center">
          <Box>
            <Skeleton
              isLoaded={loadedimage1}
              color="white"
              fadeDuration={1}
              height={"100%"}
            >
              <Image
                src={contactimg}
                onLoad={() => setloadedimage1(true)}
              ></Image>
            </Skeleton>
          </Box>
          <Box>
            <Skeleton
              isLoaded={loadedimage2}
              color="white"
              fadeDuration={1}
              width={"100%"}
              height={"100%"}
            >
              <Image
                src={contactimg1}
                onLoad={() => setloadedimage2(true)}
              ></Image>
            </Skeleton>
          </Box>
        </Flex>

        <SimpleGrid
          columns={{ base: 1, xl: 3, "2xl": 3 }}
          gap="20px"
          mt={{ sm: "20px", xl: "0" }}
          mb="20px"
          align={{ base: "center", xl: "center" }}
          justify={{ base: "center", xl: "center" }}
        >
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Box __css={styles}>
              <Box textAlign="center">
                <Icon
                  as={FaGithub}
                  width="30px"
                  height="30px"
                  color="inherit"
                />
              </Box>
              <Text textAlign="center">GitHub @</Text>
              <Text color={textColorPrimary} textAlign="center" mt="5px">
                <a
                  href="https://github.com/sathish-02"
                  target="_blank"
                  rel="noreferrer"
                >
                  sathish-02
                </a>
              </Text>
            </Box>
          </Flex>
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Box __css={styles}>
              <Box textAlign="center">
                <Icon
                  as={FaLinkedin}
                  width="30px"
                  height="30px"
                  color="inherit"
                />
              </Box>
              <Text textAlign="center">Linkedin @</Text>
              <Text color={textColorPrimary} textAlign="center" mt="5px">
                <a
                  href="https://www.linkedin.com/in/sathish-b-7156ab225/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sathish B
                </a>
              </Text>
            </Box>
          </Flex>
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Box __css={styles}>
              <Box textAlign="center">
                <Link
                  to="#"
                  onClick={(e) => {
                    window.location.href = "mailto:rahulkpatro@example.com";
                    e.preventDefault();
                  }}
                >
                  <Icon
                    as={AiOutlineMail}
                    width="30px"
                    height="30px"
                    color="inherit"
                    cursor="pointer"
                  />
                </Link>
              </Box>

              <Text textAlign="center">EMAIL ME @</Text>

              <Text color={textColorPrimary} textAlign="center" mt="5px">
                <a
                  href="mailto:sathishb163@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  sathishb163@gmail.com
                </a>
              </Text>
            </Box>
          </Flex>
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Box __css={styles}>
              <Box textAlign="center">
                <Icon
                  as={AiFillPhone}
                  width="30px"
                  height="30px"
                  color="inherit"
                />
              </Box>
              <Text textAlign="center">whatsapp @</Text>
              <Text color={textColorPrimary} textAlign="center" mt="5px">
                <a
                  href="https://wa.me/9710655672"
                  target="_blank"
                  rel="noreferrer"
                >
                  (+91)-9710655672
                </a>
              </Text>
            </Box>
          </Flex>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
