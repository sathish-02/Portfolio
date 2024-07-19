import { React, useState, useEffect } from "react";
import {
  Box,
  Flex,
  SimpleGrid,
  Grid,
  useStyleConfig,
  Text,
  useColorModeValue,
  useColorMode,
  Icon,
  Button,
  Link,
  Skeleton,
} from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { MdFlightTakeoff } from "react-icons/md";
import { LiaDrumSolid } from "react-icons/lia";
import { GiCricketBat } from "react-icons/gi";
import Navbar from "../../components/Navbar/Navbar";
import routes from "../../routes";
import TechStackCard from "../../components/techStackCard/techStackCard";
import AboutMeInfo from "../../components/aboutMeInfo/aboutMeInfo";
import angular from "../../assets/icons/angular.svg";
import typescript from "../../assets/icons/typescript.svg";
import node from "../../assets/icons/nodejs.svg";
import mongo from "../../assets/icons/mongodb.svg";
import js from "../../assets/icons/javascript.svg";
import react from "../../assets/icons/react.svg";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css3.svg";
import git from "../../assets/icons/git.svg";
import gitlab from "../../assets/icons/gitlab.svg";
import cpp from "../../assets/icons/c++.png";
import express from "../../assets/icons/express.svg";
import myphoto from "../../assets/profile.jpeg";
import GitHubCalendar from "react-github-calendar";

export default function Experience() {
  const [loadedProfileimg, setloadedProfileimg] = useState(false);
  const [loadedgithubimg, setloadedgithubimg] = useState(false);
  const styles = useStyleConfig("Card");
  const { colorMode } = useColorMode();
  const textColorPrimary = useColorModeValue("lightblue.100", "lightpeach.100");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  const textColor = useColorModeValue("navy.700", "lightpeach.100");

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
      <Box pt={{ base: "40px", md: "80px", xl: "80px" }}>
        <Flex direction="row" align="left">
          <Text
            color={textColor}
            fontSize={{
              base: "3xl",
            }}
            mb="5px"
            me="14px"
            textAlign="left"
          >
            Gravity Loft Solutions | May 2021 - Present
          </Text>
        </Flex>
        <Flex flexDirection="column" justify="LEFT" h="100%">
          <Flex direction="row" align="center" justify="Center">
            <Text
              // color={textColor}
              fontSize={{
                base: "lg",
              }}
              mb="5px"
              me="14px"
              textAlign="left"
            >
              Experienced React.js Developer with a solid foundation in the MERN
              stack. Completed a comprehensive MERN stack course and accumulated
              3 plus years of professional experience in React.js development.
              Passionate about creating efficient, scalable, and responsive web
              applications. Continuously learning and exploring new technologies
              to enhance development practices and contribute effectively to
              projects.
            </Text>
          </Flex>
          <Flex direction="row" align="left">
            <Text
              color={textColor}
              fontSize={{
                base: "3xl",
              }}
              mb="5px"
              me="14px"
              textAlign="left"
            >
              Job responsibilities:
            </Text>
          </Flex>
          <Flex direction="row" align="left">
            <Text
              // color={textColor}
              fontSize={{
                base: "lg",
              }}
              mb="5px"
              me="14px"
              ml="30px"
              textAlign="left"
            >
              <ul>
                <li>
                  Developed and maintained responsive web applications using
                  React, ensuring seamless cross-browser compatibility and
                  optimal performance.
                </li>
                <li>
                  Collaborated closely with design and back-end teams to
                  implement user interfaces and integrate front-end components
                  with back-end services.
                </li>
                <li>
                  Utilized Redux for state management, creating efficient and
                  scalable solutions for complex application workflows.
                </li>
                <li>
                  Implemented RESTful APIs to fetch and update data from the
                  server, optimizing data retrieval and processing.
                </li>
                <li>
                  Utilized Git for version control, ensuring proper code
                  versioning, branch management, and collaboration with other
                  developers.
                </li>
                <li>
                  Actively participated in scrum meetings, providing status
                  updates and contributing to project planning and estimation.
                </li>
                <li>
                  Troubleshot and resolved bugs and performance issues, ensuring
                  the delivery of high-quality and optimized web applications.
                </li>
                <li>
                  Collaborated with the QA team to perform thorough testing and
                  ensure the application's functionality, usability, and
                  performance.
                </li>
                <li>Excellent problem-solving and debugging skills.</li>
              </ul>
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
