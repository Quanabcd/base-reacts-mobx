import React from 'react';
import Languages from '@/commons/Languages';
import '@/assets/css/styleHome/ContainerCard.css';
import Ic_bag from '@/assets/images/ic_bag.png';
import Ic_eddy from '@/assets/images/ic_eddy.png';
import Ic_dollar from '@/assets/images/ic_dollar.png';
import Ic_camera from '@/assets/images/ic_camera.png';
import Ic_hands from '@/assets/images/ic_hands.png';

const ContainerCard = () => {
  return (
   <div className="containerCard">
        <div className="cardItem">
          <img src={Ic_bag} alt="" />
          <p>{Languages.home.recharge}</p>
          <p>
            {Languages.home.bag1} <span>{Languages.home.univest}</span>
          </p>
        </div>
        <div className="cardItem">
          <img src={Ic_eddy} alt="" />
          <p>{Languages.home.withdrawMoney}</p>
          <p>{Languages.home.moneys}</p>
        </div>
        <div className="cardItem">
          <img src={Ic_dollar} alt="" />
          <p>{Languages.home.Management}</p>
          <p>{Languages.home.asset}</p>
        </div>
        <div className="cardItem">
          <img src={Ic_camera} alt="" />
          <p>{Languages.home.history}</p>
          <p>{Languages.home.transaction}</p>
        </div>
        <div className="cardItem">
          <img src={Ic_hands} alt="" />
          <p>{Languages.home.support}</p>
          <p>{Languages.home.customer}</p>
        </div>
      </div>
  );
};

export default ContainerCard;
