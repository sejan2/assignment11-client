import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../Hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const { services } = useServices([]);
    return (
        <Container>
            <Row md={3} sm={1}>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;