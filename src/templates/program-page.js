import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Markdown from "markdown-to-jsx";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Accordion from "../components/Accordion";
import GetStartedSection from "../components/GetStartedSection";

const HeroWrapper = styled.section`
  width: 100%;
  padding-top: 37.5%;
  position: relative;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-image: url('${({ backgroundImage }) =>
    backgroundImage
      ? backgroundImage
      : "https://via.placeholder.com/1200x600"}');
`;

const HeroContent = styled.section`
  position: absolute;
  left: 50%;

  top: 0;
  padding: 4rem 0;
  max-width: 1200px;
  transform: translate3d(-50%, 0, 0);
  width: 100%;
  height: 100%;

  @media (max-width: 1062px) {
    padding: 1rem;
  }
`;

const ProgramTitle = styled.h1`
  background-color: #32558f;
  color: #fff;
  padding: 1rem 2rem;
  display: inline-flex;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 500;

  @media (max-width: 760px) {
    font-size: 4vw;
    padding: 0.5rem 1rem;
  }
`;

export const ProgramTemplate = ({
  name,
  backgroundImage,
  importantFaqSection,
  faqSection,
  learnMoreSection,
  contactUsSection,
  customStyle
}) => {
  console.log({ importantFaqSection });
  return (
    <>
      {customStyle && <Markdown>{customStyle}</Markdown>}
      <HeroWrapper backgroundImage={backgroundImage}>
        <HeroContent>
          <ProgramTitle className="program-title-inner">{name}</ProgramTitle>
        </HeroContent>
      </HeroWrapper>
      <Section>
        <>
          {importantFaqSection.description && (
            <>
              <Markdown>{importantFaqSection.description}</Markdown>
              <br />
              <br />
            </>
          )}
          {importantFaqSection.questions && (
            <Accordion
              items={importantFaqSection.questions.map(
                ({ question, answer }, index) => ({
                  head: (
                    <strong>
                      <big style={{ fontSize: "110%" }}>{question}</big>
                    </strong>
                  ),
                  body: <Markdown>{answer}</Markdown>
                })
              )}
            />
          )}
        </>
      </Section>

      <GetStartedSection />
      <Section
        title={faqSection.title}
        subtitle={faqSection.subtitle || "— Get all of your questions answered"}
        style={{ wrapper: { paddingBottom: "0" } }}
      >
        <>
          {faqSection.body && (
            <>
              <Markdown>{faqSection.body}</Markdown>
              <br />
              <br />
            </>
          )}
          {faqSection.questions && (
            <Accordion
              items={faqSection.questions.map(
                ({ question, answer }, index) => ({
                  head: (
                    <strong>
                      <big style={{ fontSize: "110%" }}>{question}</big>
                    </strong>
                  ),
                  body: <Markdown>{answer}</Markdown>
                })
              )}
            />
          )}
        </>
      </Section>
      <Section
        title={learnMoreSection.title}
        subtitle={
          learnMoreSection.subtitle || "— Get all of your questions answered"
        }
      >
        <>
          {learnMoreSection.body && (
            <>
              <Markdown>{learnMoreSection.body}</Markdown>
              <br />
              <br />
            </>
          )}
          {learnMoreSection.questions && (
            <Accordion
              items={learnMoreSection.questions.map(
                ({ question, answer }, index) => ({
                  head: (
                    <strong>
                      <big style={{ fontSize: "110%" }}>{question}</big>
                    </strong>
                  ),
                  body: <Markdown>{answer}</Markdown>
                })
              )}
            />
          )}
        </>
      </Section>
      <Section
        theme="dark"
        title={contactUsSection.title || "Contact Us"}
        subtitle={
          contactUsSection.subtitle || "— Do you have additional questions?"
        }
      >
        {contactUsSection.body && <Markdown>{contactUsSection.body}</Markdown>}
      </Section>
    </>
  );
};

const Program = ({ data }) => {
  const {
    page: { frontmatter: program }
  } = data;
  const backgroundImage = program.backgroundImage.childImageSharp.fluid.src;
  return (
    <Layout>
      <ProgramTemplate
        name={program.name}
        customStyle={program.customStyle}
        description={program.description}
        backgroundImage={backgroundImage}
        importantFaqSection={program.importantFaqSection}
        faqSection={program.faqSection}
        learnMoreSection={program.learnMoreSection}
        contactUsSection={program.contactUsSection}
        customStyle={program.customStyle}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${program.title}`}</title>
            <meta name="description" content={`${program.description}`} />
          </Helmet>
        }
      />
    </Layout>
  );
};

Program.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default Program;

export const pageQuery = graphql`
  query ProgramPageById($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        name
        backgroundImage {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        importantFaqSection {
          description
          questions {
            question
            answer
          }
        }
        faqSection {
          title
          subtitle
          body
          questions {
            answer
            question
          }
        }

        learnMoreSection {
          title
          subtitle
          body
          questions {
            question
            answer
          }
        }

        contactUsSection {
          title
          subtitle
          body
        }
        customStyle
      }
    }
  }
`;
