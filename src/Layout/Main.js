import React from 'react';
import CorporateSR from '../components/CorporateSR/CorporateSR';
import CounterSec from '../components/CounterSec/CounterSec';
import EventCarousal from '../components/EventCarousal/EventCarousal';
import FacebookReview from '../components/FacebookReview/FacebookReview';
import Footer from '../components/Footer/Footer';
import Gallery from '../components/Gallery/Gallery';
import HeaderNav from '../components/HeaderNav/HeaderNav';
import OfficeLocation from '../components/OfficeLocation/OfficeLocation';
import UniLogoSlider from '../components/UniLogoSlider/UniLogoSlider';
import VideoHeader from '../components/VideoHeader/VideoHeader';



const Main = () => {
    return (
        <div>
            <HeaderNav></HeaderNav>
            
            <VideoHeader></VideoHeader>
            <EventCarousal></EventCarousal>
            <CounterSec></CounterSec>
            <Gallery></Gallery>
            <UniLogoSlider></UniLogoSlider>
            <OfficeLocation></OfficeLocation>
            <FacebookReview></FacebookReview>
            <CorporateSR></CorporateSR>
            <Footer></Footer>
        </div>
    );
};

export default Main;