import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Avatar, { AvatarProps } from "../Avatar";

export default {
  title: "Teemsly/Avatar",
  component: Avatar,
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
        options: ["red", "green", "blue", "yellow", "violet", "cyan"],
      },
    },
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "AV",
};

export const Photo = Template.bind({});
Photo.args = {
  src: "https://avatarfiles.alphacoders.com/277/thumb-277707.png",
};

export const Color = Template.bind({});
Color.args = {
  color: "blue",
  size: "lg",
  children: "dr",
};
