// Title.tsx
import React from 'react';

type TitleProps = {
  text: string;
  coverText?: string;
  className?: string;
};

const Title = ({ text, coverText, className }: TitleProps) => (
  <div className={className}>
    <span className="text-gray-500 text-sm uppercase tracking-wider">{text}</span>
    {coverText && (
      <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
        {coverText}
      </h2>
    )}
  </div>
);

export default Title;
