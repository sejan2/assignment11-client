import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <section className="contact my-3 py-3 ">
            <Container style={{ backgroundColor: "#c29D53" }}>
                <div className="text-center text-dark mb-5 pt-5">
                    <h5>CONTACT US</h5>
                    <h1>Always Connect with us</h1>
                </div>
                <Col md={9} className="mx-auto py-3">
                    <Form action="">
                        <Form.Group className="mb-2">
                            <Form.Control type="email" placeholder="Email Address" />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Control type="text" placeholder="Your Address" />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Control as="textarea" cols="30" rows="8" placeholder="Your Message" />
                        </Form.Group>
                        <Form.Group className="text-center mb-5">
                            <Button style={{
                                background: "linear-gradient(75deg, #19D3AE, #0fcfec)"
                            }} type="button">SUBMIT</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Container>
        </section>
    );
};

export default Contact;