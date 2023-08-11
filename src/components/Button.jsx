import React, { useContext } from 'react';
import LangContext from '../contexts/LangContext';

const Button = ({onToggleLang}) => {
  const lang = useContext(LangContext);
  return (
    <div>
      <button onClick={onToggleLang}>{lang}</button>
    </div>
  );
};

export default Button;