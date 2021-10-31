import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';

import Services from '../Services/Services';


const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Services></Services>
            <Blogs></Blogs>
            <Contact></Contact>
        </div>
    );
};

export default Home;