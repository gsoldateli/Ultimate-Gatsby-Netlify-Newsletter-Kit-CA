import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Markdown from "markdown-to-jsx";
import styled from "styled-components";

import Layout from "../components/Layout";
import Slider from "../components/Slider";
import Section from "../components/Section";
import ButtonCTA from "../components/Section/ButtonCTA";
import BeforeAfterSlider from "../components/BeforeAfterSlider";

const SliderWrapper = styled.div`
  @media (min-width: 700px) {
    margin-left: -70px;
    margin-right: -2em;
  }

  .glide__bullets {
    display: none;
  }

  @media (max-width: 1020px) {
    .glide__arrows {
      display: none;
    }
    .glide__bullets {
      display: flex;
    }
  }
`;

const SlideLabelWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 2rem;

  .circle {
    margin-top: 4px;
    width: 50px;
    height: 50px;
    border: 2px solid #51366d;
    border-radius: 50%;
    color: #987ebd;
    line-height: 50px;
    text-align: center;
    font-size: 1.4rem;
  }
  .content {
    width: calc(100% - 70px);
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 1.7rem;
    color: ${({ theme }) => theme.fontColor || "#333"};
  }

  @media (max-width: 500px) {
    .content {
      font-size: 1rem;
      line-height: 1.3rem;
    }

    .circle {
      font-size: 1rem;
    }
  }
`;

export const IndexPageTemplate = data => {
  const {
    sections: {
      presentationSection,
      whyCareSection,
      whyYouCrucialSection,
      solutionsSection
    }
  } = data;

  return (
    <>
      <Section
        title={presentationSection.title}
        subtitle={presentationSection.subtitle}
        // theme="blueDark"
      >
        <SliderWrapper>
          <Slider
            slides={presentationSection.transformation.map(
              (transform, index) => {
                let { beforeImage, afterImage } = transform;
                if (beforeImage.childImageSharp) {
                  beforeImage = beforeImage.childImageSharp.fluid.src;
                }

                if (afterImage.childImageSharp) {
                  afterImage = afterImage.childImageSharp.fluid.src;
                }

                return (
                  <div key={transform.body}>
                    <SlideLabelWrapper>
                      <div className="circle">{index + 1}</div>
                      <div className="content">
                        {<Markdown>{transform.body}</Markdown>}
                      </div>
                    </SlideLabelWrapper>
                    <BeforeAfterSlider
                      beforeImageSrc={beforeImage}
                      afterImageSrc={afterImage}
                    />
                  </div>
                );
              }
            )}
            options={{
              perView: 1,
              gap: 29,
              swipeThreshold: false,
              breakpoints: {
                700: {
                  gap: 40
                }
              }
            }}
          />
        </SliderWrapper>
        <div>
          <ButtonCTA
            href={presentationSection.ctaButton.url}
            mainText={presentationSection.ctaButton.label}
            secondaryText={presentationSection.ctaButton.sublabel}
          />
        </div>
      </Section>
    </>
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  subheading: PropTypes.string
};

const IndexPage = ({ data }) => {
  const { frontmatter: sections } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate sections={sections} />
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
        presentationSection {
          title
          subtitle
          transformation {
            body

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
            sublabel
            url
          }
        }
        whyCareSection {
          title
          subtitle
          ctaButton {
            label
            sublabel
            url
          }
        }
        whyYouCrucialSection {
          title
          subtitle
          body
        }
        solutionsSection {
          title
          subtitle
          programs {
            name
            description
          }
        }
      }
    }
  }
`;
