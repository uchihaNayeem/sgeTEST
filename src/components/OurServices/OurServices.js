import React from 'react';
import './OurServices.css'


import { FaBuilding } from 'react-icons/fa';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa';
import { MdCountertops } from 'react-icons/md';
import { FaUniversity } from 'react-icons/fa';
import { BiBook } from 'react-icons/bi';
import { FaUserGraduate } from 'react-icons/fa';
import { Container } from 'react-bootstrap';

import CountUp from 'react-countup';
import Service from '../Service/Service';
import HeaderNav from '../HeaderNav/HeaderNav';
import Footer from '../Footer/Footer';
import bg from '../../assets/blogBg.jpg'

const OurServices = () => {
    return (
        <Container fluid >
            <HeaderNav></HeaderNav>
            <div class="container-fluid mt-5 bg-light bg-gradient shadow ">

                <div class="p-4 p-md-5 mb-4 text-white rounded featured" style={{
                    backgroundImage: `url(${bg})`,
                }}>
                    <div class="col-md-12 px-0">
                        <h1 class="display-4 font-italic text-center">Our <span class="text-success"></span> Services</h1>
                    </div>
                </div>
            </div>

            <Service></Service>
            <Footer></Footer>
        </Container>
    );
};

export default OurServices;