import React from 'react'
import Slider from 'react-slick'
import banner from '../../public/assets/banner.jpg'

const Banner = () => {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", position:"absolute", zIndex:100, background: "red" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block",position:"absolute",zIndex:100, background: "green" }}
            onClick={onClick}
          />
        );
      }


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };


  return (    
    <div className=''>


        <Slider {...settings}>
      <div>
        <img src={banner} alt="1" />
      </div>
      <div>
        <img src={banner} alt="2" />
      </div>
      <div>
        <img src={banner} alt="3" />
      </div>
    </Slider>
    </div>
  )
}

export default Banner