import React, { useEffect, useRef, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

import useFirebase from '../../Hooks/useFirebase';
import './Details.css'

const DetailService = () => {
    // const history = useHistory();
    const { user } = useFirebase();
    const [course, setCourse] = useState({})
    // const { services } = useServices()
    const { _id } = useParams();
    // const newSelect = services?.find((service) => service._id === _id)
    useEffect(() => {
        fetch(`https://murmuring-gorge-93134.herokuapp.com/services/${_id}`)
            .then(res => res.json())
            .then(data => {
                setCourse(data)
            })
    }, [_id])
    const nameRef = useRef();
    const emailRef = useRef();
    const desRef = useRef();
    const imgRef = useRef();
    const numRef = useRef();
    const serviceIDRef = useRef();
    const pendingRef = useRef();
    const handleSubmit = (e) => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const des = desRef.current.value;
        const image = imgRef.current.value;
        const number = numRef.current.value;
        const service_id = serviceIDRef.current.value;
        const pending = pendingRef.current.value;
        const newUser = { Uname: name, email: email, desc: des, image: image, number: number, service_id: service_id, status: pending }
        console.log(newUser)

        fetch('https://murmuring-gorge-93134.herokuapp.com/services/serve', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Place to Your order.');

                }
                e.target.reset()
            })


        e.preventDefault();
        console.log('clicked')
    }

    return (
        <Container>
            <h2 className="text-muted mt-5">Services We provide</h2>
            <Row className="mt-5">
                <Col md={6} className="mt-5">
                    <Row>
                        <Card style={{ width: '18rem' }} className="d-flex">
                            <div className="d-flex">
                                <Card.Img variant="top" src={course.img} />

                                <Card.Body>
                                    <Card.Title>{course.place}</Card.Title>
                                    <Card.Text>
                                        <b className="text-muted" >Service:</b> {course.room}
                                    </Card.Text>
                                    <Card.Text>
                                        <b className="text-muted"> Price:</b> ${course.price}/night
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Card>
                    </Row>
                </Col>
                <Col md={6}>
                    <Container>
                        <div className="font register-volunteer">
                            <h4 className="text-primary">Place Your Order.</h4>
                            <form onSubmit={handleSubmit}>
                                <input ref={nameRef} type="text" placeholder="Full name" value={user.displayName} />
                                <input ref={emailRef} type="text" placeholder="Email Address" value={user.email} />

                                <textarea ref={desRef} type="text" required id="lname" name="lastname" placeholder="Your address" />
                                <input ref={numRef} type="number" required id="lname" placeholder="Phone Number" />
                                <input ref={imgRef} type="hidden" value={course.img} id="lname" />
                                <input ref={pendingRef} type="hidden" value="pending" id="lname" />
                                <input ref={serviceIDRef} type="hidden" value={course._id} id="lname" />
                                <input type="submit" value="Place Order" />
                            </form>
                        </div>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default DetailService;