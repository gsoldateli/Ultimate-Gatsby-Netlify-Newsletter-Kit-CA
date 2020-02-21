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

  @media (max-width: 759px) {
    flex-flow: column wrap;
    align-items: center;
    margin: 0 auto;
  }
`;

const GraphImage = styled.img`
  object-fit: contain;
  object-position: center;
  flex-basis: 0;
  min-width: ${({ fluid }) => (fluid ? "calc(66% - 9rem)" : "170px")};
  @media (max-width: 760px) {
    min-width: auto;
  }
`;

const Divider = styled.span`
  display: block;
  background-color: #4c4754;
  width: 1px;
  margin: 0 2rem;
`;

const DividerMobile = styled(Divider)`
  display: none;
  @media (max-width: 759px) {
    display: block;
    width: 100%;
    height: 1px;
    margin: 2rem 0 3rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  max-width: ${({ fluid }) => (fluid ? "calc(50% - 2rem)" : "460px")};

  word-break: break-word;
  .title {
    font-size: 22px;
    font-weight: 600;
    @media (max-width: 759px) {
      line-height: 28px;
    }
  }

  .content {
    margin-top: 16px;

    font-weight: 400;
    font-size: 18px;

    a {
      text-decoration: none;
    }
  }
  @media (max-width: 860px) {
    max-width: ${({ fluid }) => (fluid ? "calc(50% - 5rem)" : "360px")};
  }
  @media (max-width: 760px) {
    margin-top: 2rem;
    max-width: 100%;

    .title {
      margin-bottom: 0;
    }
  }
`;

const HomeStatisticItem = ({
  fluid,
  title,
  content,
  src,
  disableMobileDivider = false
}) => {
  return (
    <>
      {!disableMobileDivider && <DividerMobile />}
      <Wrapper fluid={fluid}>
        <GraphImage src={src} fluid={fluid} />
        <Divider />
        <ContentWrapper fluid={fluid}>
          <h5 className="title">{title}</h5>
          <div className="content">{content}</div>
        </ContentWrapper>
      </Wrapper>
    </>
  );
};

HomeStatisticItem.Divider = HomeStatisticDivider;

export default HomeStatisticItem;
