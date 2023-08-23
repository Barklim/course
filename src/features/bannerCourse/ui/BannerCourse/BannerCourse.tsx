import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { Banner } from '../Banner/Banner';
import { Text } from '@/shared/ui/revamped/Text';
import cls from './BannerCourse.module.scss';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Button } from '@/shared/ui/revamped/Button';
import { Icon } from '@/shared/ui/revamped/Icon';
import Calendar from '@/shared/assets/icons/calendar.svg';
import moment from 'moment';

interface BannerCourseProps {
    className?: string;
}

export const BannerCourse = memo((props: BannerCourseProps) => {
    const { t } = useTranslation('community');

    return (
        <div>
            <Text className={cls.titleCommunity} size={'xl'} text={t('Community')} />
            <HStack className={cls.qa} justify={'between'}>
                <Text size={'l'} title={t('Q&A')}></Text>
                <Button
                    variant="outline"
                    size={'l'}
                    fontSize={12}
                    height={36}
                    className={cls.calendar}
                    addonLeft={<Icon setActive width={14} height={14} Svg={Calendar} />}
                >
                    {moment().format("MMM, D")}
                </Button>
            </HStack>
            <Banner />
        </div>
    );
});
