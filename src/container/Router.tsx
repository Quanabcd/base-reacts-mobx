import { alias } from '@/commons/constant';
import React from 'react';
import { Route, Routes } from 'react-router';
import NoRouter from './NotFound';
import Assets from './page/Asset';
import Details from './page/details';
import Home from './page/Home';
import Products from './page/products';
const Router = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path={alias.products} element={<Products />}>
                <Route path={alias.products + 'details'} element={<Details />} />
            </Route>
            <Route path={alias.assets} element={<Assets />}>
            </Route>
            <Route path="*" element={<NoRouter />} />
        </Routes>
    );
};
export default Router;
