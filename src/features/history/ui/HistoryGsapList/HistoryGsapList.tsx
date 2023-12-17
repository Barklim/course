import React from 'react';
import { useTranslation } from 'react-i18next';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/revamped/Text';
import { Code } from '@/shared/ui/redesigned/Code';
import {
    mockTitleCountPoints,
    mockTitleRadius,
    mockTitleVisibilityNumbers,
    mockTitleAnimationDuration,
    mockTitle2,
    mockTitle3,
    mockTitle4,
    mockTitle5,
    mockTitle6,
    mockTitleSpec,
    mockTitleTitles,
} from '@/shared/const/mock';
import {HistoryGsapAsync as HistoryGsap}  from '../HistoryGsap/HistoryGsap.async';
import cls from './HistoryGsapList.module.scss';

const mockTitle2El = mockTitle2.map((title) => (<Text textColorByTheme='history' text={title} />));
const mockTitle3El = mockTitle3.map((title) => (<Text textColorByTheme='history' text={title} />));
const mockTitle4El = mockTitle4.map((title) => (<Text textColorByTheme='history' text={title} />));
const mockTitle5El = mockTitle5.map((title) => (<Text textColorByTheme='history' text={title} />));
const mockTitle6El = mockTitle6.map((title) => (<Text textColorByTheme='history' text={title} />));
const mockTitleSpecEl = mockTitleSpec.map((title) => (<Text textColorByTheme='history' text={title} />));

export const HistoryGsapList = () => {
    const { t } = useTranslation('history');

    const radius5items = 107;
    const radius4items = 130;

    return <div data-testid="HistoryGsapList">
        <VStack gap='16' className={cls.wrapper}>
            <Text size={'l'} selectNone textColorByTheme='history' title={t('title page')}></Text>
            <VStack gap='32' max>
                <Text size={'m'} selectNone textColorByTheme='history' title={t('title points')}></Text>
                <HStack gap='32'>
                    <HistoryGsap id='2item_90rad' radius={radius5items} pointCount={2} titles={mockTitle2El}/>
                    <HistoryGsap id='3item_90rad' radius={radius5items} pointCount={3} titles={mockTitle3El}/>
                    <HistoryGsap id='4item_90rad' radius={radius5items} pointCount={4} titles={mockTitle4El}/>
                    <HistoryGsap id='5item_90rad' radius={radius5items} pointCount={5} titles={mockTitle5El}/>
                    <HistoryGsap id='6item_90rad' radius={radius5items} pointCount={6} titles={mockTitle6El}/>
                </HStack>
                <VStack gap='8' max>
                    <Text size={'m'} selectNone textColorByTheme='history' text={t('title points subtext')}></Text>
                    <div style={{width: '100%'}}>
                        <Code text={mockTitleCountPoints} />
                    </div>
                </VStack>

                <Text size={'m'} selectNone textColorByTheme='history' title={t('title visibility')}></Text>
                <HStack gap='32'>
                    <HistoryGsap id='6item_angles' radius={radius5items} pointCount={6} numberVisibility={true}/>
                    <HistoryGsap id='2item_angles' radius={radius5items} pointCount={2} numberVisibility={true} extraRotation={0}/>
                    <HistoryGsap id='3item_angles' radius={radius5items} pointCount={3} numberVisibility={true} extraRotation={45}/>
                    <HistoryGsap id='4item_angles' radius={radius5items} pointCount={4} numberVisibility={true} extraRotation={90}/>
                    <HistoryGsap id='5item_angles' radius={radius5items} pointCount={5} numberVisibility={true} extraRotation={15}/>
                </HStack>
                <VStack gap='8' max>
                    <Text size={'m'} selectNone textColorByTheme='history' text={t('title visibility subtext')}></Text>
                    <div style={{width: '100%'}}>
                        <Code text={mockTitleVisibilityNumbers} />
                    </div>
                </VStack>

                <Text size={'m'} selectNone textColorByTheme='history' title={t('title duration')}></Text>
                <HStack gap='32'>
                    <VStack gap='32'>
                        <HStack gap='32'>
                            <HistoryGsap id='2item_duration_default' radius={radius4items} pointCount={2} numberVisibility={true} titles={mockTitle6El} />
                            <HistoryGsap id='6item_duration_default' radius={radius4items} pointCount={6} numberVisibility={true} titles={mockTitle6El} />
                        </HStack>
                        <HStack gap='32'>
                            <HistoryGsap id='2item_duration2' radius={radius4items} pointCount={2} numberVisibility={true} duration={2} titles={mockTitle2El}/>
                            <HistoryGsap id='6item_duration2' radius={radius4items} pointCount={6} numberVisibility={true} duration={2} titles={mockTitle6El}/>
                            <HistoryGsap id='2item_duration04' radius={radius4items} pointCount={2} numberVisibility={true} duration={0.4} titles={mockTitle2El}/>
                            <HistoryGsap id='6item_duration04' radius={radius4items} pointCount={6} numberVisibility={true} duration={0.4} titles={mockTitle6El}/>
                        </HStack>
                    </VStack>
                </HStack>
                <VStack gap='8' max>
                    <Text size={'m'} selectNone textColorByTheme='history' text={t('title duration subtext')}></Text>
                    <div style={{width: '100%'}}>
                        <Code text={mockTitleAnimationDuration} />
                    </div>
                </VStack>

                <Text size={'m'} selectNone textColorByTheme='history' title={t('title radius')}></Text>
                <HStack gap='32'>
                    <HistoryGsap id='5item_175rad' pointCount={5} radius={175} titles={mockTitle5El}/>
                    <HistoryGsap id='3item_default' pointCount={3} titles={mockTitle3El}/>
                    <HistoryGsap id='2item_50rad' pointCount={2} radius={50} titles={mockTitle2El}/>
                </HStack>
                <VStack gap='8' max>
                    <Text size={'m'} selectNone textColorByTheme='history' text={t('title radius subtext')}></Text>
                    <div style={{width: '100%'}}>
                        <Code text={mockTitleRadius} />
                    </div>
                </VStack>

                <Text size={'m'} selectNone textColorByTheme='history' title={t('title titles')}></Text>
                <HStack gap='32'>
                    <HistoryGsap id='4item_title' radius={150} pointCount={4}/>
                    <HistoryGsap id='6item_title' radius={150} pointCount={6} titles={mockTitleSpecEl}/>
                    <HistoryGsap id='5item_title' radius={150} pointCount={5} titles={[<div>🔥</div>, <div>❄️</div>, <div>🌳</div>, <div>💧</div>, <div>⚡</div>]}/>
                </HStack>
                <VStack gap='8' max>
                    <Text size={'m'} selectNone textColorByTheme='history' text={t('title titles subtext')}></Text>
                    <div style={{width: '100%'}}>
                        <Code text={mockTitleTitles} />
                    </div>
                </VStack>
            </VStack>
        </VStack>
    </div>;
};

export default HistoryGsapList;
