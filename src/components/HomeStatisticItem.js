import React from "react";
import styled from "styled-components";

export const HomeStatisticDivider = styled.hr`
  width: 100%;
  max-width: 630px;
  border: 1px solid #9c8fab;
  border-top: none;
  padding: 0;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  /* align-items: center; */
  margin: 0 auto 3rem;
  max-width: ${({ fluid }) => (fluid ? "100%" : "730px")};

  @media (max-width: 950px) {
    flex-flow: column wrap;
    align-items: center;
  }
`;

const GraphImage = styled.img`
  object-fit: contain;
  object-position: center;
  flex-basis: 0;
  min-width: ${({ fluid }) => (fluid ? "calc(60% - 8rem)" : "170px")};
  @media (max-width: 950px) {
    min-width: auto;
  }
`;

const Divider = styled.span`
  display: block;
  background-color: #a270f1;
  width: 1px;
  margin: 0 2rem;

  @media (max-width: 950px) {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  max-width: ${({ fluid }) => (fluid ? "calc(50% - 2rem)" : "460px")};

  word-break: break-word;
  .title {
    font-size: 20px;
    font-weight: 600;
  }

  .content {
    margin-top: 16px;

    font-weight: 400;
    font-size: 18px;

    a {
      text-decoration: none;
    }
  }

  @media (max-width: 950px) {
    margin-top: 2rem;
    max-width: 100%;

    .title {
      margin-bottom: 0;
    }
  }
`;

const HomeStatisticItem = ({ fluid, title, content, src }) => {
  return (
    <Wrapper fluid={fluid}>
      <GraphImage src={src} fluid={fluid} />
      <Divider />
      <ContentWrapper fluid={fluid}>
        <h5 className="title">{title}</h5>
        <div className="content">{content}</div>
      </ContentWrapper>
    </Wrapper>
  );
};

HomeStatisticItem.Divider = HomeStatisticDivider;

export default HomeStatisticItem;