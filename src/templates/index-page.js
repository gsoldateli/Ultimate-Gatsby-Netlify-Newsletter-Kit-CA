import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

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
  console.log(data);
  const [counter, setCounter] = useState(0);
  const { solutions } = data;

  return (
    <Container>
      <div style={{ marginTop: "1rem" }}>
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
      </div>
    </Container>
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  subheading: PropTypes.string
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { edges: solutions } = data.solutions;
  console.log({ solutions });
  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        paragraph={frontmatter.paragraph}
        multipleItems={frontmatter.multipleItems}
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
        paragraph
        multipleItems {
          title
          description
          finalparagraph
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
