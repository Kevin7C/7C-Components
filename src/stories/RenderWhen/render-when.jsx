import React from "react";
import PropTypes from "prop-types";

export const RenderWhen = ({ limit = 1, isTrue = true, children }) => {
  const list = [];

  if (isTrue !== true) {
    return null;
  }
  React.Children.map(children, (child) => {
    const { isTrue: isChildTrue } = child?.props || {};
    if (isChildTrue === true && list.length < limit) {
      list.push(child);
    }
  });

  return <>{list}</>;
};

RenderWhen.If = ({ children, isTrue }) => children;

RenderWhen.prototype = {
  limit: PropTypes.number,
  isTrue: PropTypes.bool,
};
