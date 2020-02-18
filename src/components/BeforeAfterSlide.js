import React, { useEffect, useRef, useState } from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Image = styled.div`
  background-image: url(${({ src }) => src});
  background-position: center;
  background-size: cover;
  width: 100%;
  padding-top: 28%;
`;

const Arrow = styled.span`
  font-size: 3rem;
  color: gray;
`;
const BeforeAfterSlide = ({ beforeImageSrc, afterImageSrc }) => {
  return (
    <Wrapper>
      <Image src={beforeImageSrc} alt="" />
      <Arrow>→</Arrow>
      <Image src={afterImageSrc} alt="" />
    </Wrapper>
  );
};

export default BeforeAfterSlide;
