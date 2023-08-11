import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import UserContext from '../contexts/UserContext';

const Content = () => {
  const state = useContext(ThemeContext);
  const user = useContext(UserContext);
  return (
    <div className='content'
    style={{background:state.isDark ? 'black' : 'lightgray', 
    color:state.isDark ? 'white' : 'black'}}>
      <p>{user}님, 오늘도 좋은 하루 보내세요~</p>
    </div>
  );
}; 

export default Content;