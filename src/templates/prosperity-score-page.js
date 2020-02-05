import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Markdown from "markdown-to-jsx";

import Layout from "../components/Layout";
import Container from "../components/Container";
import Slider from "../components/Slider";
import styled from "styled-components";

const Slide = styled.div`
  img {
    max-width: 100%;
  }
`;

export const ProsperityScorePageTemplate = ({
  title,
  introSection,
  registerSection,
  faqSection,
  contactSection,
  learnMoreSection
}) => {
  return (
    <>
      <h1>{title}</h1>

      <Container>
        <h2>{introSection.title}</h2>
        <h3>{introSection.subtitle}</h3>
        <Markdown>{introSection.body}</Markdown>
      </Container>
      <Container>
        <h2>{registerSection.title}</h2>
        <h3>{registerSection.subtitle}</h3>
        <img style={{ width: "100%" }} src="http://i.imgur.com/YFtE0Nm.png" />
      </Container>
      <Container>
        <h2>{faqSection.title}</h2>
        <h3>{faqSection.subtitle}</h3>
        <ul>
          {faqSection.questions.map(({ question, answer }) => (
            <li>
              <strong>{question}</strong> <br />{" "}
              <div>
                <Markdown>{answer}</Markdown>
              </div>
            </li>
          ))}
        </ul>
      </Container>
      <Container>
        <h2>{contactSection.title}</h2>
        <h3>{contactSection.subtitle}</h3>
        <Markdown>{contactSection.body}</Markdown>
      </Container>
      <Container>
        <h2>{learnMoreSection.title}</h2>
        <h3>{learnMoreSection.subtitle}</h3>
        <ul>
          {learnMoreSection.informations.map(({ title, content }) => (
            <li>
              <strong>{title}</strong> <br />{" "}
              <div>
                <Markdown>{content}</Markdown>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};

ProsperityScorePageTemplate.propTypes = {
  title: PropTypes.string,
  subheading: PropTypes.string
};

const ProsperityScorePage = ({ data }) => {
  console.log({ data });
  const {
    pageData: { frontmatter: pageData }
  } = data;
  return (
    <Layout>
      <ProsperityScorePageTemplate {...pageData} />
    </Layout>
  );
};

ProsperityScorePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default ProsperityScorePage;

export const pageQuery = graphql`
  query ProsperityScorePageTemplate {
    pageData: markdownRemark(
      frontmatter: { templateKey: { eq: "prosperity-score-page" } }
    ) {
      frontmatter {
        title
        introSection {
          title
          subtitle
          body
        }
        registerSection {
          title
          subtitle
        }
        faqSection {
          title
          subtitle
          questions {
            answer
            question
          }
        }
        contactSection {
          title
          subtitle
          body
        }
        learnMoreSection {
          title
          subtitle
          informations {
            title
            content
          }
        }
      }
    }
  }
`;