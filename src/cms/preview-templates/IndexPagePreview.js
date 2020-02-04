import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  console.log("xxx", { data });
  const sections = {
    prosperitySection: data.prosperitySection,
    solvingUnsolvableSection: data.solvingUnsolvableSection,
    supportUsSectio: data.supportUsSection
  };
  // const { frontmatter: sections } = data.markdownRemark;
  // const { edges: solutions } = data.solutions;
  if (data) {
    return (
      <IndexPageTemplate
        sections={sections}
        // solutions={solutions.map(({ node: solution }) => solution)}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default IndexPagePreview;
