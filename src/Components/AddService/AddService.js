import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';
import './AddService.css'

const AddService = () => {
    const nameRef = useRef();
    const desRef = useRef();
    const imgRef = useRef();
    const priceRef = useRef();
    const disRef = useRef();
    const roomRef = useRef();
    const handlehtmlForm = e => {
        e.preventDefault()
        const name = nameRef.current.value;
        const des = desRef.current.value;
        const imgs = imgRef.current.value;
        const price = priceRef.current.value;
        const distance = disRef.current.value;
        const room = roomRef.current.value;
        const newServices = { place: name, desc: des, img: imgs, price: price, distance: distance, room: room };
        console.log(newServices)

        fetch('https://murmuring-gorge-93134.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newServices)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert("Added Successfully.")
                }
                e.target.reset();

            });
    }
    return (
        <div>
            <Container>
                <h2 className="h2-title text-danger">Add Event</h2>
                <hr />
                <br />
                <br />
                <form onSubmit={handlehtmlForm} >
                    <label className="label-text"><b>Your destination</b></label>
                    <input ref={nameRef} type="text" required placeholder="name" />
                    <label htmlFor="lname"><b>Description</b></label>
                    <input ref={desRef} required type="text" id="lname" name="lastname" placeholder="Event Description.." />
                    <label htmlFor="lname"><b>Image Link</b></label>
                    <input ref={imgRef} required type="text" id="lname" name="lastname" placeholder="Image Link.." />
                    <label htmlFor="lname"><b>Distance From Your Location</b></label>
                    <input ref={disRef} required type="text" id="lname" name="lastname" placeholder="Distance.." />
                    <label htmlFor="lname"><b>Package price</b></label>
                    <input ref={priceRef} required type="text" id="lname" name="lastname" placeholder="Price.." />
                    <label htmlFor="lname"><b>Room Services</b></label>
                    <input ref={roomRef} required type="text" id="lname" name="lastname" placeholder="Service.." />

                    <input type="submit" value="Submit" />
                </form>

            </Container>
        </div>
    );
};

export default AddService;