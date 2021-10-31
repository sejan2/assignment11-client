import React from 'react';
import { Link } from 'react-router-dom';
import img3 from '../../images/saedx-blog-featured-70.jpg'

const Notfound = () => {
    return (
        <div>
            <h1>Something went wrong</h1>
            <img src={img3} alt="" />
            <Link to='/'>Back to home</Link>
        </div>
    );
};

export default Notfound;