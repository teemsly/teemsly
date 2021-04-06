import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Header, { HeaderProps } from "../Header";
import { Page, TopNavigation } from "../..";
import Content from "../../Content";

export default {
  title: "Teemsly/Layouts/Header",
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => (
  <Page>
    <Content>
      <TopNavigation header={<Header {...args} />} />
    </Content>
  </Page>
);

export const Default = Template.bind({});
Default.args = {
  title: "Header Title",
};
