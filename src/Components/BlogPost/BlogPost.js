import React from 'react';
import { Card, Col } from 'react-bootstrap';

const BlogPost = ({ blog }) => {
    const { title, description, author, authorImg, date } = blog;
    return (
        <div>
            <Col className="">
                <Card className="shadow-sm">
                    <div className="card-header pt-4 d-flex align-items-center">
                        <img className="mx-3" src={authorImg} alt="" width="60" />
                        <div>
                            <h5>{author}</h5>
                            <p className="m-0 text-muted">{date}</p>
                        </div>
                    </div>
                    <Card.Body>
                        <h5>{title}</h5>
                        <Card.Text className="text-secondary mt-4">{description}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default BlogPost;