import { React, useState } from "react";
import {
  Box,
  Flex,
  Button,
  Link,
  useColorModeValue,
  useStyleConfig,
  Text,
  Skeleton,
  border,
} from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function ProjectCard(props) {
  const {
    projectImage,
    aboutProject,
    techStack,
    projectName,
    projectLiveLink,
    projectLink,
  } = props;
  const [loadedprojectimg, setloadedprojectimg] = useState(false);
  const textColor = useColorModeValue("navy.700", "lightpeach.100");
  const styles = useStyleConfig("Card");
  return (
    <Box
      __css={styles}
      h={{ base: "100%" }}
      transition="transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out"
      _hover={{
        base: "none",
        xl: { transform: "scale(1.03)", boxShadow: "md", border: "1px solid" },
      }}
    >
      <div style={{ maxHeight: "250px" }}>
        <img
          src={projectImage}
          alt="dsd"
          style={{ height: "250px", width: "100%" }}
        />
        {/* <Skeleton
          isLoaded={loadedprojectimg}
          color="white"
          fadeDuration={1}
          height={"100%"}
        >
          <LazyLoadImage
            src={projectImage}
            // w={{ base: "100%", "3xl": "100%" }}
            // h={{ base: "100%", "3xl": "250px !important" }}
            borderRadius="10px"
            p="20px"
            effect="blur"
            onLoad={() => setloadedprojectimg(true)}
            wrapperProps={{
              // If you need to, you can tweak the effect transition using the wrapper style.
              style: { objectFit: "cover", border: "5px", height:"200px !important" },
            }}

            // border="2px solid"
            // borderColor={textColor}
          />
        </Skeleton> */}
      </div>
      <Flex flexDirection="column" justify="center" mt={"1rem"} h="100%">
        <Flex direction="row" align="center" justify="Center">
          <Text
            color={textColor}
            fontSize={{
              base: "xl",
              md: "lg",
              lg: "lg",
              xl: "lg",
              "2xl": "md",
              "3xl": "lg",
            }}
            mb="5px"
            me="14px"
            textAlign="center"
            cursor="default"
          >
            {projectName}
          </Text>
        </Flex>
        <Flex direction="row" align="center" justify="Center">
          <Text
            color="secondaryGray.500"
            fontSize={{
              base: "sm",
            }}
            mb="5px"
            me="14px"
            textAlign="center"
          >
            {aboutProject}
          </Text>
        </Flex>
        <Flex direction="row" align="center" justify="Center">
          <Text
            color={textColor}
            fontSize={{
              base: "sm",
            }}
            mb="5px"
            me="14px"
            textAlign="center"
          >
            {techStack}
          </Text>
        </Flex>
        <Flex
          align="center"
          justify="center"
          direction={{
            base: "column",
            md: "column",
            lg: "column",
            xl: "column",
            "2xl": "row",
          }}
          gap={{
            base: "20px",
          }}
          p="20px"
        >
          {projectLiveLink ? (
            <>
              <Link
                href={projectLiveLink}
                target="blank"
                mt={{
                  base: "0px",
                  md: "10px",
                  lg: "0px",
                  xl: "10px",
                  "2xl": "0px",
                }}
              >
                <Button
                  variant="darkBrand"
                  fontSize="sm"
                  fontFamily="DM Sans"
                  borderRadius="70px"
                  px="24px"
                  py="5px"
                >
                  View Website
                </Button>
              </Link>
            </>
          ) : (
            <></>
          )}
          <Link
            href={projectLink}
            target="blank"
            mt={{
              base: "0px",
              md: "10px",
              lg: "0px",
              xl: "10px",
              "2xl": "0px",
            }}
          >
            <Button
              variant="darkBrand"
              fontSize="sm"
              fontFamily="DM Sans"
              borderRadius="70px"
              px="24px"
              py="5px"
            >
              {techStack ? "View Project" : "View Blog"}
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
