import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import Title from '../../Components/Title/Title';
import Footer from '../../Components/Footer/Footer';
import './Gardening.css';

// Icons
import { GiGrass } from 'react-icons/gi';
import { GiWoodenFence } from 'react-icons/gi';
import { TbPaintFilled } from 'react-icons/tb';
import { MdOutlineGrass } from 'react-icons/md';
import Lightbox from 'yet-another-react-lightbox';

const Gardening: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
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
            <p>Lawn Services</p>
            <span>
              <MdOutlineGrass />
            </span>
          </div>

          <div className="service">
            <p>Planting Services</p>
            <span className="service__icon">
              <img src="../../../public/planting.png" alt="" />
            </span>
          </div>
          <div className="service">
            <p>Structural Landscaping</p>
            <span className="service__icon">
              <img src="../../../public/wall.png" alt="" />
            </span>
          </div>
          <div className="service">
            <p>Drainage Services</p>
            <span className="service__icon">
              <img src="../../../public/drainage.png" alt="" />
            </span>
          </div>
          <div className="service">
            <p>Garden and Exterior Cleaning Services</p>
            <span className="service__icon-power">
              <img src="../../../public/power-wash.png" alt="" />
            </span>
          </div>
          <div className="service">
            <p>Fencing Solutions</p>
            <span>
              <GiWoodenFence />
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
            <span className="service__icon">
              <img src="../../public/mower.png" alt="Mower Icon" />
            </span>
          </div>
        </div>
      </div>
      <div className="gallery">
        <Lightbox open={open} />
        <button onClick={() => setOpen(true)}></button>
      </div>
      <Footer />
    </>
  );
};

export default Gardening;
