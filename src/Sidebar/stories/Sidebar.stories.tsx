import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Sidebar, { SidebarProps } from "..";
import { Page, TopNavigation } from "../..";
// import SidebarNav from "../../SidebarNav";
import Content from "../../Content";
import Header from "../../Header/Header";
import Topbar from "../../Topbar/Topbar";

export default {
  title: "Teemsly/Layouts/Sidebar",
  component: Sidebar,
} as Meta;

const Template: Story<SidebarProps> = (args) => (
  <Page>
    <Sidebar expander {...args}>
      <Sidebar.Header>Teemsly</Sidebar.Header>
      <Sidebar.Content>
        <div style={{ height: "1000px", padding: "0 24px" }}>
          Sidebar content with scrollable
        </div>
      </Sidebar.Content>
      <Sidebar.Footer style={{ padding: "0 24px" }}>
        Sidebar Footer
      </Sidebar.Footer>
    </Sidebar>
    <Content>
      <TopNavigation
        header={<Header title="Page Title" />}
        topbar={<Topbar>top bar</Topbar>}
      />
    </Content>
  </Page>
);

export const Default = Template.bind({});
