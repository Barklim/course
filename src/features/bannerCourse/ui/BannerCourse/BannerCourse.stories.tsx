import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BannerCourse } from './BannerCourse';

export default {
    title: 'features/BannerCourse',
    component: BannerCourse,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof BannerCourse>;

const Template: ComponentStory<typeof BannerCourse> = (args) => (
    <BannerCourse {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
