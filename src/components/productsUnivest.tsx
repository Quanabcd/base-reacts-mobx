import React, { useCallback, useMemo, useState } from 'react';
import '@/assets/css/styleHome/productsUnivest.css';
import Ic_weigh from '@/assets/images/ic_weigh.png';
import Ic_1M from '@/assets/images/ic_1M.png';
import Ic_3M from '@/assets/images/ic_3M.png';
import Ic_6M from '@/assets/images/ic_6M.png';
import Ic_anchor from '@/assets/images/ic_anchor.png';
import Ic_arrow from '@/assets/images/ic_arrow.png';
import Ic_bag from '@/assets/images/ic_bag.png';
import { data as data1 } from '@/container/mock/TestApiProductUnivest';

// import { shouldCompute } from 'mobx/dist/internal';

const ProductsUnivest = () => {

    const [data, setData] = useState<any[]>(data1);
    const renderData = useCallback((data: any) => {
        return data;
    }, []);

    return (
        <>
            <div className="productsUnivest">
                <h2>Sản phẩm Univest</h2>
                {/* -------------------- */}
                <div>
                    <div className='products'>
                        {data.map((items) => (
                            <div key={items.id}>

                                <div className="products-show">
                                    <button>
                                        <h2><img src={items.img} alt="" />{items.title}</h2>
                                    </button>
                                    <hr className='hr'></hr>
                                    <div className="show">
                                        {/* <ul className="show-item">
                      <div className="show-icon">
                        <img src={Ic_1M} alt="" />
                      </div>
                      <div>
                        <h2>{items.title1}</h2>
                        <div className="show-text">
                          <li> {items.content} </li>
                          <li>{items.content1} </li>
                          <li>{items.content2}</li>
                        </div>
                      </div>
                    </ul>
                    <hr className='hr'></hr>
                    <ul className="show-item">
                      <div className="show-icon">
                        <img src={Ic_3M} alt="" />
                      </div>
                      <div>
                        <h2>{items.title2}</h2>
                        <div className="show-text">
                        <li> {items.content} </li>
                          <li>{items.content1} </li>
                          <li>{items.content2}</li>
                        </div>
                      </div>
                    </ul>
                    <hr className='hr'></hr>
                    <ul className="show-item">
                      <div className="show-icon">
                        <img src={Ic_6M} alt="" />
                      </div>
                      <div>
                        <h2>{items.title3} </h2>
                        <div className="show-text">
                        <li> {items.content} </li>
                          <li>{items.content1} </li>
                          <li>{items.content2}</li>
                        </div>
                      </div>
                    </ul> */}
                                    </div>

                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>

        </>
    );
};

export default ProductsUnivest;
