import React from 'react';

import { FaFacebookSquare, FaLinkedin, FaPinterest, FaTwitterSquare, FaYoutube } from "react-icons/fa";
import { Avatar, Card } from 'antd';
import Custombtn from './Custombtn';


const { Meta } = Card;
const MemberCard = ({src ,description,title}) => (
  <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src={src}
      />
    }
    actions={[
        <FaFacebookSquare className='iconMC' />,
        <FaTwitterSquare className='iconMC' />,
        <FaLinkedin className='iconMC' />,
        <FaPinterest className='iconMC' />,
        <FaYoutube className='iconMC' />,
    ]}
  >
    <Meta className='text-center'
      
      title={title}
      description={description}
    />
  </Card>
);
export default MemberCard;