import React from "react";
import styled from "styled-components";
import Wrapper from "../src/components/Wrapper";
import WorkProjectsLayout from "../src/components/Work/WorkProjectsLayout";
import WorkGitInfo from "../src/components/Work/WorkGitInfo";
import Head  from "next/head";
import { useIntl } from "react-intl";

const WorkStyled = styled.div`
  margin: 2em 1em;

  /* --------------MEDIA QUERYS---------------- */

  @media screen and (max-width: 768px) {
    margin: 2em 1.2rem;
  }
`;

const Work = () => {
  const intl = useIntl();
  return (
    <>
      <Head>
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content="Sebastian Labadie- Fullstack" />
      <meta name="og:description" property="og:description" content="Portfolio created by Sebastian Labadie, made in nextjs." />
      <meta
            name="Sebastian Labadie- Fullstack"
            content="Portfolio created by Sebastian Labadie, made in nextjs."
          />
        <title> Sebastian Labadie - {intl.messages["nav.work"]} </title>
      </Head>
      <Wrapper>
        <WorkStyled>
          <WorkProjectsLayout
            transitionDuration={0.7}
            projectName="Amazon Clone"
            projectDetail={intl.messages["work.amazon.projectDetail"]}
            projectFrontend="React,Styled-Components,MaterialUI,Context"
            projectBackend="Firebase"
            projectDeployFrontend="(deploy: Netlify)"
            projectDeployBackend=""
            projectLink="https://amazon-clone99.netlify.app/"
          />
          <WorkProjectsLayout
            transitionDuration={1}
            projectName="iMessage Clone"
            projectDetail={intl.messages["work.imessage.projectDetail"]}
            projectFrontend="React, Redux, MaterialUI"
            projectBackend="Firebase auth & store "
            projectDeployFrontend="(deploy: Firebase Hosting)"
            projectDeployBackend=""
            projectLink="https://imessage-clone-312bf.web.app/"
          />
          <WorkProjectsLayout
            transitionDuration={1.3}
            projectName="Flag Project"
            projectDetail={intl.messages["work.flags.projectDetail"]}
            projectFrontend="React, Redux, Fetch, Styled Components"
            projectDeployFrontend="(deploy: Github Pages)"
            projectDeployBackend="none"
            projectLink="https://sebastianlabadie.github.io/flags-project/"
          />
          <WorkProjectsLayout
            transitionDuration={1.5}
            projectName="Notes App"
            projectDetail={intl.messages["work.notes.projectDetail"]}
            projectFrontend="React, Bootstrap, Axios"
            projectBackend="Node, Express, Mongodb "
            projectDeployFrontend="(deploy: Github Pages)"
            projectDeployBackend="(deploy: Atlas,Heroku)"
            projectLink="https://sebastianlabadie.github.io/CRUD-MERN/"
          />
          <WorkGitInfo />
        </WorkStyled>
      </Wrapper>
    </>
  );
};

export default Work;
