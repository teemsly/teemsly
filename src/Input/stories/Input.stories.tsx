import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Input, { InputProps } from "..";

export default {
  title: "Teemsly/Data Entry/Input",
  component: Input,
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
    color: {
      control: {
        type: "radio",
        options: ["red", "green", "yellow", "orange", "blue", "violet", "cyan"],
      },
    },
  },
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Your input here",
};
