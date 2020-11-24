import React from "react";
import styled from "styled-components";
import backgroundImg from "../assets/images/homeBack.png";
import Wrapper from "../src/components/Wrapper";
import { motion } from "framer-motion";
import Separator from "../src/components/Home/Separator";
import { useIntl } from "react-intl";
import Head from "next/head";

const HomeStyled = styled.div`
  position: relative;
  height: 90vh;
  min-height: 700px;
  background-image: url(${backgroundImg});
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;

  .name {
    &:after {
      content: " Sebastián Labadie";
      color: rgb(224, 80, 80);
    }
  }
  .text {
    position: relative;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    top: 25%;
    left: 1.2rem;
    font-size: 70px;
    width: 96%;
  }
  .work {
    font-size: 24px;
    margin-top: 2em;
    font-weight: 500;
  }
  .see {
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    width: 48.2%;
    left: 16px;
    position: relative;
    top: 56%;
  }

  @media screen and (max-width: 1080px) {
    background-size: 800px;
    .text {
      font-size: 56px;
    }
  }
  @media screen and (max-width: 838px) {
    .text {
      top: 26%;
    }
    background-size: 700px;
    .name {
      font-size: 48px;
    }
    .full {
      font-size: 48px;
    }
    .see {
      width: 47.2%;
    }
  }
  @media screen and (max-width: 720px) {
    .see {
      top: 52.5%;
    }
  }

  @media screen and (max-width: 670px) {
    background-size: 600px;
    .name {
      font-size: 36px;
    }
    .full {
      font-size: 36px;
    }
    .work {
      font-size: 20px;
    }
    .see {
      font-size: 16px;
      top: 62.5%;
      width: 45.2%;
    }
  }
  @media screen and (max-width: 538px) {
    .see {
      top: 56.5%;
    }
  }
  @media screen and (max-width: 501px) {
    .see {
      top: 51.5%;
    }
  }
  @media screen and (max-width: 480px) {
    .name {
      font-size: 29px;
    }
    .full {
      font-size: 29px;
    }
    .work {
      font-size: 16px;
    }
    .see {
      font-size: 14px;
      top: 64.5%;
    }
  }

  @media screen and (max-width: 430px) {
    background-size: 500px;
    .text {
      top: 22%;
    }
  }
  @media screen and (max-width: 413px) {
    .see {
      top: 60.5%;
    }
  }
`;

const pageVariants = {
  inX: {
    opacity: 1,
    x: 0,
  },
  outX: {
    opacity: 0,
    x: "-100vw",
  },
  inY: {
    opacity: 1,
    y: 0,
  },
  outY: {
    opacity: 0,
    y: "-40px",
  },
};

const Home = () => {
  const intl = useIntl();

  return (
    <>
      <Head>
      <meta
            name="Sebastian Labadie- Fullstack"
            content="Portfolio created by Sebastian Labadie, made in nextjs."
          />
        <title> Sebastian Labadie - {intl.messages["nav.home"]} </title>
      </Head>
      <Wrapper>
        <HomeStyled>
          <motion.div
            initial={pageVariants.outX}
            animate={pageVariants.inX}
            exit={pageVariants.outX}
            transition={{ duration: 1.5 }}
            className="text"
          >
            <p className="name">{intl.messages["home.name"]}</p>
            <p className="full">{intl.messages["home.full"]}</p>
            <p className="work">{intl.messages["home.work"]}</p>
          </motion.div>

          <motion.p
            initial={pageVariants.outY}
            animate={pageVariants.inY}
            exit={pageVariants.outY}
            transition={{ duration: 1 }}
            className="see"
          >
            {intl.messages["home.see"]}
          </motion.p>

          <Separator name="one" />
          <Separator name="two" />
        </HomeStyled>
      </Wrapper>
    </>
  );
};

export default Home;
