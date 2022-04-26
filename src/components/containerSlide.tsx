import React from 'react';
import Slider from 'react-slick';
import '@/assets/css/styleHome/containerSlide.css';
import Img_rectangle from '@/assets/images/img_Rectangle.png';

const ContainerSlide = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="containerSlide">
      <h2> Hôm nay có gì mới</h2>
      <div className="slideCard">
        <Slider {...settings}>
          <div className="item-slideCard">
            <div className="slide-item">
            <img src={Img_rectangle} alt="" />
            </div>
          </div>
          <div className="item-slideCard">
            <div className="slide-item">
            <img src={Img_rectangle} alt="" />
            </div>
          </div>
          <div className="item-slideCard">
            <div className="slide-item">
            <img src={Img_rectangle} alt="" />
            </div>
          </div>
          <div className="item-slideCard">
            <div className="slide-item">
            <img src={Img_rectangle} alt="" />
            </div>
          </div>
          <div className="item-slideCard">
            <div className="slide-item">
            <img src={Img_rectangle} alt="" />
            </div>
          </div>
          <div className="item-slideCard">
            <div className="slide-item">
            <img src={Img_rectangle} alt="" />
            </div>
          </div>
          <div className="item-slideCard">
            <div className="slide-item">
            <img src={Img_rectangle} alt="" />
            </div>
          </div>
          <div className="item-slideCard">
            <div className="slide-item">
            <img src={Img_rectangle} alt="" />
            </div>
          </div>
          <div className="item-slideCard">
            <div className="slide-item">
            <img src={Img_rectangle} alt="" />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ContainerSlide;
