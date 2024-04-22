import React from 'react';
import { FaCar, FaHome } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const MainNavbar = () => {
  return (
    <div className='border-2 mt-1 pt-6 bg-black flex justify-between px-16'>
      <div className='Left text-white gap-10 mb-6 ml flex'>
        <div className='flex items-center'>
          <FaCar />
          <h1 className='ml-2'>Free Shipping</h1>
        </div>
        <div className='flex items-center'>
          <AiFillHome />
          <h1 className='ml-2'>Click & Collect</h1>
        </div>
        <div className='flex items-center'>
          <FaHome />
          <h1 className='ml-2'>Return To Store</h1>
        </div>
      </div>
      <div className='Center'></div>
      <div className='Right text-white flex'>
        <Link to="/download-apps" className='mr-4'>Dowload Our Apps</Link>
        <Link to="/store-locator" className='mr-4'>Store Locator</Link>
        <Link to="/help">Help</Link>
      </div>
    </div>
  );
};

export default MainNavbar;
