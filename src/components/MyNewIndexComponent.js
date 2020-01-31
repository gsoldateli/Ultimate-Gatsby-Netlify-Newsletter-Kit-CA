import React from "react";
import PropTypes from "prop-types";

const MyNewIndexPageComponent = ({ gridItems }) => (
  <div>
    {gridItems.map(item => (
      <div
        key={item.title}
        style={{
          textAlign: "center",
          padding: "12px"
        }}
      >
        {item.title}
        &nbsp;
        {item.description}
        &nbsp;
        {item.finalparagraph}
        &nbsp;
      </div>
    ))}
  </div>
);

MyNewIndexPageComponent.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      finalparagraph: PropTypes.string
    })
  )
};

export default MyNewIndexPageComponent;
