
import React from 'react';
import { Col, Container, Row, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../images/ambition-travels-and-tour-pvt-ltd-esplanade-kolkata-travel-agents-1gappmx7ef.webp'


const Banner = () => {
    return (
        <Container>
            <Row className="align-items-center banner" style={{ height: "100vh" }}>
                <Col md={{ span: 4, offset: 1 }} className="p-md-5 order-2 order-md-1">
                    <h1>Not Sure  <br /> Where to go?</h1>
                    <p className="text-muted my-4 pr-md-5">Worlds Top & Best Resorts, Hotel available for booking here</p>
                    <Button
                        as={Link}
                        size="md"
                        style={{ background: "linear-gradient(90deg, rgba(0,14,36,1) 0%, rgba(52,87,161,0.7231267507002801) 40%, rgba(0,56,255,1) 69%)", fontWeight: "600" }}
                        className="p-3 shadow-none border-0 text-uppercase"
                        to="/appointment">
                        PreBooking
                    </Button>
                </Col>
                <Col md={6} className="order-1 order-md-2">
                    <Image src={img} fluid style={{ height: "300px", borderRadius: "10%" }} />
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;