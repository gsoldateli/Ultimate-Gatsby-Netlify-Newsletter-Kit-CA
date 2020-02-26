import { Listener } from "@stickyroll/stickyroll";
import { assert, scrollTo } from "@stickyroll/utils";
import React from "react";

export const SkipBase = props => {
  const handleClick = e => {
    e.preventDefault();
    scrollTo(`${props.prefix}${props.itm}`, e.target, {
      noFocus: true,
      noHash: true
    });
  };

  return (
    <a href={`#${props.prefix}${props.itm}`} onClick={handleClick}>
      <span />
    </a>
  );
};

const Skip = props => {
  const SkipList = (ctx, itms) => {
    let list = [];

    for (let i = 1; i <= itms; i++) {
      list.push(
        <li>
          <SkipBase prefix={ctx.anchors} itm={i} />
        </li>
      );
    }

    return list;
  };

  if (props.useContext) {
    return (
      <Listener>
        {context => {
          return <ul>{SkipList(context, props.itms)}</ul>;
        }}
      </Listener>
    );
  }
  assert(props.prefix, "string");
  return <SkipBase prefix={props.prefix} />;
};

export default Skip;
