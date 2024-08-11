// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                
                
            </ul>
        </nav>
    );
};

export default Navbar;
