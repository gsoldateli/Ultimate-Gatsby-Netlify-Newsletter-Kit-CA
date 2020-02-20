import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import Section from "../components/Section";
import Accordion from "../components/Accordion";
import ButtonCTA from "../components/Section/ButtonCTA";

import Helmet from "react-helmet";
import Markdown from "markdown-to-jsx";

export const AboutUsPageTemplate = ({
  title,
  description,
  backgroundImage,
  overviewSection,
  contactUsSection,
  supportUsSection,
  helmet
}) => {
  return (
    <>
      {helmet || ""}
      <HeroSection title={title} backgroundImage={backgroundImage} />
      <Section style={{ wrapper: { paddingBottom: 0 } }}>
        {description && <Markdown>{description}</Markdown>}
      </Section>
      <Section
        title={overviewSection.title}
        subtitle={overviewSection.subtitle}
        style={{ wrapper: { paddingBottom: 0 } }}
      >
        <Markdown>{overviewSection.body}</Markdown>
        <br />
        <br />
        {overviewSection.things && (
          <Accordion
            items={overviewSection.things.map(
              ({ title, description }, index) => ({
                head: (
                  <strong>
                    <big style={{ fontSize: "110%" }}>{title}</big>
                  </strong>
                ),
                body: <Markdown>{description}</Markdown>
              })
            )}
          />
        )}
      </Section>
      <Section
        title={contactUsSection.title || "Contact Us"}
        subtitle={
          contactUsSection.subtitle || "— Do you have additional questions?"
        }
      >
        <Markdown>{contactUsSection.body}</Markdown>
      </Section>
      <Section
        theme="dark"
        title={supportUsSection.title}
        subtitle={supportUsSection.subtitle}
      >
        <Markdown>{supportUsSection.body}</Markdown>
        <br />
        <br />
        <ButtonCTA
          href={supportUsSection.ctaButton.url}
          mainText={supportUsSection.ctaButton.label}
          secondaryText={supportUsSection.ctaButton.sublabel}
        />
      </Section>
    </>
  );
};

AboutUsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutUsPage = ({ data }) => {
  const {
    markdownRemark: { frontmatter: page }
  } = data;

  const backgroundImage = page.backgroundImage.childImageSharp.fluid.src;
  return (
    <Layout>
      <AboutUsPageTemplate
        title={page.title}
        description={page.description}
        backgroundImage={backgroundImage}
        overviewSection={page.overviewSection}
        contactUsSection={page.contactUsSection}
        supportUsSection={page.supportUsSection}
        helmet={
          <Helmet titleTemplate="%s | Page">
            <title>{`${page.title}`}</title>
            <meta name="description" content={`${page.description}`} />
          </Helmet>
        }
      />
    </Layout>
  );
};

AboutUsPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutUsPage;

export const aboutUsPageQuery = graphql`
  query AboutUsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        backgroundImage {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        overviewSection {
          title
          subtitle
          body
          things {
            title
            description
          }
        }
        contactUsSection {
          title
          subtitle
          body
        }
        supportUsSection {
          title
          subtitle
          body
          ctaButton {
            label
            sublabel
            url
          }
        }
      }
    }
  }
`;
