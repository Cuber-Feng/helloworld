// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

import Clock from './components/Clock';
import Card from './components/Card';
import Banner from './components/Banner';

function App() {
  const [theme, setTheme] = useState(() => {
    return window.__INITIAL_THEME__ || 'light';
  });

  // 逻辑 1：当 theme 改变时，真正去修改网页的属性
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]); // 注意：这里的依赖项是 [theme]

  // 逻辑 2：监听系统变化
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(mediaQuery.matches ? 'dark' : 'light');

    const handleChange = (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <>
      <Clock />
      <Card />
      <Banner />
    </>
  );
}

export default App;