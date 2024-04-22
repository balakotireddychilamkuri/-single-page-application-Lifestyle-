import React from 'react';

const ShoesBages = (props) => {
    {/*const { title, image1, image2, image3, image4, image5, image6 } = props.Shoes;*/}

    return (
        <div className='px-16'>
            <h1>Shoes&Bag's Fashions</h1>
            <div className='bannerbox'>
                <img src="https://cms.landmarkshops.in/cdn-cgi/image/w=1232,q=70,fit=cover/LS-Fest/LS-new/HP_LS_S&B_Desktop-1-19Apr2024.gif" alt="" className='w-full h-[250px] ' />
            </div>
            <div className='Shoes&BagsImages flex md:flex md:w-screen overflow-x-auto md:overflow-x-visible md:h-[200px]'>
                {/* Add responsive classes to each image */}
                <img src="https://tse3.mm.bing.net/th?id=OIP.j2hlWAMsFdeUJ2405uoVPQHaE8&pid=Api&P=0&h=180" alt="Loading" className='w-24 md:w-auto ' />
                <img src="https://thumbs.dreamstime.com/b/boy-school-bag-shoes-eps-student-sneakers-go-to-vector-funny-illustration-150664270.jpg" alt="Loading" className="w-32 md:w-auto" />
                <img src="https://meenymineymo.com/v4/wp-content/uploads/2018/10/DSC08078.jpg" alt="Loading" className="w-32 md:w-auto" />
                <img src="https://ebpbuy.com/wp-content/uploads/2020/09/18417-886d9e-640x640.jpeg" alt="Loading" className="w-32 md:w-auto" />
                <img src="https://images-na.ssl-images-amazon.com/images/I/6172KCWgXRL._AC_SL1020_.jpg" alt="Loading" className="w-32 md:w-auto" />
                <img src="https://i.pinimg.com/originals/91/4b/70/914b70a1569d660231e1a69105f64716.jpg" alt="Loading" className="w-32 md:w-auto" />
                
            </div>
        </div>
    );
}

export default ShoesBages;
