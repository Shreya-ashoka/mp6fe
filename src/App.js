import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './styles/App.css';

function App() {
    return (
        <div>
            <header>
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/form">Predict</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default App;
