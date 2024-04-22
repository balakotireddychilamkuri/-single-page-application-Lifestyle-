import React from 'react';

const ChildrensCollection = (props) => {
    {/*const { title, image1, image2, image3, image4, image5, image6 } = props.childrensFashion;*/}

    return (
        <div className='px-16'>
            <h1>Children's Fashions</h1>
            <div className='bannerbox'>
                <img src="https://cms.landmarkshops.in/cdn-cgi/image/w=1232,q=70,fit=cover/LS-Fest/LS-new/LS-Banner6-desktop-Kids-18Apr2024A.gif" alt="" className='w-full h-[200px] ' />
            </div>
            <div className='ChildrensImages flex md:flex md:w-screen overflow-x-auto md:overflow-x-visible'>
                {/* Add responsive classes to each image */}
                <img src="https://up.yimg.com/ib/th?id=OIP.uTthCkWr5Xb9l9TuXgnxJAHaE8&pid=Api&rs=1&c=1&qlt=95&w=154&h=102" alt="Loading" className='w-24 md:w-auto' />
                <img src="https://tse3.mm.bing.net/th?id=OIP.JEvsVvuOyz89t4p7-txTCAHaFk&pid=Api&P=0&h=180" alt="Loading" className="w-32 md:w-auto" />
                <img src="https://tse4.mm.bing.net/th?id=OIP.FtBxnKN0s08YPAgFBOvpswHaFL&pid=Api&P=0&h=180" alt="Loading" className="w-32 md:w-auto" />
                <img src="https://tse4.mm.bing.net/th?id=OIP.NVKVO35_UNH2gmqctbCrPwHaJr&pid=Api&P=0&h=180" alt="Loading" className="w-32 md:w-auto" />
                <img src="https://tse1.mm.bing.net/th?id=OIP.EXXx3MaFlELxAAxKD6DtRAHaFL&pid=Api&P=0&h=180" alt="Loading" className="w-32 md:w-auto" />
                <img src="https://tse4.mm.bing.net/th?id=OIP.qahjvLXIrltsR59lUaMfEgHaJK&pid=Api&P=0&h=180" alt="Loading" className="w-32 md:w-auto" />
                <img src="https://ae01.alicdn.com/kf/HTB1T5M2JL9TBuNjy1zbq6xpepXaH/Children-Clothes-2019-Summer-Baby-Boys-Clothes-Shirt-Shorts-Outfit-Kids-Clothes-Boys-Sport-Suit-Toddler.jpg" alt="" className="w-32 md:w-[200px]" />
            </div>
        </div>
    );
}

export default ChildrensCollection;
