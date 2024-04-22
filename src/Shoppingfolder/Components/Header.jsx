import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  // Define the koti function within the component
  const koti = () => {
    alert('Hello');
  };

  return (
    <div className='headerSection flex justify-between  text-black px-10'>
      <div className='Center mt-6'>
        <ul className='flex space-x-9'>
          <li className='ml-5'><Link to="/">LifeStyle</Link></li>
          {/* Attach the koti function to the onClick event */}
          <li onClick={koti}><Link to="/woman">Woman</Link></li>
          <li><Link to="/men">Men</Link></li>
          <li><Link to="/children">Children</Link></li>
          <li><Link to="/shoes-bags">Shoes& Bags</Link></li>
          <li><Link to="/gen-z">Gen Z</Link></li>
          <li><Link to="/home-living">Home & Living</Link></li>
          <div className="relative flex items-center border border-gray-300 rounded-md p-2 md:w-72 sm:pl-2">
            <span className="absolute left-2 text-blue-500">&#128269;</span>
            <input type="text" className="flex-1 border-none outline-none pl-10" placeholder="Search..." />
            <button type="submit" className="bg-blue-500 text-white rounded-md px-1 cursor-pointer">Search</button>
          </div>
          <li><Link to="/more"> More</Link></li>
        </ul>
      </div>
      <div className='right mt-6 flex space-x-6 mr-[40px]'>
      <div><Link to="/SignUP/Sign">SignUP/Sign In</Link></div>
               <div><FaHeart /></div>
        <div><FaShoppingBag /></div>
      </div>
    </div>
  );
};

export default Header;
