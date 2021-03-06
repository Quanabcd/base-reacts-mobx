import React, { useEffect, useState } from 'react';

import SessionManager from '@/managers/SessionManager';
import AppStore from './app-store';
import { AppStoreContext } from './context';

export const AppStoreProvider = ({ children }: any) => {

    const [appStore, setAppStore] = useState<any>(null);

    useEffect(() => {
        SessionManager.initData(async () => {
            setAppStore(new AppStore());
        });
    }, []);

    return (
        appStore && <AppStoreContext.Provider value={appStore}>
            {children}
        </AppStoreContext.Provider>
    );
};
