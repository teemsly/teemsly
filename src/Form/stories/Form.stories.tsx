import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Form, { FormProps } from "../Form";
import FormGroup from "../FormGroup";
import Input from "../../Input";

export default {
  title: "Teemsly/Data Entry/Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <FormGroup
      id="username"
      label="Username"
      errorMessage="error message"
      hasError
    >
      <Input name="username" size="sm" />
    </FormGroup>
    <FormGroup id="password" label="Password">
      <Input type="password" name="password" size="sm" />
    </FormGroup>
  </Form>
);

export const Default = Template.bind({});
