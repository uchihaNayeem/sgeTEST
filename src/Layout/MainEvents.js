import React from 'react';
import EventsSg from '../components/EventsSg/EventsSg';
import Footer from '../components/Footer/Footer';
import HeaderNav from '../components/HeaderNav/HeaderNav';
import ReactCarousel from '../components/ReactCarousel/ReactCarousel';

const MainEvents = () => {
    return (
        <div>
            <HeaderNav></HeaderNav>
            <EventsSg></EventsSg>
            <Footer></Footer>
        </div>
    );
};

export default MainEvents;