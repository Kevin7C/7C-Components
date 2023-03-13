import React from "react";

import { RenderWhen } from "./render-when";

export default {
  title: "Example/RenderWhen",
  component: RenderWhen,
};

const Template = (args) => (
  <RenderWhen>
    <RenderWhen.If {...args}>child是否渲染</RenderWhen.If>
  </RenderWhen>
);

export const RenderTrue = Template.bind({});
RenderTrue.args = {
  isTrue: true,
};

export const RenderFalse = Template.bind({});
RenderFalse.args = {
  isTrue: false,
};
