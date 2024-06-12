import React from 'react';
import './Hero.css';
import 'animate.css';
import { TiMessages } from 'react-icons/ti';
import { Link } from 'react-router-dom';

interface HeroProps {
  image?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  showButton?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  image,
  heroTitle,
  heroSubtitle,
  showButton,
}) => {
  return (
    <div className="hero__image-container">
      <img className="hero__img" src={image} />
      <div className="hero__overlay"></div>
      <div className="hero__content">
        <h1 className="hero__title animate__animated animate__fadeInDown">
          {heroTitle}
        </h1>

        <p className="hero__text animate__animated animate__fadeInUp ">
          {heroSubtitle}
        </p>
        {showButton && (
          <Link to="/contact">
            <button className="hero__btn  ">
              Get a free quote today{' '}
              <TiMessages style={{ marginLeft: '10px' }} />
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;
