type navListType = {
    id: string,
    href: string,
    criteria?: string,
    list: {
        id: string,
        en?: string,
        href: string
    }[] | undefined
}[];

export const aboutNavList: navListType = [
    { id: '회사개요', href: '/content/company', list: undefined },
    { id: '연혁', href: '/content/history', list: undefined },
    { id: '인증 및 파트너 현황', href: '/status', list: undefined },
    { id: '오시는 길', href: '/content/contact', list: undefined },
];

export const businessNavList: navListType = [
    {
        id: '모델',
        href: '/content/zebrafish',
        criteria: '/content/zebrafish',
        list: undefined
    },
    {
        id: '서비스',
        href: '/content/service/CNS_FIT',
        criteria: '/content/service',
        list: [
            { id: 'CNS_FIT', href: '/content/service/CNS_FIT' },
            { id: 'Meta_FIT', href: '/content/service/Meta_FIT' },
            { id: 'Onco_FIT', href: '/content/service/Onco_FIT' },
            { id: 'Gene_FIT', href: '/content/service/Gene_FIT' },
            { id: 'Toxicology', href: '/content/service/Toxicology' }
        ]
    },
    {
        id: '신약개발',
        href: '/content/development/pharmaceuticals',
        criteria: '/content/development',
        list: [
            { id: '신약개발기술', en: 'pharmaceuticals', href: '/content/development/pharmaceuticals' },
            { id: '파이프라인', en: 'pipeline', href: '/content/development/pipeline' },
            { id: '오픈 이노베이션', en: 'open_innovation', href: '/content/development/open_innovation' }
        ]
    },
];

export const communityNavList: navListType = [
    { id: '공지사항', href: '/notice', list: undefined },
    { id: '보도자료', href: '/news', list: undefined },
];