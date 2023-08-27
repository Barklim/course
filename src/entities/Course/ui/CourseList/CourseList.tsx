import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { CourseCard } from '../CourseCard/CourseCard';
import { Course } from '../../model/types/course';

interface CourseListProps {
    className?: string;
    courses?: Course[];
    isLoading?: boolean;
}

export const CourseList = memo((props: CourseListProps) => {
    const { className, isLoading, courses } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <HStack gap="12" max className={classNames('', {}, [className])}>
                <CourseCard isLoading />
                <CourseCard isLoading />
                <CourseCard isLoading />
            </HStack>
        );
    }

    return (
        <HStack gap="16" max className={classNames('', {}, [className])}>
            {courses?.length ? (
                courses.map((course) => (
                    <CourseCard
                        isLoading={isLoading}
                        item={course}
                        key={course.id}
                    />
                ))
            ) : (
                <Text text={t('События отсутствуют')} />
            )}
        </HStack>
    );
});
