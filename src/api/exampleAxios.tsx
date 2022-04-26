import axiosClient from './axiosClient';
import { urlApi } from './constant';

// api/productApi.js
export default class ProductApi {
    getAll = (params) => {
        const url = urlApi.PRODUCTS;
        return axiosClient.get(url, { params });
    };
}
