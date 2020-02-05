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

export const IndexPageTemplate = data => {
  const {
    solutions = null,
    sections: { prosperitySection, solvingUnsolvableSection, supportUsSection }
  } = data;

  return (
    <>
      <Container>
        <div style={{ marginTop: "1rem" }}>
          {solutions && solutions.length > 0 && (
            <Slider
              slides={solutions.map(
                ({
                  id,
                  frontmatter: {
                    title,
                    image: {
                      childImageSharp: {
                        fluid: { src: imageSrc }
                      }
                    }
                  }
                }) => (
                  <Slide key={id}>
                    <img src={imageSrc} alt={`${title} project`} />
                    <h1>{title}</h1>
                  </Slide>
                )
              )}
            />
          )}
        </div>
      </Container>
      <Container style={{ backgroundColor: "#ccc" }}>
        <h1>{prosperitySection.title}</h1>
        <h2>{prosperitySection.subtitle}</h2>
        <ul>
          {prosperitySection.steps.map(step => (
            <li key={step.title}>
              <h1>{step.title}</h1>
              <Markdown>{step.description}</Markdown>
            </li>
          ))}
        </ul>
        <a href={prosperitySection.ctaButton.url}>
          {prosperitySection.ctaButton.label}
        </a>
      </Container>
      <Container>
        <h1>{solvingUnsolvableSection.title}</h1>
        <h2>{solvingUnsolvableSection.subtitle}</h2>

        <div>{solvingUnsolvableSection.body}</div>
        <ul>
          {solvingUnsolvableSection.beforeAfter.map(beforeAfter => {
            let { excerpt, beforeImage, afterImage } = beforeAfter;

            if (beforeImage.childImageSharp) {
              beforeImage = beforeImage.childImageSharp.fluid.src;
            }

            if (afterImage.childImageSharp) {
              afterImage = afterImage.childImageSharp.fluid.src;
            }

            return (
              <li key={excerpt}>
                <h1>{excerpt}</h1>
                <img src={beforeImage} />
                TO
                <img src={afterImage} />
              </li>
            );
          })}
        </ul>
        <a href={solvingUnsolvableSection.ctaButton.url}>
          {solvingUnsolvableSection.ctaButton.label}
        </a>
      </Container>
      <Container style={{ backgroundColor: "#ccc" }}>
        <h1>{supportUsSection.title}</h1>
        <h2>{supportUsSection.subtitle}</h2>
        <Markdown>{supportUsSection.body}</Markdown>
        <a href={supportUsSection.ctaButton.url}>
          {supportUsSection.ctaButton.label}
        </a>
      </Container>
    </>
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  subheading: PropTypes.string
};

const IndexPage = ({ data }) => {
  const { frontmatter: sections } = data.markdownRemark;
  const { edges: solutions } = data.solutions;

  console.log({ solutions });
  return (
    <Layout>
      <IndexPageTemplate
        sections={sections}
        solutions={solutions.map(({ node: solution }) => solution)}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subheading
        prosperitySection {
          title
          subtitle
          steps {
            title
            description
          }
          ctaButton {
            label
            url
          }
        }
        solvingUnsolvableSection {
          title
          subtitle
          body
          beforeAfter {
            excerpt
            beforeImage {
              childImageSharp {
                fluid(maxWidth: 400, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            afterImage {
              childImageSharp {
                fluid(maxWidth: 400, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          ctaButton {
            label
            url
          }
        }
        supportUsSection {
          title
          subtitle
          body
          ctaButton {
            label
            url
          }
        }
      }
    }

    solutions: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "solution-page" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            date
            image {
              childImageSharp {
                fluid(maxWidth: 400, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          html
        }
      }
    }
  }
`;
