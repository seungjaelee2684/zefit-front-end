type navListType = {
    id: string,
    href: string,
    list: {
        id: string,
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
        list: undefined
    },
    {
        id: '서비스',
        href: '/content/CNS_FIT',
        list: [
            { id: 'CNS_FIT', href: '/content/CNS_FIT' },
            { id: 'Meta_FIT', href: '/content/Meta_FIT' },
            { id: 'Onco_FIT', href: '/content/Onco_FIT' },
            { id: 'Gene_FIT', href: '/content/Gene_FIT' },
            { id: 'Toxicology', href: '/content/Toxicology' }
        ]
    },
    {
        id: '신약개발',
        href: '/content/pharmaceuticals',
        list: [
            { id: '신약개발기술', href: '/content/pharmaceuticals' },
            { id: '파이프라인', href: '/content/pipeline' },
            { id: '오픈 이노베이션', href: '/content/open_innovation' }
        ]
    },
];

export const communityNavList: navListType = [
    { id: '공지사항', href: '/notice', list: undefined },
    { id: '보도자료', href: '/news', list: undefined },
];