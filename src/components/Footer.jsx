import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import ColorContext from '../contexts/ColorContext';

const Footer = () => {
const {isDark, setIsDark} = useContext(ThemeContext);
const {background, color} = useContext(ColorContext);
  return (
    <div className='footer'
    style={{background:isDark ? 'black' : 'lightgray', 
    color:isDark ? 'white' : 'black'}}>
      <button className='button' 
      style={{background:background, color:color}}
      onClick={()=> setIsDark(!isDark)}>
        Dark Mode
      </button>
    </div>
  );
};

export default Footer;