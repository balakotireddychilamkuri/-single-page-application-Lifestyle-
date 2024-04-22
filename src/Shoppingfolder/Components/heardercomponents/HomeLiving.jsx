import React from 'react'

const HomeLiving = () => {
  return (
    <div className='px-16'>
      <h1>Home-Living</h1>
      <div className='bannerbox'>
        <img src="https://cms.landmarkshops.in/cdn-cgi/image/w=1232,q=70,fit=cover/LS-Fest/LS-new/HP_LS_HomeLiving_Desktop-1-15Apr24.jpg" alt="" className='w-full h-[250px] ' />
      </div>
      <div> <h1>Deal Corner</h1></div>
      <div className='GenZImages gap-2 flex md:flex md:w-full overflow-x-auto md:h-[250px]'>
       
        {/* Add responsive classes to each image */}
        <img src="https://cms.landmarkshops.in/cdn-cgi/image/w=500,q=70,fit=cover/LS-Fest/LS-new/desktop-dept-14modularblock-oneBythree-A-Homeliving-22Mar24.jpg" alt="Loading" className='w-24 md:w-auto ' />
        <img src="https://cms.landmarkshops.in/cdn-cgi/image/w=500,q=70,fit=cover/LS-Fest/LS-new/desktop-dept-14modularblock-oneBythree-B-Homeliving-22Mar24.jpg" alt="Loading" className="w-32 md:w-auto" />
        <img src="https://cms.landmarkshops.in/cdn-cgi/image/w=500,q=70,fit=cover/LS-Fest/LS-new/desktop-dept-14modularblock-oneBythree-C-Homeliving-22Mar24.jpg" alt="Loading" className="w-32 md:w-auto" />
        <img src="https://lmsin.net/cdn-cgi/image/h=750,w=750,q=85,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/homecentre/1000011304258-1000011304257_02-2100.jpg" alt="Loading" className="w-32 md:w-auto" />
        <img src="https://lmsin.net/cdn-cgi/image/h=750,w=750,q=85,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/homecentre/1000012514587-1000012514586_02-2100.jpg" alt=""   className="w-32 md:w-auto"/>
        <img src="https://lmsin.net/cdn-cgi/image/h=750,w=750,q=85,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/homecentre/1000010781583-1000010781582_01-2100.jpg" alt=""  className="w-32 md:w-auto" />
        <img src="https://lmsin.net/cdn-cgi/image/h=1420,w=1420,q=85,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/homecentre/1000012528953-1000012528952_01-2100.jpg" alt=""   className="w-32 md:w-auto"/>
        
      </div>
    </div>
  )
}

export default HomeLiving
