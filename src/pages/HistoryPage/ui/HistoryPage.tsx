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
} from '@/shared/const/mock';

const HistoryPage = () => {
    const { t } = useTranslation('history');

    return <Page data-testid="HistoryPage">
        <VStack gap='16'>
            <Text size={'l'} selectNone title={t('title page')}></Text>
            <VStack gap='32' max>
                <Text size={'m'} selectNone title={t('title points')}></Text>
                <HStack gap='32'>
                    <Circle id='2item_90rad' loading={false} items={undefined} pointCount={2}/>
                    <Circle id='3item_90rad' loading={false} items={undefined} pointCount={3}/>
                    <Circle id='4item_90rad' loading={false} items={undefined} pointCount={4}/>
                    <Circle id='5item_90rad' loading={false} items={undefined} pointCount={5}/>
                    <Circle id='6item_90rad' loading={false} items={undefined} pointCount={6}/>
                </HStack>
                <div style={{width: '100%'}}>
                    <Code text={mockTitleCountPoints} />
                </div>

                <Text size={'m'} selectNone title={t('title visibility')}></Text>
                <HStack gap='32'>
                    <Circle id='2item_angles' loading={false} items={undefined} pointCount={2} numberVisibility={true} extraRotation={0}/>
                    <Circle id='3item_angles' loading={false} items={undefined} pointCount={3} numberVisibility={true} extraRotation={45}/>
                    <Circle id='4item_angles' loading={false} items={undefined} pointCount={4} numberVisibility={true} extraRotation={89}/>
                    <Circle id='5item_angles' loading={false} items={undefined} pointCount={5} numberVisibility={true} extraRotation={15}/>
                    <Circle id='6item_angles' loading={false} items={undefined} pointCount={6} numberVisibility={true}/>
                </HStack>
                <div style={{width: '100%'}}>
                    <Code text={mockTitleVisibilityNumbers} />
                </div>

                <Text size={'m'} selectNone title={t('title duration')}></Text>
                <HStack gap='32'>
                    <Circle id='2item_duration04' loading={false} items={undefined} pointCount={2} numberVisibility={true} duration={0.4} />
                    <Circle id='6item_duration04' loading={false} items={undefined} pointCount={6} numberVisibility={true} duration={0.4}/>
                    <Circle id='2item_duration2' loading={false} items={undefined} pointCount={2} numberVisibility={true} duration={2}/>
                    <Circle id='6item_duration2' loading={false} items={undefined} pointCount={6} numberVisibility={true} duration={2}/>
                    <Circle id='6item_duration' loading={false} items={undefined} pointCount={6} numberVisibility={true} />
                </HStack>
                <div style={{width: '100%'}}>
                    <Code text={mockTitleAnimationDuration} />
                </div>

                <Text size={'m'} selectNone title={t('title radius')}></Text>
                <HStack gap='32'>
                    <Circle id='5item_175rad' loading={false} items={undefined} pointCount={5} radius={175}/>
                    <Circle id='3item_50rad' loading={false} items={undefined} pointCount={2} radius={50}/>
                </HStack>
                <div style={{width: '100%'}}>
                    <Code text={mockTitleRadius} />
                </div>
            </VStack>
        </VStack>
    </Page>;
};

export default HistoryPage;
