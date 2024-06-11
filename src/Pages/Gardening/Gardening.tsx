import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import Title from '../../Components/Title/Title';
import Footer from '../../Components/Footer/Footer';
import './Gardening.css';
import { slides } from '../../Components/Images/Data';
import Images from '../../Components/Images/Images';
import Contact from '../../Components/Contact/Contact';

// Icons
import { GiGrass } from 'react-icons/gi';
import { GiWoodenFence } from 'react-icons/gi';
import { TbPaintFilled } from 'react-icons/tb';
import { MdOutlineGrass } from 'react-icons/md';

//Lightbox
import Lightbox from 'yet-another-react-lightbox';
import {
  Captions,
  Fullscreen,
  Thumbnails,
} from 'yet-another-react-lightbox/plugins';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const Gardening: React.FC = () => {
  // const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(-1);
  const gardeningImages = slides.filter(
    (slide) => slide.category === 'gardening'
  );

  return (
    <>
      <Navbar />
      <Hero image="../../public/hero4.jpeg" heroTitle="Gardening Services" />

      <div className="services">
        <Title className="title">Landscaping & Garden Services</Title>
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
      <Title className="gallery__title">Gallery</Title>
      <div className="gallery">
        {/* <button onClick={() => setOpen(true)}>open</button> */}
        <Images
          data={gardeningImages}
          onClick={(currentIndex) => setIndex(currentIndex)}
        />
        <Lightbox
          index={index}
          open={index >= 0}
          slides={slides}
          close={() => setIndex(-1)}
          plugins={[Captions, Fullscreen, Thumbnails]}
          captions={{
            showToggle: true,
            descriptionTextAlign: 'center',
          }}
        />
      </div>

      <div className="garden-contact__container">
        <Contact />
      </div>

      <Footer />
    </>
  );
};

export default Gardening;
