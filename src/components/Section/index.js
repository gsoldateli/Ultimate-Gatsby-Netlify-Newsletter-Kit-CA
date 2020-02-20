import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Markdown from "markdown-to-jsx";
import Container from "../Container";

const themes = {
  default: {
    backgroundColor: "#fff",
    fontColor: "#484848",
    linkColor: "#5FC6E7",
    titleColor: "#680BE6",
    subtitleColor: "#9013FE",
    accordion: {
      borderColor: "#dbdbdb",
      fontColor: "#5b5b5b",
      activeHeaderColor: "#12abd4"
    }
  },
  dark: {
    backgroundColor: "#13012d",
    fontColor: "#dfd7eb",
    fontColor: "#dfd7eb",
    titleColor: "#af81f7;",
    subtitleColor: "#a270f1",
    accordion: {
      borderColor: "#d6dcdc",
      fontColor: "#fff6fb",
      activeHeaderColor: "#fff6fb"
    }
  }
};

const SectionWrapper = styled.section`
  background-color: ${({ theme }) => theme.backgroundColor};
  padding-top: 4.2rem;
  padding-bottom: 4.5rem;
  position: relative;

  h4 {
    font-weight: 800;
    font-size: 1.9rem;
    line-height: 2.3rem;
    margin-bottom: 1.6rem;
  }

  h5 {
    font-weight: 600;
    font-size: 1.4rem;
    /* margin-bottom: 1rem; */
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

  big {
    font-size: 110%;
  }
  hr {
    margin-top: 3rem;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #ccc;
  }
`;
const Body = styled.div`
  color: ${({ theme }) => theme.fontColor};

  max-width: 860px;
  margin: 0 auto;
`;

const Header = styled.div`
  h2 {
    color: ${({ theme }) => theme.titleColor || "#333"};
    font-size: 56px;
    font-weight: 900;
    line-height: 76px;
    margin-bottom: 6px;
    @media (max-width: 759px) {
      text-align: center;
      font-size: 5vw;
      line-height: 40px;
    }
    @media (max-width: 600px) {
      text-align: center;
      font-size: 12vw;
      line-height: 12vw;
      margin-bottom: 2rem;
    }
    strong {
      font-weight: 700;
    }
    hr {
      margin-top: 3rem;
    }
  }
  h3 {
    color: ${({ theme }) => theme.subtitleColor || "#333"};
    font-size: 36px;
    font-weight: 300;
    margin-bottom: 3.2rem;
    @media (max-width: 759px) {
      font-size: 24px;
      line-height: 1.8rem;
    }
  }
`;

const Section = ({
  children,
  title,
  subtitle,
  theme = "default",
  style = {}
}) => {
  const currentTheme = themes[theme];
  const showHeader = !!title || !!subtitle;
  return (
    <ThemeProvider theme={currentTheme}>
      <SectionWrapper style={style.wrapper}>
        <Container>
          {showHeader && (
            <Header>
              {title && (
                <h2>
                  <Markdown>{title}</Markdown>
                </h2>
              )}
              <h3>
                {subtitle && subtitle.length > 0 && (
                  <Markdown>{subtitle}</Markdown>
                )}
              </h3>
            </Header>
          )}
          {children}
        </Container>
      </SectionWrapper>
    </ThemeProvider>
  );
};

Section.Body = Body;

export default Section;
