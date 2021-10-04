import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleEvent from '../SingleEvents/SingleEvent';

const Events = () => {
    
    const [events, setEvents] = useState([]);
    useEffect(()=>{
        fetch('/events.json')
        .then(res => res.json())
        .then(data => setEvents((data)));
    },[]);
    return (
        <div className="container">
                <div className="shadow my-4 rounded p-4">
                    <h1 className="text-success">Events</h1>
                    <Row className="gy-5">
                        {
                            events.map(event => <SingleEvent key={event.id} event={event}></SingleEvent>)
                        }
                    </Row>
                </div>
            </div>
    );
};

export default Events;