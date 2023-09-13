import { StateSchema } from '@/app/providers/StoreProvider';
import {
    getCourseAllData,
    getCourseAllError,
    getCourseAllIsLoading,
} from './course';

describe('coursesDetails.test', () => {
    // test('should return data', () => {
    //     const data = {
    //         id: '1',
    //         user: {
    //             id: '1',
    //             username: 'user',
    //             avatar: 'http://1',
    //             roles: 1,
    //             features: {},
    //             jsonSettings: {}
    //         },
    //         title: 'subtitle',
    //         price: '12.21',
    //         participants: 322,
    //         soldOut: 42,
    //         startDate: '',
    //         endDate: '',
    //         createdAt: '',
    //         type: ['IT']
    //     };
    //     const state: DeepPartial<StateSchema> = {
    //         event: {
    //             data,
    //         },
    //     };
    //     expect(getEventData(state as StateSchema)).toEqual(data);
    // });
    test('should work with empty state data', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getCourseAllData(state as StateSchema)).toEqual(undefined);
    });
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            event: {
                error: 'error',
            },
        };
        expect(getCourseAllError(state as StateSchema)).toEqual('error');
    });
    test('should work with empty state error', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getCourseAllError(state as StateSchema)).toEqual(undefined);
    });
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            event: {
                isLoading: true,
            },
        };
        expect(getCourseAllIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state isLoading', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getCourseAllIsLoading(state as StateSchema)).toEqual(false);
    });
});
