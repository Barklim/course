import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { Text } from '@/shared/ui/redesigned/Text';
import { getFeatureFlag, updateFeatureFlag } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';
import { LOCAL_STORAGE_LAST_DESIGN_KEY, LOCAL_STORAGE_REVAMP_KEY } from '@/shared/const/localstorage';
import cls from './UiDesignSwitcher.module.scss';

interface UiDesignSwitcherProps {
    className?: string;
}

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const isAppRedesigned = getFeatureFlag('isAppRedesigned');
    const isAppRevamped = getFeatureFlag('isAppRevamped');
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const [isLoading, setIsLoading] = useState(false);
    const forceUpdate = useForceUpdate();
    let listBoxValue;

    if (isAppRevamped) {
        listBoxValue = 'newest'
    } else {
        listBoxValue = isAppRedesigned ? 'new' : 'old'
    }

    const items = [
        {
            content: t('Новый'),
            value: 'newest',
        },
        {
            content: t('Старый'),
            value: 'new',
        },
        {
            content: t('Beta'),
            value: 'old',
        },
    ];

    const updateStorage = () => {
        localStorage.setItem(
            LOCAL_STORAGE_LAST_DESIGN_KEY,
            isAppRedesigned ? 'new' : 'old',
        );
        localStorage.setItem(
            LOCAL_STORAGE_REVAMP_KEY,
            isAppRevamped ? 'new' : 'old',
        );
    }

    const onChange = async (value: string) => {
        if (authData) {
            setIsLoading(true);
            updateStorage();
            switch(value) {
                case 'newest':
                    await dispatch(
                        updateFeatureFlag({
                            userId: authData.id,
                            newFeatures: {
                                isAppRevamped: true,
                            },
                        }),
                    ).unwrap();
                    break;
                case 'new':
                    await dispatch(
                        updateFeatureFlag({
                            userId: authData.id,
                            newFeatures: {
                                isAppRedesigned: true,
                                isAppRevamped: false,
                            }
                        }),
                    ).unwrap();
                    break;
                case 'old':
                    await dispatch(
                        updateFeatureFlag({
                            userId: authData.id,
                            newFeatures: {
                                isAppRedesigned: false,
                                isAppRevamped: false,
                            }
                        }),
                    ).unwrap();
                    break;
                default:
            }
            setIsLoading(false);
            forceUpdate();
        }
    };

    return (
        <HStack>
            <Text text={t('Вариант интерфейса')} className={cls.text} />
            {isLoading ? (
                <Skeleton width={100} height={40} />
            ) : (
                <ListBox
                    onChange={onChange}
                    items={items}
                    value={listBoxValue}
                    className={className}
                />
            )}
        </HStack>
    );
});
