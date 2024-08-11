// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Dashboard from './components/Dashboard';
import UsersList from './components/UsersList';
import PostsList from './components/PostsList';
import Profile from './components/Profile';
import Login from './components/Login';
import './App.css'; // Import main CSS

const App = () => {
    return (
        <Router>
            <div className="app">
                <Navbar />
                
                <div className="main-content">
                    
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/users" element={<UsersList />} />
                        <Route path="/posts" element={<PostsList />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/profile" element={<Profile />} />

                    </Routes>
                </div>
                
            </div>
        </Router>
    );
};

export default App;
