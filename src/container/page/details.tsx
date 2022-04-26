import React from 'react';
import { Link, Routes, useParams } from 'react-router-dom';

const Details = () => {

    const { orderID } = useParams();

    console.log(orderID)

    return (
        <div>
            Details
        </div>
    );
};
export default Details;
