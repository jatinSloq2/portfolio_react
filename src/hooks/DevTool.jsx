// src/hooks/useDisableRightClick.js
import { useEffect } from 'react';

const useDisableRightClick = () => {
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();  // Disable right-click
    };
    window.addEventListener('contextmenu', handleContextMenu);
    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);
};

export default useDisableRightClick;
