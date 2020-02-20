import React from "react";
import styled from "styled-components";

const HeroContent = styled.section`
  position: absolute;
  left: 50%;

  top: 0;
  padding: 4rem 0;
  max-width: 1200px;
  transform: translate3d(-50%, 0, 0);
  width: 100%;
  height: 100%;

  @media (max-width: 1062px) {
    padding: 1rem;
  }
`;

const HeroTitle = styled.h1`
  background-color: #32558f;
  color: #fff;
  padding: 0.5rem 2rem;
  display: inline-flex;
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 400;

  @media (max-width: 760px) {
    font-size: 4vw;
    padding: 0.5rem 1rem;
  }
`;

const BackgroundImage = styled.img`
  object-fit: contain;
  width: 100%;
`;

const Wrapper = styled.section`
  position: relative;
`;

const HeroSection = ({ backgroundImage, title }) => {
  return (
    <Wrapper>
      <BackgroundImage src={backgroundImage} />
      <HeroContent>
        <HeroTitle className="program-title-inner hero-title">
          {title}
        </HeroTitle>
      </HeroContent>
    </Wrapper>
  );
};

export default HeroSection;
