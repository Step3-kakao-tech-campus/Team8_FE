import { IconButton } from '@material-tailwind/react';
import React, { useState, useEffect } from 'react';
import { MdArrowUpward } from 'react-icons/md';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleShowButton);
    return () => {
      window.removeEventListener('scroll', handleShowButton);
    };
  }, []);

  return (
    <div className='fixed bottom-5 right-5'>
      {isVisible && (
        <IconButton
          className=' bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow-md'
          onClick={scrollToTop}
        >
          <MdArrowUpward size={20} />
        </IconButton>
      )}
    </div>
  );
};

export default ScrollToTopButton;
