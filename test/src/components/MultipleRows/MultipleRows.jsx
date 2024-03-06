import React from "react";
import Slider from "react-slick";
import logo from '../../assets/9799.jpg'
import logo1 from '../../assets/9807.jpg'
import logo2 from '../../assets/9810.jpg'
import '../MultipleRows/Simple.css'


function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div >
        <h1>Hello World</h1>
        <img src={logo} alt="a" className="w-full"  style={{ height: 300}} />
        </div>
        <div>
        <img src={logo2} alt="a" className="w-full"  style={{ height: 300 }} />
        </div>
        <div>
        <img src={logo1} alt="a" className="w-full"  style={{ height: 300 }}/>
        </div>
       
      </Slider>
    </div>
  );
}

export default SimpleSlider;
