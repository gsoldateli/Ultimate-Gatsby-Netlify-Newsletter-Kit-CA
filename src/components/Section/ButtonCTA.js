import React from "react";
import styled from "styled-components";
import { darken } from "polished";

const CTAWrapper = styled.div`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 30px;
`;
const ButtonCTAStyled = styled.a`
  display: inline-flex;
  flex-flow: column wrap;
  background-color: #e5174c;
  color: #fafefd !important;
  border-radius: 10px;
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  text-decoration: none !important;
  margin: 0 auto;
  padding: 1.2rem 2.3rem;
  line-height: 1.7rem;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${darken(0.1, "#e5174c")};
  }
  span {
    display: block;
    font-size: 22px;
    font-weight: 400;
  }

  @media (max-width: 759px) {
    font-size: 24px;
  }

  @media (max-width: 440px) {
    padding: 0.3rem 1.3rem;
    font-size: 20px;
    span {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

const ButtonCTA = ({ mainText, secondaryText = "", ...rest }) => {
  return (
    <CTAWrapper>
      <ButtonCTAStyled {...rest}>
        <strong>{mainText}</strong>
        {secondaryText && <span>{secondaryText}</span>}
      </ButtonCTAStyled>
    </CTAWrapper>
  );
};

export default ButtonCTA;
