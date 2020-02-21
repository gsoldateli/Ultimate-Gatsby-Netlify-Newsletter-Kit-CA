import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Markdown from "markdown-to-jsx";
import styled from "styled-components";

import Layout from "../components/Layout";
import Slider from "../components/Slider";
import Section from "../components/Section";
import HomeStatisticItem from "../components/HomeStatisticItem";
import ButtonCTA from "../components/Section/ButtonCTA";
import BeforeAfterSlide from "../components/BeforeAfterSlide";
import GetStartedSection from "../components/GetStartedSection";
import WhyYouCareSection from "../components/WhyYouCareSection";

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

const CircleIcon = styled.span`
  display: block;
  margin-top: 4px;
  width: 50px;
  height: 50px;
  border: 2px solid #51366d;
  border-radius: 50%;
  color: #987ebd;
  line-height: 50px;
  text-align: center;
  font-size: 1.4rem;
`;

const CircleIconSolution = styled(CircleIcon)`
  width: 65px;
  height: 65px;
  font-size: 1.8rem;
  line-height: 65px;
  font-weight: 700;
  margin-top: -2px;
`;

const SlideLabelWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 2rem;

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

const SolutionItem = styled.article`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 3rem;
  justify-content: space-between;

  .content {
    max-width: calc(100% - 100px);
  }

  .title {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 0;
    @media (max-width: 759px) {
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 2rem;
    }
  }

  .description {
    /* font-size: 1.1rem; */
    font-weight: 400;
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
        <Section.Body>
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
                    <div key={index}>
                      <SlideLabelWrapper>
                        <CircleIcon>{index + 1}</CircleIcon>
                        <div className="content">
                          {<Markdown>{transform.body}</Markdown>}
                        </div>
                      </SlideLabelWrapper>
                      <BeforeAfterSlide
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
                    gap: 30
                  }
                }
              }}
            />
          </SliderWrapper>
        </Section.Body>
        <hr />
        <ButtonCTA.Wrapper>
          <ButtonCTA
            href={presentationSection.ctaButton.url}
            mainText={presentationSection.ctaButton.label}
            secondaryText={presentationSection.ctaButton.sublabel}
          />
        </ButtonCTA.Wrapper>
      </Section>
      <WhyYouCareSection whyCareSection={whyCareSection} />
      <Section
        title={whyYouCrucialSection.title}
        subtitle={whyYouCrucialSection.subtitle}
      >
        <Section.Body>
          {<Markdown>{whyYouCrucialSection.body}</Markdown>}
        </Section.Body>
      </Section>
      <Section
        theme="dark"
        title={solutionsSection.title}
        subtitle={solutionsSection.subtitle}
      >
        <Section.Body>
          {solutionsSection.programs.map((program, index) => {
            return (
              <SolutionItem key={index}>
                <CircleIconSolution>{index + 1}</CircleIconSolution>
                <div className="content">
                  <h4 className="title">{program.name}</h4>
                  <div className="description">{program.description}</div>
                </div>
              </SolutionItem>
            );
          })}
          {<Markdown>{solutionsSection.body}</Markdown>}
          <HomeStatisticItem.Divider
            style={{
              position: "absolute",
              bottom: 0,
              maxWidth: "1062px",
              left: "50%",
              transform: "translate3d(-50%,-50%,0)"
            }}
          />
        </Section.Body>
      </Section>
      <GetStartedSection />
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
          body
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
          body
          programs {
            name
            description
          }
        }
      }
    }
  }
`;
