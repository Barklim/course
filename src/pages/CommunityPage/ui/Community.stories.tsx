import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import Community from './Community';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'pages/CommunityPage',
    component: Community,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof Community>;

const Template: ComponentStory<typeof Community> = () => <Community />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
