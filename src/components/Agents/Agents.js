import React from 'react';
import bg from '../../assets/blogBg.jpg'
import Footer from '../Footer/Footer';
import HeaderNav from '../HeaderNav/HeaderNav';

const Agents = () => {
    return (
        <div>
            <HeaderNav></HeaderNav>
            <div class="container-fluid mt-5 bg-light bg-gradient shadow ">

                <div class="p-4 p-md-5 mb-4 text-white rounded featured" style={{
                    backgroundImage: `url(${bg})`,
                }}>
                    <div class="col-md-12 px-0">
                        <h1 class="display-4 font-italic text-center">Agents <span class="text-success"></span></h1>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Agents;