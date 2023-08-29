import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import SwipePage from './SwipePage';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'pages/SwipePage',
    component: SwipePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SwipePage>;

const Template: ComponentStory<typeof SwipePage> = () => <SwipePage />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
