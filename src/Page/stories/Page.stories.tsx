import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Page, { PageProps } from "../Page";

export default {
  title: "Teemsly/Layouts/Page",
  component: Page,
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story<PageProps> = (args) => <Page {...args} />;

export const Default = Template.bind({});
Default.args = {
  style: {
    padding: '20px'
  },
  children: <div className="ts-page-main">
    <div className="ts-page-main-layer">
      It's page component
    </div>
  </div>,
};
