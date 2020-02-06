import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Container from "../Container";

const themes = {
  default: {
    backgroundColor: "#fff",
    fontColor: "#484848"
  },
  dark: {
    backgroundColor: "#141f3b",
    fontColor: "#fff"
  }
};

const SectionWrapper = styled.section`
  background-color: ${({ theme }) => theme.backgroundColor};
  padding-top: 3rem;
  padding-bottom: 4.5rem;
`;
const Body = styled.div`
  color: ${({ theme }) => theme.fontColor}; /* VARIABLE fontColor */
  padding: 0 1rem;
`;

const Header = styled.div`
  h2,
  h3 {
    color: #02c3fa;
  }
  h2 {
    font-size: 3rem;
    font-weight: 600;
    line-height: 3.5rem;
    margin-bottom: 1.6rem;
  }
  h3 {
    font-size: 1.8rem;
    font-weight: 300;
    margin-bottom: 3.2rem;
  }
`;

const Section = ({ children, title, subtitle, theme = "default" }) => {
  const currentTheme = themes[theme];
  return (
    <ThemeProvider theme={currentTheme}>
      <SectionWrapper>
        <Container>
          <Header>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
          </Header>
          <Body>{children}</Body>
        </Container>
      </SectionWrapper>
    </ThemeProvider>
  );
};

export default Section;
