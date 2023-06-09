import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Typography from './Typography';

export default {
  title: 'Example/Typography',
  component: Typography
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = () => <Typography />;

export const Primary = Template.bind({});
