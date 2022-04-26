import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '@/assets/css/col.css';
import '@/assets/css/reset.css';
import { AppCommonContext } from '@/hooks/AppCommonContext';
import { theme } from '@/commons/constant';
import { BrowserRouter } from 'react-router-dom';
import Header from './container/Header';
import Footer from './container/Footer';
import { AppStoreProvider } from './providers/app-provider';


function App(): JSX.Element {

    const [themes] = useState<any>(theme);

    return (
        <React.StrictMode>
            <AppStoreProvider>
                <AppCommonContext.Provider value={
                    themes
                }>
                    <BrowserRouter>
                        <Header />
                        <Footer />
                    </BrowserRouter>
                    <Footer />
                </AppCommonContext.Provider>
            </AppStoreProvider>
        </React.StrictMode>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
