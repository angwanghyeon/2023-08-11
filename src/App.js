import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Message from './components/Message';
import Title from './components/Title';
import LangContext from './contexts/LangContext';
import ColorBox from './components/ColorBox';
import { ColorProvider } from './contexts/Color';
import SelectColors from './components/SelectColors';
import Page from './components/Page';
import ThemeContext from './contexts/ThemeContext';
import UserContext from './contexts/UserContext';


function App() {
  const [lang, setLang] = useState('en');
  const onToggleLang = () => {
    const changeLang = lang === 'en' ? 'kr' : 'en'
    setLang(changeLang);
  }

  const [isDark, setIsDark] = useState(false);
  const value = {isDark, setIsDark};

  return (
    <div>
      <LangContext.Provider value={lang}>
        <Button onToggleLang={onToggleLang}></Button>
        <Title></Title>
        <Message></Message>
      </LangContext.Provider>
      <hr />
      <ColorProvider>
        <SelectColors></SelectColors>
        <ColorBox></ColorBox>
      </ColorProvider>
      <hr />
      <UserContext.Provider value={'사용자'}>
        <ThemeContext.Provider value={value}>
          <Page></Page>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
