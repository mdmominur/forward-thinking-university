import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleEvent = (props) => {
    const {name, address, startTime, endTime, imgUrl, speaker} = props.event;
    return (
        <Col xl={3} md={6} sm={12}>
            <Card className="bg-custom p-3 rounded shadow-sm">
                <Card.Img variant="top" className="rounded" src={imgUrl} />
                <Card.Body>
                    <Card.Title className="text-success">{name.slice(0, 18)}...</Card.Title>
                    <p className="fw-bold">Speaker: <span className="text-success">{speaker}</span></p>
                    <p className="fw-bold"><i className="fas fa-map-marker-alt text-danger"></i> {address}</p>
                    <div className="fw-bold d-flex align-items-center">
                        <div>
                           <i className="far fa-clock text-info fs-1"></i> 
                        </div>
                        <div className="ms-2">
                            <span className="text-success">Start Time: </span> {startTime}
                        </div> 
                    </div>
                    <div className="fw-bold d-flex align-items-center mt-3">
                        <div>
                           <i className="far fa-clock text-primary fs-1"></i> 
                        </div>
                        <div className="ms-2">
                            <span className="text-success">End Time: </span> {endTime}
                        </div> 
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleEvent;