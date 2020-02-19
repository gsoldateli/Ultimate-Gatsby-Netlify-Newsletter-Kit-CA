import React, { useState } from "react";
import styled from "styled-components";
// import { Container, Row as GridRow, Col } from "react-grid-system";
import Section from "../Section";
import RadioButton from "../Form/RadioInput";
import TextInput from "../Form/TextInput";
import ButtonCTA from "../Section/ButtonCTA";

const Grid = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 49% 49%;
  grid-row-gap: 1rem;
  @media (max-width: 700px) {
    grid-template-columns: 100%;
  }
`;

const Form = () => {
  return (
    <div>
      <h4>I live in Baltimore Maryland</h4>
      <RadioButton
        name="liveMaryland"
        inline
        options={[
          { value: 1, label: "Yes" },
          { value: 0, label: "No" }
        ]}
      />
      <br />
      <br />
      <br />
      <h4>I would like to</h4>
      <RadioButton
        name="wouldLikeTo"
        options={[
          {
            value: "contribute_help",
            label:
              "Contribute to the CollectiveIntelligence programs *and* receive help to get on the path to prosperity"
          },
          {
            value: "contribute",
            label: "Only contribute to the CollectiveIntelligence program"
          },
          {
            value: "help",
            label: "Only receive help to get on the path to prosperity"
          }
        ]}
      />
      <br />
      <br />
      <br />
      <h4>Name and Contact</h4>
      <Grid>
        <TextInput placeholder="First name" />

        <TextInput placeholder="Last Name" />

        <TextInput placeholder="Email" />

        <TextInput placeholder="Phone" />
      </Grid>
      <br />
      <br />
      <ButtonCTA
        mainText="Save and Continue"
        onClick={() => alert("Form submission will be implemented soon")}
      />
    </div>
  );
};

const GetStartedSection = ({
  title = "Get Started",
  subtitle = "— Register and start contributing",
  theme = "dark"
}) => {
  return (
    <Section title={title} subtitle={subtitle} theme={theme}>
      <Form />
    </Section>
  );
};

export default GetStartedSection;
