import React from 'react';

const WomanCollection = (props) => {
    const { title, image1, image2, image3, image4, image5, image6 } = props.ladiesFashion;

    return (
        <div className='px-16'>
            <h1>{title}</h1>
            <div className='bannerbox'>
                <img src="assets/LadiesBanner.gif" alt="" className='w-full' />
            </div>
            <div className='womenImages gap-2 flex overflow-x-auto'>

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
}

export default WomanCollection;
