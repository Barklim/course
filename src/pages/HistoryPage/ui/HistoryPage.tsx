import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Circle } from '@/shared/ui/revamped/Gsap';
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
    mockTitle6
} from '@/shared/const/mock';

const HistoryPage = () => {
    const { t } = useTranslation('history');

    return <Page data-testid="HistoryPage">
        <VStack gap='16'>
            <Text size={'l'} selectNone title={t('title page')}></Text>
            <VStack gap='32' max>
                <Text size={'m'} selectNone title={t('title points')}></Text>
                <HStack gap='32'>
                    <Circle id='2item_90rad' pointCount={2} titles={mockTitle2}/>
                    <Circle id='3item_90rad' pointCount={3} titles={mockTitle3}/>
                    <Circle id='4item_90rad' pointCount={4} titles={mockTitle4}/>
                    <Circle id='5item_90rad' pointCount={5} titles={mockTitle5}/>
                    <Circle id='6item_90rad' pointCount={6} titles={mockTitle6}/>
                </HStack>
                <div style={{width: '100%'}}>
                    <Code text={mockTitleCountPoints} />
                </div>

                <Text size={'m'} selectNone title={t('title visibility')}></Text>
                <HStack gap='32'>
                    <Circle id='2item_angles' pointCount={2} numberVisibility={true} extraRotation={0}/>
                    <Circle id='3item_angles' pointCount={3} numberVisibility={true} extraRotation={45}/>
                    <Circle id='4item_angles' pointCount={4} numberVisibility={true} extraRotation={89}/>
                    <Circle id='5item_angles' pointCount={5} numberVisibility={true} extraRotation={15}/>
                    <Circle id='6item_angles' pointCount={6} numberVisibility={true}/>
                </HStack>
                <div style={{width: '100%'}}>
                    <Code text={mockTitleVisibilityNumbers} />
                </div>

                <Text size={'m'} selectNone title={t('title duration')}></Text>
                <HStack gap='32'>
                    <Circle id='2item_duration04' pointCount={2} numberVisibility={true} duration={0.4} titles={mockTitle2} />
                    <Circle id='6item_duration04' pointCount={6} numberVisibility={true} duration={0.4} titles={mockTitle6}/>
                    <Circle id='2item_duration2' pointCount={2} numberVisibility={true} duration={2} titles={mockTitle2}/>
                    <Circle id='6item_duration2' pointCount={6} numberVisibility={true} duration={2} titles={mockTitle6}/>
                    <Circle id='6item_duration' pointCount={6} numberVisibility={true} titles={mockTitle6} />
                </HStack>
                <div style={{width: '100%'}}>
                    <Code text={mockTitleAnimationDuration} />
                </div>

                <Text size={'m'} selectNone title={t('title radius')}></Text>
                <HStack gap='32'>
                    <Circle id='5item_175rad' pointCount={5} radius={175} titles={mockTitle5}/>
                    <Circle id='3item_50rad' pointCount={2} radius={50} titles={mockTitle2}/>
                </HStack>
                <div style={{width: '100%'}}>
                    <Code text={mockTitleRadius} />
                </div>
            </VStack>
        </VStack>
    </Page>;
};

export default HistoryPage;
