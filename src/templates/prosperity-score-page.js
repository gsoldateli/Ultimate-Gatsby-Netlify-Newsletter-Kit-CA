import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Markdown from "markdown-to-jsx";
import styled from "styled-components";

import Layout from "../components/Layout";
import Container from "../components/Container";
import Accordion from "../components/Accordion";
import Section from "../components/Section";

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
      <Section title={introSection.title} subtitle={introSection.subtitle}>
        <Accordion />
        <Markdown>{introSection.body}</Markdown>
      </Section>

      <Section
        title={registerSection.title}
        subtitle={registerSection.subtitle}
        theme="dark"
      >
        <img style={{ width: "100%" }} src="http://i.imgur.com/YFtE0Nm.png" />
      </Section>
      <Section
        title={faqSection.title}
        subtitle={faqSection.subtitle}
        theme="dark"
      >
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
      </Section>
      <Section
        theme="dark"
        title={contactSection.title}
        subtitle={contactSection.subtitle}
      >
        <Markdown>{contactSection.body}</Markdown>
      </Section>
      <Section
        title={learnMoreSection.title}
        subtitle={learnMoreSection.subtitle}
      >
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
      </Section>
    </>
  );
};

ProsperityScorePageTemplate.propTypes = {
  title: PropTypes.string,
  subheading: PropTypes.string
};

const ProsperityScorePage = ({ data }) => {
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
