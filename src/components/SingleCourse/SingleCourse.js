import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleCourse.css';


const SingleCourse = (props) => {
    const {name, description, duration, imgUrl, price, creadit} = props.course;
    return (
        <Col xl={4} md={6} sm={12}>
            <div className="rounded shadow-sm bg-custom">
                <div className="d-flex align-items-center p-3">
                    <div className="w-25">
                        <img className="img-fluid rounded" src={imgUrl} alt="" />
                    </div>
                    <div className="w-75 ps-3">
                        <h6>{name}</h6>
                        <div className="d-flex justify-content-between">
                            <div>
                             Price: $<span className="text-success fw-bold">{price}</span>
                            </div>
                            <div>
                            Credits: <span className="text-success fw-bold">{creadit}</span>
                            </div>
                        </div>
                        <p className="mt-1 mb-1 custom-font-size">{description.slice(0,50)}...</p>
                        <div className="d-flex justify-content-between custom-font-size">
                            <Link to="/" className="text-success d-inline-block text-decoration-none"> See More </Link>
                            <span className='d-inline-block duration text-success custom-font-size fw-bold'><i className="far fa-clock"></i> {duration}</span>
                        </div>
                    </div>
                </div>

            </div>
        </Col>
    );
};

export default SingleCourse;