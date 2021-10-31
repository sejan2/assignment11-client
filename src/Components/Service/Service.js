
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Service = (props) => {
    const { img, place, distance, price, _id } = props.service;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <div className="d-flex justify-content-between">
                        <div>
                            <Card.Title>{place}</Card.Title>

                            <Card.Title>{distance}</Card.Title>
                        </div>
                        <div>
                            <Card.Text>
                                ${price}/night
                            </Card.Text>
                        </div>
                    </div>
                </Card.Body>
                <NavLink as={Link}
                    style={{ background: "linear-gradient(90deg, rgba(0,14,36,1) 0%, rgba(52,87,161,0.7231267507002801) 40%, rgba(0,56,255,1) 69%)", fontWeight: "600" }}
                    className="p-3 shadow-none border-0 text-uppercase btn"
                    to={`/services/${_id}`}>
                    Booking
                </NavLink>
            </Card>
        </Col >
    );
};

export default Service;
