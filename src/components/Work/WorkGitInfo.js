import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useIntl } from "react-intl";

const WorkGitInfotStyled = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2%;
  font-size: 24px;
  line-height: 1.55;
  font-weight: 500;
  .container-git-info {
    padding-right: 15px;
    p {
      a {
        margin-left: 6px;
        cursor: pointer;
        text-decoration: none;
        color: rgb(224, 80, 80);
      }
    }
    .title {
      font-size: 36px;
      margin-bottom: 15px;
    }
  }
  .container-git-repositories {
    padding-top: 70px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    span {
      color: #8f8e8e;
    }
    a {
      cursor: pointer;
      text-decoration: none;
      color: rgb(224, 80, 80);
    }
  }

  /* --------------MEDIA QUERYS---------------- */
  @media screen and (max-width: 1280px) {
    font-size: 20px;
    .container-git-info {
      .title {
        font-size: 36px;
      }
    }
  }
  @media screen and (max-width: 1000px) {
    font-size: 18px;
    .container-git-info {
      .title {
        font-size: 36px;
      }
    }
  }
  @media screen and (max-width: 850px) {
    font-size: 18px;
    .container-git-info {
      .title {
        font-size: 26px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
    grid-template-columns: 1fr;
    grid-gap: 10%;
    .container-git-info {
      .title {
        font-size: 26px;
      }
    }
    .container-git-repositories {
      padding-top: 0px;
    }
  }
  @media screen and (max-width: 550px) {
    font-size: 16px;
    .container-git-info {
      .title {
        font-size: 22px;
      }
    }
    .container-git-repositories {
      grid-template-columns: 1fr;
      a {
        margin-bottom: 25px;
      }
    }
  }
`;
const WorkGitInfo = () => {
  const intl = useIntl();
  return (
    <WorkGitInfotStyled>
      <div className="container-git-info">
        <h2 className="title">{intl.messages["work.git.title"]}</h2>
        <p>
          {intl.messages["work.git.hereSome"]}
          <a
            href="https://github.com/SebastianLabadie"
            target="_blank"
            rel="noopener noreferrer"
          >
            {intl.messages["work.git.repository"]}
          </a>
        </p>
      </div>
      <div className="container-git-repositories">
        <a
          href="https://github.com/SebastianLabadie/react-amazon-clone"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>/01</span> Amazon Clone
        </a>
        <a
          href="https://github.com/SebastianLabadie/flags-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>/02</span> Flags Project
        </a>
        <a
          href="https://github.com/SebastianLabadie/iMessage-clone"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>/04</span> iMessage Clone
        </a>
        <a
          href="https://github.com/SebastianLabadie/CRUD-MERN"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>/03</span> Notes App
        </a>
        
        <a
          href="https://github.com/SebastianLabadie/weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>/05</span> Weather App
        </a>
        <a
          href="https://github.com/SebastianLabadie/react-postgre-todo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>/06</span> PERN-Todo
        </a>
      </div>
    </WorkGitInfotStyled>
  );
};

export default WorkGitInfo;
