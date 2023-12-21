import { PointsType } from '@/shared/types/gsap';

export const mockTitle2 = ['Title1','Title2',];
export const mockTitle3 = ['Title1','Title2','Title3', ];
export const mockTitle4 = ['Title1','Title2','Title3', 'Title4',];
export const mockTitle5 = ['Title1','Title2','Title3', 'Title4','Title5'];
export const mockTitle6 = ['Title1','Title2','Title3', 'Title4','Title5','Title6'];
export const mockTitleSpec = ['you so', 'luckin', 'precious', 'when you', '❤️❤ smile ❤❤️️', '']
export const mockTitleAssembled = ['Технологии', 'Кино', 'Литература', 'Театр', 'Спорт', 'Наука']

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

const year1980 = 'Sinclair Research \nвыпускает домашний \nкомпьютер ZX80'
const year1981 = ''
const year1982 = 'Появился домашний \nкомпьютер ZX Spectrum \nвыпущенный британской \nкомпанией Sinclair Research'
const year1983 = 'В 1983 году за сетью \nARPANET закрепился термин \n«Интернет»'
const year1984 = 'Первая версия Mac OS\nбыла опубликована вместе \nс первым компьютером \nMacintosh'
const year1985 = 'Корпорация Intel представила \nновый процессор 80386 '

const year1987 = '«Хищник»/Predator, США(реж.\nДжон Мактирнан)'
const year1988 = '«Кто подставил Кролика \nРоджера»/Who Framed Roger \nRabbit, США (реж. Роберт \nЗемекис)'
const year1989 = '«Назад в будущее 2»/Back To \nThe Future 2, США (реж. Роберт \nЗемекис)'
const year1990 = '«Крепкий Орешек 2»/Die Hard 2, \n США(реж. Ренни Харлин)'
const year1991 = '«Семейка Аддамс»/The Addams \nFamily, США, (реж. Барри \nЗонненфельд)'

const year1992 = 'Нобелевская премия по \nлитературе - Дерек Уолкотт, \n«За блестящий образец \nкарибского эпоса в 64 разделах».'
const year1993 = ''
const year1994 = '«Бессоница» — роман Стивена \nКинга.'
const year1995 = 'Нобелевская премия по \nлитературе — Шеймас Хини'
const year1996 = ''
const year1997 = '«Гарри Поттер и философский \nкамень» — Джоан \nРоулинг.'

const year1999 = 'Премьера балета «Золушка» в \nпостановке Жан-Кристофа Майо, \nсценография Эрнеста Пиньона'
const year2000 = 'Возобнавлено издание журнала \n«Театр».'
const year2001 = ''
const year2002 = 'Премьера трилогии Тома \nСтоппарда «Берег Утопии», \nКоролевский Национальный театр, Лондон'
const year2003 = 'В Венеции театр «Ла \nФениче» сгорел \nв пожаре'
const year2004 = ''

const year2006 = 'Баскетбольный клуб \nЦСКА стал победителем \nнационального \nпервенства России.'
const year2007 = ''
const year2008 = 'С 8 по 24 августа в \nПекине прошли 29-е \nлетние Олимпийские \nигры.'
const year2009 = ''
const year2010 = '13-28 февраля в \nВанкувере: Зимние \nОлимпиские игры 2010 \nгода.'
const year2011 = ''
const year2012 = '2 августа — Летние \nОлимпийские игры.'
const year2013 = 'XXII зимние Олимпийские \nигры (Сочи, Россия).'

const year2015 = '13 сентября — частное солнечное \nзатмение, видимое в Южной \nАфрике и части Антарктиды'
const year2016 = 'Телескоп «Хаббл» обнаружил самую \nудалённую из всех обнаруженных галактик, \nполучившую обозначение GN-z11'
const year2017 = 'Компания Tesla официально \nпредставила первый в мире \nэлектрический грузовик Tesla Semi'
const year2018 = 'Старт космического аппарата \nSolar Probe Plus, \nпредназначенного для изучения \nСолнца'
const year2019 = 'Google объявил о создании 54- \nкубитного квантового \nкомпьютера.'
const year2020 = 'Корабль Crew Dragon вернулся на Землю из первого пилотируемого полета'
const year2021 = ''
const year2022 = ''

const first1 = { title: '1980', text: year1980}
const first2 = { title: '1981', text: year1981}
const first3 = { title: '1982', text: year1982}
const first4 = { title: '1983', text: year1983}
const first5 = { title: '1984', text: year1984}
const first6 = { title: '1985', text: year1985}

const second1 = { title: '1987', text: year1987}
const second2 = { title: '1988', text: year1988}
const second3 = { title: '1989', text: year1989}
const second4 = { title: '1990', text: year1990}
const second5 = { title: '1991', text: year1991}

const third1 = { title: '1992', text: year1992}
const third2 = { title: '1993', text: year1993}
const third3 = { title: '1994', text: year1994}
const third4 = { title: '1995', text: year1995}
const third5 = { title: '1996', text: year1996}
const third6 = { title: '1997', text: year1997}

const fourth1 = { title: '1999', text: year1999}
const fourth2 = { title: '2000', text: year2000}
const fourth3 = { title: '2001', text: year2001}
const fourth4 = { title: '2002', text: year2002}
const fourth5 = { title: '2003', text: year2003}
const fourth6 = { title: '2004', text: year2004}

const fifth1 = { title: '2006', text: year2006}
const fifth2 = { title: '2007', text: year2007}
const fifth3 = { title: '2008', text: year2008}
const fifth4 = { title: '2009', text: year2009}
const fifth5 = { title: '2010', text: year2010}
const fifth6 = { title: '2011', text: year2011}
const fifth7 = { title: '2012', text: year2012}
const fifth8 = { title: '2013', text: year2013}

const sixth1 = { title: '2015', text: year2015}
const sixth2 = { title: '2016', text: year2016}
const sixth3 = { title: '2017', text: year2017}
const sixth4 = { title: '2018', text: year2018}
const sixth5 = { title: '2019', text: year2019}
const sixth6 = { title: '2020', text: year2020}
const sixth7 = { title: '2021', text: year2021}
const sixth8 = { title: '2022', text: year2022}

export const intervalCarouselEl6 = {
    [PointsType.One]: [first1, first3, first4, first5, first6],
    [PointsType.Two]: [second1, second2, second3, second4, second5],
    [PointsType.Three]: [third1, third3, third4, third6],
    [PointsType.Four]: [fourth1, fourth2, fourth4, fourth5],
    [PointsType.Five]: [fifth1, fifth3, fifth5, fifth7, fifth8],
    [PointsType.Six]: [sixth1, sixth2, sixth3, sixth4, sixth5, sixth6],
};