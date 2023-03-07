import React from 'react';
import { Card, CardGroup, Nav } from 'react-bootstrap';

const Service = () => {
    return (
        <div>

            <div className="container">
                <p>Shabuj Global Education aka SG Education headquartered in London, England is
                    one of the <b>BRITISH COUNCIL</b> accredited education service providers in the
                    United Kingdom. The company has been working since 2010 with great pride and
                    service excellence. At <b>Shabuj Global</b> we provide services to the local and
                    international students for the UK University admission. Our dedicated team with
                    years of experience help our clients with highest professional standards. We are
                    partnered with 150+ universities in the UK (including the <b>Russell Group</b>
                    universities). We provide the services to our potential students free of cost and
                    also offer our private scholarship opportunities up to <b>100% fee waiver</b> apart from
                    the university scholarships.
                    Every education consultancy runs on specific motivation and has target to
                    achieve and ours say <b>“STUDENTS ARE OUR PREFERENCE”</b> and we shall
                    stand by it no matter what. We maintain a track record of 100% student
                    satisfaction from onboarding for application to the VISA approval and to have
                    landed here in the UK, we take care of all it hassle free.</p>
            </div>



            <CardGroup className='container' >
                <Card className='' >
                    <Card.Body className='justify-content-end'  >
                        <iframe className='container h-100' src="https://www.youtube.com/embed/TM7M0LIu1to" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body className='justify-content-center '>
                        <h3 className='mt-3'>Our Goal & Mission:</h3>
                        <p>At Shabuj Global, we build bridges between our students and the many Institutes
                            of higher education in the UK. We take time to get to know our student
                            customers, and it is this personal touch that helps us to find the correct course
                            for them. At Shabuj Global we hope to help students make the right choices, and
                            then we help them bring those choices to realisation. The end goal is a
                            satisfactory and complete education and a student ready to face the world with
                            confidence.</p>
                    </Card.Body>
                </Card>
            </CardGroup>
            {/* test */}


            <div className="container">
                <h3 className='mt-3'>Our services include:</h3>
                <div>
                    <p>Free Career Counselling </p>
                    <p>Free File Assessments</p>
                    <p>Admission Processing (sorting out the best location, universities, courses,
                        guidance in finance management, scholarships, etc.)</p>
                    <p>Interview Preparation</p>
                    <p>Visa Application Guidelines</p>
                    <p>Accommodation Help</p>
                    <p>Scholarships For Gifted Students</p>
                </div>



                <h3 className='mt-3'>Core Competencies:</h3>
                <p>Shabuj Global Education has already helped over 5,000 students find admission
                    to the right course for them. Sometimes, this has meant transferring from one
                    university to another, and we helped them with that as well! Our dedicated
                    administrative team works closely not only with our customers but also with the
                    universities and colleges that provide the all-important courses.</p>

                <h3 className='mt-3'>Certificates and Awards:</h3>
                <p>Shabuj Global International holds a student consultancy certification from
                    the <b>British Council</b>, a guarantee of quality that is recognised worldwide. In
                    2012, we were named the <b>“Top Overseas Student Consultant”</b> by universities,
                    thanks to the high number of students we trusted in us all through the
                    recruitment process.</p>


                <h3 className='mt-3'>What are you waiting for?</h3>
                <div>
                    <p>IELTS Waiver? </p>
                    <p>Study Gap Acceptance?</p>
                    <p>Affordable Tuition Fees?</p>
                    <p>Double Scholarships?</p>
                    <h4>We have got you all covered!</h4>
                </div>


            </div>







































        </div>
    );
};

export default Service;