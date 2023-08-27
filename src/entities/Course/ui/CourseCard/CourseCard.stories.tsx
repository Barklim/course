import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CourseCard } from './CourseCard';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'entities/Course/CourseCard',
    component: CourseCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CourseCard>;

const Template: ComponentStory<typeof CourseCard> = (args) => (
    <CourseCard {...args} />
);
const normalArgs = {
    course: {
        id: '1',
        // user: {
        //     id: '1',
        //     username: 'user',
        //     avatar: 'http://1',
        //     roles: 1,
        //     features: {
        //         isArticleRatingEnabled: true,
        //         isCounterEnabled: true,
        //         isAppRedesigned: true,
        //         isAppRevamped: true
        //     },
        //     jsonSettings: {
        //         theme: 'app_dark_theme',
        //         isFirstVisit: true,
        //         isArticlesPageWasOpened: true
        //     }
        // },
        user: {
            id: '1',
            username: 'user'
        },
        title: 'subtitle',
        price: '12.21',
        participants: 322,
        soldOut: 42,
        startDate: '',
        endDate: '',
        createdAt: '',
        type: [1]
    }
};

export const Normal = Template.bind({});
// Normal.args = normalArgs;

export const NormalRedesigned = Template.bind({});
// NormalRedesigned.args = normalArgs;
NormalRedesigned.decorators = [NewDesignDecorator];

export const Loading = Template.bind({});
// Loading.args = {
//     course: {
//         id: '1',
//         user: {
//             id: '1',
//             username: 'user',
//             avatar: 'http://1',
//             roles: 1,
//             features: {
//                 isArticleRatingEnabled: true,
//                 isCounterEnabled: true,
//                 isAppRedesigned: true,
//                 isAppRevamped: true
//             },
//             jsonSettings: {
//                 theme: 'app_dark_theme',
//                 isFirstVisit: true,
//                 isArticlesPageWasOpened: true
//             }
//         },
//         title: 'subtitle',
//         price: '12.21',
//         participants: 322,
//         soldOut: 42,
//         startDate: '',
//         endDate: '',
//         createdAt: '',
//         type: ['IT']
//     }
// };
