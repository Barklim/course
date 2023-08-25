import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EventList } from './EventList';

export default {
    title: 'entities/Event/EventList',
    component: EventList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EventList>;

const Template: ComponentStory<typeof EventList> = (args) => (
    <EventList {...args} />
);

export const Normal = Template.bind({});
// Normal.args = {
//     events: [
//         {
//             id: '1',
//             user: {
//                 id: '1',
//                 username: 'user'
//             },
//             title: 'subtitle',
//             price: '12.21',
//             participants: 322,
//             soldOut: 42,
//             startDate: '',
//             endDate: '',
//             createdAt: '',
//             type: [1]
//         }
//     ],
// };

export const Loading = Template.bind({});
Loading.args = {
    events: [],
    isLoading: true,
};
