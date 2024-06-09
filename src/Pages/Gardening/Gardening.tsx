import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import Text from '../../Components/Text/Text';
import Title from '../../Components/Title/Title';
import Footer from '../../Components/Footer/Footer';
import './Gardening.css';

// Icons
import { GiGrass } from 'react-icons/gi';
import { MdConstruction } from 'react-icons/md';
import { GiWoodenFence } from 'react-icons/gi';
import { MdOutlineCleaningServices } from 'react-icons/md';
import { TbPaintFilled } from 'react-icons/tb';

const Gardening = () => {
  return (
    <>
      <Navbar />
      <Hero image="../../public/hero4.jpeg" heroTitle="Gardening Services" />

      <div className="services">
        <Title>Landscaping & Garden Services</Title>
        <div className="services__container">
          <div className="service">
            <p>Artificial Grass Installation</p>
            <span>
              <GiGrass />
            </span>
          </div>

          <div className="service">
            <p>Retaining Wall Construction</p>
            <span>
              <MdConstruction />
            </span>
          </div>
          <div className="service">
            <p>Fencing Solutions</p>
            <span>
              <GiWoodenFence />
            </span>
          </div>
          <div className="service">
            <p>Garden and Exterior Cleaning Services</p>
            <span>
              <MdOutlineCleaningServices />
            </span>
          </div>

          <div className="service">
            <p>Fence Painting and Treatment</p>
            <span>
              <TbPaintFilled />
            </span>
          </div>

          <div className="service">
            <p>Tree, Hedge, and Grass Cutting</p>
            <span className="mower">
              <img src="../../public/mower.png" alt="Mower Icon" />
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gardening;
