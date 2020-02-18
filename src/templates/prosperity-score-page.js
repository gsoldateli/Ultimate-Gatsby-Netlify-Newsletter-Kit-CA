import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Markdown from "markdown-to-jsx";
import styled from "styled-components";

import { useForm } from "react-hook-form";

import Layout from "../components/Layout";

import Accordion from "../components/Accordion";
import Section from "../components/Section";
import Form, { Input } from "../components/Form";

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
  const {
    register,
    control,
    handleSubmit,
    watch,
    errors,
    getValues,
    setValue
  } = useForm({
    reValidateMode: "onChange"
  });

  const onSubmit = data => {
    console.log({ errors });
    console.log(data);
  };

  // React.useEffect(() => {
  //   register({ name: "radioactive" }, { required: true }); // custom register radio button
  // }, [register]);

  // const handleChange = e => {
  //   setValue("radioactive", e.target.value, true);
  // };

  return (
    <>
      <h1>{title}</h1>
      <Section title={introSection.title} subtitle={introSection.subtitle}>
        <Markdown>{introSection.body}</Markdown>
      </Section>
      <Section
        title={registerSection.title}
        subtitle={registerSection.subtitle}
        // theme="blueDark"
      >
        <Form onSubmit={onSubmit}>
          <Input
            name="firstName"
            registerProps={{ required: "FIELD REQUIRED" }}
          />
          <button type="submit">SEND</button>
        </Form>
        {/* <ThemeProvider>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Field>
              <Label>Example Text Input</Label>
              <Hint>Hint text</Hint>
              <Input
                ref={register}
                name="example"
                defaultValue="test"
                placeholder="Accepts all native input props"
              />
              <Message>Default message styling</Message>
            </Field>
            <Field>
              {errors.radioactive && <Hint>OBRIGAROTIRO</Hint>}
              <Radio
                name="radioactive"
                onChange={handleChange}
                value="option-1"
              >
                <Label>RADIIS 1</Label>
                <Hint>Example hint</Hint>
              </Radio>
            </Field>
            <Field>
              <Radio
                name="radioactive"
                onChange={handleChange}
                value="option-2"
              >
                <Label>RADIIS 2</Label>
                <Hint>Example hint</Hint>
              </Radio>
            </Field>

            <button type="submit">Submit</button>
          </form>
        </ThemeProvider> */}
        <img style={{ width: "100%" }} src="http://i.imgur.com/YFtE0Nm.png" />
      </Section>
      <Section
        title={faqSection.title}
        subtitle={faqSection.subtitle}
        // theme="blueDark"
      >
        <Accordion
          items={faqSection.questions.map(({ question, answer }, index) => ({
            head: (
              <strong>
                <big style={{ fontSize: "110%" }}>
                  {index + 1}. {question}
                </big>
              </strong>
            ),
            body: <Markdown>{answer}</Markdown>
          }))}
        />
      </Section>
      <Section
        // theme="blueDark"
        title={contactSection.title}
        subtitle={contactSection.subtitle}
      >
        <Markdown>{contactSection.body}</Markdown>
      </Section>
      <Section
        title={learnMoreSection.title}
        subtitle={learnMoreSection.subtitle}
      >
        <Accordion
          items={learnMoreSection.informations.map(({ title, content }) => ({
            head: <strong>{title}</strong>,
            body: <Markdown>{content}</Markdown>
          }))}
        />
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
