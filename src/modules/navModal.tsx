import { atom } from "recoil";

export const navModalOpen = atom({
    key: 'navModalOpen',
    default: false
});

const getInitialAdmNavModalOpen = () => {

    const pathList = ['/adm/historys', '/adm/partners', '/adm/notices', '/adm/news'];

    if (typeof window !== 'undefined') {
        const pathname = window.location.pathname;
        return pathList.some((item: string) => pathname?.includes(item));
    }
    return false;
};

export const admNavModalOpen = atom({
    key: 'admNavModalOpen',
    default: getInitialAdmNavModalOpen()
});