import { createContext, useContext } from 'react';

export const AppCommonContext = createContext({
    userInfo: null,
    // logout: null,
    // isMobile: false,
    // isChrome: false,
    isSafari: false,
    themes: null
});

export function useAppCommonContext() {
    return useContext(AppCommonContext);
}
