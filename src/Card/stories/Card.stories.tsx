import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Card, { CardProps } from "..";

export default {
  title: "Teemsly/Card",
  component: Card,
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
  },
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <React.Fragment>
      <Card.Body>
        Ea consectetur duis eiusmod ea sunt laboris aute nulla et. Aliqua amet
        aute pariatur consectetur elit anim.
      </Card.Body>
      <Card.Footer>Footer Card</Card.Footer>
    </React.Fragment>
  ),
};

export const CardWithImage = Template.bind({});
CardWithImage.args = {
  children: (
    <React.Fragment>
      <Card.Image>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
          alt="card-image"
        />
      </Card.Image>
      <Card.Body>
        <h1>Title of the card</h1>
        Dolor aute officia nostrud labore esse mollit deserunt mollit dolore
        labore est sint sit. Mollit eiusmod do ex culpa anim sunt nisi aute
        deserunt ad amet. Amet sint consectetur cupidatat sint nulla commodo.
      </Card.Body>
      <Card.Footer>Footer Card</Card.Footer>
    </React.Fragment>
  ),
};
