import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Context/useAuth';
import './Topnav.css'

const TopNav = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            variant="dark"
            sticky="top"
            className="bg-dark">

            <Container>
                <Navbar.Brand
                    as={Link} to="/"
                    className="ml-md-5 navs-brand "
                    style={{ color: "#9a8746" }}>
                    Tourist <strong>Plaza</strong>
                </Navbar.Brand>


                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="justify-content-end pr-5">
                    <Nav className="navs" navbarScroll>
                        {/* <Nav.Link as={Link} to="/" className="mr-md-5" style={{ color: "#9a8746" }} active>Home</Nav.Link> */}
                        <Nav.Link
                            as={Link}
                            to="/services"
                            className="mr-md-5" style={{ color: "#9a8746" }} active>
                            Services
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/blogs"
                            className="mr-md-5" style={{ color: "#9a8746" }} active>
                            Blog
                        </Nav.Link>

                        {!user.displayName ? < Nav.Link
                            as={Link}
                            to="/login"
                            style={{ color: "#9a8746" }}
                            className="mr-md-5" active>
                            Login
                        </Nav.Link>

                            :

                            <>
                                <Nav.Link
                                    as={Link}
                                    to="/myorder"
                                    style={{ color: "#9a8746" }}
                                    className="mr-md-5" active>
                                    Myorder

                                </Nav.Link>
                                <Nav.Link
                                    as={Link}
                                    to="/Allorder"
                                    style={{ color: "#9a8746" }}
                                    className="mr-md-5" active>
                                    Manage Order
                                </Nav.Link>
                                <Nav.Link
                                    as={Link}
                                    to="/addservice"
                                    style={{ color: "#9a8746" }}
                                    className="mr-md-5" active>
                                    Add Service
                                </Nav.Link>
                                <Nav.Link
                                    as={Link}
                                    to=""
                                    className="mr-md-5"
                                    style={{ color: "#9a8746" }}
                                    onClick={logOut} active>
                                    Logout
                                    <small>({user.displayName})</small>
                                </Nav.Link>

                            </>
                        }




                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default TopNav;