import React from 'react';
import { Container, Row } from 'react-bootstrap';
import blogsData from '../../Hooks/blogsData'
import BlogPost from '../BlogPost/BlogPost';
import './blogs.css'

const Blogs = () => {
    return (
        <section className="blogs my-5 py-5">
            <Container>
                <div className="text-center">
                    <h5>OUR BLOG</h5>
                    <h1>From Our Blog News</h1>
                </div>
                <Row xs={1} md={2} className="g-4">
                    {
                        blogsData.map((blog, idx) => <BlogPost key={idx} blog={blog} />)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Blogs;