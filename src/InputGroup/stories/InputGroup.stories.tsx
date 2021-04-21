import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import InputGroup, { InputGroupProps } from "..";
import Input from "../../Input/Input";

export default {
  title: "Teemsly/Data Entry/Input Group",
  component: InputGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
  },
} as Meta;

const Template: Story<InputGroupProps> = (args) => (
  <InputGroup {...args}>
    <Input />
    <InputGroup.Addon>Add on </InputGroup.Addon>
  </InputGroup>
);
export const Default = Template.bind({});

const Addon: Story<InputGroupProps> = (args) => (
  <InputGroup {...args}>
    <InputGroup.Addon>Add on </InputGroup.Addon>
    <Input
      onFocus={() => {
        console.log("on fouc from input");
      }}
    />
    <InputGroup.Addon>Add on </InputGroup.Addon>
  </InputGroup>
);
export const WithAddon = Addon.bind({});

const AddonMiddle: Story<InputGroupProps> = (args) => (
  <InputGroup {...args}>
    <Input
      onFocus={() => {
        console.log("on fouc from input");
      }}
    />
    <InputGroup.Addon>Add on </InputGroup.Addon>
    <Input
      onFocus={() => {
        console.log("on fouc from input");
      }}
    />
  </InputGroup>
);
export const AddonInMiddle = AddonMiddle.bind({});
