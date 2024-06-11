import React from 'react';
import './Images.css';
import { MdOutlineLocalSee } from 'react-icons/md';

interface ImageProps {
  data: {
    src: string;
    title: string;
    description: string;
  }[];
  onClick: (index: number) => void;
}

const Images: React.FC<ImageProps> = ({ data, onClick }) => {
  const handleClickImage = (index: number) => {
    onClick(index);
  };
  return (
    <div className="images-container">
      {data.map((slide, index) => (
        <>
          <div
            onClick={() => handleClickImage(index)}
            key={index}
            className="image"
          >
            <img src={slide.src} alt="" />
            <div className="icon__overlay">
              <MdOutlineLocalSee />
            </div>
            <div className="overlay"></div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Images;
