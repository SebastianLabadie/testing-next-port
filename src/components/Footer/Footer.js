import React from "react";
import styled from "styled-components";
import Wrapper from "../Wrapper";
import {useIntl} from 'react-intl'

const FooterStyled = styled.div`
  width: 100;
  background: #0d0e0e;
  color: #dadada;
  font-size: 0.9em;
  .container {
    padding: 1.2rem;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    grid-gap: 6.2em;
  }
  .info {
    margin-top: 0.8em;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0.5em;
    a{
        position:relative;
        text-decoration:none;
        color:#dadada;

        i{
            position:relative;
            display:inline-block;
            top:-3px;
            right:-5px;
            transform:rotate(50deg);
            color:red;
            font-size:11px;
        }
    }
  }
  

  @media screen and (max-width: 1000px) {
      .container{
          grid-gap:4.4em;
      }
  }
  @media screen and (max-width: 900px) {
      .container{
          grid-gap:3em;
          grid-template-columns:repeat(2,auto);
        
      }

  }
  @media screen and (max-width: 500px) {
      
      .container{
        grid-template-columns:repeat(auto-fill,74vw);
        justify-content:left;
      }
  }

`;

const Footer = () => {
  const intl=useIntl()
  return (
    <FooterStyled>
      <Wrapper>
        <div className="container">
          <div className="containers ">
            <h3>{intl.messages['footer.thankT']}</h3>
            <div className="info">
              <p>
              {intl.messages['footer.interest']}
              </p>
            </div>
          </div>
          <div className="containers">
            <h3>{intl.messages['footer.contact']}</h3>
            <div className="info">
              <p>sebastianlabadie.contact@gmail.com</p>
            </div>
          </div>
          <div className="containers">
            {/*poner iconos*/}
            <h3>{intl.messages['footer.socials']}</h3>
            <div className="info">
              <a href="https://github.com/SebastianLabadie" target="_blank" rel="noopener noreferrer">Github<i className="fas fa-long-arrow-alt-up"></i></a>
              <a href="https://www.linkedin.com/in/sebasti%C3%A1n-labadie-173902181/" target="_blank" rel="noopener noreferrer"> Linkdin<i className="fas fa-long-arrow-alt-up"></i></a>
              <a href="https://www.instagram.com/sebastian._.labadie/?hl=es-la" target="_blank" rel="noopener noreferrer">Instagram<i className="fas fa-long-arrow-alt-up"></i></a>
            </div>
          </div>
          <div className="containers">
            {/*poner iconos*/}
            <h3>{intl.messages['footer.resumen']}</h3>
            <div className="info">
              <a href="https://drive.google.com/file/d/1K3HTlXorhh-BLr0Fp2v1_pqCXCVrkfL9/view?usp=sharing" target="_blank" rel="noopener noreferrer">C.V<i className="fas fa-long-arrow-alt-up"></i></a>
            </div>
          </div>
        </div>
      </Wrapper>
    </FooterStyled>
  );
};

export default Footer;
