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
  console.log(data);
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

        <ButtonCTA.Wrapper>
          <ButtonCTA
            href={presentationSection.ctaButton.url}
            mainText={presentationSection.ctaButton.label}
            secondaryText={presentationSection.ctaButton.sublabel}
          />
        </ButtonCTA.Wrapper>
      </Section>
      <Section
        theme="dark"
        title={whyCareSection.title}
        subtitle={whyCareSection.subtitle}
      >
        <Markdown>{whyCareSection.body}</Markdown>
        <HomeStatisticItem
          title="The percentage of Americans living on poverty wage-that is, under self-sufficiency"
          src="https://new-site.gsoldateli.now.sh/src/imgs/55%25.png"
        />
        <HomeStatisticItem
          title="The percentage of Appalachians and African Americans who are poor-dependent on the government or under self-sufficient"
          src="https://new-site.gsoldateli.now.sh/src/imgs/75%25.png"
        />
        <HomeStatisticItem
          title="The media household wealth of Black Americans projected for 2053 (20 yrs later for Latino), if current trends hold "
          content="(If is projected to be $137,000 for White Americans)"
          src="https://new-site.gsoldateli.now.sh/src/imgs/zero.png"
        />
        <HomeStatisticItem
          title="The percentage of African American communities with high poverty, high crime, and inadequate K-12 schools"
          src="https://new-site.gsoldateli.now.sh/src/imgs/99%25.png"
        />

        <HomeStatisticItem
          fluid
          title="The massive, enduring Black-White achievement gap in education"
          src="https://new-site.gsoldateli.now.sh/src/imgs/achievement_gap_image.png"
          content={
            <span>
              (Graph shows the reading scores; the gap is worse for math.
              Source: NAEP Report Card{" "}
              <a href="https://www.nationsreportcard.gov/reading/nation/groups/?grade=8">
                https://www.nationsreportcard.gov/reading/nation/groups/?grade=8)
              </a>
            </span>
          }
        />
        <HomeStatisticItem
          fluid
          title="The median household income by race in the United States"
          src="https://new-site.gsoldateli.now.sh/src/imgs/median_household_income.png"
          content={
            <span>
              ( Source:{" "}
              <a href="https://www.pgpf.org/blog/2019/10/income-and-wealth -in-the-united-states-an-overview-of-data">
                https://www.pgpf.org/blog/2019/10/income-and-wealth
                -in-the-united-states-an-overview-of-data)
              </a>
            </span>
          }
        />
        <HomeStatisticItem
          fluid
          title="The median wealth disparity between White and Black Americans"
          src="https://new-site.gsoldateli.now.sh/src/imgs/median_wealth_gap.png"
          content={
            <span>
              ( Source:{" "}
              <a href="https://inequality.org/facts/racial-inequality">
                https://inequality.org/facts/racial-inequality
              </a>
              )
            </span>
          }
        />
        <HomeStatisticItem.Divider />
        <div className="why-care-content-center">
          <br />
          <br />

          <h4>
            <big>
              <big>
                <big>
                  <big>Globally</big>
                </big>
              </big>
            </big>
          </h4>
          <br />
        </div>
        <HomeStatisticItem
          title="The percentage of poor countries that are still poor after 50 years of invtervention by the West"
          src="http://i.imgur.com/JHBxrt1.png"
          content="(Over 90 countries still poor - from Haiti and Bangladesh, to Honduras and Congo)"
        />
        <HomeStatisticItem
          title="The percentage of college educated and high-skilled workforce who leave their poor countries to live and work in rich (or richer) countries - a crucial reason economic development in poor countries elusive"
          src="http://i.imgur.com/YLgTtBR.png"
          content="(For example, 83% Guyanaese, 60% Jamaicans)"
        />
        <HomeStatisticItem.Divider />

        <ButtonCTA.Wrapper>
          <ButtonCTA
            href={whyCareSection.ctaButton.url}
            mainText={whyCareSection.ctaButton.label}
            secondaryText={whyCareSection.ctaButton.sublabel}
          />
        </ButtonCTA.Wrapper>
      </Section>
      <Section
        title={whyYouCrucialSection.title}
        subtitle={whyYouCrucialSection.subtitle}
      >
        {<Markdown>{whyYouCrucialSection.body}</Markdown>}
      </Section>
      <Section
        theme="dark"
        title={solutionsSection.title}
        subtitle={solutionsSection.subtitle}
      >
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
