import React, { useReducer, useState, useRef, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import styled from "styled-components";

const AccordionWrapper = styled.div``;
const AccordionItemWrapper = styled.div`
  padding: 1rem 0;
  border-top: 1px solid red;
  &:last-child {
    border-bottom: 1px solid red;
  }
`;

const AccordionItemBody = styled.div`
  transition: height 0.5s, opacity 0.3s;
`;

const AccordionItem = ({ id, head, body, isOpen, toggle }) => {
  const [openedHeight, setOpenedHeight] = useState(null);
  const contentRef = useRef();

  useEffect(() => {
    if (contentRef) {
      setOpenedHeight(contentRef.current.clientHeight);
    }
  }, [contentRef]);
  const height =
    openedHeight === null ? "auto" : isOpen ? `${openedHeight}px` : 0;
  const opacity = isOpen ? "1" : "0";
  //   const display = isOpen ? "block" : "none";
  return (
    <AccordionItemWrapper key={id}>
      <div>
        {head} <button onClick={toggle}>{isOpen ? "close" : "open"}</button>
      </div>
      <AccordionItemBody
        ref={contentRef}
        style={{ height, overflow: "hidden", opacity }}
      >
        {body}
      </AccordionItemBody>
    </AccordionItemWrapper>
  );
};

const initialState = [
  {
    head: <h1>Accordion #1</h1>,
    body: (
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime atque
          quia ipsam expedita vel at velit aperiam debitis laudantium illo.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus iste delectus accusantium dolorum architecto,
          praesentium saepe aliquid voluptatem, quia reprehenderit quas
          repudiandae quasi distinctio atque similique nulla accusamus obcaecati
          ea incidunt. Est quo commodi doloremque inventore, hic itaque nostrum
          qui, quidem illum ipsam dolorum officia voluptatibus tempora doloribus
          cumque reiciendis.
        </p>
      </div>
    ),
    isOpen: true
  },
  {
    head: <h1>Accordion #2</h1>,
    body: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime atque
        quia ipsam expedita vel at velit aperiam debitis laudantium illo.
      </div>
    ),
    isOpen: false
  },
  {
    head: <h1>Accordion #3</h1>,
    body: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime atque
        quia ipsam expedita vel at velit aperiam debitis laudantium illo.
      </div>
    ),
    isOpen: false
  },
  {
    head: <h1>Accordion #4</h1>,
    body: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime atque
        quia ipsam expedita vel at velit aperiam debitis laudantium illo.
      </div>
    ),
    isOpen: false
  }
];

const accordionReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return state.map((item, index) => {
        return { ...item, isOpen: action.key === index ? !item.isOpen : false };
      });
    default:
      return state;
  }
};

const Accordion = () => {
  const [items, dispatch] = useReducer(accordionReducer, initialState);
  return (
    <AccordionWrapper>
      {items &&
        items.length > 0 &&
        items.map((item, index) => (
          <AccordionItem
            {...item}
            key={index}
            toggle={() => dispatch({ type: "toggle", id: index })}
          />
        ))}
    </AccordionWrapper>
  );
};

export default Accordion;
