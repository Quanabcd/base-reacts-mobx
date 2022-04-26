import { alias } from '@/commons/constant';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Products = () => {
    return (
        <div>
            <Link to={alias.products + '/details'}>
                Products
            </Link>
            <Outlet />
        </div>
    );
};
export default Products;
