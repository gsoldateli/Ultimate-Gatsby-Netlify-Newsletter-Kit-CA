import React, { useEffect, useRef, useState } from "react";

import Glide from "@glidejs/glide";

import styled from "styled-components";

const GlideStyles = styled.div`
  .glide {
    position: relative;
    width: 100%;
    box-sizing: border-box;
  }
  .glide * {
    box-sizing: inherit;
  }
  .glide__track {
    overflow: hidden;
  }
  .glide__slides {
    position: relative;
    width: 100%;
    list-style: none;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    touch-action: pan-Y;
    overflow: hidden;
    padding: 0;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
    will-change: transform;
  }
  .glide__slides--dragging {
    user-select: none;
  }
  .glide__slide {
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    white-space: normal;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
  }
  .glide__slide a {
    user-select: none;
    -webkit-user-drag: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
  .glide__arrows {
    -webkit-touch-callout: none;
    user-select: none;
  }
  .glide__bullets {
    -webkit-touch-callout: none;
    user-select: none;
  }
  .glide--rtl {
    direction: rtl;
  }

  .glide__arrow {
    position: absolute;
    display: block;
    top: 50%;
    z-index: 2;
    color: #333;
    text-transform: uppercase;
    padding: 9px 12px;
    background-color: transparent;
    /* border: 2px solid rgba(255, 255, 255, 0.5); */
    /* border-radius: 4px; */
    border: none;
    /* box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.1); */
    /* text-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.1); */
    font-size: 2rem;
    opacity: 1;
    cursor: pointer;
    transition: opacity 150ms ease, border 300ms ease-in-out, color 0.15s;
    transform: translateY(-50%);
    line-height: 1;
    &:hover {
      color: #ccc;
    }
  }
  .glide__arrow:focus {
    outline: none;
  }
  .glide__arrow:hover {
    border-color: white;
  }
  .glide__arrow--left {
    left: -1em;
  }
  .glide__arrow--right {
    right: -1.5em;
  }
  .glide__arrow--disabled {
    opacity: 0.33;
  }

  .glide__bullets {
    position: absolute;
    z-index: 2;
    bottom: 2em;
    left: 50%;
    display: inline-flex;
    list-style: none;
    transform: translateX(-50%);
  }

  .glide__bullet {
    background-color: rgba(255, 255, 255, 0.5);
    /* width: 9px;
    height: 9px; */
    width: 18px;
    height: 18px;
    padding: 0;
    border-radius: 50%;
    border: 2px solid transparent;
    transition: all 300ms ease-in-out;
    cursor: pointer;
    line-height: 0;
    box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.1);
    margin: 0 0.25em;
  }
  .glide__bullet:focus {
    outline: none;
  }
  .glide__bullet:hover,
  .glide__bullet:focus {
    border: 2px solid white;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .glide__bullet--active {
    background-color: white;
  }

  .glide--swipeable {
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
  }

  .glide--dragging {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
  }
`;

const Slider = ({ slides, options = {} }) => {
  const sliderRef = useRef();
  const [slider, setSlider] = useState(null);
  useEffect(() => {
    if (window && sliderRef) {
      setSlider(
        new Glide(sliderRef.current, {
          type: "carousel",
          focusAt: "center",
          perView: 4,
          breakpoints: {
            1024: {
              perView: 3
            },
            600: {
              perView: 2
            },
            500: {
              perView: 1
            }
          },
          gap: 20,
          ...options
        }).mount()
      );
    }

    return function cleanup() {
      return slider && slider.destroy();
    };
  }, [sliderRef]);
  return (
    <GlideStyles>
      <div ref={sliderRef} className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {slides &&
              slides.length > 0 &&
              slides.map((slide, index) => (
                <li key={index} className="glide__slide">
                  {slide}
                </li>
              ))}
          </ul>
        </div>
        {slides && (
          <div class="glide__bullets" data-glide-el="controls[nav]">
            {slides.map((slide, index) => (
              <button
                key={index}
                class="glide__bullet"
                data-glide-dir={`=${index}`}
              ></button>
            ))}
          </div>
        )}
        <div className="glide__arrows" data-glide-el="controls">
          <button
            className="glide__arrow glide__arrow--left"
            data-glide-dir="<"
          >
            <i className="fa fa-chevron-left"></i>
          </button>
          <button
            className="glide__arrow glide__arrow--right"
            data-glide-dir=">"
          >
            <i className="fa fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </GlideStyles>
  );
};

export default Slider;
