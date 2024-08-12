import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to Cervical Cancer Risk Prediction</h1>
            <p>Learn about cervical cancer, its symptoms, risk factors, and how to prevent it.</p>
            <Link to="/form">Go to Prediction Form</Link>
        </div>
    );
};

export default Home;
