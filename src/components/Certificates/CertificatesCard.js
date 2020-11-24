import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { blurAnimation } from "../../../assets/animations";
import Modal from "./Modal";
const CertificatesCardStyled = styled(motion.div)`
  width: 300px;
  cursor: pointer;
  position: relative;
  span {
    display: initial !important;
  }
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  .certificatesCard__overlay {
    position: absolute;
    display: none;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
  }
  &:hover {
    .certificatesCard__overlay {
      display: grid;
      place-items: center;
      font-size: 28px;
      color: #b0b0b0;
    }
  }
`;
function CertificatesCard({ title, img }) {
  const [show, setShow] = useState(false);

  const pageVariants = {
    inY: {
      opacity: 1,
      scale: 1,
    },
    outY: {
      opacity: 0,
      scale: 0,
    },
  };

  return (
    <CertificatesCardStyled
      initial={pageVariants.outY}
      animate={pageVariants.inY}
      exit={pageVariants.outY}
      transition={{ duration: 0.5 }}
      onClick={() => setShow(!show)}
    >
      <div className="certificatesCard__overlay">
        <i className="fas fa-plus"></i>
      </div>
      <motion.img
        initial={blurAnimation.outBlur}
        animate={blurAnimation.inBlur}
        exit={blurAnimation.outBlur}
        transition={{ duration: 0.5 }}
        src={img}
        alt="sebastian labadie certificados"
      />
      <Modal
        show={show}
        setShow={() => setShow(!show)}
        title={title}
        img={img}
      />
    </CertificatesCardStyled>
  );
}

export default CertificatesCard;
