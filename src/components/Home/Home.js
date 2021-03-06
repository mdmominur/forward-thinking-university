import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SingleCourse from '../SingleCourse/SingleCourse';
import SingleEvent from '../SingleEvents/SingleEvent';

const Home = () => {
    const [courses, setCourses] = useState([]);
    const [events, setEvents] = useState([]);
    useEffect(()=>{
        fetch('/courses.json')
        .then(res => res.json())
        .then(data => setCourses(data.slice(0,3)));
    },[]);
    useEffect(()=>{
        fetch('/events.json')
        .then(res => res.json())
        .then(data => setEvents((data.slice(0,4))));
    },[]);
    return (
        <div className="min-vh-100">
            <div className="container">
                <div className="shadow my-4 rounded p-4">
                    <Link to="/events" className="text-decoration-none">
                        <h1 className="text-success ">Events</h1>
                    
                    </Link>
                    <Row className="gy-5">
                        {
                            events.map(event => <SingleEvent key={event.id} event={event}></SingleEvent>)
                        }
                    </Row>
                </div>
            </div>

            <div className="container">
                <div className="shadow my-4 rounded p-4">
                <Link to="/courses" className="text-decoration-none">
                    <h1 className="text-success">Courses</h1>

                </Link>
                    <Row className="gy-5">
                        {
                            courses.map(course => <SingleCourse key={course.id} course={course}></SingleCourse>)
                        }
                    </Row>
                </div>
            </div>

        </div>
    );
};

export default Home;