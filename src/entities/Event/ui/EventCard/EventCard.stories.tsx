import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EventCard } from './EventCard';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'entities/Event/EventCard',
    component: EventCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EventCard>;

const Template: ComponentStory<typeof EventCard> = (args) => (
    <EventCard {...args} />
);
const normalArgs = {
    event: {
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
//     event: {
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
