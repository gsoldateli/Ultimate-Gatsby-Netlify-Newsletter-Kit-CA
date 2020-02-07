import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Container from "../Container";

const themes = {
  default: {
    backgroundColor: "#fff",
    fontColor: "#484848",
    linkColor: "#a40d2c",
    accordion: {
      borderColor: "#dbdbdb",
      fontColor: "#5b5b5b",
      activeHeaderColor: "#12abd4"
    }
  },
  blue: {
    backgroundColor: "#1f3870",
    fontColor: "#fff6fb",
    linkColor: "#fff6fb",
    accordion: {
      borderColor: "#d6dcdc",
      fontColor: "#fff6fb",
      activeHeaderColor: "#fff6fb"
    }
  },
  blueDark: {
    backgroundColor: "#141f3b",
    fontColor: "#d8dde1",
    linkColor: "#d8dde1",
    accordion: {
      borderColor: "#677288",
      fontColor: "#d8dde1",
      activeHeaderColor: "#d8dde1"
    }
  }
};

const SectionWrapper = styled.section`
  background-color: ${({ theme }) => theme.backgroundColor};
  padding-top: 4.2rem;
  padding-bottom: 4.5rem;

  h4 {
    font-weight: 500;
    font-size: 1.9rem;
    margin-bottom: 1rem;
  }

  h5 {
    font-weight: 600;
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.linkColor};
  }

  ul {
    padding-left: 1.4rem;
    margin-left: 1.2rem;
    list-style: disc;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 6px solid #ccc;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  small {
    font-size: 90%;
  }

  small {
    font-size: 110%;
  }
`;
const Body = styled.div`
  color: ${({ theme }) => theme.fontColor}; /* VARIABLE fontColor */
  padding: 0 2rem;
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
    margin-bottom: 6px;
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
            <h3>{subtitle && subtitle.length > 0 && subtitle}</h3>
          </Header>
          <Body>{children}</Body>
        </Container>
      </SectionWrapper>
    </ThemeProvider>
  );
};

export default Section;
