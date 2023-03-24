import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Ellipses from './Ellipses';

export default {
  title: 'Buttons/Ellipses',
  component: Ellipses,
  argTypes: { disabled: { control: 'boolean' }, onClick: { control: '' } }
} as ComponentMeta<typeof Ellipses>;

const Template: ComponentStory<typeof Ellipses> = (args) => <Ellipses {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onClick: (e) => console.log(e)
};
