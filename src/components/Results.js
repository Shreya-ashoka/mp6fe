import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Results = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { result } = location.state || { result: 'No Result' };

    return (
        <div>
            <h2>Prediction Results</h2>
            <p>Your risk assessment result: {result}</p>
            <p>Based on the prediction, we recommend consulting a healthcare provider for a thorough evaluation.</p>
            <button onClick={() => navigate('/form')}>Back to Form</button>
        </div>
    );
};

export default Results;
