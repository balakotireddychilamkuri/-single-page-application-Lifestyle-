import React from 'react';

const Collections = (props) => {
    const { title, image1, image2, image3, image4, image5, image6, price1, price2, price3, price4, price5, price6 } = props.gentsFashion;

    return (
        <div className='collectionSection w-full px-16'>
            <h2>{title}</h2>
            <div><img src="assets/GentsBanner.gif" alt="" className='w-full' /></div>
            <div className='menImages flex  gap-2  md:overflow-x-auto'>
                {/* Add responsive classes to each image */}
                <img src={image1} alt="Loading" className='max-w-[100px] md:max-w-none md:w-[230px]' />
                <img src={image2} alt="Loading" className='max-w-[100px] md:max-w-none md:w-[230px]' />
                <img src={image3} alt="Loading" className='max-w-[100px] md:max-w-none md:w-[230px]' />
                <img src={image4} alt="Loading" className='max-w-[100px] md:max-w-none md:w-[230px]' />
                <img src={image5} alt="Loading" className='max-w-[100px] md:max-w-none md:w-[230px]' />
                <img src={image6} alt="Loading" className='max-w-[100px] md:max-w-none md:w-[230px]' />
            </div>
        </div>
    );
};

export default Collections;
