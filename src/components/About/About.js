import React from 'react';

const About = () => {
    return (
        <div className="container min-vh-100 my-5">
            <div className=" shadow rounded d-flex align-items-center">
                <div className="w-50 ps-4">
                    <img className="img-fluid rounded" src="https://images.unsplash.com/20/cambridge.JPG?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                </div>
                <div className="w-50 p-4">
                    <h1 className="text-success display-1 fw-bold">About Us</h1>
                    <p>
                    The University of <span className="fw-bold text-success">Forward Thinking </span> is a collegiate research university in Cambridge, United Kingdom. Founded in 1209[9] and granted a royal charter by Henry III in 1231, Cambridge is the second-oldest university in the English-speaking world and the world's fourth-oldest surviving university.[10] The university grew out of an association of scholars who left the University of Oxford after a dispute with the townspeople.[11] The two English ancient universities share many common features and are often jointly referred to as Oxbridge.
                    </p>
                    <p>
                    <span className="fw-bold text-success">Forward Thinking </span> is formed from a variety of institutions which include 31 semi-autonomous constituent colleges and over 150 academic departments, faculties and other institutions organised into six schools. All the colleges are self-governing institutions within the university, each controlling its own membership and with its own internal structure and activities. All students are members of a college
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;