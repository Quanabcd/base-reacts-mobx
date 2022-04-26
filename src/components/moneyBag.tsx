import React from 'react';
import Languages from '@/commons/Languages';
import '@/assets/css/styleHome/moneyBag.css';

const MoneyBag = () => {
  return (
    <div>
       <div className="money-bag">
        <div className="money-left">
          <h5>{Languages.home.totalassets}</h5>
          <h3>
            {Languages.home.money} <span> {Languages.home.unit}</span>
          </h3>
          <div className="moneyText">
            <p>{Languages.home.Growth}</p>
            <h4>XXX %</h4>
            <h4>+ XX.XXX.XXX VND</h4>
          </div>
        </div>
        <div className="money-center"></div>
        <div className="money-right">
          <h5>{Languages.home.univest}</h5>
          <p>{Languages.home.profitable}</p>
          <h3>
            {Languages.home.money} <span> {Languages.home.unit}</span>
          </h3>
          <div className="moneyText">
            <p>{Languages.home.profiMonth}</p>
            <h4>+ XX.XXX.XXX VND</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyBag;
