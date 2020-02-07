import React, { useReducer, useRef } from "react";
import styled from "styled-components";
import { Collapse } from "react-collapse";

const AccordionWrapper = styled.div``;
const AccordionItemWrapper = styled.div`
  padding: 1rem 0;
  border-top: 1px solid ${({ theme: { accordion } }) => accordion.borderColor};

  &:last-child {
    border-bottom: 1px solid
      ${({ theme: { accordion } }) => accordion.borderColor};
  }

  .ReactCollapse--collapse {
    transition: height 0.3s;
  }
`;

const AccordionItemHead = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  font-weight: 500;
  cursor: pointer;
  color: ${({ theme: { accordion } }) => accordion.fontColor};
  .content {
    max-width: calc(100% - 3rem);
  }
`;

const AccordionItemBody = styled.div`
  padding-top: 28px;
  padding-bottom: 56px;
  color: ${({ theme: { accordion } }) => accordion.fontColor};
  transition: height 0.5s, padding 0.4s, opacity 0.3s;
`;

const AccordionItem = ({ id, head, body, isOpen, toggle }) => {
  const opacity = isOpen ? "1" : "0";
  const itemRef = useRef();
  return (
    <AccordionItemWrapper key={id} ref={itemRef}>
      <AccordionItemHead onClick={toggle}>
        <div className="content">{head}</div>
        <Arrow isOpen={isOpen} className="fa fa-chevron-down" />
        {/* <button>{isOpen ? "close" : "open"}</button> */}
      </AccordionItemHead>
      <Collapse isOpened={isOpen}>
        <AccordionItemBody isOpened={isOpen} style={{ opacity }}>
          {body}
        </AccordionItemBody>
      </Collapse>
    </AccordionItemWrapper>
  );
};

const Arrow = styled.i`
  height: 20px;
  align-self: center;
  margin-right: 18px;
  transition: transform 0.3s;
  transform: ${({ isOpen }) => (isOpen ? "rotate(-180deg)" : "rotate(0)")};
`;

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

const Accordion = ({ items: initialState }) => {
  const [items, dispatch] = useReducer(accordionReducer, initialState);
  return (
    <AccordionWrapper>
      {items &&
        items.length > 0 &&
        items.map((item, index) => {
          return (
            <AccordionItem
              {...item}
              key={index}
              toggle={() => dispatch({ type: "toggle", key: index })}
            />
          );
        })}
    </AccordionWrapper>
  );
};

export default Accordion;
