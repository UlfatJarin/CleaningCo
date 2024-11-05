import React from 'react'
import Slider from 'react-slick'
import banner from '../../public/assets/banner.jpg'
import Input from '../layers/Input';

const Banner = () => {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style,padding:"12px 12px 12px 12px", display: "block", position:"absolute", top:"50%", right:"100px", zIndex:100, background: "white", borderRadius:"5px"  }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style,padding:"12px 12px 12px 12px", height:"48px", display: "block",position:"absolute",  top:"50%", left:"100px",zIndex:100, background: "white", borderRadius:"5px" }}
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
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow />,
        appendDots: dots => (
          <div
            style={{
              padding: "12px",
              position:"absolute",
              top:"70%"
            }}
          >
            <ul style={{ margin: "0px" }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div className='active:bg-#00D97F'
            style={{
              width: "12px",
              height:"12px",
              color: "blue",
              border: "1px #00D97F solid",
              borderRadius:"50%",
            }}
          >          
          </div>
        )
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
    <div>
      <Input id='AppointmentCleaning' type='text' placeholder='Appointment Cleaning'/>
    </div>
    </div>

  )
}

export default Banner