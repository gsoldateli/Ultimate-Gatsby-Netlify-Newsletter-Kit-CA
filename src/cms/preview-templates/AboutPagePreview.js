import React from "react";
import PropTypes from "prop-types";
import { AboutUsPageTemplate } from "../../templates/about-us-page";

const AboutPagePreview = ({ entry, widgetFor }) => {
  const overview = widgetFor("overviewSection");
  console.log(overview);
  const overviewSection = {
    title: overview.props.entry("title"),
    subtitle: overview.props.entry("subtitle"),
    body: overview.props.entry("body")
  };

  return (
    <AboutUsPageTemplate
      // title={entry.getIn(["data", "title"])}
      title={entry.getIn(["data", "title"])}
      description={entry.getIn(["data", "description"])}
      backgroundImage={entry.getIn(["data", "backgroundImage"])}
      overviewSection={overviewSection}
      // contactUsSection={widgetFor("contactUsSection")}
      // supportUsSection={widgetFor("supportUsSection")}
    />
  );
};

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default AboutPagePreview;
