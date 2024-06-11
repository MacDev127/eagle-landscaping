import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import Title from '../../Components/Title/Title';
import Footer from '../../Components/Footer/Footer';
import './Paving.css';
import { slides } from '../../Components/Images/Data';
import Images from '../../Components/Images/Images';
import Contact from '../../Components/Contact/Contact';

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

const Paving: React.FC = () => {
  // const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(-1);
  const pavingImages = slides.filter((slide) => slide.category === 'paving');

  return (
    <>
      <Navbar />
      <Hero
        image="../../public/gallery/p-hero.jpeg"
        heroTitle="Paving Services"
      />

      <div className="paving__services">
        <Title className="title">Paving Services</Title>
        <div className="paving__container">
          <div className="service">
            <p>Pergolas</p>
            <span className="paving__icon">
              <img src="../../../public/pergola-icon.png" alt="" />
            </span>
          </div>
          <div className="service">
            <p>Patios & Brick Paving</p>
            <span className="paving__icon">
              <img src="../../../public/patio-icon.png" alt="" />
            </span>
          </div>
          <div className="service">
            <p>Timber Decking</p>
            <span className="paving__icon">
              <img src="../../../public/decking-icon.png" alt="" />
            </span>
          </div>
        </div>
      </div>
      <Title className="gallery__title">Gallery</Title>
      <div className="gallery">
        {/* <button onClick={() => setOpen(true)}>open</button> */}
        <Images
          data={pavingImages}
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

export default Paving;
