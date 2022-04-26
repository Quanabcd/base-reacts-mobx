import React from 'react';
import MoneyBag from '@/components/moneyBag';
import ContainerCard from '@/components/containerCard';
import ContainerSlide from '@/components/containerSlide';
import '@/assets/css/styleHome/home.css';
// import ProductsUnivest from '@/components/productsUnivest';
import LearnAbout from '@/components/learnAbout';
import ProductsUnivest from '@/components/productsUnivest';

const Home=()=>{
  
  return (
    <>
      <div className="home">
      <MoneyBag />
      <ContainerCard />
      <ContainerSlide />
     <ProductsUnivest />
      <LearnAbout />
      </div>
    </>
  )
}
export default Home;
