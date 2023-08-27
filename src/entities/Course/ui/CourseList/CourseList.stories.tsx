import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CourseList } from './CourseList';

export default {
    title: 'entities/Event/CourseList',
    component: CourseList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CourseList>;

const Template: ComponentStory<typeof CourseList> = (args) => (
    <CourseList {...args} />
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
    courses: [],
    isLoading: true,
};
