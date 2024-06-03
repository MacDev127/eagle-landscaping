import React from 'react';
import './Hero.css';
import 'animate.css';
import { TiMessages } from 'react-icons/ti';

const Hero: React.FC = () => {
  return (
    <div className="hero__image-container">
      <img className="hero__img" src="/hero.jpeg" />
      <div className="hero__overlay"></div>
      <div className="hero__content">
        <h1 className="hero__title animate__animated animate__fadeInDown">
          EAGLE LANDSCAPING
        </h1>

        <p className="hero__text animate__animated animate__fadeInUp ">
          Paving & Gardening Specialists
        </p>
        <button className="hero__btn ">
          Get a free quote today <TiMessages style={{ marginLeft: '10px' }} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
