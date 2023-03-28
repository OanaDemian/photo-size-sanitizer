// src/components/Canvas.js
import React from 'react';
import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
export const Canvas = ( {draw, height, width} ) => { 
  const canvas = useRef();
  useEffect(() => {                             
    const context = canvas.current.getContext('2d'); 
    draw(context);
  });
  return (
    <canvas
      ref={canvas}
      width={width}  
      height={height}
    />
  )
}

Canvas.propTypes = {
  draw: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired, 
  width: PropTypes.number.isRequired, 
};
