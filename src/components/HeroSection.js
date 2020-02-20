import React from "react";
import styled from "styled-components";

const HeroWrapper = styled.section`
width: 100%;
padding-top: 37.5%;
position: relative;
background-position: center;
/* background-attachment: fixed; */
background-size: cover;
background-image: url('${({ backgroundImage }) =>
  backgroundImage ? backgroundImage : "https://via.placeholder.com/1200x600"}');
`;

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
  padding: 1rem 2rem;
  display: inline-flex;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 500;

  @media (max-width: 760px) {
    font-size: 4vw;
    padding: 0.5rem 1rem;
  }
`;

const HeroSection = ({ backgroundImage, title }) => {
  return (
    <HeroWrapper backgroundImage={backgroundImage}>
      <HeroContent>
        <HeroTitle className="program-title-inner hero-title">
          {title}
        </HeroTitle>
      </HeroContent>
    </HeroWrapper>
  );
};

export default HeroSection;
