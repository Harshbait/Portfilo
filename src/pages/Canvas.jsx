import React, { useEffect, useRef, useState } from 'react';
import canvasImages from '../earthImg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Canvas = () => {
  const [index, setIndex] = useState({ value: 0 });
  const canvasRef = useRef(null);

  useGSAP(() => {
    gsap.to(index, {
      value: 249,
      duration: 8,
      ease: 'linear',
      repeat: -1,
      onUpdate: () => {
        setIndex({ value: Math.floor(index.value) });
      },
    });
  });

  const imagesCacheRef = useRef([]);

  // Pre-instantiate Image objects once to avoid 31 GC allocations/sec
  useEffect(() => {
    const cache = [];
    canvasImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      cache.push(img);
    });
    imagesCacheRef.current = cache;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const img = imagesCacheRef.current[index.value] || new Image();
    if (!img.src) {
      img.src = canvasImages[index.value];
    }

    const render = () => {
      if (img.width && (canvas.width !== img.width || canvas.height !== img.height)) {
        canvas.width = img.width;
        canvas.height = img.height;
      }
      ctx.drawImage(img, 0, 0);
    };

    if (img.complete && img.naturalWidth !== 0) {
      render();
    } else {
      img.onload = render;
    }
  }, [index]);

  return (
    <canvas
      ref={canvasRef}
      className="h-[16rem] sm:h-[22rem] md:h-[28rem] lg:h-[25rem] xl:h-[30rem] 2xl:h-[35rem] absolute mt-[50vh] sm:mt-[42vh] md:mt-[30vh] lg:mt-5 lg:top-5 2xl:top-[1vh] left-1/2 -translate-x-1/2 md:left-[15vw] md:translate-x-0 lg:left-[45vw] xl:left-[45vw] 2xl:left-[45vw] z-30 pointer-events-none"
      id="canvas"
    ></canvas>
  );
};

export default Canvas;
