import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container ">
            <div className="text-center d-flex justify-content-center align-items-center min-vh-100">
                <div>
                    <h1 className="display-1">404 Not found</h1>
                    <p>Sorry your requested page is not available on this server</p>
                    <Link to="/">
                    <Button variant="success"><i class="fas fa-undo"></i> Back to main</Button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default NotFound;