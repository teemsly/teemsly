import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import FormGroup, { FormGroupProps } from "../FormGroup";
import Input from "../../Input";

export default {
  title: "Teemsly/Data Entry/Form/Form Group",
  component: FormGroup,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story<FormGroupProps> = (args) => <FormGroup {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Username",
  id: "username",
  children: <Input name="Username" size="sm" />,
};
