import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';

const CursorShadow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [shadowPosition, setShadowPosition] = useState({ x: 0, y: 0 });
  const [shadowSize, setShadowSize] = useState(30);
  const theme = useTheme(); 

  // Log the current theme mode
//   useEffect(() => {
//     console.log("Current Theme Mode:", theme.palette.mode);
//   }, [theme]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const followCursor = () => {
      setShadowPosition((prev) => {
        const diffX = position.x - prev.x;
        const diffY = position.y - prev.y;

        return {
          x: prev.x + diffX * 0.2, 
          y: prev.y + diffY * 0.2,
        };
      });
    };

    const interval = setInterval(followCursor, 10);

    return () => clearInterval(interval);
  }, [position]);

  useEffect(() => {
    const handleMouseEnter = () => {
      setShadowSize(50); 
    };

    const handleMouseLeave = () => {
      setShadowSize(10); 
    };

    const interactiveElements = document.querySelectorAll('button, a, input, [role="button"]');
    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: shadowPosition.y - shadowSize / 2, 
        left: shadowPosition.x - shadowSize / 2,
        width: `${shadowSize}px`,
        height: `${shadowSize}px`,
        borderRadius: '50%',
        backgroundColor:
          theme.palette.mode === 'light'
            ? 'rgba(0, 0, 0, 0.2)' 
            : 'rgba(255, 255, 255, 0.2)',
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'background-color 0.1s, width 0.1s, height 0.1s',
        
      }}
    />
  );
};

export default CursorShadow;
