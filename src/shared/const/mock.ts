export const mockTitle2 = ['Title1','Title2',];
export const mockTitle3 = ['Title1','Title2','Title3', ];
export const mockTitle4 = ['Title1','Title2','Title3', 'Title4',];
export const mockTitle5 = ['Title1','Title2','Title3', 'Title4','Title5'];
export const mockTitle6 = ['Title1','Title2','Title3', 'Title4','Title5','Title6'];
export const mockTitleSpec = ['you so', 'luckin', 'precious', 'when you', '❤️❤ smile ❤❤️️', '']
export const mockTitleAssembled = ['Технологии', 'Кино', 'Литература', 'Театр', 'Музыка️️', 'Наука']

export const mockTitleCountPoints =
    '<Circle pointCount={2}/>' +
    '\n' +
    '<Circle pointCount={3}/>' +
    '\n' +
    '<Circle pointCount={4}/>' +
    '\n' +
    '<Circle pointCount={5}/>' +
    '\n' +
    '<Circle pointCount={6}/>'

export const mockTitleVisibilityNumbers =
    '<Circle numberVisibility={true}/>' +
    '\n' +
    '<Circle numberVisibility={true} extraRotation={0}/>' +
    '\n' +
    '<Circle numberVisibility={true} extraRotation={45}/>' +
    '\n' +
    '<Circle numberVisibility={true} extraRotation={90}/>' +
    '\n' +
    '<Circle numberVisibility={true} extraRotation={15}/>'

export const mockTitleAnimationDuration =
    '<Circle pointCount={2}' +
    '\n' +
    '<Circle pointCount={6}' +
    '\n' +
    '<Circle pointCount={2} duration={0.4}/>' +
    '\n' +
    '<Circle pointCount={6} duration={0.4}/>' +
    '\n' +
    '<Circle pointCount={2} duration={2}/>' +
    '\n' +
    '<Circle pointCount={6} duration={2}/>'

export const mockTitleRadius =
    '<Circle pointCount={5} radius={175}/>' +
    '\n' +
    '<Circle pointCount={3}/>' +
    '\n' +
    '<Circle pointCount={2} radius={50}/>'

export const mockTitleTitles =
    '<Circle pointCount={4} />' +
    '\n' +
    '<Circle pointCount={6} titles={arrayOfComponents} />' +
    '\n' +
    '<Circle' +
    '\n' +
    '  pointCount={5}' +
    '\n' +
    '  titles={[<div>🔥</div>, <div>❄️</div>, <div>🌳</div>, <div>💧</div>, <div>⚡</div>]}' +
    '\n' +
    '/>'

export const mockTitleIntervals =
    '<Circle pointCount={4} intervals={intervalsObj as TInterval} />' +
    '\n' +
    '\n' +
    'export type TIntervalItem = {' +
    '\n' +
    '    start: number,' +
    '\n' +
    '    end: number' +
    '\n' +
    '};' +
    '\n' +
    '\n' +
    'export type TInterval = {' +
    '\n' +
    '    [key: number]: TIntervalItem;' +
    '\n' +
    '};' +
    '\n' +
    '\n' +
    'export const intervalsObj = {' +
    '\n' +
    '    1: {' +
    '\n' +
    '        start: 1981,' +
    '\n' +
    '        end: 1985,' +
    '\n' +
    '    },' +
    '\n' +
    '    2: {' +
    '\n' +
    '        start: 1987,' +
    '\n' +
    '        end: 1991,' +
    '\n' +
    '    }' +
    '\n' +
    '};' +
    ''

export const mockIntervalsEl6Default = {
    1: {
        start: 2011,
        end: 2021,
    },
    2: {
        start: 2012,
        end: 2022,
    },
    3: {
        start: 2013,
        end: 2023,
    },
    4: {
        start: 2014,
        end: 2024,
    },
    5: {
        start: 2015,
        end: 2025,
    },
    6: {
        start: 2016,
        end: 2026,
    },
};

export const mockIntervalsEl6 = {
    1: {
        start: 1981,
        end: 1985,
    },
    2: {
        start: 1987,
        end: 1991,
    },
    3: {
        start: 1992,
        end: 1997,
    },
    4: {
        start: 1999,
        end: 2004,
    },
    5: {
        start: 2006,
        end: 2013,
    },
    6: {
        start: 2015,
        end: 2022,
    },
};

export const mockIntervalsEl5 = {
    1: {
        start: 1980,
        end: 1984,
    },
    2: {
        start: 1986,
        end: 1990,
    },
    3: {
        start: 1991,
        end: 1996,
    },
    4: {
        start: 1998,
        end: 2003,
    },
    5: {
        start: 2005,
        end: 2012,
    },
};

export const mockIntervalsEl4 = {
    1: {
        start: 1992,
        end: 1997,
    },
    2: {
        start: 1999,
        end: 2004,
    },
    3: {
        start: 2006,
        end: 2013,
    },
    4: {
        start: 2015,
        end: 2022,
    },
};

export const mockIntervalsEl3 = {
    1: {
        start: 1981,
        end: 1985,
    },
    2: {
        start: 1987,
        end: 1991,
    },
    3: {
        start: 1992,
        end: 1997,
    },
};
