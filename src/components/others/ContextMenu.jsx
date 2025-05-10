// src/components/ContextMenu.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ContextMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  // Show menu at mouse position
  const showMenu = (x, y) => {
    setMenuPosition({ x, y });
    setMenuVisible(true);
  };

  // Hide menu
  const hideMenu = () => {
    setMenuVisible(false);
  };

  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
      showMenu(event.clientX, event.clientY);
    };

    const handleDoubleClick = (event) => {
      showMenu(event.clientX, event.clientY);
    };

    const handleClick = () => {
      hideMenu();
    };

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('dblclick', handleDoubleClick);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('dblclick', handleDoubleClick);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      {menuVisible && (
        <div
          className="fixed bg-gray-800 text-white p-4 rounded-lg shadow-lg z-50"
          style={{ top: menuPosition.y, left: menuPosition.x }}
        >
          <h2 className="text-xl text-center mb-4">Menu</h2>
          <Link to="/" className="block text-lg p-2 border-b border-gray-700 hover:bg-gray-700">Home</Link>
          <Link to="/about" className="block text-lg p-2 border-b border-gray-700 hover:bg-gray-700">About</Link>
          <Link to="/contact" className="block text-lg p-2 border-b border-gray-700 hover:bg-gray-700">Contact</Link>
          <Link to="/services" className="block text-lg p-2 border-b border-gray-700 hover:bg-gray-700">Services</Link>
          <button onClick={hideMenu} className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg">
            Close Menu
          </button>
        </div>
      )}
    </>
  );
};

export default ContextMenu;
