import { mockTitle2, mockTitle3, mockTitle4, mockTitle5, mockTitle6, mockTitleSpec } from '@/shared/const/mock';
import { Text } from '@/shared/ui/revamped/Text';
import React from 'react';

const mockTitle2El = mockTitle2.map((title) => (<Text textColorByTheme='history' text={title} />));
const mockTitle3El = mockTitle3.map((title) => (<Text textColorByTheme='history' text={title} />));
const mockTitle4El = mockTitle4.map((title) => (<Text textColorByTheme='history' text={title} />));
const mockTitle5El = mockTitle5.map((title) => (<Text textColorByTheme='history' text={title} />));
const mockTitle6El = mockTitle6.map((title) => (<Text textColorByTheme='history' text={title} />));
const mockTitleSpecEl = mockTitleSpec.map((title) => (<Text textColorByTheme='history' text={title} />));

export const titles = {
    el2: mockTitle2El,
    el3: mockTitle3El,
    el4: mockTitle4El,
    el5: mockTitle5El,
    el6: mockTitle6El,
    spec: mockTitleSpecEl,
}