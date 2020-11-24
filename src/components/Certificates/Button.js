import React from "react";
import styled from "styled-components";
const ButtonStyled = styled.div`
  font-size: 1.2rem;
  padding: 1rem 3rem;
  color: #f4f4f4;
  text-transform: uppercase;

  .btn {
    padding: .5rem 1rem;
    cursor: pointer;
    text-decoration: none;
    border: 1px solid rgb(var(--color-tomatoe));
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    width: 150px;
    text-align: center;


    &:hover {
      box-shadow: 1px 1px 25px 10px rgba(var(--color-tomatoe), 0.4);
      &:before {
        left: 100%;
      }
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        120deg,
        transparent,
        rgba(var(--color-tomatoe), 0.4),
        transparent
      );
      transition: all 650ms;
    }
  }
`;
function Button() {
  return (
    <ButtonStyled>
      <div className="btn">More Info</div>
    </ButtonStyled>
  );
}

export default Button;
