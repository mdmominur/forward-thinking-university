import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleCourse from '../SingleCourse/SingleCourse';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('/courses.json')
        .then(res => res.json())
        .then(data => setCourses(data));
    },[]);
    return (
        <div className="container min-vh-100">
                <div className="shadow my-4 rounded p-4">
                    <h1 className="text-success">Courses</h1>
                    <Row className="gy-5">
                        {
                            courses.map(course => <SingleCourse key={course.id} course={course}></SingleCourse>)
                        }
                    </Row>
                </div>
            </div>
    );
};

export default Courses;