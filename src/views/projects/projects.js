import { React, useEffect } from "react";
import {
  Box,
  SimpleGrid,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import nftproject from "../../assets/homepagemain1.png";
import trading from "../../assets/tradingDashboard.png";
import nike from "../../assets/nike.png";
import epicGame from "../../assets/epicGame.png";
import blog1 from "../../assets/Blog-1.png";
import blog2 from "../../assets/Blog-2.png";

export default function Projects() {
  const textColorPrimary = useColorModeValue(
    "secondaryGray.900",
    "lightpeach.100"
  );

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
      <Box pt={{ base: "20px", md: "40px", xl: "40px" }}>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        ></Flex>
        <SimpleGrid
          columns={{ base: 1, md: 3, "3sm": 2 }}
          gap="25px"
          alignItems="center"
          justifyContent="center"
        >
          <ProjectCard
            projectImage={nftproject}
            projectName={"NFT Ticketing"}
            aboutProject={
              "The platform offers a user-friendly interface that allows individuals to browse and discover various events, including concerts, festivals, conferences, and sporting events. By integrating NFT technology, each ticket is uniquely represented as an NFT, providing enhanced security, authenticity, and ownership verification."
            }
            techStack={
              "JavaScript, Redux, REACT JS, Git, RESTful APIs, HTML5, CSS"
            }
            // projectLiveLink="https://flipkart-grid-frontend.vercel.app/"
            projectLink="https://gitlab.com/techrefic/nft-ticket-app"
          />
          <ProjectCard
            projectImage={trading}
            projectName={"Trading Application"}
            aboutProject={
              "TradingApp is a full-featured trading application designed for both novice and professional traders. It provides real-time data, customizable charts, and advanced trading tools to help users make informed decisions in the financial markets."
            }
            techStack={
              "JavaScript, Redux, REACT JS, Git, RESTful APIs, HTML5, CSS,Chart JS"
            }
            // projectLiveLink="https://lets-collab.vercel.app/"
            projectLink="https://gitlab.com/techrefic/trading-app"
          />
          <ProjectCard
            projectImage={nike}
            projectName={"Nike Clone"}
            aboutProject={
              "A front-end clone of Nike webpage developed by team of 6 members in time span of 6 days. We have added features like filter products, sorting products, delete a product from cart etc."
            }
            techStack={
              "JavaScript, Node JS, Express JS, MongoDB, Git, RESTful APIs, HTML5, CSS,Chart JS"
            }
            projectLiveLink="https://epic-games-web.vercel.app/"
            projectLink="https://github.com/sathish-02/Epic_Games_Backend"
          />
          <ProjectCard
            projectImage={epicGame}
            projectName={"Epic-Games Clone"}
            aboutProject={
              "A Full-stack clone of Epic-Games webpage developed by team of 6 members in time span of 6 days. We have added features like filter Games, sorting products, mail validations etc."
            }
            techStack={
              "JavaScript, Node JS, Express JS, MongoDB, Git, RESTful APIs, HTML5, CSS,Chart JS"
            }
            projectLiveLink="https://epic-games-web.vercel.app/"
            projectLink="https://github.com/sathish-02/Epic_Games_Backend"
          />
        </SimpleGrid>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="Center"
          mt="40px"
          mb="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<BLOGS/>"}
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap="50px"
          alignItems="center"
          justifyContent="center"
        >
          <ProjectCard
            projectImage={blog1}
            projectName={"A clone of Nike website"}
            aboutProject={
              "A front-end clone of Nike webpage developed by team of 6 members in time span of 6 days. We have added features like filter products, sorting products, delete a product from cart etc."
            }
            projectLink="https://medium.com/@sathishb163/building-a-clone-of-the-nike-website-39aca4a52476"
          />
          <ProjectCard
            projectImage={blog2}
            projectName={"A clone of Epic-Games Back-end"}
            aboutProject={
              "A Full-stack clone of Epic-Games webpage developed by team of 6 members in time span of 6 days. We have added features like filter Games, sorting products, mail validations etc."
            }
            projectLink="https://medium.com/@sathishb163/building-a-clone-of-epic-games-backend-7d2bd0e9a0b2"
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
}
