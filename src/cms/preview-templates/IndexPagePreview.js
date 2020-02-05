import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  const sections = {
    prosperitySection: data.prosperitySection,
    solvingUnsolvableSection: data.solvingUnsolvableSection,
    supportUsSection: data.supportUsSection
  };

  if (data) {
    return <IndexPageTemplate sections={sections} />;
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
