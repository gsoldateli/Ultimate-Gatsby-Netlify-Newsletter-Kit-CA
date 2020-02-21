import React from "react";
import Markdown from "markdown-to-jsx";
import HomeStatisticItem from "./HomeStatisticItem";
import Section from "./Section";
import ButtonCTA from "./Section/ButtonCTA";

import Img55Percent from "../img/statistics/55%.png";
import Img75Percent from "../img/statistics/75%.png";
import Img99Percent from "../img/statistics/99%.png";
import ImgOver99Percent from "../img/statistics/OVER_99_.png";
import ImgOver1MillionPercent from "../img/statistics/Over_1_Million.png";
import Img7811350 from "../img/statistics/78__113__50_.png";
import ImgAchievmentGapImage from "../img/statistics/achievement_gap_image.png";
import ImgHouseHoldImage from "../img/statistics/median_household_income.png";
import ImgDisparityImage from "../img/statistics/median_wealth_gap.png";
import Img68PercentImage from "../img/statistics/68_.png";

const WhyWeCareSection = ({ whyCareSection }) => {
  return (
    <Section
      theme="dark"
      title={whyCareSection.title}
      subtitle={whyCareSection.subtitle}
    >
      <Section.Body>
        <Markdown>{whyCareSection.body}</Markdown>
        <HomeStatisticItem
          disableMobileDivider
          title="The percentage of Americans living on poverty wage-that is, under self-sufficiency"
          src={Img55Percent}
        />
        <HomeStatisticItem
          title="The percentage of Appalachians and African Americans who are poor-dependent on the government or under self-sufficient"
          src={Img75Percent}
        />
        <HomeStatisticItem
          title="The percentage of African American communities with high poverty, high crime, and inadequate K-12 schools"
          src={Img99Percent}
        />
        <HomeStatisticItem
          title="The percentage of America’s bottom 60% who have no retirement savings (or too little) and are thus unprepared for retirement."
          src={ImgOver99Percent}
        />
        <HomeStatisticItem
          title="The number of mostly middle-aged (25–45) White working-class Americans (with no college degree) who have died of “Deaths of Despair” (i.e., suicide and drug and alcohol abuse) between 2006 and 2015"
          content="Shockingly, such deaths continue to rise shockingly in the United States even today."
          src={ImgOver1MillionPercent}
        />
        <HomeStatisticItem
          title={
            <>
              <p>
                1. The percentage of African Americans who take out federal
                student loans because they can't afford college.
              </p>

              <p style={{ marginTop: "1.4rem" }}>
                2. The percentage of African Americans who take out federal
                student loans because they can't afford college.
              </p>
              <br />
              <p>
                3. The percentage of African Americans who take out federal
                student loans because they can't afford college.
              </p>
            </>
          }
          src={Img7811350}
        />

        <HomeStatisticItem
          fluid
          title="The massive, enduring Black-White achievement gap in education"
          src={ImgAchievmentGapImage}
          content="Graph shows the reading scores; the gap is worse for math."
        />
        <HomeStatisticItem
          fluid
          title="The median household income by race in the United States"
          src={ImgHouseHoldImage}
        />
        <HomeStatisticItem
          fluid
          title="The median wealth disparity between White and Black Americans"
          src={ImgDisparityImage}
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
          disableMobileDivider
          title="The percentage of the global population that is poor or devastatingly poor"
          src={Img68PercentImage}
        />
        <HomeStatisticItem
          title="The global population and the annual increase. The highest birth rates are in the 130 poorest countries; the best solution to stop overpopulation is education and prosperity."
          src={Img68PercentImage}
          content="Our very planet is threatened by overpopulation and depends on our action."
        />
        <HomeStatisticItem
          title="The percentage of poor countries that have remained poor after 60 years of intervention by the West"
          src={Img99Percent}
          content=" Over 100 countries still poor—from Haiti and Bangladesh, and from Honduras to the Congo."
        />
        <HomeStatisticItem.Divider />

        <ButtonCTA.Wrapper>
          <ButtonCTA
            href={whyCareSection.ctaButton.url}
            mainText={whyCareSection.ctaButton.label}
            secondaryText={whyCareSection.ctaButton.sublabel}
          />
        </ButtonCTA.Wrapper>
      </Section.Body>
    </Section>
  );
};

export default WhyWeCareSection;
