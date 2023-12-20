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
    mockTitleTitles, mockTitleIntervals,
    mockIntervalsEl5, mockIntervalsEl4, mockIntervalsEl3,
} from '@/shared/const/mock';
import { titles } from '@/shared/const/mockComponents';
import {HistoryGsapAsync as HistoryGsap}  from '../HistoryGsap/HistoryGsap.async';
import cls from './HistoryGsapList.module.scss';

export const HistoryGsapList = () => {
    const { t } = useTranslation('history');

    const radius5items = 107;
    const radius4items = 130;

    return <div data-testid="HistoryGsapList">
        <VStack gap='16' className={cls.wrapper}>
            <Text size={'l'} selectNone textColorByTheme='history' title={t('title page')}/>
            <VStack gap='32' max>
                <Text size={'m'} selectNone textColorByTheme='history' title={t('title points')}/>
                <HStack gap='32'>
                    <HistoryGsap id='2item_90rad' radius={radius5items} pointCount={2} titles={titles.el2}/>
                    <HistoryGsap id='3item_90rad' radius={radius5items} pointCount={3} titles={titles.el3}/>
                    <HistoryGsap id='4item_90rad' radius={radius5items} pointCount={4} titles={titles.el4}/>
                    <HistoryGsap id='5item_90rad' radius={radius5items} pointCount={5} titles={titles.el5}/>
                    <HistoryGsap id='6item_90rad' radius={radius5items} pointCount={6} titles={titles.el6}/>
                </HStack>
                <VStack gap='8' max>
                    <Text size={'m'} selectNone textColorByTheme='history' text={t('title points subtext')}/>
                    <div style={{width: '100%'}}>
                        <Code text={mockTitleCountPoints} />
                    </div>
                </VStack>

                <Text size={'m'} selectNone textColorByTheme='history' title={t('title visibility')}/>
                <HStack gap='32'>
                    <HistoryGsap id='6item_angles' radius={radius5items} pointCount={6} numberVisibility={true}/>
                    <HistoryGsap id='2item_angles' radius={radius5items} pointCount={2} numberVisibility={true} extraRotation={0}/>
                    <HistoryGsap id='3item_angles' radius={radius5items} pointCount={3} numberVisibility={true} extraRotation={45}/>
                    <HistoryGsap id='4item_angles' radius={radius5items} pointCount={4} numberVisibility={true} extraRotation={90}/>
                    <HistoryGsap id='5item_angles' radius={radius5items} pointCount={5} numberVisibility={true} extraRotation={15}/>
                </HStack>
                <VStack gap='8' max>
                    <Text size={'m'} selectNone textColorByTheme='history' text={t('title visibility subtext')}/>
                    <div style={{width: '100%'}}>
                        <Code text={mockTitleVisibilityNumbers} />
                    </div>
                </VStack>

                <Text size={'m'} selectNone textColorByTheme='history' title={t('title duration')}/>
                <HStack gap='32'>
                    <VStack gap='32'>
                        <HStack gap='32'>
                            <HistoryGsap id='2item_duration_default' radius={radius4items} pointCount={2} numberVisibility={true} titles={titles.el6} />
                            <HistoryGsap id='6item_duration_default' radius={radius4items} pointCount={6} numberVisibility={true} titles={titles.el6} />
                        </HStack>
                        <HStack gap='32'>
                            <HistoryGsap id='2item_duration2' radius={radius4items} pointCount={2} numberVisibility={true} duration={2} titles={titles.el2}/>
                            <HistoryGsap id='6item_duration2' radius={radius4items} pointCount={6} numberVisibility={true} duration={2} titles={titles.el6}/>
                            <HistoryGsap id='2item_duration04' radius={radius4items} pointCount={2} numberVisibility={true} duration={0.4} titles={titles.el2}/>
                            <HistoryGsap id='6item_duration04' radius={radius4items} pointCount={6} numberVisibility={true} duration={0.4} titles={titles.el6}/>
                        </HStack>
                    </VStack>
                </HStack>
                <VStack gap='8' max>
                    <Text size={'m'} selectNone textColorByTheme='history' text={t('title duration subtext')}/>
                    <div style={{width: '100%'}}>
                        <Code text={mockTitleAnimationDuration} />
                    </div>
                </VStack>

                <Text size={'m'} selectNone textColorByTheme='history' title={t('title radius')}/>
                <HStack gap='32'>
                    <HistoryGsap id='5item_175rad' pointCount={5} radius={175} titles={titles.el5}/>
                    <HistoryGsap id='3item_default' pointCount={3} titles={titles.el3}/>
                    <HistoryGsap id='2item_50rad' pointCount={2} radius={50} titles={titles.el2}/>
                </HStack>
                <VStack gap='8' max>
                    <Text size={'m'} selectNone textColorByTheme='history' text={t('title radius subtext')}/>
                    <div style={{width: '100%'}}>
                        <Code text={mockTitleRadius} />
                    </div>
                </VStack>

                <Text size={'m'} selectNone textColorByTheme='history' title={t('title titles')}/>
                <HStack gap='32'>
                    <HistoryGsap id='4item_title' radius={150} pointCount={4}/>
                    <HistoryGsap id='6item_title' radius={150} pointCount={6} titles={titles.spec}/>
                    <HistoryGsap id='5item_title' radius={150} pointCount={5} titles={[<div>🔥</div>, <div>❄️</div>, <div>🌳</div>, <div>💧</div>, <div>⚡</div>]}/>
                </HStack>
                <VStack gap='8' max>
                    <Text size={'m'} selectNone textColorByTheme='history' text={t('title titles subtext')}/>
                    <div style={{width: '100%'}}>
                        <Code text={mockTitleTitles} />
                    </div>
                </VStack>


                <Text size={'m'} selectNone textColorByTheme='history' title={t('title intervals')}/>
                <HStack gap='32' max justify='center'>
                    <HistoryGsap id='5item_intervals' radius={265} pointCount={5} titles={titles.el5} intervals={mockIntervalsEl5}/>
                </HStack>
                <HStack gap='32' max justify='center'>
                    <HistoryGsap id='3item_intervals' radius={165} pointCount={3} titles={titles.el3} intervals={mockIntervalsEl3}/>
                    <HistoryGsap id='4item_intervals' radius={34} pointCount={4} titles={titles.el4} intervals={mockIntervalsEl4}/>
                </HStack>
                <HStack gap='32' max justify='center'>

                </HStack>
                <VStack gap='8' max>
                    <Text size={'m'} selectNone textColorByTheme='history' text={t('title intervals subtext')}/>
                    <div style={{width: '100%'}}>
                        <Code text={mockTitleIntervals} />
                    </div>
                </VStack>
            </VStack>
        </VStack>
    </div>;
};

export default HistoryGsapList;
