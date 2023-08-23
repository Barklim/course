import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Banner } from './Banner';

export default {
    title: 'features/Banner',
    component: Banner,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => (
    <Banner {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
