import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/shabujLogo.png'
import logo1 from '../../assets/companyLogo.png'
import { Link } from "react-router-dom";
import './HeaderNav.css'

function HeaderNav() {
    return (


        <Navbar bg="light" expand="lg" fixed="top" >


            <Container className='p-0'>

                <Navbar.Brand>
                    <Link to='/'>
                    <img
                        src={logo}
                        width="300"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    /></Link>
                </Navbar.Brand>









                <Navbar.Toggle aria-controls="basic-navbar-nav" />


                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
                    <Nav className="">

                        <Link className='myNav' to='/'>Home </Link>
                        <Link className='myNav' to='/about'>About Us </Link>
                        <Link className='myNav' to='/services'>Our Services </Link>
                        <Link className='myNav' to='/events'>Events </Link>
                        <Link className='myNav' to='/agents'>Agent </Link>
                        <Link className='myNav' to='/registration'>Registration </Link>
                        <Link className='myNav' to='/Universities'>Universities </Link>
                        <Link className='myNav' to='/contact'>Contact Us </Link>
                        <Link className='myNav' to='/blogs'>Blog</Link>





                            {/* <NavDropdown className='myNav myDropdown' title="Blog" id="basic-nav-dropdown">
                                <NavDropdown.Item  href="#action/3.1">Blog 1</NavDropdown.Item>
                                <NavDropdown.Item  href="#action/3.2">Blog 2</NavDropdown.Item>
                            </NavDropdown> */}




{/* 
                        <NavDropdown title="Blog" id="basic-nav-dropdown">
                            <NavDropdown.Item className='myNav' href="#action/3.1">Blog 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Blog 2
                            </NavDropdown.Item>

                        </NavDropdown> */}




                    </Nav>
                </Navbar.Collapse>


            </Container>
        </Navbar>

    );
}

export default HeaderNav;


                        // width="345"
                        // height="50"