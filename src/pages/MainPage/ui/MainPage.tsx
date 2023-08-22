import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { BannerCourse } from '@/features/bannerCourse';
import { ToggleFeatures } from '@/shared/lib/features';

const MainPage = () => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page data-testid="MainPage">
            <ToggleFeatures
                feature="isAppRevamped"
                off={<span>{t('Главная страница:описание')}</span>}
                on={<BannerCourse/>}
            />
        </Page>
    );
};

export default MainPage;
