import React from 'react';

const Contact = () => {
    return (
        <div>
            <h2>Contact Us</h2>
            <form>
                <div>
                    <label>Name:</label>
                    <input type="text" required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" required />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea required></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
            <p>Or email us at support@example.com</p>
        </div>
    );
};

export default Contact;
