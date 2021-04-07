import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Nav, { NavProps } from "..";

export default {
  title: "Teemsly/Navigation/Nav",
  component: Nav,
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story<NavProps> = (args) => <Nav {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Nav.Item href="/link-1" active>
        Link 1
      </Nav.Item>
      <Nav.Item href="/link-2">Link 2</Nav.Item>
      <Nav.Item href="/link-2">Link 3</Nav.Item>
      <Nav.Item href="/link-2">Link 4</Nav.Item>
    </>
  ),
};

export const Subtle = Template.bind({});
Subtle.args = {
  appearance: "subtle",
  children: (
    <>
      <Nav.Item href="/overview" active>
        Overview
      </Nav.Item>
      <Nav.Item href="/list">List</Nav.Item>
      <Nav.Item href="/timeline">Timeline</Nav.Item>
      <Nav.Item href="/board">Board</Nav.Item>
      <Nav.Item href="/calendar">Calendar</Nav.Item>
      <Nav.Item href="/more">More</Nav.Item>
    </>
  ),
};
