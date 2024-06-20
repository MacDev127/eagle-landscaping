import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import Title from '../../Components/Title/Title';
import Footer from '../../Components/Footer/Footer';
import './Gardening.css';
import { slides } from '../../Components/Images/Data';
import Images from '../../Components/Images/Images';
import Text from '../../Components/Text/Text';
import Contact from '../../Components/Contact/Contact';

// Icons
import { GiGrass } from 'react-icons/gi';
import { GiWoodenFence } from 'react-icons/gi';
import { TbPaintFilled } from 'react-icons/tb';
import { MdOutlineGrass } from 'react-icons/md';

//Lightbox
import Lightbox from 'yet-another-react-lightbox';
import { Fullscreen, Thumbnails } from 'yet-another-react-lightbox/plugins';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const Gardening: React.FC = () => {
  const [index, setIndex] = useState<number>(-1);
  const gardeningImages = slides.filter(
    (slide) => slide.category === 'gardening'
  );

  return (
    <>
      <Navbar />
      <Hero image="/gallery/hero4.jpeg" heroTitle="Landscaping & Gardening" />

      <div className="services">
        <Title className="gardening_title">
          Landscaping & Gardening Services
        </Title>
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
              <img src="/gallery/planting.jpeg" alt="" />
            </span>
          </div>
          <div className="service">
            <p>Structural Landscaping</p>
            <span className="service__icon">
              <img src="/gallery/wall.png" alt="" />
            </span>
          </div>
          <div className="service">
            <p>Drainage Services</p>
            <span className="service__icon">
              <img src="/gallery/drainage.png" alt="" />
            </span>
          </div>
          <div className="service">
            <p>Garden and Exterior Cleaning Services</p>
            <span className="service__icon-power">
              <img src="/gallery/power-wash.png" alt="" />
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
              <img src="/gallery/mower.png" alt="Mower Icon" />
            </span>
          </div>
        </div>
        <Text>
          Eagle Landscaping offers a full range of gardening services to enhance
          and maintain your outdoor space. Our expertise includes artificial
          grass installation, comprehensive lawn care such as cleanups, new lawn
          sowing, turf laying, and drainage, as well as planting services
          including shrub beds, trees, and hedges. We provide meticulous tree,
          hedge, and grass cutting, along with general garden maintenance and
          site clearance. Our cleaning services feature power washing for
          driveways, patios, and walls. Additionally, we offer fencing
          solutions, trellis erection, and fence painting. For complex projects,
          we specialize in retaining wall construction, terracing and leveling,
          and drainage issue resolution.
        </Text>
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
            slides={gardeningImages} // Change this to the filtered list
            close={() => setIndex(-1)}
            plugins={[Fullscreen, Thumbnails]}
            captions={{
              showToggle: true,
              descriptionTextAlign: 'center',
            }}
          />
        </div>
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Gardening;
