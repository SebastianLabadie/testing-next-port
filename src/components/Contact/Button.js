import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ButtonStyled = styled(motion.button)`
  cursor: pointer;
  margin: 16px 0;
  outline: none;
  font-size: 17px;
  font-weight: 700;
  line-height: 1.33;
  font-family: "Inter", sans-serif;
  background-color: #e05050;
  border-radius: 10px;
  width: 33%;
  color: #fff;
  border: none;
  height: 60px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  .fas {
    margin-top: 3px;
    margin-left: 5px;
    font-weight: 600;
    font-size: 12px;
  }

  @media screen and (max-width: 920px) {
    width: 36%;
    font-size: 15px;
    font-size: 16px;
  }
  @media screen and (max-width: 817px) {
    width: 40%;
    height: 50px;
    padding: 0 13px;
  }

  @media screen and (max-width: 773px) {
    font-size: 15px;
  }

  @media screen and (max-width: 697px) {
    width: 44%;
    font-size: 13px;
  }

  @media screen and (max-width: 465px) {
    width: 44%;
    height: 50px;
    padding: 0 5px;
  }
  @media screen and (max-width: 420px) {
    width: 48%;
    padding: 0 2px;
  }
`;

const Button = ({ children }) => {
  const pageVariants = {
    inY: {
      opacity: 1,
      y: 0,
    },
    outY: {
      opacity: 0,
      y: "+50vh",
    },
  };

  return (
    <ButtonStyled
      initial={pageVariants.outY}
      animate={pageVariants.inY}
      exit={pageVariants.outY}
      transition={{ duration: 1 }}
      type="submit"
    >
      {children}
      <i className="fas fa-arrow-right"></i>
    </ButtonStyled>
  );
};

export default Button;
