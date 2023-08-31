import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import AcademyPage from './AcademyPage';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'pages/AcademyPage',
    component: AcademyPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AcademyPage>;

const Template: ComponentStory<typeof AcademyPage> = () => <AcademyPage />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
