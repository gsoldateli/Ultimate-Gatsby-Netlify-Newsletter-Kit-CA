import React, { useEffect, useRef, useState } from "react";
import BeforeAfter from "before-after";
import styled from "styled-components";

const StyleWrapper = styled.div`
  .container-beforeafter {
    width: 100%;
    padding-top: 45.05%;
    height: 0;
    position: relative;
  }
  .beforeafter {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    margin: 0;
    padding: 0;
    pointer-events: auto;
    -ms-touch-action: none;
  }
  .beforeafter .beforeafter-item {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .beforeafter img {
    width: 100%;
    height: 100%;
  }
`;

const BeforeAfterSlider = ({ beforeImageSrc, afterImageSrc }) => {
  const [beforeAfterApi, setBeforeAfterApi] = useState(null);
  const ref = useRef();
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      ref &&
      ref.current &&
      !beforeAfterApi
    ) {
      console.log({ ref });
      const beforeAfterItem = new BeforeAfter({
        element: ref.current,
        cursor: true
      });
      beforeAfterItem.create(() => beforeAfterItem.goTo(50));
      setBeforeAfterApi(beforeAfterItem);
    }
    return function cleanup() {
      return (
        beforeAfterApi && beforeAfterApi.destroy && beforeAfterApi.destroy()
      );
    };
  }, [ref, beforeAfterApi]);
  return (
    <StyleWrapper>
      <div className="container-beforeafter">
        <div ref={ref} className="beforeafter">
          <div className="beforeafter-item beforeafter-itemActive">
            <img src={beforeImageSrc} />
          </div>
          <div className="beforeafter-item">
            <img src={afterImageSrc} />
          </div>
        </div>
      </div>
    </StyleWrapper>
  );
};

export default BeforeAfterSlider;
