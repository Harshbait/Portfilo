import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Git from './components/Git'

import Header from './components/Header';
import Page1 from './pages/Page1';
import Page3 from './pages/Page3';
import Page4 from './pages/page4';
import Page5 from './pages/page5';
import Page6 from './pages/Page6';

const App = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: false, // Use native touch momentum on mobile to eliminate input lag and stuttering
      lerp: 0.1,           // Desktop smoothness
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      <Header />
      <Git />
      <Page1 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
    </div>
  );
};

export default App;
