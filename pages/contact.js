import React from "react";
import Wrapper from "../src/components/Wrapper";
import styled from "styled-components";
import { motion } from "framer-motion";
import FormCustom from "../src/components/Contact/Form";
import {useIntl} from 'react-intl'

const ContactStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height:100vh;
  min-height: 700px;
  .container {
    width: 55%;
  }
  .title {
    font-size: 60px;
    margin: 40px 16px;
  }
  .subTitle {
    font-size: 24px;
    line-height: 1.55;
    font-weight: 500;
    margin: 16px;
  }

  @media screen and (max-width: 1114px) {
    .container {
      width: 55%;
    }
  }
  @media screen and (max-width: 1114px) {
    .container {
      width: 60%;
    }
  }
  @media screen and (max-width: 920px) {
    .title {
      font-size: 55px;
    }
    .subTitle {
      font-size: 22px;
    }
  }
  @media screen and (max-width: 817px) {
    .title {
      font-size: 51px;
    }
  }

  @media screen and (max-width: 773px) {
    .title {
      font-size: 44px;
    }
    .subTitle {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 697px) {
    .title {
      font-size: 38px;
    }
    .subTitle {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 579px) {
    .container {
      width: 75%;
    }
  }

  @media screen and (max-width: 465px) {
    .title {
      font-size: 35px;
    }
    .subTitle {
      font-size: 17px;
    }
  }
  @media screen and (max-width: 420px) {
    .subTitle {
      font-size: 16px;
    }
    .title {
      font-size: 32px;
    }
    .container {
      width: 85%;
    }
  }
`;

const Contact = () => {
  const pageVariants = {
    inY: {
      opacity: 1,
      y: 0,
    },
    outY: {
      opacity: 0,
      y: "-50vh",
    },
  };
  const intl=useIntl()
  return (
    <>
      <Wrapper>
        <ContactStyled>
          <div className="container">
            <motion.h2
              initial={pageVariants.outY}
              animate={pageVariants.inY}
              exit={pageVariants.outY}
              transition={{ duration: 1 }}
              className="title"
            >
              {intl.messages["contact.title"]}
            </motion.h2>

            <motion.p
              initial={pageVariants.outY}
              animate={pageVariants.inY}
              exit={pageVariants.outY}
              transition={{ duration: 1 }}
              className="subTitle"
            >
                {intl.messages["contact.subTitle"]}
            </motion.p>

            <FormCustom />
          </div>
        </ContactStyled>
      </Wrapper>
    </>
  );
};

export default Contact;
