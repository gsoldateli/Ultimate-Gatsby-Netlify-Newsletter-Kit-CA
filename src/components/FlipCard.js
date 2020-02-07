import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  background-color: transparent;
  max-width: 100%;
  height: ${({ height }) => height};
  perspective: 1000px;
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;

  ${CardWrapper}:hover & {
    transform: rotateY(180deg);
  }
`;

const Placeholder = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const Front = styled(Placeholder)``;
const Back = styled(Placeholder)`
  transform: rotateY(180deg);
`;

const FlipCard = ({ front, back, height }) => {
  return (
    <CardWrapper height={height}>
      <CardInner>
        <Front>{front}</Front>
        <Back>{back}</Back>
      </CardInner>
    </CardWrapper>
  );
};

export default FlipCard;
