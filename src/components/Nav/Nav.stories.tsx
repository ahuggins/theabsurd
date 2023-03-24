import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Nav from './Nav';

export default {
  title: 'Example/Nav',
  component: Nav,
} as ComponentMeta<typeof Nav>;


const Template: ComponentStory<typeof Nav> = () => <Nav />;

export const Primary = Template.bind({});
