import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../Components/Header';
import Collections from '../Components/Collections';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';
import { Gents, Ladies, Childrens ,ShoesBags} from '../data';
import WomanCollection from '../Components/WomanCollection';
import MailNavbar from '../Components/MailNavbar';
import ChildrensCollection from '../Components/ChildrensCollection';
import ShoesBages from '../Components/heardercomponents/ShoesBages';
import GenZ from '../Components/heardercomponents/GenZ';
import HomeLiving from '../Components/heardercomponents/HomeLiving';
import More from '../Components/More';
import SignUp from '../Components/heardercomponents/SignUp';


const MainPage = () => {
    const [gentsFashion, setGentsFashion] = useState(Gents);
    const [ladiesFashion, setLadiesFashion] = useState(Ladies);
    const [childrensFashion, setChildrensFashion] = useState(Childrens);
    const [Shoes,setShoes]=useState(ShoesBages)


    return (
        <Router>
            <div>
                <MailNavbar />
                <Header />
                <Routes>
                    <Route path="/" element={<Banner />} />
                    <Route path="/Woman" element={<WomanCollection ladiesFashion={ladiesFashion} />} />
                    <Route path="/Men" element={<Collections gentsFashion={gentsFashion} />} />
                    <Route path="/Children" element={<ChildrensCollection childrensFashion={childrensFashion} />} />
                    <Route path="/Shoes-Bags" element={<ShoesBages Shoes={Shoes} />} />
                    <Route path="/gen-Z" Component={GenZ} />
                    <Route path="/home-living" Component={HomeLiving} ></Route>
                    <Route path="/more" Component={More} ></Route>
                    <Route path="/SignUP/Sign" Component={SignUp} ></Route>
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default MainPage;
