import React from 'react';
import useGetData from '@utils/useGetData';
import github from "@images/github.png";
import instagram from "@images/instagram.png";
import twitter from "@images/twitter.png";

import CardData from '../components/CardData';

const API = process.env.API;

const Template = () => {
  const data = useGetData(API);
  return(
    <div className="About">
      <div className="card">
        <CardData 
          picture={data.picture.large}
          firstName={data.name.first}
          lastName={data.name.last}
          email={data.email}
          country={data.location.country}
        />  
        <div className="card_social">
          <a href="https://twitter.com/gndx">
            <img src={twitter} />
          </a>
          <a href="https://github.com/gndx">
            <img src={github} />
          </a>
          <a href="https://instagram.com/gndx">
            <img src={instagram} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Template;