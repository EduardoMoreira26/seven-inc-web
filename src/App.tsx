import React from 'react';
import 'antd/dist/antd.css';

import Header from './components/Header';
import Home from './pages/Home';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Home />
      <GlobalStyle />
    </>
  );
}

export default App;
