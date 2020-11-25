import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useIntl } from "react-intl";
import { blurAnimation } from "../../../assets/animations";

const WorkProjectsLayoutStyled = styled(motion.div)`
  display: flex;
  margin: 2em 0;
  .imgMobile {
    display: none;
  }
  img {
    width: 600px;
    height: 460px;
    outline: none;
    border-radius: 10px;
  }
  .title {
    margin-bottom: 15px;
    font-size: 36px;
  }
  .info {
    width: 60%;
    margin-left: 20px;

    .demo {
      margin: 1em 0;
    }
    p {
      line-height: 1.55;
      font-weight: 500;
      font-size: 24px;
      a {
        cursor: pointer;
        text-decoration: none;
        color: rgb(224, 80, 80);
        margin-left: 5px;
      }
    }
  }
  .frontend {
    &:after {
      content: ${({ projectDeployFrontend }) =>
        "'" + projectDeployFrontend + "'"};
      color: rgb(224, 80, 80);
    }
  }
  .backend {
    &:after {
      content: ${({ projectDeployBackend }) =>
        "'" + projectDeployBackend + "'"};
      color: rgb(224, 80, 80);
    }
  }

  /* --------------MEDIA QUERYS---------------- */
  @media screen and (max-width: 1280px) {
    img {
      width: 530px;
      height: 425px;
    }
    .info {
      p {
        font-size: 20px;
      }
    }
  }

  @media screen and (max-width: 1000px) {
    img {
      width: 450px;
      height: 380px;
    }
    .info {
      p {
        font-size: 18px;
      }
    }
  }
  @media screen and (max-width: 850px) {
    img {
      width: 410px;
      height: 380px;
    }
    .info {
      .title {
        font-size: 26px;
      }
      p {
        font-size: 18px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    img {
      width: 100%;
      height: auto;
    }
    .info {
      margin: 16px 0 0 0;
      width: 100%;
      .title {
        font-size: 26px;
      }
      p {
        font-size: 18px;
      }
    }
  }
  @media screen and (max-width: 550px) {
    .info {
      .title {
        font-size: 22px;
      }
      p {
        font-size: 16px;
      }
    }
  }
  @media screen and (max-width: 414px) {
    img {
      min-height: 220px;
    }
    .info {
      .title {
        font-size: 20px;
      }
    }
  }
`;
const WorkProjectsLayout = ({
  transitionDuration,
  projectName,
  projectDetail,
  projectFrontend,
  projectBackend,
  projectDeployFrontend = "",
  projectDeployBackend = "",
  projectLink,
}) => {
  const pageVariants = {
    inX: {
      opacity: 1,
      x: 0,
    },
    outX: {
      opacity: 0,
      x: "-80vw",
    },
  };
  const intl = useIntl();
  return (
    <WorkProjectsLayoutStyled
      initial={pageVariants.outX}
      animate={pageVariants.inX}
      exit={pageVariants.outX}
      transition={{ duration: transitionDuration }}
      projectDeployFrontend={projectDeployFrontend}
      projectDeployBackend={projectDeployBackend}
    >
      <motion.img
        initial={blurAnimation.outBlur}
        animate={blurAnimation.inBlur}
        exit={blurAnimation.outBlur}
        transition={{ duration: 0.7 }}
        src={`/${projectName}.jpg`}
        alt="img"
      />
      <div className="info">
        <h2 className="title">{projectName}</h2>
        <p>{projectDetail}</p>
        <p className="demo">
          {intl.messages["work.seeDemo"]}
          <a href={projectLink} target="_blank" rel="noopener noreferrer">
            Link
          </a>
        </p>
        <p>{intl.messages["work.iUse"]}</p>
        <p className="frontend">Frontend: {projectFrontend} </p>
        <p className="backend">Backend: {projectBackend} </p>
      </div>
    </WorkProjectsLayoutStyled>
  );
};

export default WorkProjectsLayout;
