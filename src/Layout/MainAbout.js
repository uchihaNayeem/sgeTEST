import React from 'react';
import AboutUs from '../components/AboutUs/AboutUs';
import Footer from '../components/Footer/Footer';
import HeaderNav from '../components/HeaderNav/HeaderNav';

const MainAbout = () => {
    return (
        <div>
            <HeaderNav></HeaderNav>
            <div className='mt-5'>
            <h1 className='text-center pt-5 '></h1>
            </div>

<AboutUs></AboutUs>







            <Footer></Footer>
            
        </div>
    );
};

export default MainAbout;