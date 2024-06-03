import React from 'react';
import './Title.css';

interface TitleProps {
  children?: React.ReactNode;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return <div className="title">{children}</div>;
};

export default Title;
