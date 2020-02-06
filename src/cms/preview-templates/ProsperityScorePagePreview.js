import React from "react";
import PropTypes from "prop-types";
import { ProsperityScorePageTemplate } from "../../templates/prosperity-score-page";

const ProsperityScorePagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return <ProsperityScorePageTemplate {...data} />;
  } else {
    return <div>Loading...</div>;
  }
};

ProsperityScorePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default ProsperityScorePagePreview;
