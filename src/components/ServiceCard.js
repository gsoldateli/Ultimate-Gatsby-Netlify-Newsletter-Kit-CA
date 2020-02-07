import React from "react";
import styled from "styled-components";
import FlipCard from "./FlipCard";

const Wrapper = styled.div`
  padding: 20px 0;
  /* width: 230px; */
`;

const FrontWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
`;

const BackWrapper = styled(FrontWrapper)`
  box-shadow: 0 4px 8px 10px rgba(0, 0, 0, 0.1);

  p {
    padding: 1rem;
    text-align: left;
    font-weight: 300;
  }
`;

const Picture = styled.div`
  width: 100%;
  padding-top: 120%;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;

  @media (max-width: 700px) {
    padding-top: 70%;
  }
`;

const PictureTitle = styled.strong`
  display: block;
  margin-bottom: 0.5rem;
`;

const PictureTitleBack = styled(PictureTitle)`
  color: #8f9ea1;
`;

const ServiceCard = ({ src, title, description }) => {
  return (
    <Wrapper style={{ height: "390px" }}>
      <FlipCard
        height="100%"
        key={title}
        front={
          <FrontWrapper>
            <Picture src={src} />

            <PictureTitle>{title}</PictureTitle>
          </FrontWrapper>
        }
        back={
          <BackWrapper>
            <p>{description}</p>
            <PictureTitleBack>{title}</PictureTitleBack>
          </BackWrapper>
        }
      />
    </Wrapper>
  );
};

export default ServiceCard;
