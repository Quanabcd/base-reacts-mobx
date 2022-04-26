import React from 'react';
import '@/assets/css/styleHome/learnAbout.css';
import Ic_peple from '@/assets/images/ic_peple.png'
import Ic_money from '@/assets/images/ic_money.png'
import Ic_dola from '@/assets/images/ic_dola.png'
import Ic_bag from '@/assets/images/ic_bag.png'


const LearnAbout = () => {
  return (
  <div className='learnAbout'>
        <h2>Tìm hiểu về Univest</h2>
        <div className='learnAbout-card'>
          <div className='card-item'>
            <img src={Ic_peple} alt="" />
             <p>Về Univest</p>
          </div>
          <div className='card-item'>
          <img src={Ic_money} alt="" />
             <p>Hướng dẫn sử dụng</p>
          </div>
          <div className='card-item'>
          <img src={Ic_dola} alt="" />
             <p>Tích luỹ</p>
          </div>
          <div className='card-item'>
          <img src={Ic_bag} alt="" />
             <p>Túi Univest</p>
          </div>
         
        </div>
  </div>
  )
}

export default LearnAbout