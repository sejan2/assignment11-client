
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { bestService, noNamed, ourAddress, service } from '../../Hooks/useFooter';
import FooterCol from './FooterCol';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer-area">
            <Container className="pt-md-5 pb-1">
                <Row className="py-5 hellos">
                    <FooterCol key={1} menuTitle={"Name"} menuItems={noNamed} />
                    <FooterCol key={2} menuTitle="service" menuItems={service} />
                    <FooterCol key={3} menuTitle="bestServices" menuItems={bestService} />
                    <FooterCol key={4} menuTitle="ourAddress" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item">
                                <Link to="/">Facebook</Link>
                            </li>
                        </ul>

                    </FooterCol>
                </Row>
                <div className="text-center text-muted">
                    <p>Copyright &copy; All Rights Reserved</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;