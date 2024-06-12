import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import Title from '../../Components/Title/Title';
import Footer from '../../Components/Footer/Footer';
import Text from '../../Components/Text/Text';
import './Paving.css';
import { slides } from '../../Components/Images/Data';
import Images from '../../Components/Images/Images';
import Contact from '../../Components/Contact/Contact';

//Lightbox
import Lightbox from 'yet-another-react-lightbox';
import { Fullscreen, Thumbnails } from 'yet-another-react-lightbox/plugins';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const Paving: React.FC = () => {
  const [index, setIndex] = useState<number>(-1);
  const pavingImages = slides.filter((slide) => slide.category === 'paving');

  return (
    <>
      <Navbar />
      <Hero
        image="../../public/gallery/p-hero.jpeg"
        heroTitle="Paving & Decking"
      />

      <div className="paving__services">
        <Title className="title">Paving & Decking Services</Title>
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
              <img src="../../../public/floor-icon.png" alt="" />
            </span>
          </div>
          <div className="service">
            <p>Timber Decking</p>
            <span className="paving__icon">
              <img src="../../../public/decking-icon.png" alt="" />
            </span>
          </div>
        </div>
        <Text>
          At Eagle Landscaping, we specialize in creating stunning outdoor
          spaces with our comprehensive paving and decking services. Our
          offerings include the expert installation of patios, brick paving and
          the construction of durable timber decking. We also provide
          professional paving for walkways, patios, and driveways, along with
          high-quality resin driveway installations. Additionally, our team
          excels in building custom decking and pergolas to enhance your outdoor
          living area
        </Text>
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
          slides={pavingImages} // Ensure this uses the filtered pavingImages
          close={() => setIndex(-1)}
          plugins={[Fullscreen, Thumbnails]}
          captions={{
            showToggle: true,
            descriptionTextAlign: 'center',
          }}
        />
      </div>

      <Contact />

      <Footer />
    </>
  );
};

export default Paving;
