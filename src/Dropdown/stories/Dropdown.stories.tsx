import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Dropdown, { DropdownProps } from "..";

export default {
  title: "Teemsly/Navigation/Dropdown",
  component: Dropdown,
  argTypes: {
    placement: {
      control: {
        type: "select",
        options: [
          "topStart",
          "topEnd",
          "rightStart",
          "rightEnd",
          "bottomStart",
          "bottomEnd",
          "leftStart",
          "leftEnd",
        ],
      },
    },
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story<DropdownProps> = (args) => (
  <Dropdown {...args}>
    <Dropdown.Item itemKey="key1" active>
      Dropdown Item 1
    </Dropdown.Item>
    <Dropdown.Item itemKey="key2">Dropdown Item 2</Dropdown.Item>
    <Dropdown.Item itemKey="key13">Dropdown Item 3</Dropdown.Item>
  </Dropdown>
);

export const Default = Template.bind({});
Default.args = {
  toggle: "Toggle Dropdown",
};
