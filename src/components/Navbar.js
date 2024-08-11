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
                <li><Link to="/settings">Settings</Link></li>
                <li><Link to="/notifications">Notifications</Link></li>
                <li><Link to="/reports">Reports</Link></li>
                
            </ul>
        </nav>
    );
};

export default Navbar;
