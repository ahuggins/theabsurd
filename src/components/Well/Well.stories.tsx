import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Well from './Well';

export default {
  title: 'Example/Well',
  component: Well
} as ComponentMeta<typeof Well>;

const Template: ComponentStory<typeof Well> = (args) => <Well>{args.children}</Well>;

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <div>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus incidunt cumque blanditiis,
      vitae tenetur quasi nulla praesentium voluptate consequatur accusamus, voluptates similique
      deserunt fugiat alias ab harum. Molestiae, a maiores.
    </div>
  )
};
