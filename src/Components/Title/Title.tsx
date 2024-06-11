import React from 'react';
import './Title.css';

interface TitleProps {
  children?: React.ReactNode;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default Title;
