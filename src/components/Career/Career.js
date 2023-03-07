import React from 'react';
import bg from '../../assets/blogBg.jpg'
import Footer from '../Footer/Footer';
import HeaderNav from '../HeaderNav/HeaderNav';
import career from '../../assets/aboutMe1.png'

const Career = () => {
    return (
        <div>
            <div>
                <HeaderNav></HeaderNav>
                <div class="container-fluid mt-5 bg-light bg-gradient shadow ">

                    <div class="p-4 p-md-5 mb-4 text-white rounded featured" style={{
                        backgroundImage: `url(${bg})`,
                    }}>
                        <div class="col-md-12 px-0">
                            <h1 class="display-4 font-italic text-center">Career <span class="text-success"></span></h1>
                        </div>
                    </div>
                </div>

                <h3 className='text-center'>Job Openings</h3>

                <div className='container'>
                    <h2 className="pt-5">USA</h2>
                <div class="card" style={{width: '18rem'}}>
                    <img class="card-img-top" src={career} alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title  text-center">Senior Counsellor</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Apply Now</a>
                        </div>
                </div>
                </div>
                <div className='container'>
                    <h2 className="pt-5">London</h2>
                <div class="card" style={{width: '18rem'}}>
                    <img class="card-img-top" src={career} alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title  text-center">Software Engineer L2</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Apply Now</a>
                        </div>
                </div>
                </div>
                <div className='container'>
                    <h2 className="pt-5">Bangladesh</h2>
                <div class="card" style={{width: '18rem'}}>
                    <img class="card-img-top" src={career} alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title  text-center">Manager</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Apply Now</a>
                        </div>
                </div>
                </div>
                <div className='container'>
                    <h2 className="pt-5">India</h2>
                <div class="card" style={{width: '18rem'}}>
                    <img class="card-img-top" src={career} alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title  text-center">Manager</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Apply Now</a>
                        </div>
                </div>
                </div>

                <Footer></Footer>
            </div>
        </div>
    );
};

export default Career;