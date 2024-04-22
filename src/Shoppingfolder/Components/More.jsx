import React, { useState } from 'react';

const MoreOptions = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleMouseEnter = () => {
    setShowOptions(true);
  };

  const handleMouseLeave = () => {
    setShowOptions(false);
  };

  const handleClick = () => {
    toggleOptions();
  };

  return (
    <div>
      <div className='felx justify-end' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
        More
      </div>
      {showOptions && (
        <ul>
          <li>Download App</li>
          <li>Online Gift Card</li>
          <li>Online Offers</li>
          <li>In-Store Offers</li>
          <li>Store Locator</li>
          <li>Store Details</li>
          <li>LifeStyle EDGE</li>
          <li>Blog</li>
          <li>SBI Offers</li>
        </ul>
      )}
    </div>
  );
};

export default MoreOptions;
