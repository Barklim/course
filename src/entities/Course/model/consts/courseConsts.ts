export enum CourseSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED = 'createdAt',
    FEATURE = 'feature'
}

export enum CourseType {
    STOCKS = 'STOCKS',
    ETFS = 'ETFS',
    CRYPTO = 'CRYPTO',
    NFTs = 'NFTS',
}

export enum CourseView {
    BIG = 'BIG',
    SMALL = 'SMALL',
}

export interface Content {
    id: string;
    blockImage: string;
    linkUserName: string;
    linkUserImage: string;
    title: string;
    description: string;
    duration: string;
    earn: string;
}
