import React, { useState, useEffect } from 'react';

const DynamicHeading = () => {
  const [text, setText] = useState('Welcome');
  const [isAnimated, setIsAnimated] = useState(false);

  const headingVariants = [
    'Hello World',
    'Welcome Aboard',
    'Creative Solutions',
    'Innovative Designs'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomHeading = headingVariants[
        Math.floor(Math.random() * headingVariants.length)
      ];
      setText(randomHeading);
      setIsAnimated(true);

      // Reset animation after a short delay
      const animationTimeout = setTimeout(() => {
        setIsAnimated(false);
      }, 500);

      return () => clearTimeout(animationTimeout);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200">
      <h1 
        className={`
          text-4xl font-bold text-center 
          transition-all duration-500 ease-in-out
          ${isAnimated ? 'transform scale-110 rotate-2 opacity-80' : ''}
        `}
      >
        {text}
      </h1>
    </div>
  );
};

export default DynamicHeading;
