import React from 'react';
import LangContext from '../contexts/LangContext';

const Message = () => {

  return (
    <LangContext.Consumer>
      {(lang)=> {const message = lang === 'en' ? 
        <p>{lang} : Context proivdes a way to...</p> : 
         <p>{lang} : 컨텍스트는 .... 제공한다</p>
          return (message)
      }}
    </LangContext.Consumer>
  );
};

export default Message;