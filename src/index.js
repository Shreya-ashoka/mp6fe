import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Login from './components/Login';
import Home from './components/Home';
import Form from './components/Form';
import Results from './components/Results';
import About from './components/About';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="login" element={<Login />} />
                <Route path="home" element={<Home />} />
                <Route path="form" element={<Form />} />
                <Route path="results" element={<Results />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="privacy-policy" element={<PrivacyPolicy />} />
            </Route>
        </Routes>
    </Router>,
    document.getElementById('root')
);
