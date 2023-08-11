import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import UserContext from '../contexts/UserContext';

const Header = () => {
  const state = useContext(ThemeContext);
  const user = useContext(UserContext);
  return (
    <div className='header'
     style={{background:state.isDark ? 'black' : 'lightgray',
    color:state.isDark ? 'white' : 'black'}}>
      <h1>Welcome {user}</h1>
    </div>
  );
};

export default Header;