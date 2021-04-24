import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Tooltip, { TooltipProps } from "..";

export default {
  title: "Teemsly/Tooltip",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    placement: {
      control: {
        type: "select",
        options: [
          "topStart",
          "topEnd",
          "top",
          "rightStart",
          "right",
          "rightEnd",
          "bottomStart",
          "bottom",
          "bottomEnd",
          "leftStart",
          "left",
          "leftEnd",
        ],
      },
    },
  },
  component: Tooltip,
} as Meta;

const Template: Story<TooltipProps> = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "It's Tooltip",
  content: (
    <div>
      This is a ToolTip for simple text hints. It can replace the title property
    </div>
  ),
};
