import React, { useState } from "react";
import styled from "styled-components";
import  MenuItem  from "./MenuItem";
import Wrapper from "../Wrapper";
import lan from './language32.png'
import {useIntl} from 'react-intl'
import Hamburger from "react-hamburgers";

const NavbarStyled = styled.div`
 
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  .NavbarItems {
    margin:0 1em;
    background: rgba(19, 20, 20, 1);
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.2rem;
  }
  .navbar-name {
    justify-self: start;
    cursor: pointer;
    font-size: 1.2em;
  }
  .nav-menu {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(6, auto);
    grid-gap: 2em;
    text-align: center;
    width: 70vw;
    justify-content: end;
  }

  .nav-links {
    color:#dadada;
    text-decoration: none;

    &::after {
      content: "";
      display: block;
      width: 0;
      height: 2px;
      background: #fff;
      transition: width 0.3s;
    }
    &:hover {
      color:rgb(224, 80, 80);
      &:after {
        width: 100%;
        transition: width 0.3s;
      }
    }
  }

  .fa-bars {
    color: #fff;
  }
  .menu-icon {
    display: none;
    z-index:200;

  }
.language-icon{
  display:flex;
  align-items:center;
  cursor:pointer;
  .language-img{
  width:25px;
  height:25px;
  background-image:url(${lan});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  }
  p{
    letter-spacing:3px;
    margin-left:3px;
    font-size:1rem;
    font-weight:300;
  }
}
  @media screen and (max-width: 800px) {
    
    .nav-menu {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: absolute;

      top: 0;
      left: -200vw;
      width: 100vw;
      height: 100%;
      max-height:100vh;
      background: rgba(19, 20, 20, 1);
      opacity: 1;
      z-index: 100;

      transition: all 0.8s ease;
    }
    .active {
      background: rgba(19, 20, 20, 1);
      left: 0vh;
      opacity: 1;
      transition: all 0.8 ease-out;
    }
    .menu-icon {
      display: block;
      font-size: 1.5em;
      cursor: pointer;
    }
    .language-icon{
      position:absolute;
      bottom:0;
      right:0;
    }
    li {
      margin: 5px;
    }
    .nav-links {
      font-size: 3rem;
    }
  }

    
  

  

`;


const Navbar = ({currentLocale,onClick}) => {
  const intl = useIntl()
  const [clicked, setClicked] = useState(false);
  
    
  const handleClickMenu=(e)=>{
    setClicked(!clicked)
    if(clicked){
      document.body.classList.remove('stop-scrolling') 
    }else{
      document.body.classList.add('stop-scrolling') 
    }
  }
  const handleClickLink=()=>{
    setClicked(false)
    document.body.classList.remove('stop-scrolling') 
  }
  
  
  return (
    <NavbarStyled>
      <Wrapper>
        <nav className="NavbarItems">
          <h1 className="navbar-name">Sebastián L</h1>
          <div className="menu-icon">

          <Hamburger
            active={clicked}
            type="spin"
            onClick={handleClickMenu}
          />
          </div>

          <ul className={clicked ? "nav-menu active" : "nav-menu"}>
            <MenuItem title={intl.messages['nav.home']} url="/" cName='nav-links' onClick={handleClickLink}/>
            <MenuItem title={intl.messages['nav.about']} url="/about" cName='nav-links' onClick={handleClickLink}/>
            <MenuItem title={intl.messages['nav.certificates']} url="/certifications" cName='nav-links' onClick={handleClickLink}/>
            <MenuItem title={intl.messages['nav.work']} url="/work" cName='nav-links' onClick={handleClickLink}/>
            <MenuItem title={intl.messages['nav.contact']} url="/contact" cName='nav-links' onClick={handleClickLink}/>
            <div className="language-icon" onClick={onClick}>
              <div className="language-img"></div>
              <p>{currentLocale.toUpperCase()}</p>
            </div>
          </ul>
        </nav>
      </Wrapper>
    </NavbarStyled>
  );
};

export default Navbar;
