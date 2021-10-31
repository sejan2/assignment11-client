import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

// import useAuth from '../../Context/useAuth';

const ManageOrder = () => {
    // const { user } = useAuth();
    const [AllOrder, setAllOrder] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/myOrder')
            .then(res => res.json())
            .then(data => {
                setAllOrder(data)
                console.log(data)
            })
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete')
        if (proceed) {
            const url = `https://murmuring-gorge-93134.herokuapp.com/myOrder/${id}`
            console.log(url)
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('Deleted Successfully')
                        const remaining = AllOrder.filter(order => order._id !== id)
                        setAllOrder(remaining)
                    }

                })
        }

    }

    return (
        <Row className="my-5">
            <Col md={12} sm={6} lg={12}>
                <div>
                    <h1 className="text-center text-muted">All<span style={{ color: "#9a8746" }}>Orders</span></h1>
                    <table className="table table-hover w-100  my-3">
                        <thead>
                            <tr className="text-muted">
                                <th scope="col">Image</th>
                                <th scope="col"> Name</th>
                                <th scope="col">Code</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                    </table>
                    {
                        AllOrder.map(p => (
                            <tr className="tr-edit">
                                <td className="mb-2"><img className="" src={p.image} alt="" style={{ width: "90px", height: "40px" }} /></td>
                                <td className="text-muted">{p.Uname}</td>
                                <td className="text-muted">{p.service_id}</td>
                                <td className="">*{p.status} <button >update</button></td>
                                <td className="text-muted"><button onClick={() => handleDelete(p._id)}>delete</button></td>
                            </tr>
                        ))
                    }

                </div>
            </Col>
        </Row>


    );
};

export default ManageOrder;